(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[66],{1197:function(e,a,l){"use strict";l.r(a);var t=l(5),n=l.n(t),r=l(12),c=l(3),m=l(0),s=l.n(m),o=l(21),u=l.n(o),d=l(9),i=l.n(d),p=l(37),f=(l(190),l(35),l(2)),E=l(10),g=l(42),y=(l(24),l(36));a.default=function(){var e=Object(m.useState)(!1),a=Object(c.a)(e,2),l=a[0],t=a[1],o=Object(m.useState)(!1),d=Object(c.a)(o,2),b=d[0],x=d[1],v=Object(m.useState)(!1),N=Object(c.a)(v,2),w=N[0],S=N[1],k=Object(m.useState)(0),j=Object(c.a)(k,2),C=j[0],O=j[1],h=Object(m.useContext)(g.a),T=(h.topheading,h.setTopHeading),B=Object(m.useState)(!1),P=Object(c.a)(B,2),F=(P[0],P[1],Object(m.useState)(1)),M=Object(c.a)(F,2),D=M[0],R=M[1],A=Object(m.useState)([]),L=Object(c.a)(A,2),I=L[0],_=L[1],H=Object(m.useState)(""),U=Object(c.a)(H,2),Y=U[0],z=U[1],G=Object(m.useState)(!1),J=Object(c.a)(G,2),V=(J[0],J[1],Object(m.useState)(!1)),q=Object(c.a)(V,2),K=(q[0],q[1],Object(m.useState)(!1)),Q=Object(c.a)(K,2),W=(Q[0],Q[1],Object(m.useState)(!0)),X=Object(c.a)(W,2),Z=X[0],$=X[1],ee=Object(m.useState)(!0),ae=Object(c.a)(ee,2),le=(ae[0],ae[1],Object(m.useState)("")),te=Object(c.a)(le,2),ne=te[0],re=te[1],ce=Object(m.useState)(""),me=Object(c.a)(ce,2),se=me[0],oe=me[1],ue=Object(m.useState)(""),de=Object(c.a)(ue,2),ie=de[0],pe=de[1],fe=Object(m.useState)(""),Ee=Object(c.a)(fe,2),ge=Ee[0],ye=(Ee[1],Object(m.useState)("")),be=Object(c.a)(ye,2),xe=be[0],ve=(be[1],Object(m.useState)({_id:"",unitName:""})),Ne=Object(c.a)(ve,2),we=(Ne[0],Ne[1],Object(m.useState)({_id:"",customerName:""})),Se=Object(c.a)(we,2),ke=(Se[0],Se[1],Object(m.useState)({_id:"",accountName:""})),je=Object(c.a)(ke,2),Ce=(je[0],je[1],Object(m.useState)({_id:"",enggName:""})),Oe=Object(c.a)(Ce,2),he=Oe[0],Te=(Oe[1],Object(m.useState)(!1)),Be=Object(c.a)(Te,2),Pe=(Be[0],Be[1],Object(m.useState)({})),Fe=Object(c.a)(Pe,2),Me=Fe[0],De=Fe[1],Re=Object(m.useState)(""),Ae=Object(c.a)(Re,2),Le=(Ae[0],Ae[1],Object(m.useState)("")),Ie=Object(c.a)(Le,2),_e=(Ie[0],Ie[1],Object(m.useState)("")),He=Object(c.a)(_e,2),Ue=He[0],Ye=He[1],ze=Object(m.useState)(!1),Ge=Object(c.a)(ze,2),Je=Ge[0],Ve=Ge[1],qe=Object(m.useState)(""),Ke=Object(c.a)(qe,2),Qe=Ke[0],We=Ke[1],Xe=Object(m.useState)(""),Ze=Object(c.a)(Xe,2),$e=Ze[0],ea=Ze[1],aa=Object(m.useState)(""),la=Object(c.a)(aa,2),ta=la[0],na=la[1],ra=Object(m.useState)(20),ca=Object(c.a)(ra,2),ma=ca[0],sa=ca[1],oa=Object(m.useState)(!1),ua=Object(c.a)(oa,2),da=ua[0],ia=ua[1],pa=Object(m.useState)({product:{brand:"",model:"",serialno:"",os:"",cpu:[],ram:[],hdd:[],smps:[],fan:[],motherboard:[],opticaldrive:[],keyboard:[],kbd:[],mouse:[],monitor:[],gcard:[],enetcard:[],serialcard:[],parallelcard:[],hbacard:[],raidcontroller:[],tapecontroller:[],others:[]}}),fa=Object(c.a)(pa,2),Ea=fa[0],ga=fa[1],ya=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Modal,{isOpen:l,onClose:function(){return t(!1)}},s.a.createElement(f.ModalHeader,null,"Set Call Status"),s.a.createElement(f.ModalBody,null,s.a.createElement("div",{className:"flex-col flex"},s.a.createElement("div",{className:"font-xl dark:text-white"},"Current Status:"),s.a.createElement(f.Button,{className:"font-xl"},"Set Status"),s.a.createElement(f.Button,{className:"font-xl my-2 mx-10 inline"},"Pending for Allocation"),s.a.createElement(f.Button,{className:"font-xl my-2 mx-10 inline"},"Pending for Allocation"),s.a.createElement(f.Button,{className:"font-xl my-2 mx-10 inline"},"Pending for Allocation"),s.a.createElement(f.Button,{className:"font-xl my-2 mx-10 inline"},"Pending for Allocation"))),s.a.createElement(f.ModalFooter,null,s.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:Object(r.a)(n.a.mark((function e(){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SELECTED",Me),a={id:Me._id,update:{employeeId:he._id,employeeName:he.enggName,callStatus:1}},e.prev=2,e.next=5,i()({url:"".concat(E.a,"/call/").concat(p.a.getId(),"/ViewCallsg"),method:"POST",data:a});case 5:e.sent,l=I,console.log(l),l=l.filter((function(e){if(e._id===Me._id)return e.callStatus=1,e.employeeName=he.enggName,e.employeeId=he._id,e;_(l)})),t(!1),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))},"Confirm Assignment"))))};Object(m.useEffect)((function(){return T("View Calls"),function(){T("")}}),[]),Object(m.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={pages:{page:D,limit:10},filters:{callStatus:ne,searchquery:Ue,fromDate:se,toDate:ie}},1!=p.a.getRole()){e.next=5;break}a.filters.customerId=p.a.getId(),e.next=10;break;case 5:if(2!=p.a.getRole()){e.next=9;break}a.filters.accountId=p.a.getId(),e.next=10;break;case 9:return e.abrupt("return");case 10:return e.prev=10,e.next=13,i()({url:"".concat(E.a,"/call/").concat(p.a.getId(),"/customergetall"),method:"POST",data:a});case 13:l=e.sent,sa(l.data.total),_(l.data.out),e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(10),e.t0;case 21:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(){return e.apply(this,arguments)}}()()}),[D,ge,xe,Z,ne,Ue,se,ie]);var ba=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Modal,{isOpen:b,onClose:function(){return x(!1)}},s.a.createElement(f.ModalHeader,null,"Updated Successfully!"),s.a.createElement(f.ModalBody,null),s.a.createElement(f.ModalFooter,null,s.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return x(!1)}},"Okay!"))))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(ya,null),s.a.createElement(ba,null),function(){if(I[Y]){var e=I[Y],a=I[Y].history;return console.log(a),s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Modal,{isOpen:w,onClose:function(){return S(!1)},className:"w-9/12  dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"},s.a.createElement(f.ModalHeader,{className:"flex flex-row justify-between text-xl"},s.a.createElement("div",null,e.name),s.a.createElement("div",null,"Call No: ",s.a.createElement(f.Badge,null,e.callNo)," ")),s.a.createElement(f.ModalBody,null,s.a.createElement("div",{className:"font-semibold text-xl my-2"},"Call History"),s.a.createElement(f.TableContainer,{className:"mt-4"},s.a.createElement(f.Table,null,s.a.createElement(f.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(f.TableCell,null,"Date"),s.a.createElement(f.TableCell,null,"Engineer"),s.a.createElement(f.TableCell,null,"Attended Date"),s.a.createElement(f.TableCell,null,"Start Of Service"),s.a.createElement(f.TableCell,null,"End Of Service"),s.a.createElement(f.TableCell,null,"Status"),s.a.createElement(f.TableCell,null,"Notes"),s.a.createElement(f.TableCell,null,"Action Taken"),s.a.createElement(f.TableCell,null,"Images"))),s.a.createElement(f.TableBody,null,a.map((function(e,a){return s.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(C==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){}},s.a.createElement(f.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},u()(e.date).format("DD-MM-YYYY"))))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},Object(y.capitalize)(e.engineer))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.callAttendDate)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.startOfService)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.endOfService)),s.a.createElement(f.TableCell,null,s.a.createElement("span",null,0==e.callStatus?s.a.createElement(f.Badge,null,"Pending For Allocation"):null,1==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Percall Approval"):null,2==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Response"):null,3==e.callStatus?s.a.createElement(f.Badge,null,"Pending for OEM Response"):null,4==e.callStatus?s.a.createElement(f.Badge,null,"Pending for 2nd Response"):null,5==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Customer"):null,6==e.callStatus?s.a.createElement(f.Badge,null,"Under Observation"):null,7==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Others"):null,8==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Spare"):null,9==e.callStatus?s.a.createElement(f.Badge,null,"Spare in Transit"):null,10==e.callStatus?s.a.createElement(f.Badge,null,"Cancelled Calls"):null,11==e.callStatus?s.a.createElement(f.Badge,null,"Closed Calls"):null,12==e.callStatus?s.a.createElement(f.Badge,null,"Spare Taken CMRR"):null,13==e.callStatus?s.a.createElement(f.Badge,null,"Pending For Spare Collection"):null,14==e.callStatus?s.a.createElement(f.Badge,null,"Standby Given"):null)),s.a.createElement(f.TableCell,{className:"flex flex-row max-w-sm"},s.a.createElement("span",{className:"w-full overflow-auto"},e.note)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.actionTaken)),s.a.createElement(f.TableCell,null,s.a.createElement(f.Button,{layout:"outline",onClick:function(){e.newUrl&&We(e.newUrl),e.existUrl&&ea(e.existUrl),e.ccfrImgUrl&&na(e.ccfrImgUrl),Ve(!0)}},"Show")))})))))),s.a.createElement(f.ModalFooter,null)))}}(),s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Modal,{isOpen:Je,onClose:function(){ea(""),We(""),na(""),Ve(!1)},className:"w-9/12 dark:bg-gray-800 px-5 my-10 bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"},s.a.createElement(f.ModalHeader,null,"Images"),s.a.createElement(f.ModalBody,null,s.a.createElement("div",{className:"flex flex-col justify-center "},s.a.createElement("hr",null),s.a.createElement("div",{className:"flex flex-row justify-evenly flex-wrap items-center "},""!=$e?s.a.createElement("div",null,s.a.createElement("div",{onClick:function(){console.log($e)},className:"text-lg font-semibold my-2 w-full"},"Replaced Item"),s.a.createElement("a",{href:$e,target:"_blank"},s.a.createElement("img",{src:$e,className:"my-4 border-4",width:"350",height:"350"}))):null,""!=Qe?s.a.createElement("div",null,s.a.createElement("div",{className:"text-lg font-semibold my-2 w-full"}," ","Replaced by"),s.a.createElement("a",{href:Qe,target:"_blank"},s.a.createElement("img",{src:Qe,className:"my-4 border-4",width:"350",height:"350"}))):null,""!=ta?s.a.createElement("div",null,s.a.createElement("div",{className:"text-lg font-semibold my-2 w-full"}," ","CCFR"),s.a.createElement("a",{href:ta,target:"_blank"},s.a.createElement("img",{src:ta,className:"my-4 border-4",width:"350",height:"350"}))):null))),s.a.createElement(f.ModalFooter,null))),(console.log(Ea),s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Modal,{isOpen:da,onClose:function(){return ia(!1)},className:" bg-white dark:bg-gray-800 px-10 w-205    py-10 rounded-lg"},s.a.createElement(f.ModalHeader,null,"Product Information"),s.a.createElement(f.ModalBody,null,s.a.createElement("div",{className:"  "},s.a.createElement("div",{className:" "},s.a.createElement("div",{className:" dark:text-gray-200 text-black flex flex-row flex-wrap items-center   rounded-md justify-between lg:space-x-2  w-full "},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-between lg:space-x-2  w-full  bg-gray-100 dark:bg-cool-gray-900 px-2  rounded-md"},s.a.createElement("div",{className:"my-2  "},s.a.createElement("span",null,"Brand :"),s.a.createElement("span",{className:"font-semibold"}," ",Ea.product.brand)),s.a.createElement("div",{className:"my-2 "},s.a.createElement("span",null,"Model:"),s.a.createElement("span",{className:"font-semibold"}," ",Ea.product.model)),s.a.createElement("div",{className:"my-2 "},s.a.createElement("span",null,"Serial Number: "),s.a.createElement("span",{className:"font-semibold"}," ",Ea.product.serialno)),"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""},s.a.createElement("span",null,"Operating System : "),s.a.createElement("span",{className:"font-semibold"},Ea.product.os))):null),s.a.createElement("br",null)),s.a.createElement("div",{className:"flex flex-col lg:flex-row lg:flex-wrap items-start lg:space-x-1 justify-between "},"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"CPU"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.cpu.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.cpuname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.cpusno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"RAM"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.ram.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.ramname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.ramsno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype||"Storage"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"FAN"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.fan.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.fanname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.fansno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Mother-Board"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.motherboard.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 mx-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.motherboardname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.motherboardsno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype||"Storage"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"HDD"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.hdd.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.hddname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,"S.No:",e.hddsno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype||"Storage"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"SMPS"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.smps.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.smpsname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.smpssno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype||"Router"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Keyboard"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.keyboard.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.keyboardname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.keyboardsno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype||"Storage"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Mouse"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.mouse.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.mousename)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.mousesno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype||"Router"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Monitor"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.monitor.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.monitorname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.monitorsno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Graphics Card"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.gcard.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.gcardname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.gcardsno))))})))):null,"Laptop"==Ea.producttype||"Server"==Ea.producttype||"Desktop"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"ENET Card"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.enetcard.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.enetcardname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.enetcardsno))))})))):null,"Server"==Ea.producttype||"Desktop"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Serial Card"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.serialcard.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.serialcardname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.serialcardsno))))})))):null,"Server"==Ea.producttype||"Desktop"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Parallel Card"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.parallelcard.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.parallelcardname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.parallelcardsno))))})))):null,"Server"==Ea.producttype||"Storage"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"HBA Card"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.hbacard.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.hbacardname)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.hbacardsno))))})))):null,"Server"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Raid Controller"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.raidcontroller.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.raidcontrollername)),s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.raidcontrollersno))))})))):null,"Server"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Tape Controller"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.tapecontroller.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.tapecontrollername)),s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.tapecontrollersno))))})))):null,"Server"==Ea.producttype||"Desktop"==Ea.producttype||"Laptop"==Ea.producttype?s.a.createElement("div",{className:" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md"},s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold"},s.a.createElement("div",{className:"w-full my-1"},"Optical Drive"),s.a.createElement("div",{className:"w-full my-1"},"Serial No.")),Ea.product.opticaldrive.map((function(e,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-start lg:space-x-2"},s.a.createElement("div",{className:"w-full my-1"},s.a.createElement("span",null,e.opticaldrivename)),s.a.createElement("div",{className:"w-full my-1 break-all"},s.a.createElement("span",null,e.opticaldrivesno))))})))):null)))),s.a.createElement(f.ModalFooter,null,s.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return ia(!1)}},"Okay!"))))),s.a.createElement("div",{className:"mb-64 mt-4"},s.a.createElement("div",{className:""},s.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 "},s.a.createElement(f.Label,{className:""},s.a.createElement("span",null,"From Date"),s.a.createElement("input",{className:"mt-1 p-2 rounded-sm mx-1",type:"date",value:se,onChange:function(e){return oe(e.target.value)}})),s.a.createElement(f.Label,{className:""},s.a.createElement("span",null,"To Date"),s.a.createElement("input",{className:"mt-1 p-2 rounded-sm mx-1",type:"date",value:ie,onChange:function(e){return pe(e.target.value)}})),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ne,onChange:function(e){re(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Call Status"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{selected:!0,value:"0"},"Pending For Allocation"),s.a.createElement("option",{value:"1"},"Pending for Percall Approval"),s.a.createElement("option",{value:"2"},"Pending for Response"),s.a.createElement("option",{value:"3"},"Pending for OEM Response"),s.a.createElement("option",{value:"4"},"Pending for 2nd Response"),s.a.createElement("option",{value:"5"},"Pending for Customer"),s.a.createElement("option",{value:"6"},"Under Observation"),s.a.createElement("option",{value:"7"},"Pending for Others"),s.a.createElement("option",{value:"8"},"Pending for Spare"),s.a.createElement("option",{value:"13"},"Pending For Spare Collection"),s.a.createElement("option",{value:"12"},"Spare Taken CMRR"),s.a.createElement("option",{value:"14"}," Standby Given"),s.a.createElement("option",{value:"9"},"Spare in Transit"),s.a.createElement("option",{value:"10"},"Cancelled Calls"),s.a.createElement("option",{value:"11"},"Closed Calls")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"block relative xl:ml-64"},s.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},s.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},s.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),$(!Z)}},s.a.createElement("input",{value:Ue,onChange:function(e){return Ye(e.target.value)},placeholder:"Search by Call No.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),s.a.createElement(f.TableContainer,{className:"mt-4"},s.a.createElement(f.Table,null,s.a.createElement(f.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(f.TableCell,null,"Call No"),s.a.createElement(f.TableCell,null,"Date"),s.a.createElement(f.TableCell,null,"Unit Name"),s.a.createElement(f.TableCell,null,"Phone"),s.a.createElement(f.TableCell,null,"Call Status"),s.a.createElement(f.TableCell,null,"Assigned Employee"),s.a.createElement(f.TableCell,null," History"),s.a.createElement(f.TableCell,null,"Product Info"))),s.a.createElement(f.TableBody,null,I.map((function(e,a){return s.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-900 \n                    ",key:a,onClick:function(){O(e._id),De(e),console.log("SELECTD",e)}},s.a.createElement(f.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.callNo)))),s.a.createElement(f.TableCell,null,s.a.createElement("div",{className:"flex flex-col"},s.a.createElement("span",{className:"text-sm"},u()(e.date).format("DD/MM/YYYY")),e.regtimestamp?s.a.createElement("span",{className:"text-xs"},u()("2018-04-02".concat("T",e.time)).format("h:mm a")):null)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.unitName)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.phone)),s.a.createElement(f.TableCell,null,s.a.createElement("span",null,0==e.callStatus?s.a.createElement(f.Badge,null,"Pending For Allocation"):null,1==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Percall Approval"):null,2==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Response"):null,3==e.callStatus?s.a.createElement(f.Badge,null,"Pending for OEM Response"):null,4==e.callStatus?s.a.createElement(f.Badge,null,"Pending for 2nd Response"):null,5==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Customer"):null,6==e.callStatus?s.a.createElement(f.Badge,null,"Under Observation"):null,7==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Others"):null,8==e.callStatus?s.a.createElement(f.Badge,null,"Pending for Spare"):null,9==e.callStatus?s.a.createElement(f.Badge,null,"Spare in Transit"):null,10==e.callStatus?s.a.createElement(f.Badge,null,"Cancelled Calls"):null,11==e.callStatus?s.a.createElement(f.Badge,null,"Closed Calls"):null,12==e.callStatus?s.a.createElement(f.Badge,null,"Spare Taken CMRR"):null,13==e.callStatus?s.a.createElement(f.Badge,null,"Pending For Spare Collection"):null,14==e.callStatus?s.a.createElement(f.Badge,null,"Standby Given"):null)),s.a.createElement(f.TableCell,null,e.employeeId?s.a.createElement(s.a.Fragment,null,e.employeeName):s.a.createElement(s.a.Fragment,null,"Not Assigned")),s.a.createElement(f.TableCell,null,s.a.createElement("div",{className:"flex justify-start items-center space-x-2"},s.a.createElement(f.Button,{onClick:function(){z(a),S(!0)},className:" text-gray-600 dark:text-gray-200 px-3 py-3 text-sm bg-gray-200 dark:bg-gray-700 tetx-white rounded-md font-semibold cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800"},"History"))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{onClick:function(){ga(e.assetId),ia(!0)},className:" text-gray-600 dark:text-gray-200 px-3 py-3 text-sm bg-gray-200 dark:bg-gray-700 tetx-white rounded-md font-semibold cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800"},"Product")))})))),s.a.createElement(f.TableFooter,null,s.a.createElement(f.Pagination,{totalResults:ma,resultsPerPage:10,label:"Table navigation",onChange:function(e){R(e)}})))))}}}]);
//# sourceMappingURL=66.7a58e4db.chunk.js.map