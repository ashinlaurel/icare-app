(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[55],{1069:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t.n(l),c=t(10),r=t(2),s=t(0),o=t.n(s),u=t(18),m=t.n(u),i=t(7),d=t.n(i),E=t(15),b=(t(85),t(28),t(1)),g=t(8),f=t(30),p=t(6),O=t(29),S=(t(19),t(111));a.default=function(){var e=Object(s.useState)(!1),a=Object(r.a)(e,2),t=a[0],l=a[1],u=Object(s.useState)(!1),i=Object(r.a)(u,2),C=i[0],v=i[1],y=Object(s.useState)(!1),j=Object(r.a)(y,2),h=j[0],x=j[1],N=Object(s.useContext)(f.a),w=(N.bbaropen,N.setBBarOpen),T=N.setAssetDetails,B=(N.assetdetails,Object(s.useState)(0)),P=Object(r.a)(B,2),k=P[0],M=P[1],A=Object(s.useContext)(O.a),F=(A.topheading,A.setTopHeading),D=Object(s.useState)(!1),R=Object(r.a)(D,2),_=(R[0],R[1],Object(s.useState)(1)),U=Object(r.a)(_,2),I=U[0],H=U[1],Y=Object(s.useState)([]),z=Object(r.a)(Y,2),L=z[0],J=z[1],V=Object(s.useState)(""),q=Object(r.a)(V,2),G=q[0],K=q[1],Q=Object(s.useState)(!1),W=Object(r.a)(Q,2),X=(W[0],W[1],Object(s.useState)(!1)),Z=Object(r.a)(X,2),$=(Z[0],Z[1],Object(s.useState)(!1)),ee=Object(r.a)($,2),ae=(ee[0],ee[1],Object(s.useState)(!0)),te=Object(r.a)(ae,2),le=te[0],ne=te[1],ce=Object(s.useState)(!0),re=Object(r.a)(ce,2),se=(re[0],re[1],Object(s.useState)("")),oe=Object(r.a)(se,2),ue=oe[0],me=oe[1],ie=Object(s.useState)(""),de=Object(r.a)(ie,2),Ee=de[0],be=de[1],ge=Object(s.useState)(""),fe=Object(r.a)(ge,2),pe=fe[0],Oe=fe[1],Se=Object(s.useState)(""),Ce=Object(r.a)(Se,2),ve=Ce[0],ye=(Ce[1],Object(s.useState)("")),je=Object(r.a)(ye,2),he=je[0],xe=(je[1],Object(s.useState)({_id:"",unitName:""})),Ne=Object(r.a)(xe,2),we=(Ne[0],Ne[1],Object(s.useState)({_id:"",customerName:""})),Te=Object(r.a)(we,2),Be=(Te[0],Te[1],Object(s.useState)({_id:"",accountName:""})),Pe=Object(r.a)(Be,2),ke=(Pe[0],Pe[1],Object(s.useState)({_id:"",enggName:""})),Me=Object(r.a)(ke,2),Ae=Me[0],Fe=(Me[1],Object(s.useState)(!1)),De=Object(r.a)(Fe,2),Re=(De[0],De[1],Object(s.useState)({})),_e=Object(r.a)(Re,2),Ue=_e[0],Ie=_e[1],He=Object(s.useState)(""),Ye=Object(r.a)(He,2),ze=(Ye[0],Ye[1],Object(s.useState)("")),Le=Object(r.a)(ze,2),Je=(Le[0],Le[1],Object(s.useState)("")),Ve=Object(r.a)(Je,2),qe=Ve[0],Ge=Ve[1],Ke=Object(s.useState)(!1),Qe=Object(r.a)(Ke,2),We=Qe[0],Xe=Qe[1],Ze=Object(s.useState)(""),$e=Object(r.a)(Ze,2),ea=$e[0],aa=$e[1],ta=Object(s.useState)(""),la=Object(r.a)(ta,2),na=la[0],ca=la[1],ra=Object(s.useState)(""),sa=Object(r.a)(ra,2),oa=sa[0],ua=sa[1],ma=Object(s.useState)(20),ia=Object(r.a)(ma,2),da=ia[0],Ea=ia[1],ba=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.Modal,{isOpen:t,onClose:function(){return l(!1)}},o.a.createElement(b.ModalHeader,null,"Set Call Status"),o.a.createElement(b.ModalBody,null,o.a.createElement("div",{className:"flex-col flex"},o.a.createElement("div",{className:"font-xl dark:text-white"},"Current Status:"),o.a.createElement(b.Button,{className:"font-xl"},"Set Status"),o.a.createElement(b.Button,{className:"font-xl my-2 mx-10 inline"},"Pending for Allocation"),o.a.createElement(b.Button,{className:"font-xl my-2 mx-10 inline"},"Pending for Allocation"),o.a.createElement(b.Button,{className:"font-xl my-2 mx-10 inline"},"Pending for Allocation"),o.a.createElement(b.Button,{className:"font-xl my-2 mx-10 inline"},"Pending for Allocation"))),o.a.createElement(b.ModalFooter,null,o.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:Object(c.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SELECTED",Ue),a={id:Ue._id,update:{employeeId:Ae._id,employeeName:Ae.enggName,callStatus:1}},e.prev=2,e.next=5,d()({url:"".concat(g.a,"/call/").concat(E.a.getId(),"/ViewCallsg"),method:"POST",data:a});case 5:e.sent,t=L,console.log(t),t=t.filter((function(e){if(e._id===Ue._id)return e.callStatus=1,e.employeeName=Ae.enggName,e.employeeId=Ae._id,e;J(t)})),l(!1),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))},"Confirm Assignment"))))};Object(s.useEffect)((function(){return function(){w(0),T({})}}),[]),Object(s.useEffect)((function(){return F("View Calls"),function(){F("")}}),[]),Object(s.useEffect)((function(){!function(){var e=Object(c.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={pages:{page:I,limit:10},filters:{callStatus:ue,searchquery:qe,fromDate:Ee,toDate:pe}},e.prev=1,e.next=4,d()({url:"".concat(g.a,"/call/").concat(E.a.getId(),"/getall"),method:"POST",data:a});case 4:t=e.sent,Ea(t.data.total),J(t.data.out),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[I,ve,he,le,ue,qe,Ee,pe]);var ga=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.Modal,{isOpen:C,onClose:function(){return v(!1)}},o.a.createElement(b.ModalHeader,null,"Updated Successfully!"),o.a.createElement(b.ModalBody,null),o.a.createElement(b.ModalFooter,null,o.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return v(!1)}},"Okay!"))))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(ba,null),o.a.createElement(ga,null),function(){if(L[G]){var e=L[G],a=L[G].history;return console.log(a),o.a.createElement(o.a.Fragment,null,o.a.createElement(b.Modal,{isOpen:h,onClose:function(){return x(!1)},className:"w-9/12 h-screen dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"},o.a.createElement(b.ModalHeader,{className:"flex flex-row justify-between text-xl"},o.a.createElement("div",null,e.name),o.a.createElement("div",null,"Call No: ",o.a.createElement(b.Badge,null,e.callNo)," ")),o.a.createElement(b.ModalBody,null,o.a.createElement("div",{className:"font-semibold text-xl my-2"},"Call History"),o.a.createElement(b.TableContainer,{className:"mt-4"},o.a.createElement(b.Table,null,o.a.createElement(b.TableHeader,null,o.a.createElement("tr",null,o.a.createElement(b.TableCell,null,"Date"),o.a.createElement(b.TableCell,null,"Engineer"),o.a.createElement(b.TableCell,null,"Attended Date"),o.a.createElement(b.TableCell,null,"Start Of Service"),o.a.createElement(b.TableCell,null,"End Of Service"),o.a.createElement(b.TableCell,null,"Status"),o.a.createElement(b.TableCell,null,"Notes"),o.a.createElement(b.TableCell,null,"Action Taken"),o.a.createElement(b.TableCell,null,"Images"))),o.a.createElement(b.TableBody,null,a.map((function(e,a){return o.a.createElement(b.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(k==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){}},o.a.createElement(b.TableCell,{className:"w-8"},o.a.createElement("div",{className:"flex items-center text-sm "},o.a.createElement("div",null,o.a.createElement("p",{className:"font-semibold"},m()(e.date).format("DD-MM-YYYY"))))),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm"},Object(S.capitalize)(e.engineer))),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.callAttendDate)),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.startOfService)),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.endOfService)),o.a.createElement(b.TableCell,null,o.a.createElement("span",null,0==e.callStatus?o.a.createElement(b.Badge,null,"Not Allocated"):null,1==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Percall Approval"):null,2==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Response"):null,3==e.callStatus?o.a.createElement(b.Badge,null,"Pending for OEM Response"):null,4==e.callStatus?o.a.createElement(b.Badge,null,"Pending for 2nd Response"):null,5==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Customer"):null,6==e.callStatus?o.a.createElement(b.Badge,null,"Under Observation"):null,7==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Others"):null,8==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Spare"):null,9==e.callStatus?o.a.createElement(b.Badge,null,"Spare in Transit"):null,10==e.callStatus?o.a.createElement(b.Badge,null,"Cancelled Calls"):null,11==e.callStatus?o.a.createElement(b.Badge,null,"Closed Calls"):null)),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm "},e.note)),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.actionTaken)),o.a.createElement(b.TableCell,null,o.a.createElement(b.Button,{layout:"outline",onClick:function(){e.newUrl&&aa(e.newUrl),e.existUrl&&ca(e.existUrl),e.ccfrImgUrl&&ua(e.ccfrImgUrl),Xe(!0)}},"Show")))})))))),o.a.createElement(b.ModalFooter,null)))}}(),o.a.createElement(o.a.Fragment,null,o.a.createElement(b.Modal,{isOpen:We,onClose:function(){ca(""),aa(""),ua(""),Xe(!1)},className:"w-8/12 dark:bg-gray-800 p-10 my-12 h-screen  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"},o.a.createElement(b.ModalHeader,null,"Images"),o.a.createElement(b.ModalBody,null,o.a.createElement("div",{className:"flex flex-col justify-center "},o.a.createElement("hr",null),""!=na?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"text-lg font-semibold my-2 w-full"}," ","Replaced Item"),o.a.createElement("img",{src:na,className:"my-4 border-4",width:"500",height:"500"})):null,""!=ea?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"text-lg font-semibold my-2 w-full"}," ","Replaced by"),o.a.createElement("img",{src:ea,className:"my-4 border-4",width:"500",height:"500"})):null,""!=oa?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"text-lg font-semibold my-2 w-full"}," CCFR"),o.a.createElement("img",{src:oa,className:"my-4 border-4",width:"500",height:"500"})):null)),o.a.createElement(b.ModalFooter,null,o.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){ca(""),aa(""),ua(""),Xe(!1)}},"Okay!")))),o.a.createElement("div",{className:"mb-64 mt-4"},o.a.createElement("div",{className:""},o.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 "},o.a.createElement(b.Label,{className:""},o.a.createElement("span",null,"From Date"),o.a.createElement("input",{className:"mt-1 p-3 rounded-sm mx-1",type:"date",value:Ee,onChange:function(e){return be(e.target.value)}})),o.a.createElement(b.Label,{className:""},o.a.createElement("span",null,"To Date"),o.a.createElement("input",{className:"mt-1 p-3 rounded-sm mx-1",type:"date",value:pe,onChange:function(e){return Oe(e.target.value)}})),o.a.createElement("div",{class:"relative mx-1 "},o.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ue,onChange:function(e){me(e.target.value)}},o.a.createElement("option",{value:"",disabled:!0,selected:!0},"Call Status"),o.a.createElement("option",{value:""},"All"),o.a.createElement("option",{selected:!0,value:"0"},"Not Allocated"),o.a.createElement("option",{value:"1"},"Pending for Percall Approval"),o.a.createElement("option",{value:"2"},"Pending for Response"),o.a.createElement("option",{value:"3"},"Pending for OEM Response"),o.a.createElement("option",{value:"4"},"Pending for 2nd Response"),o.a.createElement("option",{value:"5"},"Pending for Customer"),o.a.createElement("option",{value:"6"},"Under Observation"),o.a.createElement("option",{value:"7"},"Pending for Others"),o.a.createElement("option",{value:"8"},"Pending for Spare"),o.a.createElement("option",{value:"9"},"Spare in Transit"),o.a.createElement("option",{value:"10"},"Cancelled Calls"),o.a.createElement("option",{value:"11"},"Closed Calls")),o.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},o.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),o.a.createElement("div",{class:"block relative xl:ml-64"},o.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},o.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},o.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),ne(!le)}},o.a.createElement("input",{value:qe,onChange:function(e){return Ge(e.target.value)},placeholder:"Search by Call No.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),o.a.createElement(b.TableContainer,{className:"mt-4"},o.a.createElement(b.Table,null,o.a.createElement(b.TableHeader,null,o.a.createElement("tr",null,o.a.createElement(b.TableCell,null,"Call No"),o.a.createElement(b.TableCell,null,"Date"),o.a.createElement(b.TableCell,null,"Unit Name"),o.a.createElement(b.TableCell,null,"Phone"),o.a.createElement(b.TableCell,null,"Call Status"),o.a.createElement(b.TableCell,null,"Assigned Employee"),o.a.createElement(b.TableCell,null,"Update / History"))),o.a.createElement(b.TableBody,null,L.map((function(e,a){return o.a.createElement(b.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(k==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){M(e._id),w(1),Ie(e),console.log("SELECTD",e),T(e.assetId)}},o.a.createElement(b.TableCell,{className:"w-8"},o.a.createElement("div",{className:"flex items-center text-sm "},o.a.createElement("div",null,o.a.createElement("p",{className:"font-semibold"},e.callNo)))),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm"},m()(e.date).format("DD/MM/YYYY"))),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.unitName)),o.a.createElement(b.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.phone)),o.a.createElement(b.TableCell,null,o.a.createElement("span",null,0==e.callStatus?o.a.createElement(b.Badge,null,"Not Allocated"):null,1==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Percall Approval"):null,2==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Response"):null,3==e.callStatus?o.a.createElement(b.Badge,null,"Pending for OEM Response"):null,4==e.callStatus?o.a.createElement(b.Badge,null,"Pending for 2nd Response"):null,5==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Customer"):null,6==e.callStatus?o.a.createElement(b.Badge,null,"Under Observation"):null,7==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Others"):null,8==e.callStatus?o.a.createElement(b.Badge,null,"Pending for Spare"):null,9==e.callStatus?o.a.createElement(b.Badge,null,"Spare in Transit"):null,10==e.callStatus?o.a.createElement(b.Badge,null,"Cancelled Calls"):null,11==e.callStatus?o.a.createElement(b.Badge,null,"Closed Calls"):null)),o.a.createElement(b.TableCell,null,e.employeeId?o.a.createElement(o.a.Fragment,null,e.employeeName):o.a.createElement(o.a.Fragment,null,"Not Assigned")),o.a.createElement(b.TableCell,null,o.a.createElement("div",{className:"flex justify-start items-center space-x-2"},o.a.createElement(p.b,{key:e._id,to:"/app/call/updatecall/".concat(e._id,"/").concat(e.assetId._id)},o.a.createElement(b.Button,{layout:"outline",onClick:function(){},className:" "},"Update")),o.a.createElement(b.Button,{onClick:function(){K(a),x(!0)},layout:"outline"},"History"))))})))),o.a.createElement(b.TableFooter,null,o.a.createElement(b.Pagination,{totalResults:da,resultsPerPage:10,label:"Table navigation",onChange:function(e){H(e)}})))))}},111:function(e,a){a.capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}}}]);
//# sourceMappingURL=55.e21cd187.chunk.js.map