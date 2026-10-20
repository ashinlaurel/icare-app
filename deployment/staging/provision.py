#!/usr/bin/env python3
"""Create only the isolated iCare staging resources; AWS CLI profile personal."""
import subprocess,json,pathlib,time,sys
ROOT=pathlib.Path(__file__).resolve().parent
STATE=ROOT/'infrastructure.json'
s=json.loads(STATE.read_text()) if STATE.exists() else {}
region='ap-south-1';account='426376692287';bucket='icare-staging-releases-'+account

def save():STATE.write_text(json.dumps(s,indent=2)+'\n')
def aws(*args):
 p=subprocess.run(['aws','--profile','personal','--region',region,*args,'--output','json'],capture_output=True,text=True)
 if p.returncode:raise RuntimeError(p.stderr.strip())
 return json.loads(p.stdout) if p.stdout.strip() else {}
def doc(d):return json.dumps(d,separators=(',',':'))
def policy(st):return doc({'Version':'2012-10-17','Statement':st})
def role(name,trust):
 try:return aws('iam','get-role','--role-name',name)['Role']['Arn']
 except RuntimeError as e:
  if 'NoSuchEntity' not in str(e):raise
 return aws('iam','create-role','--role-name',name,'--assume-role-policy-document',doc(trust),'--tags','Key=Project,Value=icare-staging')['Role']['Arn']
trust={'Version':'2012-10-17','Statement':[{'Effect':'Allow','Principal':{'Service':'ec2.amazonaws.com'},'Action':'sts:AssumeRole'}]}
instance_role=role('icare-staging-instance',trust)
aws('iam','attach-role-policy','--role-name','icare-staging-instance','--policy-arn','arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore')
aws('iam','put-role-policy','--role-name','icare-staging-instance','--policy-name','ReadStagingReleases','--policy-document',policy([{'Effect':'Allow','Action':['s3:GetObject'],'Resource':'arn:aws:s3:::'+bucket+'/releases/*'}]))
try:aws('iam','get-instance-profile','--instance-profile-name','icare-staging-instance')
except RuntimeError as e:
 if 'NoSuchEntity' not in str(e):raise
 aws('iam','create-instance-profile','--instance-profile-name','icare-staging-instance')
profile=aws('iam','get-instance-profile','--instance-profile-name','icare-staging-instance')['InstanceProfile']
if not profile['Roles']:aws('iam','add-role-to-instance-profile','--instance-profile-name','icare-staging-instance','--role-name','icare-staging-instance')
if 'bucket' not in s:
 try:aws('s3api','head-bucket','--bucket',bucket)
 except RuntimeError:aws('s3api','create-bucket','--bucket',bucket,'--create-bucket-configuration',doc({'LocationConstraint':region}))
 s['bucket']=bucket;save()
aws('s3api','put-public-access-block','--bucket',bucket,'--public-access-block-configuration',doc({'BlockPublicAcls':True,'IgnorePublicAcls':True,'BlockPublicPolicy':True,'RestrictPublicBuckets':True}))
aws('s3api','put-bucket-encryption','--bucket',bucket,'--server-side-encryption-configuration',doc({'Rules':[{'ApplyServerSideEncryptionByDefault':{'SSEAlgorithm':'AES256'}}]}))
aws('s3api','put-bucket-versioning','--bucket',bucket,'--versioning-configuration',doc({'Status':'Enabled'}))
aws('s3api','put-bucket-policy','--bucket',bucket,'--policy',policy([{'Effect':'Deny','Principal':'*','Action':'s3:*','Resource':['arn:aws:s3:::'+bucket,'arn:aws:s3:::'+bucket+'/*'],'Condition':{'Bool':{'aws:SecureTransport':'false'}}}]))
if 'security_group_id' not in s:
 found=aws('ec2','describe-security-groups','--filters','Name=group-name,Values=icare-staging','Name=vpc-id,Values=vpc-f62bcf9d')['SecurityGroups']
 s['security_group_id']=found[0]['GroupId'] if found else aws('ec2','create-security-group','--group-name','icare-staging','--description','Isolated iCare staging; operator HTTP and SSH; SSM deployments','--vpc-id','vpc-f62bcf9d')['GroupId'];save()
sg=s['security_group_id'];ip=subprocess.check_output(['curl','--fail','--silent','https://checkip.amazonaws.com'],text=True).strip();s['operator_cidr']=ip+'/32';save()
current=aws('ec2','describe-security-groups','--group-ids',sg)['SecurityGroups'][0]
if not current['IpPermissions']:
 aws('ec2','authorize-security-group-ingress','--group-id',sg,'--ip-permissions',doc([{'IpProtocol':'tcp','FromPort':p,'ToPort':p,'IpRanges':[{'CidrIp':ip+'/32','Description':'Current operator access'}]} for p in [22,80]]))
if any(x['IpProtocol']=='-1' for x in current['IpPermissionsEgress']):
 aws('ec2','revoke-security-group-egress','--group-id',sg,'--ip-permissions',doc(current['IpPermissionsEgress']))
 aws('ec2','authorize-security-group-egress','--group-id',sg,'--ip-permissions',doc([{'IpProtocol':'tcp','FromPort':p,'ToPort':p,'IpRanges':[{'CidrIp':'0.0.0.0/0'}]} for p in [80,443]]+[{'IpProtocol':proto,'FromPort':53,'ToPort':53,'IpRanges':[{'CidrIp':'0.0.0.0/0'}]} for proto in ['udp','tcp']]))
if 'launch_template_id' not in s:
 ami=aws('ssm','get-parameter','--name','/aws/service/canonical/ubuntu/server/24.04/stable/current/amd64/hvm/ebs-gp3/ami-id')['Parameter']['Value']
 import base64
 bootstrap=(ROOT/'bootstrap.sh').read_bytes()
 helper=base64.b64encode((ROOT/'deploy-release.sh').read_bytes()).decode()
 bootstrap+=('\nprintf %s '+helper+' | base64 -d > /usr/local/sbin/icare-deploy\nchmod 0755 /usr/local/sbin/icare-deploy\n').encode()
 data={'ImageId':ami,'InstanceType':'t3.small','KeyName':'icare','IamInstanceProfile':{'Name':'icare-staging-instance'},'MetadataOptions':{'HttpEndpoint':'enabled','HttpTokens':'required','HttpPutResponseHopLimit':1},'BlockDeviceMappings':[{'DeviceName':'/dev/sda1','Ebs':{'VolumeSize':30,'VolumeType':'gp3','Encrypted':True,'DeleteOnTermination':True}}],'NetworkInterfaces':[{'DeviceIndex':0,'SubnetId':'subnet-b8cebdf4','AssociatePublicIpAddress':True,'Groups':[sg]}],'CreditSpecification':{'CpuCredits':'standard'},'UserData':base64.b64encode(bootstrap).decode(),'TagSpecifications':[{'ResourceType':r,'Tags':[{'Key':'Name','Value':'icare-staging'},{'Key':'Project','Value':'icare-staging'},{'Key':'Environment','Value':'staging'}]} for r in ['instance','volume']]}
 lt=aws('ec2','create-launch-template','--launch-template-name','icare-staging-20261020','--version-description','Isolated staging with versioned releases','--launch-template-data',doc(data))['LaunchTemplate']
 s['launch_template_id']=lt['LaunchTemplateId'];s['ami_id']=ami;save()
if 'instance_id' not in s:
 for attempt in range(6):
  try:
   result=aws('ec2','run-instances','--launch-template',doc({'LaunchTemplateId':s['launch_template_id'],'Version':'1'}),'--count','1','--client-token','icare-staging-20261020-v1')
   s['instance_id']=result['Instances'][0]['InstanceId'];save();break
  except RuntimeError as e:
   if ('Invalid IAM Instance Profile' not in str(e) and 'InvalidParameterValue' not in str(e)) or attempt==5:raise
   time.sleep(8)
provider='arn:aws:iam::'+account+':oidc-provider/token.actions.githubusercontent.com'
providers=aws('iam','list-open-id-connect-providers')['OpenIDConnectProviderList']
if not any(p['Arn']==provider for p in providers):aws('iam','create-open-id-connect-provider','--url','https://token.actions.githubusercontent.com','--client-id-list','sts.amazonaws.com')
trust={'Version':'2012-10-17','Statement':[{'Effect':'Allow','Principal':{'Federated':provider},'Action':'sts:AssumeRoleWithWebIdentity','Condition':{'StringEquals':{'token.actions.githubusercontent.com:aud':'sts.amazonaws.com','token.actions.githubusercontent.com:sub':'repo:ashinlaurel/icare-app:environment:staging'}}}]}
s['deploy_role_arn']=role('icare-staging-github-deploy',trust);save()
aws('iam','put-role-policy','--role-name','icare-staging-github-deploy','--policy-name','DeployOnlyStaging','--policy-document',policy([{'Effect':'Allow','Action':['s3:PutObject','s3:GetObject'],'Resource':'arn:aws:s3:::'+bucket+'/releases/*'},{'Effect':'Allow','Action':['ssm:SendCommand'],'Resource':['arn:aws:ec2:'+region+':'+account+':instance/'+s['instance_id'],'arn:aws:ssm:'+region+'::document/AWS-RunShellScript']},{'Effect':'Allow','Action':['ssm:GetCommandInvocation'],'Resource':'*'}]))
s['region']=region;s['account_id']=account;s['base_commit']='4a15c2a6e8399fd490133645865a9f750856ff3c';save()
print(json.dumps(s,indent=2))
