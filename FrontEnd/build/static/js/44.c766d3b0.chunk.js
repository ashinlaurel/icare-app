(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[44],{1197:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a.n(l),c=a(12),r=a(3),s=a(0),u=a.n(s),o=a(21),m=a.n(o),i=a(9),d=a.n(i),E=a(18),p=(a(191),a(36)),b=a(2),f=(a(215),a(10)),g=(a(201),a(199),a(221)),v=a(44),N=a(43);a(24);t.default=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(s.useContext)(v.a),i=(o.bbaropen,o.setBBarOpen),O=o.setAssetDetails,x=(o.assetdetails,Object(s.useState)(0)),h=Object(r.a)(x,2),T=h[0],C=h[1],j=Object(s.useContext)(N.a),y=(j.topheading,j.setTopHeading),S=Object(s.useState)(!1),w=Object(r.a)(S,2),k=(w[0],w[1],Object(s.useState)(1)),A=Object(r.a)(k,2),M=A[0],P=A[1],I=Object(s.useState)([]),_=Object(r.a)(I,2),D=_[0],B=_[1],F=Object(s.useState)(!1),Y=Object(r.a)(F,2),R=(Y[0],Y[1],Object(s.useState)(!1)),H=Object(r.a)(R,2),U=(H[0],H[1],Object(s.useState)(!1)),L=Object(r.a)(U,2),z=(L[0],L[1],Object(s.useState)(!0)),J=Object(r.a)(z,2),V=J[0],$=J[1],q=Object(s.useState)(!0),G=Object(r.a)(q,2),K=(G[0],G[1],Object(s.useState)("")),Q=Object(r.a)(K,2),W=(Q[0],Q[1],Object(s.useState)("0")),X=Object(r.a)(W,2),Z=X[0],ee=X[1],te=Object(s.useState)(""),ae=Object(r.a)(te,2),le=(ae[0],ae[1],Object(s.useState)("")),ne=Object(r.a)(le,2),ce=(ne[0],ne[1],Object(s.useState)("")),re=Object(r.a)(ce,2),se=re[0],ue=re[1],oe=Object(s.useState)(""),me=Object(r.a)(oe,2),ie=me[0],de=me[1],Ee=Object(s.useState)(""),pe=Object(r.a)(Ee,2),be=pe[0],fe=(pe[1],Object(s.useState)("")),ge=Object(r.a)(fe,2),ve=ge[0],Ne=(ge[1],Object(s.useState)({_id:"",unitName:""})),Oe=Object(r.a)(Ne,2),xe=(Oe[0],Oe[1],Object(s.useState)({_id:"",customerName:""})),he=Object(r.a)(xe,2),Te=(he[0],he[1],Object(s.useState)({_id:"",accountName:""})),Ce=Object(r.a)(Te,2),je=(Ce[0],Ce[1],Object(s.useState)({_id:"",enggName:""})),ye=Object(r.a)(je,2),Se=ye[0],we=ye[1],ke=Object(s.useState)(!1),Ae=Object(r.a)(ke,2),Me=Ae[0],Pe=Ae[1],Ie=Object(s.useState)(!1),_e=Object(r.a)(Ie,2),De=_e[0],Be=_e[1],Fe=Object(s.useState)({}),Ye=Object(r.a)(Fe,2),Re=Ye[0],He=Ye[1],Ue=Object(s.useState)(""),Le=Object(r.a)(Ue,2),ze=(Le[0],Le[1],Object(s.useState)("")),Je=Object(r.a)(ze,2),Ve=(Je[0],Je[1],Object(s.useState)("")),$e=Object(r.a)(Ve,2),qe=$e[0],Ge=$e[1],Ke=Object(s.useState)(""),Qe=Object(r.a)(Ke,2),We=Qe[0],Xe=Qe[1],Ze=Object(s.useState)(""),et=Object(r.a)(Ze,2),tt=et[0],at=et[1],lt=Object(s.useState)(20),nt=Object(r.a)(lt,2),ct=nt[0],rt=nt[1],st=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(b.Modal,{isOpen:a,onClose:function(){return l(!1)}},u.a.createElement(b.ModalHeader,null,"Confirm Assignment"),u.a.createElement(b.ModalBody,null,u.a.createElement("div",{className:"font-xl text-xl"},"Assign ",Se.enggName," to call ",Re.callNo),u.a.createElement("div",{className:"flex flex-col w-full mt-2"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Assign Date"),u.a.createElement(b.Input,{className:"",type:"date",value:m()(We).format("YYYY-MM-DD"),onChange:function(e){Xe(e.target.value)}})),m()(Re.date).format("YYYY-MM-DD")>m()(We).format("YYYY-MM-DD")?u.a.createElement("span",{className:"text-red-700"},"Error: Selected date is before the call date!"):null),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Assign ETA"),u.a.createElement(b.Input,{className:"",type:"time",value:tt,onChange:function(e){at(e.target.value)}})))),u.a.createElement(b.ModalFooter,null,u.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:Object(c.a)(n.a.mark((function e(){var t,a,c,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(Re),""!=We&&""!=tt){e.next=3;break}return e.abrupt("return");case 3:if(!(m()(Re.date).format("YYYY-MM-DD")>m()(We).format("YYYY-MM-DD"))){e.next=5;break}return e.abrupt("return");case 5:return t={date:m()().format(),callStatus:"2",engineer:Se.enggName,callAttendDate:"Nil",startOfService:"Nil",endOfService:"Nil",note:"".concat(Se.enggName," has been assigned to the call. Assigned Date: ").concat(We," Assigned ETA: ").concat(tt),actionTaken:"Nil"},a={id:Re._id,update:{employeeId:Se._id,employeeName:Se.enggName,callStatus:2,assignedDate:We,assignedETA:tt,$push:{history:t}}},c={id:Se._id,update:{$push:{assignedCalls:{priority:99,callId:Re._id,date:new Date}}}},e.prev=8,e.next=11,d()({url:"".concat(f.API,"/call/").concat(E.a.getId(),"/assignEngg"),method:"POST",data:a});case 11:return e.sent,r=D,console.log(r),r=r.filter((function(e){if(e._id===Re._id)return e.callStatus=2,e.employeeName=Se.enggName,e.employeeId=Se._id,e;B(r)})),e.next=17,d()({url:"".concat(f.API,"/admin/").concat(E.a.getId(),"/update"),method:"POST",data:c});case 17:l(!1),Xe(""),at(""),$(!V),e.next=26;break;case 23:throw e.prev=23,e.t0=e.catch(8),e.t0;case 26:case"end":return e.stop()}}),e,null,[[8,23]])})))},"Confirm Assignment"))))};return Object(s.useEffect)((function(){return function(){i(0),O({})}}),[]),Object(s.useEffect)((function(){return y("Assign Engineer"),function(){y("")}}),[]),Object(s.useEffect)((function(){!function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pages:{page:M,limit:10},filters:{callType:"",callStatus:Z,searchquery:qe,fromDate:se,toDate:ie}},e.prev=1,e.next=4,d()({url:"".concat(f.API,"/call/").concat(E.a.getId(),"/getall"),method:"POST",data:t});case 4:a=e.sent,rt(a.data.total),B(a.data.out),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[M,be,ve,V,Z,qe,se,ie]),u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{isModalOpen:Me,setIsModalOpen:Pe,setEngineer:we,nextModal:l}),u.a.createElement(st,null),u.a.createElement(u.a.Fragment,null,u.a.createElement(b.Modal,{isOpen:De,onClose:function(){return Be(!1)}},u.a.createElement(b.ModalHeader,null,"Problem Description"),u.a.createElement(b.ModalBody,null,u.a.createElement("div",{className:"font-xl text-xl overflow-scroll"},Re.problem)))),u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:Z,onChange:function(e){ee(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Call Status"),u.a.createElement("option",{value:"all"},"All But Closed"),u.a.createElement("option",{selected:!0,value:"0"},"Pending For Allocation"),u.a.createElement("option",{value:"priority"},"Priority")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement(b.Label,{className:""},u.a.createElement("span",null,"From Date"),u.a.createElement("input",{className:"mt-1 p-2 rounded-sm mx-1",type:"date",value:se,onChange:function(e){return ue(e.target.value)}})),u.a.createElement(b.Label,{className:""},u.a.createElement("span",null,"To Date"),u.a.createElement("input",{className:"mt-1 p-2 rounded-sm mx-1 mr-5",type:"date",value:ie,onChange:function(e){return de(e.target.value)}})),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),$(!V)}},u.a.createElement("input",{value:qe,onChange:function(e){return Ge(e.target.value)},placeholder:"Search by Call No.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(b.TableContainer,{className:"mt-4"},u.a.createElement(b.Table,null,u.a.createElement(b.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(b.TableCell,null,"Call No"),u.a.createElement(b.TableCell,null,"Date"),"priority"==Z?u.a.createElement(u.a.Fragment,null,u.a.createElement(b.TableCell,null,"Assigned Date"),u.a.createElement(b.TableCell,null,"Assigned ETA")):null,u.a.createElement(b.TableCell,null,"Type"),u.a.createElement(b.TableCell,null,"Product SNO."),u.a.createElement(b.TableCell,null,"Unit Name"),u.a.createElement(b.TableCell,null,"Phone"),u.a.createElement(b.TableCell,null,"Call Status"),u.a.createElement(b.TableCell,null,"Problem Description"),u.a.createElement(b.TableCell,null,"Assigned Employee"))),u.a.createElement(b.TableBody,null,D.map((function(e,t){return u.a.createElement(b.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(T==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){C(e._id),i(1),He(e),e.assetId?O(e.assetId):O({}),console.log("CALL ASSET",e.assetId)}},u.a.createElement(b.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.callNo)))),u.a.createElement(b.TableCell,null,u.a.createElement("div",{className:"flex flex-col"},u.a.createElement("span",{className:"text-sm"},m()(e.date).format("DD/MM/YYYY")),e.time?u.a.createElement("span",{className:"text-xs"},m()("2018-04-02".concat("T",e.time)).format("h:mm a")):null)),"priority"==Z?u.a.createElement(u.a.Fragment,null,u.a.createElement(b.TableCell,null,u.a.createElement("span",{className:"text-sm"},m()(e.assignedDate).format("DD/MM/YYYY"))),u.a.createElement(b.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.assignedETA))):null,u.a.createElement(b.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.assetId.producttype)),u.a.createElement(b.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.assetId.product.serialno)),u.a.createElement(b.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.unitName)),u.a.createElement(b.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.phone)),u.a.createElement(b.TableCell,null,0==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending For Allocation"):null,1==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Percall Approval"):null,2==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Response"):null,3==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for OEM Response"):null,4==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for 2nd Response"):null,5==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Customer"):null,6==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Under Observation"):null,7==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Others"):null,8==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Spare"):null,9==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Spare in Transit"):null,10==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Cancelled Calls"):null,11==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Closed Calls"):null,12==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Spare Taken CMRR"):null,13==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending For Spare Collection"):null,14==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Standby Given"):null,15==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending For Verification"):null),u.a.createElement(b.TableCell,null,u.a.createElement("div",{className:"flex items-center justify-center"},u.a.createElement(b.Button,{layout:"outline",onClick:function(){return Be(!0)}},"View")," ")),u.a.createElement(b.TableCell,null,e.employeeId?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"px-4 py-2 dark:border-purple-400 border-purple-600 dark:bg-gray-700 bg-purple-100 inline-block rounded-lg dark:text-purple-400 text-purple-700"},e.employeeName,u.a.createElement(b.Button,{layout:"link",size:"icon","aria-label":"Edit",onClick:function(){Pe(!0),at(e.assignedETA),Xe(e.assignedDate)},className:"rounded-full mx-2 "},u.a.createElement(p.EditIcon,{className:"w-5 h-5","aria-hidden":"true"})))):u.a.createElement(b.Button,{layout:"outline",onClick:function(){return Pe(!0)}},"Assign Now")))})))),u.a.createElement(b.TableFooter,null,u.a.createElement(b.Pagination,{totalResults:ct,resultsPerPage:10,label:"Table navigation",onChange:function(e){P(e)}})))))}},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(5),n=a.n(l),c=a(12),r=a(3),s=a(0),u=a.n(s),o=a(9),m=a.n(o),i=a(2),d=a(192),E=(a(197),a(10));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,o=e.setUnit,p=e.account,b=e.setAccount,f=e.customer,g=e.setCustomer,v=e.refresh,N=e.setRefresh,O=e.theunitdetails,x=e.setTheUnitDetails,h=Object(s.useState)([]),T=Object(r.a)(h,2),C=T[0],j=T[1],y=Object(s.useState)([]),S=Object(r.a)(y,2),w=S[0],k=S[1],A=Object(s.useState)([]),M=Object(r.a)(A,2),P=M[0],I=M[1],_=Object(s.useState)(0),D=Object(r.a)(_,2),B=D[0],F=D[1],Y=Object(s.useState)(""),R=Object(r.a)(Y,2),H=R[0],U=R[1],L=function(e){U(e.target.value)},z=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:H,role:1},e.prev=2,e.next=5,m()({url:"".concat(E.API,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),j(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){!function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:H,role:1},e.prev=1,e.next=4,m()({url:"".concat(E.API,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),j(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var J=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),b({_id:"",accountName:""}),o({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(E.API,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),k(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),b({_id:t._id,accountName:t.name}),o({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(E.API,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),I(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(t),o({_id:t._id,contactPerson:t.contactPerson,contactNo:t.contactNo,unitName:t.unitName});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==B?u.a.createElement(u.a.Fragment,null,"Customer"):1==B?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(d.d,{selectedIndex:B,onSelect:function(e){return F(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account"),u.a.createElement(d.a,null,"Unit")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:z},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:L}))))),u.a.createElement(i.TableBody,null,C.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return J(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,w.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return V(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,P.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return $(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName),u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),N(!v),O&&x(l),k([]),I([])}},"Select"))))}},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(5),n=a.n(l),c=a(12),r=a(3),s=a(0),u=a.n(s),o=a(9),m=a.n(o),i=a(2),d=a(192),E=(a(197),a(10));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,o=e.setUnit,p=e.account,b=e.setAccount,f=e.customer,g=e.setCustomer,v=Object(s.useState)([]),N=Object(r.a)(v,2),O=N[0],x=N[1],h=Object(s.useState)([]),T=Object(r.a)(h,2),C=T[0],j=T[1],y=Object(s.useState)([]),S=Object(r.a)(y,2),w=S[0],k=S[1],A=Object(s.useState)(0),M=Object(r.a)(A,2),P=M[0],I=M[1],_=Object(s.useState)(""),D=Object(r.a)(_,2),B=D[0],F=D[1],Y=function(e){F(e.target.value)},R=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:B,role:1},e.prev=2,e.next=5,m()({url:"".concat(E.API,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),x(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){!function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:B,role:1},e.prev=1,e.next=4,m()({url:"".concat(E.API,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),x(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var H=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),b({_id:"",accountName:""}),o({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(E.API,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),j(a.data),I(1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),b({_id:t._id,accountName:t.name}),o({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(E.API,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),k(a.data),I(2),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),o({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==P?u.a.createElement(u.a.Fragment,null,"Customer"):1==P?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(d.d,{selectedIndex:P,onSelect:function(e){return I(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account"),u.a.createElement(d.a,null,"Unit")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:R},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:Y}))))),u.a.createElement(i.TableBody,null,O.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return H(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,C.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return U(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,{className:" w-full overflow-y-scroll"},u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,w.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName),u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){return a(!1)}},"Select"))))}},221:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(3),n=a(0),c=a.n(n),r=a(2),s=a(9),u=a.n(s),o=a(10),m=a(18);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,s=e.setEngineer,i=e.nextModal,d=Object(n.useState)([]),E=Object(l.a)(d,2),p=E[0],b=E[1];Object(n.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(o.API,"/admin/").concat(m.a.getId(),"/getAll")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),b(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:t,onClose:function(){return a(!1)}},c.a.createElement(r.ModalHeader,null,"Assign Engineer"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Name"),c.a.createElement(r.TableCell,null,"Employee ID"))),c.a.createElement(r.TableBody,null,p.map((function(e,t){return c.a.createElement(r.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){s({_id:e._id,enggName:e.employeeName}),a(!1),i(!0)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.employeeName)))),c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.employeeID)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}}}]);
//# sourceMappingURL=44.c766d3b0.chunk.js.map