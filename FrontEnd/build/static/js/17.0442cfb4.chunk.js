(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[17],{1199:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a.n(l),c=a(16),r=a(12),o=a(3),u=a(0),s=a.n(u),m=a(21),i=a.n(m),E=a(9),d=a.n(E),b=a(18),p=(a(191),a(36),a(2)),f=(a(215),a(10)),g=(a(200),a(199),a(219),a(44)),v=a(43),O=(a(24),a(232),a(271));t.default=function(){var e=Object(u.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1],Object(u.useContext)(g.a)),l=(a.bbaropen,a.setBBarOpen),m=a.setAssetDetails,E=(a.assetdetails,Object(u.useState)(0)),T=Object(o.a)(E,2),C=T[0],N=(T[1],Object(u.useContext)(v.a)),h=(N.topheading,N.setTopHeading),j=Object(u.useState)(!1),x=Object(o.a)(j,2),y=(x[0],x[1],Object(u.useState)(1)),w=Object(o.a)(y,2),S=(w[0],w[1]),k=Object(u.useState)([]),M=Object(o.a)(k,2),B=M[0],F=M[1],_=Object(u.useState)(!1),R=Object(o.a)(_,2),A=(R[0],R[1],Object(u.useState)(!1)),P=Object(o.a)(A,2),H=(P[0],P[1],Object(u.useState)(!1)),I=Object(o.a)(H,2),U=(I[0],I[1],Object(u.useState)(!0)),D=Object(o.a)(U,2),Y=(D[0],D[1],Object(u.useState)(!0)),J=Object(o.a)(Y,2),G=(J[0],J[1],Object(u.useState)({_id:"",enggName:"",assignedCalls:[]})),q=Object(o.a)(G,2),z=q[0],K=q[1],L=Object(u.useState)(!1),Q=Object(o.a)(L,2),V=Q[0],W=Q[1],X=Object(u.useState)({}),Z=Object(o.a)(X,2),$=(Z[0],Z[1],Object(u.useState)("")),ee=Object(o.a)($,2),te=(ee[0],ee[1],Object(u.useState)("")),ae=Object(o.a)(te,2),le=(ae[0],ae[1],Object(u.useState)("")),ne=Object(o.a)(le,2),ce=(ne[0],ne[1],Object(u.useState)("")),re=Object(o.a)(ce,2),oe=(re[0],re[1],Object(u.useState)("")),ue=Object(o.a)(oe,2),se=(ue[0],ue[1],Object(u.useState)(20)),me=Object(o.a)(se,2),ie=me[0];me[1],Object(u.useEffect)((function(){F(z.assignedCalls)}),[z]),Object(u.useEffect)((function(){return function(){l(0),m({})}}),[]),Object(u.useEffect)((function(){return h("Assign Call Priority"),function(){h("")}}),[]);var Ee=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("DATA",B),t={assignedCalls:Object(c.a)(B)},console.log(t),a={id:z._id,update:t},e.prev=4,e.next=7,d()({url:"".concat(f.a,"/admin/").concat(b.a.getId(),"/update"),method:"POST",data:a});case 7:console.log("Done"),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(4),e.t0;case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{isModalOpen:V,setIsModalOpen:W,setEmployee:K}),s.a.createElement(O.a,null),s.a.createElement("div",{className:"mb-64 mt-4"},s.a.createElement("div",{className:"flex flex-row items-center justify-start space-x-2"},s.a.createElement(p.Button,{layout:"outline",onClick:function(){return W(!0)}},"Select Engineer"),s.a.createElement(p.Button,{onClick:function(){return Ee(!0)}},"Submit")),s.a.createElement(p.TableContainer,{className:"mt-4"},s.a.createElement(p.Table,null,s.a.createElement(p.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(p.TableCell,null,"Call No"),s.a.createElement(p.TableCell,null,"Date"),s.a.createElement(p.TableCell,null,"Unit Name"),s.a.createElement(p.TableCell,null,"Phone"),s.a.createElement(p.TableCell,null,"Call Status"),s.a.createElement(p.TableCell,null,"Priority"))),s.a.createElement(p.TableBody,null,B.map((function(e,t){var a=e._id,l=e.callId,n=e.priority;return s.a.createElement(p.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(C==l._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},s.a.createElement(p.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},l.callNo)))),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},i()(l.date).format("DD/MM/YYYY"))),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},l.unitName)),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},l.phone)),s.a.createElement(p.TableCell,null,0==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending For Allocation"):null,1==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending for Percall Approval"):null,2==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending for Response"):null,3==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending for OEM Response"):null,4==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending for 2nd Response"):null,5==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending for Customer"):null,6==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Under Observation"):null,7==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending for Others"):null,8==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending for Spare"):null,9==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Spare in Transit"):null,10==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Cancelled Calls"):null,11==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Closed Calls"):null,12==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Spare Taken CMRR"):null,13==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Pending For Spare Collection"):null,14==l.callStatus?s.a.createElement("span",{className:"text-sm"},"Standby Given"):null),s.a.createElement(p.TableCell,null,s.a.createElement("input",{value:n,onChange:function(e){var t=B;t=t.filter((function(t){if(t._id!=a)return t;console.log("here",e.target.value);var l=t;return l.priority=e.target.value,l})),console.log(t),F(t)}})))})))),s.a.createElement(p.TableFooter,null,s.a.createElement(p.Pagination,{totalResults:ie,resultsPerPage:10,label:"Table navigation",onChange:function(e){S(e)}})))))}},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var l=a(5),n=a.n(l),c=a(12),r=a(3),o=a(0),u=a.n(o),s=a(9),m=a.n(s),i=a(2),E=a(192),d=(a(196),a(10));function b(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,s=e.setUnit,b=e.account,p=e.setAccount,f=e.customer,g=e.setCustomer,v=e.refresh,O=e.setRefresh,T=e.theunitdetails,C=e.setTheUnitDetails,N=Object(o.useState)([]),h=Object(r.a)(N,2),j=h[0],x=h[1],y=Object(o.useState)([]),w=Object(r.a)(y,2),S=w[0],k=w[1],M=Object(o.useState)([]),B=Object(r.a)(M,2),F=B[0],_=B[1],R=Object(o.useState)(0),A=Object(r.a)(R,2),P=A[0],H=A[1],I=Object(o.useState)(""),U=Object(r.a)(I,2),D=U[0],Y=U[1],J=function(e){Y(e.target.value)},G=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:D,role:1},e.prev=2,e.next=5,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),x(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:D,role:1},e.prev=1,e.next=4,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),x(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var q=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),p({_id:"",accountName:""}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(d.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),k(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),p({_id:t._id,accountName:t.name}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(d.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),_(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(t),s({_id:t._id,contactPerson:t.contactPerson,contactNo:t.contactNo,unitName:t.unitName});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==P?u.a.createElement(u.a.Fragment,null,"Customer"):1==P?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(E.d,{selectedIndex:P,onSelect:function(e){return H(e)}},u.a.createElement(E.b,null,u.a.createElement(E.a,null,"Customer"),u.a.createElement(E.a,null,"Account"),u.a.createElement(E.a,null,"Unit")),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:G},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:J}))))),u.a.createElement(i.TableBody,null,j.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return q(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,S.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return z(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,F.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return K(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName),u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),O(!v),T&&C(l),k([]),_([])}},"Select"))))}},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var l=a(5),n=a.n(l),c=a(12),r=a(3),o=a(0),u=a.n(o),s=a(9),m=a.n(s),i=a(2),E=a(192),d=(a(196),a(10));function b(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,s=e.setUnit,b=e.account,p=e.setAccount,f=e.customer,g=e.setCustomer,v=Object(o.useState)([]),O=Object(r.a)(v,2),T=O[0],C=O[1],N=Object(o.useState)([]),h=Object(r.a)(N,2),j=h[0],x=h[1],y=Object(o.useState)([]),w=Object(r.a)(y,2),S=w[0],k=w[1],M=Object(o.useState)(0),B=Object(r.a)(M,2),F=B[0],_=B[1],R=Object(o.useState)(""),A=Object(r.a)(R,2),P=A[0],H=A[1],I=function(e){H(e.target.value)},U=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:P,role:1},e.prev=2,e.next=5,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),C(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:P,role:1},e.prev=1,e.next=4,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),C(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var D=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),p({_id:"",accountName:""}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(d.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),x(a.data),_(1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),p({_id:t._id,accountName:t.name}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(d.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),k(a.data),_(2),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),s({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==F?u.a.createElement(u.a.Fragment,null,"Customer"):1==F?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(E.d,{selectedIndex:F,onSelect:function(e){return _(e)}},u.a.createElement(E.b,null,u.a.createElement(E.a,null,"Customer"),u.a.createElement(E.a,null,"Account"),u.a.createElement(E.a,null,"Unit")),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:U},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:I}))))),u.a.createElement(i.TableBody,null,T.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return D(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,j.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,{className:" w-full overflow-y-scroll"},u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,S.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return J(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName),u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){return a(!1)}},"Select"))))}},219:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(3),n=a(0),c=a.n(n),r=a(2),o=a(9),u=a.n(o),s=a(10),m=a(18);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setEngineer,i=e.nextModal,E=Object(n.useState)([]),d=Object(l.a)(E,2),b=d[0],p=d[1];Object(n.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(s.a,"/admin/").concat(m.a.getId(),"/getAll")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),p(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:t,onClose:function(){return a(!1)}},c.a.createElement(r.ModalHeader,null,"Assign Engineer"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Name"),c.a.createElement(r.TableCell,null,"Employee ID"))),c.a.createElement(r.TableBody,null,b.map((function(e,t){return c.a.createElement(r.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){o({_id:e._id,enggName:e.employeeName}),a(!1),i(!0)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.employeeName)))),c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.employeeID)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(3),n=a(0),c=a.n(n),r=a(2),o=a(9),u=a.n(o),s=a(10),m=a(18);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setEmployee,i=Object(n.useState)([]),E=Object(l.a)(i,2),d=E[0],b=E[1];Object(n.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(s.a,"/admin/").concat(m.a.getId(),"/getAllEmpData")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),b(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:t,onClose:function(){return a(!1)}},c.a.createElement(r.ModalHeader,null,"Select Employee"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Name"),c.a.createElement(r.TableCell,null,"Email"))),c.a.createElement(r.TableBody,null,d.map((function(e,t){return c.a.createElement(r.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){console.log(e),o(e),a(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.employeeName)))),c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.email)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},271:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(3),n=a(0),c=a.n(n),r=a(2),o=a(9),u=a.n(o),s=a(10),m=a(18);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setEmployee,i=Object(n.useState)([]),E=Object(l.a)(i,2),d=E[0],b=E[1];Object(n.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(s.a,"/admin/").concat(m.a.getId(),"/getAllEmpCalls")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),b(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:t,onClose:function(){return a(!1)}},c.a.createElement(r.ModalHeader,null,"Select Employee"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Name"),c.a.createElement(r.TableCell,null,"Email"))),c.a.createElement(r.TableBody,null,d.map((function(e,t){return c.a.createElement(r.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){console.log(e),o(e),a(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.employeeName)))),c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.email)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}}}]);
//# sourceMappingURL=17.0442cfb4.chunk.js.map