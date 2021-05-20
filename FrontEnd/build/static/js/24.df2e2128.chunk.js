(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[24],{1164:function(e,a,t){"use strict";t.r(a);var l=t(20),n=t(12),c=t(4),r=t.n(c),s=t(13),u=t(2),o=t(0),m=t.n(o),i=t(8),d=t.n(i),f=t(10),E=t(19),p=(t(162),t(165),t(3)),b=(t(24),t(171),t(169),t(36)),N=(t(175),t(176),t(5));a.default=function(){var e=Object(N.i)().id,a=(Object(N.g)(),Object(o.useState)(0)),t=Object(u.a)(a,2),c=(t[0],t[1],Object(o.useState)("Male")),i=Object(u.a)(c,2),v=(i[0],i[1],Object(o.useState)("")),h=Object(u.a)(v,2),x=(h[0],h[1],Object(o.useState)("All")),w=Object(u.a)(x,2),g=(w[0],w[1],Object(o.useState)(!1)),C=Object(u.a)(g,2),O=C[0],j=C[1],I=Object(o.useState)(!1),T=Object(u.a)(I,2),k=(T[0],T[1],Object(o.useState)(!1)),y=Object(u.a)(k,2),S=y[0],M=y[1],A=Object(o.useContext)(b.a).setTopHeading,B=Object(o.useState)({name:"",aadharNo:"",PANNo:"",GSTNo:"",address:"",district:"",state:"",PIN:""}),L=Object(u.a)(B,2),F=L[0],P=L[1];Object(o.useEffect)((function(){return A("Update Vendor"),function(){A("")}}),[]),Object(o.useEffect)((function(){H()}),[]);var H=function(){var a=Object(s.a)(r.a.mark((function a(){var t,l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={id:e},a.prev=1,a.next=4,d()({url:"".concat(f.a,"/vendor/").concat(E.a.getId(),"/getById"),method:"POST",data:t});case 4:l=a.sent,P(l.data),console.log("Done",l.data),a.next=12;break;case 9:throw a.prev=9,a.t0=a.catch(1),a.t0;case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(){return a.apply(this,arguments)}}(),R=function(e){return function(a){P(Object(n.a)(Object(n.a)({},F),{},Object(l.a)({},e,a.target.value)))}},_=function(){var a=Object(s.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==F.name){a.next=4;break}return M(!0),console.log("missing inputs"),a.abrupt("return");case 4:return t={id:e,update:F},a.next=7,d()({url:"".concat(f.a,"/vendor/").concat(E.a.getId(),"/update"),method:"POST",data:t}).then((function(e){console.log("Added",e._id),j(!0)})).catch((function(e){console.log("err",e)}));case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(p.Label,{className:"font-bold"},m.a.createElement("span",null,"Add Vendor")),m.a.createElement("hr",{className:"mb-5 mt-2"}),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Name*"),m.a.createElement(p.Input,{className:"mt-1",value:F.name,onChange:R("name")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Contact Person"),m.a.createElement(p.Input,{className:"mt-1",value:F.contactPerson,onChange:R("contactPerson")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"GST Number"),m.a.createElement(p.Input,{className:"mt-1",value:F.GSTNo,onChange:R("GSTNo")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"PAN Number"),m.a.createElement(p.Input,{className:"mt-1",value:F.PANNo,onChange:R("PANNo")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Aadhar Number"),m.a.createElement(p.Input,{className:"mt-1",value:F.aadharNo,onChange:R("aadharNo")}))," ")),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full "},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Address"),m.a.createElement(p.Input,{className:"mt-1",value:F.address,onChange:R("address")}))," "),m.a.createElement("div",{className:"flex flex-col w-full "},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"PIN Number"),m.a.createElement(p.Input,{className:"mt-1",value:F.PIN,onChange:R("PIN")}))," ")),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"District"),m.a.createElement(p.Input,{className:"mt-1",value:F.district,onChange:R("district")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"State"),m.a.createElement(p.Input,{className:"mt-1",type:"text",value:F.state,onChange:R("state")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Phone Number 1"),m.a.createElement(p.Input,{className:"mt-1",value:F.phno1,onChange:R("phno1")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Phone Number 2"),m.a.createElement(p.Input,{className:"mt-1",value:F.phno2,onChange:R("phno2")})))),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Bank Name"),m.a.createElement(p.Input,{className:"mt-1",value:F.bankName,onChange:R("bankName")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Acc Name"),m.a.createElement(p.Input,{className:"mt-1",type:"text",value:F.bankAcName,onChange:R("bankAcName")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Acc No."),m.a.createElement(p.Input,{className:"mt-1",value:F.bankAcNo,onChange:R("bankAcNo")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Branch"),m.a.createElement(p.Input,{className:"mt-1",value:F.branch,onChange:R("branch")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"IFSC Code"),m.a.createElement(p.Input,{className:"mt-1",value:F.IFSCCode,onChange:R("IFSCCode")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(p.Label,{className:"w-full"},m.a.createElement("span",null,"Credit Days"),m.a.createElement(p.Input,{className:"mt-1",value:F.creditDays,onChange:R("creditDays")})))),m.a.createElement(p.Button,{onClick:_,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Update Vendor")),m.a.createElement(m.a.Fragment,null,m.a.createElement(p.Modal,{isOpen:O,onClose:function(){return j(!1)}},m.a.createElement(p.ModalHeader,null,"Vendor Updated Successfully!"),m.a.createElement(p.ModalBody,null),m.a.createElement(p.ModalFooter,null,m.a.createElement(p.Button,{className:"w-full sm:w-auto",onClick:function(){return j(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(p.Modal,{isOpen:S,onClose:function(){return M(!1)}},m.a.createElement(p.ModalHeader,null,"Required fields are not filled!"),m.a.createElement(p.ModalBody,null),m.a.createElement(p.ModalFooter,null,m.a.createElement(p.Button,{className:"w-full sm:w-auto",onClick:function(){return M(!1)}},"Okay!")))))}},163:function(e,a,t){},171:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(2),n=t(0),c=t.n(n),r=t(3),s=t(8),u=t.n(s),o=t(10);function m(e){var a=e.isModalOpen,t=e.setIsModalOpen,s=e.setCustomer,m=Object(n.useState)([]),i=Object(l.a)(m,2),d=i[0],f=i[1];Object(n.useEffect)((function(){E()}),[]);var E=function(){u.a.post("".concat(o.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),f(a)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:a,onClose:function(){return t(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,d.map((function(e,a){return c.a.createElement(r.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){s({_id:e._id,customerName:e.name}),t(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return t(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},175:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var l=t(8),n=t.n(l),c=t(10),r=t(19),s=function(e){return n.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}},176:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var l=t(4),n=t.n(l),c=t(13),r=t(2),s=t(0),u=t.n(s),o=t(3),m=t(8),i=t.n(m),d=t(169),f=(t(163),t(10));function E(e){var a=e.isModalOpen,t=e.setIsModalOpen,l=e.account,m=e.setAccount,E=e.customer,p=e.setCustomer,b=Object(s.useState)([]),N=Object(r.a)(b,2),v=N[0],h=N[1],x=Object(s.useState)([]),w=Object(r.a)(x,2),g=w[0],C=w[1],O=Object(s.useState)([]),j=Object(r.a)(O,2),I=(j[0],j[1],Object(s.useState)(0)),T=Object(r.a)(I,2),k=T[0],y=T[1];Object(s.useEffect)((function(){i.a.post("".concat(f.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),h(a)})).catch((function(e){console.log("axiosErr",e)}))}),[]);var S=function(){var e=Object(c.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({_id:a._id,customerName:a.name}),e.prev=1,e.next=4,i.a.post("".concat(f.a,"/customer/accounts"),{customerId:a._id});case 4:t=e.sent,console.log(t.data),C(t.data),y(1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("axiosErr",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),m({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(o.Modal,{isOpen:a,onClose:function(){return t(!1)}},u.a.createElement(o.ModalHeader,null,"Select ",0==k?u.a.createElement(u.a.Fragment,null,"Customer"):u.a.createElement(u.a.Fragment,null,"Account")),u.a.createElement(o.ModalBody,null,u.a.createElement(d.d,{selectedIndex:k,onSelect:function(e){return y(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account")),u.a.createElement(d.c,null,u.a.createElement(o.TableContainer,null,u.a.createElement(o.Table,null,u.a.createElement(o.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(o.TableCell,null,"Customer"))),u.a.createElement(o.TableBody,null,v.map((function(e,a){return u.a.createElement(o.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return S(e)}},u.a.createElement(o.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(o.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(o.TableContainer,null,u.a.createElement(o.Table,null,u.a.createElement(o.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(o.TableCell,null,"Account"))),u.a.createElement(o.TableBody,null,g.map((function(e,a){return u.a.createElement(o.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return M(e)}},u.a.createElement(o.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(o.TableFooter,null)))),u.a.createElement(o.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),u.a.createElement(o.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",l.accountName)),u.a.createElement(o.ModalFooter,null,u.a.createElement(o.Button,{className:"w-full sm:w-auto",onClick:function(){return t(!1)}},"Select"))))}}}]);
//# sourceMappingURL=24.df2e2128.chunk.js.map