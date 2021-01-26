(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[24],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),l=a.n(n),r=a(10),c=a(2),o=a(0),u=a.n(o),s=a(7),m=a.n(s),i=a(1),d=a(92),p=(a(87),a(8));function b(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,s=e.setUnit,b=e.account,E=e.setAccount,f=e.customer,g=e.setCustomer,v=Object(o.useState)([]),h=Object(c.a)(v,2),x=h[0],O=h[1],w=Object(o.useState)([]),y=Object(c.a)(w,2),N=y[0],j=y[1],C=Object(o.useState)([]),T=Object(c.a)(C,2),k=T[0],S=T[1],_=Object(o.useState)(0),M=Object(c.a)(_,2),B=M[0],A=M[1],F=Object(o.useState)(""),I=Object(c.a)(F,2),P=I[0],R=I[1],H=function(e){R(e.target.value)},U=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:P,role:1},e.prev=2,e.next=5,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),O(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:P,role:1},e.prev=1,e.next=4,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var z=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),E({_id:"",accountName:""}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(p.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),j(a.data),A(1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),E({_id:t._id,accountName:t.name}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(p.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),S(a.data),A(2),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),s({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==B?u.a.createElement(u.a.Fragment,null,"Customer"):1==B?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,null,u.a.createElement(d.d,{selectedIndex:B,onSelect:function(e){return A(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account"),u.a.createElement(d.a,null,"Unit")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:U},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:H}))))),u.a.createElement(i.TableBody,null,x.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return z(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,N.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return D(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,k.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null)))),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName)),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){return a(!1)}},"Select"))))}},1067:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a.n(n),r=a(10),c=a(2),o=a(0),u=a.n(o),s=a(18),m=a.n(s),i=a(7),d=a.n(i),p=a(15),b=(a(86),a(28)),E=a(1),f=(a(121),a(8)),g=(a(104),a(94),a(158)),v=a(30),h=a(29);a(19);t.default=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],s=Object(o.useContext)(v.a),i=(s.bbaropen,s.setBBarOpen),x=s.setAssetDetails,O=(s.assetdetails,Object(o.useState)(0)),w=Object(c.a)(O,2),y=w[0],N=w[1],j=Object(o.useContext)(h.a),C=(j.topheading,j.setTopHeading),T=Object(o.useState)(!1),k=Object(c.a)(T,2),S=(k[0],k[1],Object(o.useState)(1)),_=Object(c.a)(S,2),M=_[0],B=_[1],A=Object(o.useState)([]),F=Object(c.a)(A,2),I=F[0],P=F[1],R=Object(o.useState)(!1),H=Object(c.a)(R,2),U=(H[0],H[1],Object(o.useState)(!1)),z=Object(c.a)(U,2),D=(z[0],z[1],Object(o.useState)(!1)),L=Object(c.a)(D,2),K=(L[0],L[1],Object(o.useState)(!0)),Y=Object(c.a)(K,2),G=Y[0],J=Y[1],q=Object(o.useState)(!0),$=Object(c.a)(q,2),Q=($[0],$[1],Object(o.useState)("")),V=Object(c.a)(Q,2),W=V[0],X=V[1],Z=Object(o.useState)(""),ee=Object(c.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(o.useState)(""),le=Object(c.a)(ne,2),re=le[0],ce=le[1],oe=Object(o.useState)(""),ue=Object(c.a)(oe,2),se=ue[0],me=(ue[1],Object(o.useState)("")),ie=Object(c.a)(me,2),de=ie[0],pe=(ie[1],Object(o.useState)({_id:"",unitName:""})),be=Object(c.a)(pe,2),Ee=be[0],fe=(be[1],Object(o.useState)({_id:"",customerName:""})),ge=Object(c.a)(fe,2),ve=ge[0],he=(ge[1],Object(o.useState)({_id:"",accountName:""})),xe=Object(c.a)(he,2),Oe=xe[0],we=(xe[1],Object(o.useState)({_id:"",enggName:""})),ye=Object(c.a)(we,2),Ne=ye[0],je=ye[1],Ce=Object(o.useState)(!1),Te=Object(c.a)(Ce,2),ke=Te[0],Se=Te[1],_e=Object(o.useState)({}),Me=Object(c.a)(_e,2),Be=Me[0],Ae=Me[1],Fe=Object(o.useState)(""),Ie=Object(c.a)(Fe,2),Pe=Ie[0],Re=(Ie[1],Object(o.useState)("")),He=Object(c.a)(Re,2),Ue=(He[0],He[1],Object(o.useState)("")),ze=Object(c.a)(Ue,2),De=ze[0],Le=ze[1],Ke=Object(o.useState)(20),Ye=Object(c.a)(Ke,2),Ge=Ye[0],Je=Ye[1],qe=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(E.Modal,{isOpen:a,onClose:function(){return n(!1)}},u.a.createElement(E.ModalHeader,null,"Confirm Assignment"),u.a.createElement(E.ModalBody,null,u.a.createElement("div",{className:"font-xl"},"Assign ",Ne.enggName," to call ",Be.callNo)),u.a.createElement(E.ModalFooter,null,u.a.createElement(E.Button,{className:"w-full sm:w-auto",onClick:Object(r.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(Be),t={id:Be._id,update:{employeeId:Ne._id,employeeName:Ne.enggName,callStatus:2}},a={id:Ne._id,update:{$push:{assignedCalls:{priority:99,callId:Be._id,date:new Date}}}},e.prev=3,e.next=6,d()({url:"".concat(f.a,"/call/").concat(p.a.getId(),"/assignEngg"),method:"POST",data:t});case 6:return e.sent,r=I,console.log(r),r=r.filter((function(e){if(e._id===Be._id)return e.callStatus=2,e.employeeName=Ne.enggName,e.employeeId=Ne._id,e;P(r)})),e.next=12,d()({url:"".concat(f.a,"/admin/").concat(p.a.getId(),"/update"),method:"POST",data:a});case 12:n(!1),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))},"Confirm Assignment"))))};return Object(o.useEffect)((function(){return function(){i(0),x({})}}),[]),Object(o.useEffect)((function(){return C("Assign Engineer"),function(){C("")}}),[]),Object(o.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pages:{page:M,limit:10},filters:{business:se,producttype:de,customer:ve,account:Oe,unitId:Ee._id,customerId:ve._id,accountId:Oe._id,searchtype:Pe,searchquery:De}},e.prev=1,e.next=4,d()({url:"".concat(f.a,"/call/").concat(p.a.getId(),"/getall"),method:"POST",data:t});case 4:a=e.sent,Je(a.data.total),P(a.data.out),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[M,se,de,G]),u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{isModalOpen:ke,setIsModalOpen:Se,setEngineer:je,nextModal:n}),u.a.createElement(qe,null),u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:W,onChange:function(e){X(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Call Status"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Mouse"},"Pending For Allocation"),u.a.createElement("option",{value:"Keyboard"},"Allocated")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:te,onChange:function(e){ae(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:re,onChange:function(e){ce(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Condition"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Good"},"Good"),u.a.createElement("option",{value:"Bad"},"Bad")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),J(!G)}},u.a.createElement("input",{value:De,onChange:function(e){return Le(e.target.value)},placeholder:"Search",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(E.TableContainer,{className:"mt-4"},u.a.createElement(E.Table,null,u.a.createElement(E.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(E.TableCell,null,"Call No"),u.a.createElement(E.TableCell,null,"Date"),u.a.createElement(E.TableCell,null,"Unit Name"),u.a.createElement(E.TableCell,null,"Phone"),u.a.createElement(E.TableCell,null,"Call Status"),u.a.createElement(E.TableCell,null,"Assigned Employee"))),u.a.createElement(E.TableBody,null,I.map((function(e,t){return u.a.createElement(E.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(y==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){N(e._id),i(1),Ae(e),e.assetId?x(e.assetId):x({}),console.log(e.assetId)}},u.a.createElement(E.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.callNo)))),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},m()(e.date).format("DD/MM/YYYY"))),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.unitName)),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.phone)),u.a.createElement(E.TableCell,null,0==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Not Allocated"):null,1==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Percall Approval"):null,2==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Response"):null,3==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for OEM Response"):null,4==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for 2nd Response"):null,5==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Customer"):null,6==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Under Observation"):null,7==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Others"):null,8==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Pending for Spare"):null,9==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Spare in Transit"):null,10==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Cancelled Calls"):null,11==e.callStatus?u.a.createElement("span",{className:"text-sm"},"Closed Calls"):null),u.a.createElement(E.TableCell,null,e.employeeId?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"px-4 py-2 dark:border-purple-400 border-purple-600 dark:bg-gray-700 bg-purple-100 inline-block rounded-lg dark:text-purple-400 text-purple-700"},e.employeeName,u.a.createElement(E.Button,{layout:"link",size:"icon","aria-label":"Edit",onClick:function(){return Se(!0)},className:"rounded-full mx-2 "},u.a.createElement(b.EditIcon,{className:"w-5 h-5","aria-hidden":"true"})))):u.a.createElement(E.Button,{onClick:function(){return Se(!0)}},"Assign Now")))})))),u.a.createElement(E.TableFooter,null,u.a.createElement(E.Pagination,{totalResults:Ge,resultsPerPage:10,label:"Table navigation",onChange:function(e){B(e)}})))))}},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),l=a(0),r=a.n(l),c=a(1),o=a(7),u=a.n(o),s=a(8),m=a(15);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setEngineer,i=e.nextModal,d=Object(l.useState)([]),p=Object(n.a)(d,2),b=p[0],E=p[1];Object(l.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(s.a,"/admin/").concat(m.a.getId(),"/getAll")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),E(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Modal,{isOpen:t,onClose:function(){return a(!1)}},r.a.createElement(c.ModalHeader,null,"Assign Engineer"),r.a.createElement(c.ModalBody,null,r.a.createElement(c.TableContainer,null,r.a.createElement(c.Table,null,r.a.createElement(c.TableHeader,null,r.a.createElement("tr",null,r.a.createElement(c.TableCell,null,"Name"),r.a.createElement(c.TableCell,null,"Email"))),r.a.createElement(c.TableBody,null,b.map((function(e,t){return r.a.createElement(c.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){o({_id:e._id,enggName:e.employeeName}),a(!1),i(!0)}},r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.employeeName)))),r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.email)))))})))),r.a.createElement(c.TableFooter,null))),r.a.createElement(c.ModalFooter,null,r.a.createElement(c.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(c.Button,{className:"w-full sm:w-auto"},"Accept"))))}},87:function(e,t,a){},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),l=a.n(n),r=a(10),c=a(2),o=a(0),u=a.n(o),s=a(7),m=a.n(s),i=a(1),d=a(92),p=(a(87),a(8));function b(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,s=e.setUnit,b=e.account,E=e.setAccount,f=e.customer,g=e.setCustomer,v=e.refresh,h=e.setRefresh,x=Object(o.useState)([]),O=Object(c.a)(x,2),w=O[0],y=O[1],N=Object(o.useState)([]),j=Object(c.a)(N,2),C=j[0],T=j[1],k=Object(o.useState)([]),S=Object(c.a)(k,2),_=S[0],M=S[1],B=Object(o.useState)(0),A=Object(c.a)(B,2),F=A[0],I=A[1],P=Object(o.useState)(""),R=Object(c.a)(P,2),H=R[0],U=R[1],z=function(e){U(e.target.value)},D=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:H,role:1},e.prev=2,e.next=5,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),y(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:H,role:1},e.prev=1,e.next=4,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),y(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var L=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),E({_id:"",accountName:""}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(p.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),T(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),E({_id:t._id,accountName:t.name}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(p.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),M(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),s({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==F?u.a.createElement(u.a.Fragment,null,"Customer"):1==F?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,null,u.a.createElement(d.d,{selectedIndex:F,onSelect:function(e){return I(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account"),u.a.createElement(d.a,null,"Unit")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:D},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:z}))))),u.a.createElement(i.TableBody,null,w.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,C.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return K(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,_.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null)))),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName)),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!v)}},"Select"))))}}}]);
//# sourceMappingURL=24.ec7d0fbe.chunk.js.map