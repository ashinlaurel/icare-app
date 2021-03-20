(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[24],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var l=t(3),n=t.n(l),c=t(10),r=t(2),s=t(0),m=t.n(s),o=t(1),u=t(7),i=t.n(u),d=t(92),f=(t(86),t(8));function E(e){var a=e.isModalOpen,t=e.setIsModalOpen,l=e.account,u=e.setAccount,E=e.customer,b=e.setCustomer,N=Object(s.useState)([]),p=Object(r.a)(N,2),v=p[0],h=p[1],x=Object(s.useState)([]),w=Object(r.a)(x,2),C=w[0],g=w[1],O=Object(s.useState)([]),j=Object(r.a)(O,2),k=(j[0],j[1],Object(s.useState)(0)),I=Object(r.a)(k,2),T=I[0],S=I[1];Object(s.useEffect)((function(){i.a.post("".concat(f.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),h(a)})).catch((function(e){console.log("axiosErr",e)}))}),[]);var y=function(){var e=Object(c.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({_id:a._id,customerName:a.name}),e.prev=1,e.next=4,i.a.post("".concat(f.a,"/customer/accounts"),{customerId:a._id});case 4:t=e.sent,console.log(t.data),g(t.data),S(1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("axiosErr",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),u({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(o.Modal,{isOpen:a,onClose:function(){return t(!1)}},m.a.createElement(o.ModalHeader,null,"Select ",0==T?m.a.createElement(m.a.Fragment,null,"Customer"):m.a.createElement(m.a.Fragment,null,"Account")),m.a.createElement(o.ModalBody,null,m.a.createElement(d.d,{selectedIndex:T,onSelect:function(e){return S(e)}},m.a.createElement(d.b,null,m.a.createElement(d.a,null,"Customer"),m.a.createElement(d.a,null,"Account")),m.a.createElement(d.c,null,m.a.createElement(o.TableContainer,null,m.a.createElement(o.Table,null,m.a.createElement(o.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(o.TableCell,null,"Customer"))),m.a.createElement(o.TableBody,null,v.map((function(e,a){return m.a.createElement(o.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return y(e)}},m.a.createElement(o.TableCell,null,m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},e.name)))))})))),m.a.createElement(o.TableFooter,null))),m.a.createElement(d.c,null,m.a.createElement(o.TableContainer,null,m.a.createElement(o.Table,null,m.a.createElement(o.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(o.TableCell,null,"Account"))),m.a.createElement(o.TableBody,null,C.map((function(e,a){return m.a.createElement(o.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return A(e)}},m.a.createElement(o.TableCell,null,m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},e.name)))))})))),m.a.createElement(o.TableFooter,null)))),m.a.createElement(o.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),m.a.createElement(o.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",l.accountName)),m.a.createElement(o.ModalFooter,null,m.a.createElement(o.Button,{className:"w-full sm:w-auto",onClick:function(){return t(!1)}},"Select"))))}},1085:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t.n(l),c=t(10),r=t(16),s=t(9),m=t(2),o=t(0),u=t.n(o),i=t(7),d=t.n(i),f=t(8),E=t(15),b=(t(85),t(88),t(1)),N=(t(19),t(95),t(92),t(29)),p=(t(99),t(100),t(4));a.default=function(){Object(p.g)();var e=Object(o.useState)(0),a=Object(m.a)(e,2),t=(a[0],a[1],Object(o.useState)("Male")),l=Object(m.a)(t,2),i=(l[0],l[1],Object(o.useState)("")),v=Object(m.a)(i,2),h=(v[0],v[1],Object(o.useState)("All")),x=Object(m.a)(h,2),w=(x[0],x[1],Object(o.useState)(!1)),C=Object(m.a)(w,2),g=C[0],O=C[1],j=Object(o.useState)(!1),k=Object(m.a)(j,2),I=(k[0],k[1],Object(o.useState)(!1)),T=Object(m.a)(I,2),S=T[0],y=T[1],A=Object(o.useContext)(N.a).setTopHeading,M=Object(o.useState)({name:"",aadharNo:"",PANNo:"",GSTNo:"",address:"",district:"Trivandrum",state:"Kerala",PIN:"",phno1:"",phno2:"",contactPerson:"",bankName:"",bankAcNo:"",bankAcName:"",branch:"",IFSCCode:"",creditDays:"",email:""}),F=Object(m.a)(M,2),L=F[0],P=F[1];Object(o.useEffect)((function(){return A("Add Vendor"),function(){A("")}}),[]);var B=function(e){return function(a){P(Object(s.a)(Object(s.a)({},L),{},Object(r.a)({},e,a.target.value)))}},H=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==L.name){e.next=4;break}return y(!0),console.log("missing inputs"),e.abrupt("return");case 4:return e.next=6,d()({url:"".concat(f.a,"/vendor/").concat(E.a.getId(),"/create"),method:"POST",data:L}).then((function(e){console.log("Added",e._id),O(!0),P({name:"",aadharNo:"",PANNo:"",GSTNo:"",address:"",district:"",state:"",PIN:"",phno1:"",phno2:"",contactPerson:"",bankName:"",bankAcNo:"",bankAcName:"",branch:"",IFSCCode:"",creditDays:"",email:""})})).catch((function(e){console.log("err",e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},u.a.createElement(b.Label,{className:"font-bold"},u.a.createElement("span",null,"Add Vendor")),u.a.createElement("hr",{className:"mb-5 mt-2"}),u.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Name*"),u.a.createElement(b.Input,{className:"mt-1",value:L.name,onChange:B("name")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Contact Person"),u.a.createElement(b.Input,{className:"mt-1",value:L.contactPerson,onChange:B("contactPerson")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Email"),u.a.createElement(b.Input,{className:"mt-1",value:L.email,onChange:B("email")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"GST Number"),u.a.createElement(b.Input,{className:"mt-1",value:L.GSTNo,onChange:B("GSTNo")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"PAN Number"),u.a.createElement(b.Input,{className:"mt-1",value:L.PANNo,onChange:B("PANNo")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Aadhar Number"),u.a.createElement(b.Input,{className:"mt-1",value:L.aadharNo,onChange:B("aadharNo")}))," ")),u.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},u.a.createElement("div",{className:"flex flex-col w-full "},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Address"),u.a.createElement(b.Input,{className:"mt-1",value:L.address,onChange:B("address")}))," "),u.a.createElement("div",{className:"flex flex-col w-full "},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"PIN Code"),u.a.createElement(b.Input,{className:"mt-1",value:L.PIN,onChange:B("PIN")}))," ")),u.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"District"),u.a.createElement(b.Input,{className:"mt-1",value:L.district,onChange:B("district")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"State"),u.a.createElement(b.Input,{className:"mt-1",type:"text",value:L.state,onChange:B("state")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Phone Number 1"),u.a.createElement(b.Input,{className:"mt-1",value:L.phno1,onChange:B("phno1")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Phone Number 2"),u.a.createElement(b.Input,{className:"mt-1",value:L.phno2,onChange:B("phno2")})))),u.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Bank Name"),u.a.createElement(b.Input,{className:"mt-1",value:L.bankName,onChange:B("bankName")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Acc Name"),u.a.createElement(b.Input,{className:"mt-1",type:"text",value:L.bankAcName,onChange:B("bankAcName")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Acc No."),u.a.createElement(b.Input,{className:"mt-1",value:L.bankAcNo,onChange:B("bankAcNo")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Branch"),u.a.createElement(b.Input,{className:"mt-1",value:L.branch,onChange:B("branch")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"IFSC Code"),u.a.createElement(b.Input,{className:"mt-1",value:L.IFSCCode,onChange:B("IFSCCode")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(b.Label,{className:"w-full"},u.a.createElement("span",null,"Credit Days"),u.a.createElement(b.Input,{className:"mt-1",value:L.creditDays,onChange:B("creditDays")})))),u.a.createElement(b.Button,{onClick:H,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Add Vendor")),u.a.createElement(u.a.Fragment,null,u.a.createElement(b.Modal,{isOpen:g,onClose:function(){return O(!1)}},u.a.createElement(b.ModalHeader,null,"Vendor Created Successfully!"),u.a.createElement(b.ModalBody,null),u.a.createElement(b.ModalFooter,null,u.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return O(!1)}},"Okay!")))),u.a.createElement(u.a.Fragment,null,u.a.createElement(b.Modal,{isOpen:S,onClose:function(){return y(!1)}},u.a.createElement(b.ModalHeader,null,"Required fields are not filled!"),u.a.createElement(b.ModalBody,null),u.a.createElement(b.ModalFooter,null,u.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return y(!1)}},"Okay!")))))}},86:function(e,a,t){},95:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var l=t(2),n=t(0),c=t.n(n),r=t(1),s=t(7),m=t.n(s),o=t(8);function u(e){var a=e.isModalOpen,t=e.setIsModalOpen,s=e.setCustomer,u=Object(n.useState)([]),i=Object(l.a)(u,2),d=i[0],f=i[1];Object(n.useEffect)((function(){E()}),[]);var E=function(){m.a.post("".concat(o.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),f(a)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:a,onClose:function(){return t(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,d.map((function(e,a){return c.a.createElement(r.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){s({_id:e._id,customerName:e.name}),t(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return t(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},99:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var l=t(7),n=t.n(l),c=t(8),r=t(15),s=function(e){return n.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}}}]);
//# sourceMappingURL=24.79a3dcb9.chunk.js.map