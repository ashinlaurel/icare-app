(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[23],{1081:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t(9),c=t(3),r=t.n(c),o=t(10),u=t(2),s=t(0),m=t.n(s),i=t(7),d=t.n(i),f=t(8),E=t(15),b=(t(86),t(88),t(1)),p=(t(19),t(93),t(92),t(29)),N=(t(97),t(98),t(4));a.default=function(){var e=Object(N.i)().id,a=(Object(N.g)(),Object(s.useState)(0)),t=Object(u.a)(a,2),c=(t[0],t[1],Object(s.useState)("Male")),i=Object(u.a)(c,2),v=(i[0],i[1],Object(s.useState)("")),O=Object(u.a)(v,2),h=(O[0],O[1],Object(s.useState)("All")),g=Object(u.a)(h,2),w=(g[0],g[1],Object(s.useState)(!1)),x=Object(u.a)(w,2),j=x[0],C=x[1],T=Object(s.useState)(!1),y=Object(u.a)(T,2),S=(y[0],y[1],Object(s.useState)(!1)),k=Object(u.a)(S,2),M=k[0],I=k[1],B=Object(s.useContext)(p.a).setTopHeading,A=Object(s.useState)({name:"",aadharNo:"",PANNo:"",GSTNo:"",address:"",district:"",state:"",PIN:""}),F=Object(u.a)(A,2),P=F[0],L=F[1];Object(s.useEffect)((function(){return B("Update Vendor"),function(){B("")}}),[]),Object(s.useEffect)((function(){H()}),[]);var H=function(){var a=Object(o.a)(r.a.mark((function a(){var t,n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={id:e},a.prev=1,a.next=4,d()({url:"".concat(f.a,"/vendor/").concat(E.a.getId(),"/getById"),method:"POST",data:t});case 4:n=a.sent,L(n.data),console.log("Done",n.data),a.next=12;break;case 9:throw a.prev=9,a.t0=a.catch(1),a.t0;case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(){return a.apply(this,arguments)}}(),R=function(e){return function(a){L(Object(l.a)(Object(l.a)({},P),{},Object(n.a)({},e,a.target.value)))}},_=function(){var a=Object(o.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==P.name){a.next=4;break}return I(!0),console.log("missing inputs"),a.abrupt("return");case 4:return t={id:e,update:P},a.next=7,d()({url:"".concat(f.a,"/vendor/").concat(E.a.getId(),"/update"),method:"POST",data:t}).then((function(e){console.log("Added",e._id),C(!0)})).catch((function(e){console.log("err",e)}));case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(b.Label,{className:"font-bold"},m.a.createElement("span",null,"Add Vendor")),m.a.createElement("hr",{className:"mb-5 mt-2"}),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(b.Label,{className:"w-full"},m.a.createElement("span",null,"Name*"),m.a.createElement(b.Input,{className:"mt-1",value:P.name,onChange:R("name")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(b.Label,{className:"w-full"},m.a.createElement("span",null,"GST Number"),m.a.createElement(b.Input,{className:"mt-1",value:P.GSTNo,onChange:R("GSTNo")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(b.Label,{className:"w-full"},m.a.createElement("span",null,"PAN Number"),m.a.createElement(b.Input,{className:"mt-1",value:P.PANNo,onChange:R("PANNo")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(b.Label,{className:"w-full"},m.a.createElement("span",null,"Aadhar Number"),m.a.createElement(b.Input,{className:"mt-1",value:P.aadharNo,onChange:R("aadharNo")}))," ")),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(b.Label,{className:"w-full"},m.a.createElement("span",null,"Address"),m.a.createElement(b.Input,{className:"mt-1",value:P.address,onChange:R("address")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(b.Label,{className:"w-full"},m.a.createElement("span",null,"District"),m.a.createElement(b.Input,{className:"mt-1",value:P.district,onChange:R("district")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(b.Label,{className:"w-full"},m.a.createElement("span",null,"State"),m.a.createElement(b.Input,{className:"mt-1",type:"text",value:P.state,onChange:R("state")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(b.Label,{className:"w-full"},m.a.createElement("span",null,"PIN"),m.a.createElement(b.Input,{className:"mt-1",value:P.PIN,onChange:R("PIN")}))," ")),m.a.createElement(b.Button,{onClick:_,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Update Vendor")),m.a.createElement(m.a.Fragment,null,m.a.createElement(b.Modal,{isOpen:j,onClose:function(){return C(!1)}},m.a.createElement(b.ModalHeader,null,"Vendor Updated Successfully!"),m.a.createElement(b.ModalBody,null),m.a.createElement(b.ModalFooter,null,m.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return C(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(b.Modal,{isOpen:M,onClose:function(){return I(!1)}},m.a.createElement(b.ModalHeader,null,"Required fields are not filled!"),m.a.createElement(b.ModalBody,null),m.a.createElement(b.ModalFooter,null,m.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return I(!1)}},"Okay!")))))}},87:function(e,a,t){},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(2),l=t(0),c=t.n(l),r=t(1),o=t(7),u=t.n(o),s=t(8);function m(e){var a=e.isModalOpen,t=e.setIsModalOpen,o=e.setCustomer,m=Object(l.useState)([]),i=Object(n.a)(m,2),d=i[0],f=i[1];Object(l.useEffect)((function(){E()}),[]);var E=function(){u.a.post("".concat(s.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),f(a)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:a,onClose:function(){return t(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,d.map((function(e,a){return c.a.createElement(r.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){o({_id:e._id,customerName:e.name}),t(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return t(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},97:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(7),l=t.n(n),c=t(8),r=t(15),o=function(e){return l.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}},98:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t(3),l=t.n(n),c=t(10),r=t(2),o=t(0),u=t.n(o),s=t(1),m=t(7),i=t.n(m),d=t(92),f=(t(87),t(8));function E(e){var a=e.isModalOpen,t=e.setIsModalOpen,n=e.account,m=e.setAccount,E=e.customer,b=e.setCustomer,p=Object(o.useState)([]),N=Object(r.a)(p,2),v=N[0],O=N[1],h=Object(o.useState)([]),g=Object(r.a)(h,2),w=g[0],x=g[1],j=Object(o.useState)([]),C=Object(r.a)(j,2),T=(C[0],C[1],Object(o.useState)(0)),y=Object(r.a)(T,2),S=y[0],k=y[1];Object(o.useEffect)((function(){i.a.post("".concat(f.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),O(a)})).catch((function(e){console.log("axiosErr",e)}))}),[]);var M=function(){var e=Object(c.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({_id:a._id,customerName:a.name}),e.prev=1,e.next=4,i.a.post("".concat(f.a,"/customer/accounts"),{customerId:a._id});case 4:t=e.sent,console.log(t.data),x(t.data),k(1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("axiosErr",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),m({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.Modal,{isOpen:a,onClose:function(){return t(!1)}},u.a.createElement(s.ModalHeader,null,"Select ",0==S?u.a.createElement(u.a.Fragment,null,"Customer"):u.a.createElement(u.a.Fragment,null,"Account")),u.a.createElement(s.ModalBody,null,u.a.createElement(d.d,{selectedIndex:S,onSelect:function(e){return k(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account")),u.a.createElement(d.c,null,u.a.createElement(s.TableContainer,null,u.a.createElement(s.Table,null,u.a.createElement(s.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(s.TableCell,null,"Customer"))),u.a.createElement(s.TableBody,null,v.map((function(e,a){return u.a.createElement(s.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return M(e)}},u.a.createElement(s.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(s.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(s.TableContainer,null,u.a.createElement(s.Table,null,u.a.createElement(s.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(s.TableCell,null,"Account"))),u.a.createElement(s.TableBody,null,w.map((function(e,a){return u.a.createElement(s.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return I(e)}},u.a.createElement(s.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(s.TableFooter,null)))),u.a.createElement(s.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),u.a.createElement(s.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",n.accountName)),u.a.createElement(s.ModalFooter,null,u.a.createElement(s.Button,{className:"w-full sm:w-auto",onClick:function(){return t(!1)}},"Select"))))}}}]);
//# sourceMappingURL=23.29d5f906.chunk.js.map