(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[26],{1069:function(e,t,a){"use strict";a.r(t);var l=a(3),n=a.n(l),r=a(10),c=a(2),s=a(0),u=a.n(s),o=a(18),m=a.n(o),i=a(7),d=a.n(i),b=a(15),E=(a(85),a(28)),p=a(1),f=(a(112),a(8)),g=(a(98),a(95),a(114)),v=a(30),O=a(29);a(19);t.default=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(s.useContext)(v.a),i=(o.bbaropen,o.setBBarOpen),h=o.setAssetDetails,x=(o.assetdetails,Object(s.useState)(0)),N=Object(c.a)(x,2),T=N[0],C=N[1],j=Object(s.useContext)(O.a),y=(j.topheading,j.setTopHeading),S=Object(s.useState)(!1),w=Object(c.a)(S,2),k=(w[0],w[1],Object(s.useState)(1)),M=Object(c.a)(k,2),A=M[0],_=M[1],D=Object(s.useState)([]),B=Object(c.a)(D,2),F=B[0],I=B[1],Y=Object(s.useState)(!1),P=Object(c.a)(Y,2),R=(P[0],P[1],Object(s.useState)(!1)),H=Object(c.a)(R,2),U=(H[0],H[1],Object(s.useState)(!1)),L=Object(c.a)(U,2),z=(L[0],L[1],Object(s.useState)(!0)),J=Object(c.a)(z,2),$=J[0],q=J[1],V=Object(s.useState)(!0),G=Object(c.a)(V,2),K=(G[0],G[1],Object(s.useState)("")),Q=Object(c.a)(K,2),W=(Q[0],Q[1],Object(s.useState)("0")),X=Object(c.a)(W,2),Z=X[0],ee=X[1],te=Object(s.useState)(""),ae=Object(c.a)(te,2),le=(ae[0],ae[1],Object(s.useState)("")),ne=Object(c.a)(le,2),re=(ne[0],ne[1],Object(s.useState)("")),ce=Object(c.a)(re,2),se=ce[0],ue=ce[1],oe=Object(s.useState)(""),me=Object(c.a)(oe,2),ie=me[0],de=me[1],be=Object(s.useState)(""),Ee=Object(c.a)(be,2),pe=Ee[0],fe=(Ee[1],Object(s.useState)("")),ge=Object(c.a)(fe,2),ve=ge[0],Oe=(ge[1],Object(s.useState)({_id:"",unitName:""})),he=Object(c.a)(Oe,2),xe=(he[0],he[1],Object(s.useState)({_id:"",customerName:""})),Ne=Object(c.a)(xe,2),Te=(Ne[0],Ne[1],Object(s.useState)({_id:"",accountName:""})),Ce=Object(c.a)(Te,2),je=(Ce[0],Ce[1],Object(s.useState)({_id:"",enggName:""})),ye=Object(c.a)(je,2),Se=ye[0],we=ye[1],ke=Object(s.useState)(!1),Me=Object(c.a)(ke,2),Ae=Me[0],_e=Me[1],De=Object(s.useState)(!1),Be=Object(c.a)(De,2),Fe=Be[0],Ie=Be[1],Ye=Object(s.useState)({}),Pe=Object(c.a)(Ye,2),Re=Pe[0],He=Pe[1],Ue=Object(s.useState)(""),Le=Object(c.a)(Ue,2),ze=(Le[0],Le[1],Object(s.useState)("")),Je=Object(c.a)(ze,2),$e=(Je[0],Je[1],Object(s.useState)("")),qe=Object(c.a)($e,2),Ve=qe[0],Ge=qe[1],Ke=Object(s.useState)(""),Qe=Object(c.a)(Ke,2),We=Qe[0],Xe=Qe[1],Ze=Object(s.useState)(""),et=Object(c.a)(Ze,2),tt=et[0],at=et[1],lt=Object(s.useState)(20),nt=Object(c.a)(lt,2),rt=nt[0],ct=nt[1],st=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.Modal,{isOpen:a,onClose:function(){return l(!1)}},u.a.createElement(p.ModalHeader,null,"Confirm Assignment"),u.a.createElement(p.ModalBody,null,u.a.createElement("div",{className:"font-xl text-xl"},"Assign ",Se.enggName," to call ",Re.callNo),u.a.createElement("div",{className:"flex flex-col w-full mt-2"},u.a.createElement(p.Label,{className:"w-full"},u.a.createElement("span",null,"Assign Date"),u.a.createElement(p.Input,{className:"",type:"date",value:m()(We).format("YYYY-MM-DD"),onChange:function(e){Xe(e.target.value)}})),m()(Re.date).format("YYYY-MM-DD")>m()(We).format("YYYY-MM-DD")?u.a.createElement("span",{className:"text-red-700"},"Error: Selected date is before the call date!"):null),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(p.Label,{className:"w-full"},u.a.createElement("span",null,"Assign ETA"),u.a.createElement(p.Input,{className:"",type:"time",value:tt,onChange:function(e){at(e.target.value)}})))),u.a.createElement(p.ModalFooter,null,u.a.createElement(p.Button,{className:"w-full sm:w-auto",onClick:Object(r.a)(n.a.mark((function e(){var t,a,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(Re),""!=We&&""!=tt){e.next=3;break}return e.abrupt("return");case 3:if(!(m()(Re.date).format("YYYY-MM-DD")>m()(We).format("YYYY-MM-DD"))){e.next=5;break}return e.abrupt("return");case 5:return t={date:m()().format(),callStatus:"2",engineer:Se.enggName,callAttendDate:"Nil",startOfService:"Nil",endOfService:"Nil",note:"".concat(Se.enggName," has been assigned to the call. Assigned Date: ").concat(We," Assigned ETA: ").concat(tt),actionTaken:"Nil"},a={id:Re._id,update:{employeeId:Se._id,employeeName:Se.enggName,callStatus:2,assignedDate:We,assignedETA:tt,$push:{history:t}}},r={id:Se._id,update:{$push:{assignedCalls:{priority:99,callId:Re._id,date:new Date}}}},e.prev=8,e.next=11,d()({url:"".concat(f.a,"/call/").concat(b.a.getId(),"/assignEngg"),method:"POST",data:a});case 11:return e.sent,c=F,console.log(c),c=c.filter((function(e){if(e._id===Re._id)return e.callStatus=2,e.employeeName=Se.enggName,e.employeeId=Se._id,e;I(c)})),e.next=17,d()({url:"".concat(f.a,"/admin/").concat(b.a.getId(),"/update"),method:"POST",data:r});case 17:l(!1),Xe(""),at(""),q(!$),e.next=26;break;case 23:throw e.prev=23,e.t0=e.catch(8),e.t0;case 26:case"end":return e.stop()}}),e,null,[[8,23]])})))},"Confirm Assignment"))))};return Object(s.useEffect)((function(){return function(){i(0),h({})}}),[]),Object(s.useEffect)((function(){return y("Assign Engineer"),function(){y("")}}),[]),Object(s.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pages:{page:A,limit:10},filters:{callStatus:Z,searchquery:Ve,fromDate:se,toDate:ie}},e.prev=1,e.next=4,d()({url:"".concat(f.a,"/call/").concat(b.a.getId(),"/getall"),method:"POST",data:t});case 4:a=e.sent,ct(a.data.total),I(a.data.out),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[A,pe,ve,$,Z,Ve,se,ie]),u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{isModalOpen:Ae,setIsModalOpen:_e,setEngineer:we,nextModal:l}),u.a.createElement(st,null),u.a.createElement(u.a.Fragment,null,u.a.createElement(p.Modal,{isOpen:Fe,onClose:function(){return Ie(!1)}},u.a.createElement(p.ModalHeader,null,"Problem Description"),u.a.createElement(p.ModalBody,null,u.a.createElement("div",{className:"font-xl text-xl overflow-scroll"},Re.problem)))),u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:Z,onChange:function(e){ee(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Call Status"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{selected:!0,value:"0"},"Pending For Allocation"),u.a.createElement("option",{value:"priority"},"Priority")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement(p.Label,{className:""},u.a.createElement("span",null,"From Date"),u.a.createElement("input",{className:"mt-1 p-2 rounded-sm mx-1",type:"date",value:se,onChange:function(e){return ue(e.target.value)}})),u.a.createElement(p.Label,{className:""},u.a.createElement("span",null,"To Date"),u.a.createElement("input",{className:"mt-1 p-2 rounded-sm mx-1 mr-5",type:"date",value:ie,onChange:function(e){return de(e.target.value)}})),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),q(!$)}},u.a.createElement("input",{value:Ve,onChange:function(e){return Ge(e.target.value)},placeholder:"Search by Call No.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(p.TableContainer,{className:"mt-4"},u.a.createElement(p.Table,null,u.a.createElement(p.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(p.TableCell,null,"Call No"),u.a.createElement(p.TableCell,null,"Date"),"priority"==Z?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.TableCell,null,"Assigned Date"),u.a.createElement(p.TableCell,null,"Assigned ETA")):null,u.a.createElement(p.TableCell,null,"Type"),u.a.createElement(p.TableCell,null,"Product SNO."),u.a.createElement(p.TableCell,null,"Unit Name"),u.a.createElement(p.TableCell,null,"Phone"),u.a.createElement(p.TableCell,null,"Call Status"),u.a.createElement(p.TableCell,null,"Problem Description"),u.a.createElement(p.TableCell,null,"Assigned Employee"))),u.a.createElement(p.TableBody,null,F.map((function(e,t){return u.a.createElement(p.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(T==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){C(e._id),i(1),He(e),e.assetId?h(e.assetId):h({}),console.log("CALL ASSET",e.assetId)}},u.a.createElement(p.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.callNo)))),u.a.createElement(p.TableCell,null,u.a.createElement("span",{className:"text-sm"},m()(e.date).format("DD/MM/YYYY"))),"priority"==Z?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.TableCell,null,u.a.createElement("span",{className:"text-sm"},m()(e.assignedDate).format("DD/MM/YYYY"))),u.a.createElement(p.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.assignedETA))):null,u.a.createElement(p.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.assetId.producttype)),u.a.createElement(p.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.assetId.product.serialno)),u.a.createElement(p.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.unitName)),u.a.createElement(p.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.phone)),u.a.createElement(p.TableCell,null,0==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending For Allocation"):null,1==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Percall Approval"):null,2==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Response"):null,3==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for OEM Response"):null,4==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for 2nd Response"):null,5==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Customer"):null,6==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Under Observation"):null,7==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Others"):null,8==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Spare"):null,9==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Spare in Transit"):null,10==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Cancelled Calls"):null,11==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Closed Calls"):null,12==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Spare Taken CMRR"):null),u.a.createElement(p.TableCell,null,u.a.createElement(p.Button,{onClick:function(){return Ie(!0)}},"View")),u.a.createElement(p.TableCell,null,e.employeeId?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"px-4 py-2 dark:border-purple-400 border-purple-600 dark:bg-gray-700 bg-purple-100 inline-block rounded-lg dark:text-purple-400 text-purple-700"},e.employeeName,u.a.createElement(p.Button,{layout:"link",size:"icon","aria-label":"Edit",onClick:function(){_e(!0),at(e.assignedETA),Xe(e.assignedDate)},className:"rounded-full mx-2 "},u.a.createElement(E.EditIcon,{className:"w-5 h-5","aria-hidden":"true"})))):u.a.createElement(p.Button,{onClick:function(){return _e(!0)}},"Assign Now")))})))),u.a.createElement(p.TableFooter,null,u.a.createElement(p.Pagination,{totalResults:rt,resultsPerPage:10,label:"Table navigation",onChange:function(e){_(e)}})))))}},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(2),n=a(0),r=a.n(n),c=a(1),s=a(7),u=a.n(s),o=a(8),m=a(15);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,s=e.setEngineer,i=e.nextModal,d=Object(n.useState)([]),b=Object(l.a)(d,2),E=b[0],p=b[1];Object(n.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(o.a,"/admin/").concat(m.a.getId(),"/getAll")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),p(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Modal,{isOpen:t,onClose:function(){return a(!1)}},r.a.createElement(c.ModalHeader,null,"Assign Engineer"),r.a.createElement(c.ModalBody,null,r.a.createElement(c.TableContainer,null,r.a.createElement(c.Table,null,r.a.createElement(c.TableHeader,null,r.a.createElement("tr",null,r.a.createElement(c.TableCell,null,"Name"),r.a.createElement(c.TableCell,null,"Employee ID"))),r.a.createElement(c.TableBody,null,E.map((function(e,t){return r.a.createElement(c.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){s({_id:e._id,enggName:e.employeeName}),a(!1),i(!0)}},r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.employeeName)))),r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.employeeID)))))})))),r.a.createElement(c.TableFooter,null))),r.a.createElement(c.ModalFooter,null,r.a.createElement(c.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(c.Button,{className:"w-full sm:w-auto"},"Accept"))))}},87:function(e,t,a){},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var l=a(3),n=a.n(l),r=a(10),c=a(2),s=a(0),u=a.n(s),o=a(7),m=a.n(o),i=a(1),d=a(92),b=(a(87),a(8));function E(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,o=e.setUnit,E=e.account,p=e.setAccount,f=e.customer,g=e.setCustomer,v=e.refresh,O=e.setRefresh,h=Object(s.useState)([]),x=Object(c.a)(h,2),N=x[0],T=x[1],C=Object(s.useState)([]),j=Object(c.a)(C,2),y=j[0],S=j[1],w=Object(s.useState)([]),k=Object(c.a)(w,2),M=k[0],A=k[1],_=Object(s.useState)(0),D=Object(c.a)(_,2),B=D[0],F=D[1],I=Object(s.useState)(""),Y=Object(c.a)(I,2),P=Y[0],R=Y[1],H=function(e){R(e.target.value)},U=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:P,role:1},e.prev=2,e.next=5,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),T(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:P,role:1},e.prev=1,e.next=4,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),T(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var L=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),p({_id:"",accountName:""}),o({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),S(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),p({_id:t._id,accountName:t.name}),o({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),A(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),o({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==B?u.a.createElement(u.a.Fragment,null,"Customer"):1==B?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,null,u.a.createElement(d.d,{selectedIndex:B,onSelect:function(e){return F(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account"),u.a.createElement(d.a,null,"Unit")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:U},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:H}))))),u.a.createElement(i.TableBody,null,N.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,y.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return z(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,M.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return J(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null)))),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",E.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName)),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),O(!v)}},"Select"))))}},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var l=a(3),n=a.n(l),r=a(10),c=a(2),s=a(0),u=a.n(s),o=a(7),m=a.n(o),i=a(1),d=a(92),b=(a(87),a(8));function E(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,o=e.setUnit,E=e.account,p=e.setAccount,f=e.customer,g=e.setCustomer,v=Object(s.useState)([]),O=Object(c.a)(v,2),h=O[0],x=O[1],N=Object(s.useState)([]),T=Object(c.a)(N,2),C=T[0],j=T[1],y=Object(s.useState)([]),S=Object(c.a)(y,2),w=S[0],k=S[1],M=Object(s.useState)(0),A=Object(c.a)(M,2),_=A[0],D=A[1],B=Object(s.useState)(""),F=Object(c.a)(B,2),I=F[0],Y=F[1],P=function(e){Y(e.target.value)},R=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:I,role:1},e.prev=2,e.next=5,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),x(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:I,role:1},e.prev=1,e.next=4,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),x(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var H=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),p({_id:"",accountName:""}),o({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),j(a.data),D(1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),p({_id:t._id,accountName:t.name}),o({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),k(a.data),D(2),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),o({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==_?u.a.createElement(u.a.Fragment,null,"Customer"):1==_?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,null,u.a.createElement(d.d,{selectedIndex:_,onSelect:function(e){return D(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account"),u.a.createElement(d.a,null,"Unit")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:R},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:P}))))),u.a.createElement(i.TableBody,null,h.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return H(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,C.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return U(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,w.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null)))),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",E.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName)),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){return a(!1)}},"Select"))))}}}]);
//# sourceMappingURL=26.2eb2d76a.chunk.js.map