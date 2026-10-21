#!/usr/bin/env python3
"""Run with sudo on the staging host; never reads production data or prints secrets."""
import json,os,pathlib,subprocess,urllib.request,urllib.error

def load(path):return dict(line.split('=',1) for line in pathlib.Path(path).read_text().splitlines() if line and not line.startswith('#'))
env=dict(os.environ,**load('/etc/icare/staging.env'),**load('/etc/icare/test-admin.env'))
assert env['APP_ENV']=='staging' and '/icare_staging?' in env['DATABASE']
release=load('/srv/icare/current/release.env')['RELEASE_SHA']
for service in ['icare-backend','mongod','nginx']:
 subprocess.run(['systemctl','is-active','--quiet',service],check=True)
subprocess.run(['/usr/local/bin/node','deployment/staging/seed-test-admin.cjs'],cwd='/srv/icare/current',env=env,user='icare',group='icare',check=True)
def request(path,payload=None):
 data=json.dumps(payload).encode() if payload is not None else None
 req=urllib.request.Request('http://127.0.0.1'+path,data=data,headers={'Content-Type':'application/json'})
 with urllib.request.urlopen(req,timeout=20) as res:return res.status,res.read(),res.headers
status,body,headers=request('/api/health');assert json.loads(body)=={'status':'ok','release':release}
status,body,headers=request('/release.json');assert json.loads(body)['release']==release
status,body,headers=request('/admin/signin');assert b'<div id="root">' in body
status,body,headers=request('/api/admin/signin',{'email':env['TEST_ADMIN_EMAIL'],'password':env['TEST_ADMIN_PASSWORD']})
login=json.loads(body);assert login['user']['email']==env['TEST_ADMIN_EMAIL'] and login['token']
for path in ['/api/upload/img-upload','/api/contactform']:
 try:request(path,{})
 except urllib.error.HTTPError as error:assert error.code==503
 else:raise AssertionError('External integration unexpectedly enabled')
subprocess.run(['/usr/local/bin/node','deployment/staging/test-asset-hierarchy.cjs'],cwd='/srv/icare/current',env=env,user='icare',group='icare',check=True,timeout=90)
script='''const p=require("/srv/icare/current/Backend/node_modules/puppeteer"); (async()=>{const b=await p.launch({executablePath:process.env.PUPPETEER_EXECUTABLE_PATH,headless:true,args:["--no-sandbox","--disable-setuid-sandbox"]});try{const page=await b.newPage();await page.setContent("<h1>iCare staging PDF check</h1>");const pdf=await page.pdf({format:"A4"});if(pdf.subarray(0,4).toString()!=="%PDF")throw Error("Invalid PDF");console.log("Browser PDF rendering passed");}finally{await b.close()}})().catch(e=>{console.error(e.message);process.exit(1)});'''
env['HOME']='/srv/icare/incoming';env['XDG_CONFIG_HOME']='/srv/icare/incoming/.config';env['XDG_CACHE_HOME']='/srv/icare/incoming/.cache'
subprocess.run(['/usr/local/bin/node','-e',script],env=env,user='icare',group='icare',check=True,timeout=90)
subprocess.run(['iptables','-C','OUTPUT','-d','169.254.169.254','-m','owner','--uid-owner','icare','-j','REJECT'],check=True)
print(json.dumps({'status':'passed','release':release,'checks':['service readiness','authenticated synthetic login','frontend/API release agreement','SPA routing','external integration isolation','asset hierarchy validation','PDF browser','metadata isolation']}))
