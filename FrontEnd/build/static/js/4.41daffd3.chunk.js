(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[4],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(4),l=a.n(n),r=a(11),c=a(2),o=a(0),u=a.n(o),m=a(7),s=a.n(m),i=a(1),E=a(105),d=(a(99),a(9));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,m=e.setUnit,p=e.account,b=e.setAccount,f=e.customer,v=e.setCustomer,g=e.refresh,T=e.setRefresh,h=e.theunitdetails,C=e.setTheUnitDetails,N=Object(o.useState)([]),y=Object(c.a)(N,2),w=y[0],O=y[1],k=Object(o.useState)([]),x=Object(c.a)(k,2),j=x[0],M=x[1],S=Object(o.useState)([]),B=Object(c.a)(S,2),F=B[0],_=B[1],R=Object(o.useState)(0),A=Object(c.a)(R,2),H=A[0],I=A[1],U=Object(o.useState)(""),D=Object(c.a)(U,2),P=D[0],J=D[1],q=function(e){J(e.target.value)},z=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:P,role:1},e.prev=2,e.next=5,s()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),O(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:P,role:1},e.prev=1,e.next=4,s()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var G=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),b({_id:"",accountName:""}),m({_id:"",unitName:""}),e.prev=3,e.next=6,s.a.post("".concat(d.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),M(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),b({_id:t._id,accountName:t.name}),m({_id:"",unitName:""}),e.prev=3,e.next=6,s.a.post("".concat(d.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),_(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(t),m({_id:t._id,contactPerson:t.contactPerson,contactNo:t.contactNo,unitName:t.unitName});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==H?u.a.createElement(u.a.Fragment,null,"Customer"):1==H?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(E.d,{selectedIndex:H,onSelect:function(e){return I(e)}},u.a.createElement(E.b,null,u.a.createElement(E.a,null,"Customer"),u.a.createElement(E.a,null,"Account"),u.a.createElement(E.a,null,"Unit")),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:z},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:q}))))),u.a.createElement(i.TableBody,null,w.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return G(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,j.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return K(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,F.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName),u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),T(!g),h&&C(n),M([]),_([])}},"Select"))))}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(4),l=a.n(n),r=a(11),c=a(2),o=a(0),u=a.n(o),m=a(7),s=a.n(m),i=a(1),E=a(105),d=(a(99),a(9));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,m=e.setUnit,p=e.account,b=e.setAccount,f=e.customer,v=e.setCustomer,g=Object(o.useState)([]),T=Object(c.a)(g,2),h=T[0],C=T[1],N=Object(o.useState)([]),y=Object(c.a)(N,2),w=y[0],O=y[1],k=Object(o.useState)([]),x=Object(c.a)(k,2),j=x[0],M=x[1],S=Object(o.useState)(0),B=Object(c.a)(S,2),F=B[0],_=B[1],R=Object(o.useState)(""),A=Object(c.a)(R,2),H=A[0],I=A[1],U=function(e){I(e.target.value)},D=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:H,role:1},e.prev=2,e.next=5,s()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),C(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:H,role:1},e.prev=1,e.next=4,s()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),C(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var P=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),b({_id:"",accountName:""}),m({_id:"",unitName:""}),e.prev=3,e.next=6,s.a.post("".concat(d.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),O(a.data),_(1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),b({_id:t._id,accountName:t.name}),m({_id:"",unitName:""}),e.prev=3,e.next=6,s.a.post("".concat(d.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),M(a.data),_(2),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),m({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==F?u.a.createElement(u.a.Fragment,null,"Customer"):1==F?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(E.d,{selectedIndex:F,onSelect:function(e){return _(e)}},u.a.createElement(E.b,null,u.a.createElement(E.a,null,"Customer"),u.a.createElement(E.a,null,"Account"),u.a.createElement(E.a,null,"Unit")),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:D},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:U}))))),u.a.createElement(i.TableBody,null,h.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return P(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,w.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return J(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(E.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,{className:" w-full overflow-y-scroll"},u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,j.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return q(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName),u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){return a(!1)}},"Select"))))}},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),l=a(0),r=a.n(l),c=a(1),o=a(7),u=a.n(o),m=a(9),s=a(17);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setEngineer,i=e.nextModal,E=Object(l.useState)([]),d=Object(n.a)(E,2),p=d[0],b=d[1];Object(l.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(m.a,"/admin/").concat(s.a.getId(),"/getAll")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),b(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Modal,{isOpen:t,onClose:function(){return a(!1)}},r.a.createElement(c.ModalHeader,null,"Assign Engineer"),r.a.createElement(c.ModalBody,null,r.a.createElement(c.TableContainer,null,r.a.createElement(c.Table,null,r.a.createElement(c.TableHeader,null,r.a.createElement("tr",null,r.a.createElement(c.TableCell,null,"Name"),r.a.createElement(c.TableCell,null,"Employee ID"))),r.a.createElement(c.TableBody,null,p.map((function(e,t){return r.a.createElement(c.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){o({_id:e._id,enggName:e.employeeName}),a(!1),i(!0)}},r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.employeeName)))),r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.employeeID)))))})))),r.a.createElement(c.TableFooter,null))),r.a.createElement(c.ModalFooter,null,r.a.createElement(c.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(c.Button,{className:"w-full sm:w-auto"},"Accept"))))}},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),l=a(0),r=a.n(l),c=a(1),o=a(7),u=a.n(o),m=a(9),s=a(17);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setEmployee,i=Object(l.useState)([]),E=Object(n.a)(i,2),d=E[0],p=E[1];Object(l.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(m.a,"/admin/").concat(s.a.getId(),"/getAllEmpData")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),p(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Modal,{isOpen:t,onClose:function(){return a(!1)}},r.a.createElement(c.ModalHeader,null,"Select Employee"),r.a.createElement(c.ModalBody,null,r.a.createElement(c.TableContainer,null,r.a.createElement(c.Table,null,r.a.createElement(c.TableHeader,null,r.a.createElement("tr",null,r.a.createElement(c.TableCell,null,"Name"),r.a.createElement(c.TableCell,null,"Email"))),r.a.createElement(c.TableBody,null,d.map((function(e,t){return r.a.createElement(c.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){console.log(e),o(e),a(!1)}},r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.employeeName)))),r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.email)))))})))),r.a.createElement(c.TableFooter,null))),r.a.createElement(c.ModalFooter,null,r.a.createElement(c.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(c.Button,{className:"w-full sm:w-auto"},"Accept"))))}},275:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),l=a(0),r=a.n(l),c=a(1),o=a(7),u=a.n(o),m=a(9),s=a(17);function i(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setEmployee,i=Object(l.useState)([]),E=Object(n.a)(i,2),d=E[0],p=E[1];Object(l.useEffect)((function(){console.log("HERERRE"),u.a.post("".concat(m.a,"/admin/").concat(s.a.getId(),"/getAllEmpCalls")).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),p(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Modal,{isOpen:t,onClose:function(){return a(!1)}},r.a.createElement(c.ModalHeader,null,"Select Employee"),r.a.createElement(c.ModalBody,null,r.a.createElement(c.TableContainer,null,r.a.createElement(c.Table,null,r.a.createElement(c.TableHeader,null,r.a.createElement("tr",null,r.a.createElement(c.TableCell,null,"Name"),r.a.createElement(c.TableCell,null,"Email"))),r.a.createElement(c.TableBody,null,d.map((function(e,t){return r.a.createElement(c.TableRow,{key:t,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){console.log(e),o(e),a(!1)}},r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.employeeName)))),r.a.createElement(c.TableCell,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.email)))))})))),r.a.createElement(c.TableFooter,null))),r.a.createElement(c.ModalFooter,null,r.a.createElement(c.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),r.a.createElement(c.Button,{className:"w-full sm:w-auto"},"Accept"))))}},99:function(e,t,a){}}]);
//# sourceMappingURL=4.41daffd3.chunk.js.map