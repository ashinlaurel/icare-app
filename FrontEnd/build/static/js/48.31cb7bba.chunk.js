(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[48],{1202:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a.n(l),r=a(12),c=a(3),o=a(0),s=a.n(o),u=a(21),i=a.n(u),m=a(9),d=a.n(m),p=a(18),f=(a(191),a(36)),E=a(2),b=a(10),g=a(44),v=a(1),h=a(43),w=(a(24),a(37)),x=a(200),y=a(199);t.default=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=(t[0],t[1],Object(o.useState)(!1)),l=Object(c.a)(a,2),u=l[0],m=l[1],C=Object(o.useState)(!1),S=Object(c.a)(C,2),O=S[0],j=S[1],N=Object(o.useContext)(g.a),k=(N.bbaropen,N.setBBarOpen),T=N.setAssetDetails,P=(N.assetdetails,Object(o.useState)(0)),B=Object(c.a)(P,2),M=B[0],I=B[1],D=Object(o.useContext)(h.a),A=(D.topheading,D.setTopHeading),R=Object(o.useState)(!1),_=Object(c.a)(R,2),F=(_[0],_[1],Object(o.useState)(1)),L=Object(c.a)(F,2),U=L[0],H=L[1],z=Object(o.useState)([]),Y=Object(c.a)(z,2),V=Y[0],G=Y[1],q=Object(o.useState)(""),K=Object(c.a)(q,2),W=K[0],J=K[1],X=Object(o.useState)(!1),Q=Object(c.a)(X,2),Z=Q[0],$=Q[1],ee=Object(o.useState)(!1),te=Object(c.a)(ee,2),ae=(te[0],te[1],Object(o.useState)(!1)),le=Object(c.a)(ae,2),ne=le[0],re=le[1],ce=Object(o.useState)(!0),oe=Object(c.a)(ce,2),se=oe[0],ue=oe[1],ie=Object(o.useState)(!0),me=Object(c.a)(ie,2),de=(me[0],me[1],Object(o.useState)("")),pe=Object(c.a)(de,2),fe=pe[0],Ee=pe[1],be=Object(o.useState)(""),ge=Object(c.a)(be,2),ve=ge[0],he=ge[1],we=Object(o.useState)(""),xe=Object(c.a)(we,2),ye=xe[0],Ce=xe[1],Se=Object(o.useState)(""),Oe=Object(c.a)(Se,2),je=Oe[0],Ne=Oe[1],ke=Object(o.useState)(""),Te=Object(c.a)(ke,2),Pe=Te[0],Be=Te[1],Me=Object(o.useState)(""),Ie=Object(c.a)(Me,2),De=Ie[0],Ae=Ie[1],Re=Object(o.useState)({_id:"",unitName:""}),_e=Object(c.a)(Re,2),Fe=_e[0],Le=_e[1],Ue=Object(o.useState)({_id:"",customerName:""}),He=Object(c.a)(Ue,2),ze=He[0],Ye=He[1],Ve=Object(o.useState)({_id:"",accountName:""}),Ge=Object(c.a)(Ve,2),qe=Ge[0],Ke=Ge[1],We=Object(o.useState)({_id:"",enggName:""}),Je=Object(c.a)(We,2),Xe=(Je[0],Je[1],Object(o.useState)(!1)),Qe=Object(c.a)(Xe,2),Ze=(Qe[0],Qe[1],Object(o.useState)({})),$e=Object(c.a)(Ze,2),et=($e[0],$e[1]),tt=Object(o.useState)(""),at=Object(c.a)(tt,2),lt=(at[0],at[1],Object(o.useState)("")),nt=Object(c.a)(lt,2),rt=(nt[0],nt[1],Object(o.useState)("")),ct=Object(c.a)(rt,2),ot=ct[0],st=ct[1],ut=Object(o.useState)(!1),it=Object(c.a)(ut,2),mt=it[0],dt=it[1],pt=Object(o.useState)(""),ft=Object(c.a)(pt,2),Et=ft[0],bt=ft[1],gt=Object(o.useState)(""),vt=Object(c.a)(gt,2),ht=vt[0],wt=vt[1],xt=Object(o.useState)(""),yt=Object(c.a)(xt,2),Ct=yt[0],St=yt[1],Ot=Object(o.useState)(!1),jt=Object(c.a)(Ot,2),Nt=jt[0],kt=jt[1],Tt=Object(o.useState)(20),Pt=Object(c.a)(Tt,2),Bt=Pt[0],Mt=Pt[1],It=function(e){switch(e){case 0:return"Pending For Allocation";case 1:return"Pending for Percall Approval";case 2:return"Pending for Response";case 3:return"Pending for OEM Response";case 4:return"Pending for 2nd Response";case 5:return"Pending for Customer";case 6:return"Under Observation";case 7:return"Pending for Others";case 8:return"Pending for Spare";case 9:return"Spare in Transit";case 10:return"Cancelled Calls";case 11:return"Closed Calls";case 12:return"Spare Taken CMRR";case 13:return"Pending For Spare Collection";case 14:return"Standby Given";case 15:return"Pending For Verification";default:return"Status Number Unknown"}},Dt=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,l,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="SlNo,CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,Engineer,Action Taken\n",l={pages:{page:U,limit:1e7},filters:{callType:ve,callStatus:fe,searchquery:ot,fromDate:ye,toDate:je}},e.prev=2,e.next=5,d()({url:"".concat(b.API,"/call/").concat(p.a.getId(),"/getall"),method:"POST",data:l});case 5:r=e.sent,a=r.data.out,e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:console.log("download calls call",a),a.map((function(e,a){var l=e.history.length-1;t+='"'.concat(a+1,'","').concat(e.callNo,'","').concat(i()(e.date).format("DD-MM-YYYY"),'","').concat(i()("2018-04-02".concat("T",e.time)).format("h:mm a"),'","').concat(e.unitName,'","').concat(e.phone,'","').concat(e.assetId.producttype,'","').concat(e.assetId.product.serialno,'","').concat(e.problem,'","').concat(It(e.callStatus),'","').concat(e.employeeName?e.employeeName:"Not Assigned",'","').concat(e.history[l].actionTaken,'"\n')})),c=new Blob([t],{type:"text/csv;charset=utf-8;"}),Object(x.saveAs)(c,"CallsExport.csv");case 16:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){return function(){k(0),T({})}}),[]),Object(o.useEffect)((function(){return A("View Calls"),function(){A("")}}),[]),Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pages:{page:U,limit:10},filters:{callType:ve,callStatus:fe,searchquery:ot,fromDate:ye,toDate:je,business:Pe,producttype:De,customer:ze,account:qe,unitId:Fe._id,customerId:ze._id,accountId:qe._id}},e.prev=1,e.next=4,d()({url:"".concat(b.API,"/call/").concat(p.a.getId(),"/getall"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data.out),Mt(a.data.total),G(a.data.out),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()()}),[U,se,fe,ot,ye,je,ve]);var At=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.Modal,{isOpen:u,onClose:function(){return m(!1)}},s.a.createElement(E.ModalHeader,null,"Updated Successfully!"),s.a.createElement(E.ModalBody,null),s.a.createElement(E.ModalFooter,null,s.a.createElement(E.Button,{className:"w-full sm:w-auto",onClick:function(){return m(!1)}},"Okay!"))))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{isModalOpen:ne,setIsModalOpen:re,setUnit:Le,unit:Fe,customer:ze,setCustomer:Ye,account:qe,setAccount:Ke,refresh:se,setRefresh:ue}),s.a.createElement(At,null),function(){if(V[W]){var e=V[W],t=V[W].history;return console.log(t),s.a.createElement(s.a.Fragment,null,s.a.createElement(E.Modal,{isOpen:O,onClose:function(){k(0),j(!1)},className:"w-9/12  dark:bg-gray-800 p-10 my-3  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"},s.a.createElement(E.ModalHeader,{className:"flex flex-row justify-between text-xl"},s.a.createElement("div",null,"Call No: ",e.callNo)),s.a.createElement("span",null,"Phone: ",e.phone),s.a.createElement(E.ModalBody,null,s.a.createElement(E.TableContainer,{className:"mt-4 max-h-xl overflow-scroll"},s.a.createElement(E.Table,null,s.a.createElement(E.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(E.TableCell,null,"Date"),s.a.createElement(E.TableCell,null,"Engineer"),s.a.createElement(E.TableCell,null,"Attended Date"),s.a.createElement(E.TableCell,null,"Start Of Service"),s.a.createElement(E.TableCell,null,"End Of Service"),s.a.createElement(E.TableCell,null,"Status"),s.a.createElement(E.TableCell,null,"Notes"),s.a.createElement(E.TableCell,null,"Action Taken"),s.a.createElement(E.TableCell,null,"Images"))),s.a.createElement(E.TableBody,{className:" max-h-64"},t.map((function(e,t){return s.a.createElement(E.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(M==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},s.a.createElement(E.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},i()(e.date).format("DD-MM-YYYY"))))),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:"text-sm"},Object(w.capitalize)(e.engineer))),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.callAttendDate)),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.startOfService)),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.endOfService)),s.a.createElement(E.TableCell,null,s.a.createElement("span",null,0==e.callStatus?s.a.createElement(E.Badge,null,"Pending For Allocation"):null,1==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Percall Approval"):null,2==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Response"):null,3==e.callStatus?s.a.createElement(E.Badge,null,"Pending for OEM Response"):null,4==e.callStatus?s.a.createElement(E.Badge,null,"Pending for 2nd Response"):null,5==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Customer"):null,6==e.callStatus?s.a.createElement(E.Badge,null,"Under Observation"):null,7==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Others"):null,8==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Spare"):null,9==e.callStatus?s.a.createElement(E.Badge,null,"Spare in Transit"):null,10==e.callStatus?s.a.createElement(E.Badge,null,"Cancelled Calls"):null,11==e.callStatus?s.a.createElement(E.Badge,null,"Closed Calls"):null,12==e.callStatus?s.a.createElement(E.Badge,null,"Spare Taken CMRR"):null,13==e.callStatus?s.a.createElement(E.Badge,null,"Pending For Spare Collection"):null,14==e.callStatus?s.a.createElement(E.Badge,null,"Standby Given"):null,15==e.callStatus?s.a.createElement(E.Badge,null,"Pending For Verification"):null)),s.a.createElement(E.TableCell,{className:"flex flex-row max-w-sm"},s.a.createElement("span",{className:"w-full overflow-auto"},e.note)),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.actionTaken)),s.a.createElement(E.TableCell,null,s.a.createElement(E.Button,{layout:"outline",onClick:function(){e.newUrl&&bt(e.newUrl),e.existUrl&&wt(e.existUrl),e.ccfrImgUrl&&St(e.ccfrImgUrl),dt(!0)}},"Show")))})))))),s.a.createElement(E.ModalFooter,null)))}}(),s.a.createElement(s.a.Fragment,null,s.a.createElement(E.Modal,{isOpen:mt,onClose:function(){wt(""),bt(""),St(""),dt(!1)},className:"w-9/12 dark:bg-gray-800 px-5 my-10 bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"},s.a.createElement(E.ModalHeader,null,"Images"),s.a.createElement(E.ModalBody,null,s.a.createElement("div",{className:"flex flex-col justify-center "},s.a.createElement("hr",null),s.a.createElement("div",{className:"flex flex-row justify-evenly flex-wrap items-center "},""!=ht?s.a.createElement("div",null,s.a.createElement("div",{onClick:function(){console.log(ht)},className:"text-lg font-semibold my-2 w-full"},"Replaced Item"),s.a.createElement("a",{href:ht,target:"_blank"},s.a.createElement("img",{src:ht,className:"my-4 border-4",width:"350",height:"350"}))):null,""!=Et?s.a.createElement("div",null,s.a.createElement("div",{className:"text-lg font-semibold my-2 w-full"}," ","Replaced by"),s.a.createElement("a",{href:Et,target:"_blank"},s.a.createElement("img",{src:Et,className:"my-4 border-4",width:"350",height:"350"}))):null,""!=Ct?s.a.createElement("div",null,s.a.createElement("div",{className:"text-lg font-semibold my-2 w-full"}," ","CCFR"),s.a.createElement("a",{href:Ct,target:"_blank"},s.a.createElement("img",{src:Ct,className:"my-4 border-4",width:"350",height:"350"}))):null))),s.a.createElement(E.ModalFooter,null))),s.a.createElement(s.a.Fragment,null,s.a.createElement(E.Modal,{isOpen:Nt,onClose:function(){return kt(!1)},className:" sdark:bg-gray-800 p-5 my-6 mx-10 px-5  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg "},s.a.createElement(E.ModalHeader,{className:"flex flex-row justify-between text-xl mx-10 px-10"},s.a.createElement("div",{className:"text-lg"},"Download Call Data?")),s.a.createElement(E.ModalBody,null,s.a.createElement(E.Button,{layout:"outline",onClick:function(){Dt()}},"Download")))),s.a.createElement("div",{className:"mb-64 mt-4"},s.a.createElement("div",{className:""},s.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-3"},s.a.createElement(E.Label,{className:"flex flex-col"},s.a.createElement("span",null,"From Date"),s.a.createElement("input",{className:"shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 p-2 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500 ",type:"date",value:ye,onChange:function(e){return Ce(e.target.value)}})),s.a.createElement(E.Label,{className:"flex flex-col"},s.a.createElement("span",null,"To Date"),s.a.createElement("input",{className:"shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 p-2  leading-tight focus:outline-none   focus:bg-white focus:border-gray-500 ",type:"date",value:je,onChange:function(e){return Ne(e.target.value)}})),s.a.createElement("div",{className:"flex flex-row items-center justify-center mt-5"},s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ve,onChange:function(e){he(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Call Type"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"internal"},"Internal"),s.a.createElement("option",{value:"internalinv"},"Internal Inv"),s.a.createElement("option",{value:"external"},"External")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:fe,onChange:function(e){Ee(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Call Status"),s.a.createElement("option",{value:""},"All (No Closed And Cancelled)"),s.a.createElement("option",{selected:!0,value:"0"},"Pending For Allocation"),s.a.createElement("option",{value:"1"},"Pending for Percall Approval"),s.a.createElement("option",{value:"2"},"Pending for Response"),s.a.createElement("option",{value:"3"},"Pending for OEM Response"),s.a.createElement("option",{value:"4"},"Pending for 2nd Response"),s.a.createElement("option",{value:"5"},"Pending for Customer"),s.a.createElement("option",{value:"6"},"Under Observation"),s.a.createElement("option",{value:"7"},"Pending for Others"),s.a.createElement("option",{value:"8"},"Pending for Spare"),s.a.createElement("option",{value:"13"},"Pending For Spare Collection"),s.a.createElement("option",{value:"12"},"Spare Taken CMRR"),s.a.createElement("option",{value:"14"}," Standby Given"),s.a.createElement("option",{value:"9"},"Spare in Transit"),s.a.createElement("option",{value:"10"},"Cancelled Calls"),s.a.createElement("option",{value:"15"},"Pending For Verification"),s.a.createElement("option",{value:"11"},"Closed Calls")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"block relative "},s.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},s.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},s.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),ue(!se)}},s.a.createElement("input",{value:ot,onChange:function(e){return st(e.target.value)},placeholder:"Search by Call No.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))),s.a.createElement("div",{className:"mx-4"},s.a.createElement(E.Button,{className:"px-12 py-2",layout:"outline",onClick:function(){kt(!0)}},"Export")))),s.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 "},s.a.createElement("div",{class:"relative  "},s.a.createElement("button",{class:" shadow-md appearance-none h-full rounded border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",onClick:function(){re(!ne)}},"Pick Customer"),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"relative mx-5 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:Pe,onChange:function(e){Be(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Business Type"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"AMC"},"AMC"),s.a.createElement("option",{value:"WTY"},"Warranty"),s.a.createElement("option",{value:"NOS"},"NOS"),s.a.createElement("option",{value:"DEAD"},"DEAD")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{className:"relative z-40 "},s.a.createElement("button",{onClick:function(){$(!Z)},className:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white  placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none","aria-label":"Notifications","aria-haspopup":"true"},De||"Pick Product"),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),s.a.createElement(E.Dropdown,{isOpen:Z,onClose:function(){return $(!1)}},s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("")}},s.a.createElement("span",null,"All")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Console")}},s.a.createElement("span",null,"Console")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("DMP")}},s.a.createElement("span",null,"DMP")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Inkjet")}},s.a.createElement("span",null,"Inkjet")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("KVM")}},s.a.createElement("span",null,"KVM")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Laptop")}},s.a.createElement("span",null,"Laptop")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Laser")}},s.a.createElement("span",null,"Laser")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("LMP")}},s.a.createElement("span",null,"LMP")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Module")}},s.a.createElement("span",null,"Module")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Router")}},s.a.createElement("span",null,"Router")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Scanner")}},s.a.createElement("span",null,"Scanner")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Server")}},s.a.createElement("span",null,"Server")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Desktop")}},s.a.createElement("span",null,"Desktop")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Storage")}},s.a.createElement("span",null,"Storage")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Switch")}},s.a.createElement("span",null,"Switch")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("UPS")}},s.a.createElement("span",null,"UPS")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Ncompute")}},s.a.createElement("span",null,"Ncompute")),s.a.createElement(E.DropdownItem,{onClick:function(){$(!1),Ae("Others")}},s.a.createElement("span",null,"Others")))))),s.a.createElement(E.TableContainer,{className:"mt-4"},s.a.createElement(E.Table,null,s.a.createElement(E.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(E.TableCell,null,"Call No"),s.a.createElement(E.TableCell,null,"Date"),s.a.createElement(E.TableCell,null,"Unit Name"),s.a.createElement(E.TableCell,null,"Product"),s.a.createElement(E.TableCell,null,"Serial"),s.a.createElement(E.TableCell,null,"Call Status"),s.a.createElement(E.TableCell,null,"Problem"),s.a.createElement(E.TableCell,null,"Actions"))),s.a.createElement(E.TableBody,null,V.filter((function(e){return""==Pe&&""==De||""!=Pe&&e.assetId.business==Pe||""!=De&&e.assetId.producttype==De})).map((function(e,t){return s.a.createElement(E.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(M==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){I(e._id),k(1),et(e),console.log("SELECTD",e),T(e.assetId)}},s.a.createElement(E.TableCell,{className:""},s.a.createElement("div",{className:"flex items-center text-sm justify-center"},s.a.createElement("div",{className:"flex flex-col items-center "},s.a.createElement(v.b,{key:e._id,to:"internalinv"==e.callType?"/app/call/updateinvcall/".concat(e._id,"/").concat(e.assetId._id):"/app/call/updatecall/".concat(e._id,"/").concat(e.assetId._id)},s.a.createElement("div",{className:" cursor-pointer"},s.a.createElement("p",{className:"font-semibold py-1 px-12 hover:underline text-white bg-blue-600 rounded-lg mb-1"},e.callNo)))))),s.a.createElement(E.TableCell,null,s.a.createElement("div",{className:"flex flex-col"},s.a.createElement("span",{className:"text-sm"},i()(e.date).format("DD/MM/YYYY")),e.regtimestamp?s.a.createElement("span",{className:"text-xs"},i()("2018-04-02".concat("T",e.time)).format("h:mm a")):null)),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.unitName)),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.assetId.producttype)),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:"text-sm "},e.assetId.product.serialno)),s.a.createElement(E.TableCell,null,s.a.createElement("span",{className:" text-xs"},0==e.callStatus?s.a.createElement(E.Badge,null,"Pending For Allocation"):null,1==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Percall Approval"):null,2==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Response"):null,3==e.callStatus?s.a.createElement(E.Badge,null,"Pending for OEM Response"):null,4==e.callStatus?s.a.createElement(E.Badge,null,"Pending for 2nd Response"):null,5==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Customer"):null,6==e.callStatus?s.a.createElement(E.Badge,null,"Under Observation"):null,7==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Others"):null,8==e.callStatus?s.a.createElement(E.Badge,null,"Pending for Spare"):null,9==e.callStatus?s.a.createElement(E.Badge,null,"Spare in Transit"):null,10==e.callStatus?s.a.createElement(E.Badge,null,"Cancelled Calls"):null,11==e.callStatus?s.a.createElement(E.Badge,null,"Closed Calls"):null,12==e.callStatus?s.a.createElement(E.Badge,null,"Spare Taken CMRR"):null,13==e.callStatus?s.a.createElement(E.Badge,null,"Pending For Spare Collection"):null,14==e.callStatus?s.a.createElement(E.Badge,null,"Standby Given"):null,15==e.callStatus?s.a.createElement(E.Badge,null,"Pending For Verification"):null)),s.a.createElement(E.TableCell,{className:"flex flex-row "},s.a.createElement("div",{className:"flex items-center justify-center "},s.a.createElement("div",{className:"flex flex-col items-start overflow-auto text-sm w-40 "},s.a.createElement("span",{className:" "},e.problem),e.employeeId?s.a.createElement("span",null,"Engineer: ",e.employeeName):s.a.createElement("span",null,"Engineer Not Assigned")))),s.a.createElement(s.a.Fragment,null),s.a.createElement(E.TableCell,null,s.a.createElement("div",{className:"flex items-center space-x-4"},s.a.createElement(v.b,{key:e._id,to:"internalinv"==e.callType?"/app/call/updateinvcall/".concat(e._id,"/").concat(e.assetId._id):"/app/call/updatecall/".concat(e._id,"/").concat(e.assetId._id)},s.a.createElement(E.Button,{layout:"link",size:"icon","aria-label":"Edit"},s.a.createElement(f.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))),s.a.createElement(E.Button,{onClick:function(){J(t),j(!0)},layout:"link",size:"icon","aria-label":"Edit"},s.a.createElement(f.MenuIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),s.a.createElement(E.TableFooter,null,s.a.createElement(E.Pagination,{totalResults:Bt,resultsPerPage:10,label:"Table navigation",onChange:function(e){H(e)}})))))}},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var l=a(5),n=a.n(l),r=a(12),c=a(3),o=a(0),s=a.n(o),u=a(9),i=a.n(u),m=a(2),d=a(192),p=(a(197),a(10));function f(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,u=e.setUnit,f=e.account,E=e.setAccount,b=e.customer,g=e.setCustomer,v=e.refresh,h=e.setRefresh,w=e.theunitdetails,x=e.setTheUnitDetails,y=Object(o.useState)([]),C=Object(c.a)(y,2),S=C[0],O=C[1],j=Object(o.useState)([]),N=Object(c.a)(j,2),k=N[0],T=N[1],P=Object(o.useState)([]),B=Object(c.a)(P,2),M=B[0],I=B[1],D=Object(o.useState)(0),A=Object(c.a)(D,2),R=A[0],_=A[1],F=Object(o.useState)(""),L=Object(c.a)(F,2),U=L[0],H=L[1],z=function(e){H(e.target.value)},Y=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:U,role:1},e.prev=1,e.next=4,i()({url:"".concat(p.API,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){Y()}),[U]),Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:U,role:1},e.prev=1,e.next=4,i()({url:"".concat(p.API,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var V=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),E({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.API,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),T(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),E({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.API,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),I(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(t),u({_id:t._id,contactPerson:t.contactPerson,contactNo:t.contactNo,unitName:t.unitName});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(m.ModalHeader,null,"Select"," ",0==R?s.a.createElement(s.a.Fragment,null,"Customer"):1==R?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(m.ModalBody,{className:"h-64 overflow-auto"},s.a.createElement(d.d,{selectedIndex:R,onSelect:function(e){return _(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,{className:""},s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,s.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:z}))))),s.a.createElement(m.TableBody,null,S.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return V(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Account"))),s.a.createElement(m.TableBody,null,k.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return G(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Unit"))),s.a.createElement(m.TableBody,null,M.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return q(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(m.TableFooter,null))))),s.a.createElement(m.ModalFooter,null,s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",b.customerName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",f.accountName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName),s.a.createElement(m.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!v),w&&x(l),T([]),I([])}},"Select"))))}},200:function(e,t,a){(function(a){var l,n,r;n=[],void 0===(r="function"===typeof(l=function(){"use strict";function t(e,t,a){var l=new XMLHttpRequest;l.open("GET",e),l.responseType="blob",l.onload=function(){o(l.response,t,a)},l.onerror=function(){console.error("could not download file")},l.send()}function l(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,a,c){var o=r.URL||r.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?n(s):l(s.href)?t(e,a,c):n(s,s.target="_blank")):(s.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(s.href)}),4e4),setTimeout((function(){n(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,r){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),a);else if(l(e))t(e,a,r);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){n(c)}))}}:function(e,a,l,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,l);var o="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&s||c)&&"undefined"!=typeof FileReader){var i=new FileReader;i.onloadend=function(){var e=i.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},i.readAsDataURL(e)}else{var m=r.URL||r.webkitURL,d=m.createObjectURL(e);n?n.location=d:location.href=d,n=null,setTimeout((function(){m.revokeObjectURL(d)}),4e4)}});r.saveAs=o.saveAs=o,e.exports=o})?l.apply(t,n):l)||(e.exports=r)}).call(this,a(148))}}]);
//# sourceMappingURL=48.31cb7bba.chunk.js.map