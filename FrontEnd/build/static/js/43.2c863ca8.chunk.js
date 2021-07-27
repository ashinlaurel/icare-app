(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[43],{1218:function(e,a,t){"use strict";t.r(a);var l=t(19),n=t(6),c=t(5),r=t.n(c),u=t(12),s=t(3),o=t(0),m=t.n(o),i=t(9),d=t.n(i),f=t(10),p=t(18),E=(t(191),t(194),t(2)),b=(t(24),t(201),t(192),t(43)),N=(t(205),t(206),t(7));a.default=function(){var e=Object(N.i)().id,a=(Object(N.g)(),Object(o.useState)(0)),t=Object(s.a)(a,2),c=(t[0],t[1],Object(o.useState)("Male")),i=Object(s.a)(c,2),v=(i[0],i[1],Object(o.useState)("")),h=Object(s.a)(v,2),w=(h[0],h[1],Object(o.useState)("All")),x=Object(s.a)(w,2),g=(x[0],x[1],Object(o.useState)(!1)),O=Object(s.a)(g,2),C=O[0],j=O[1],k=Object(o.useState)(!1),y=Object(s.a)(k,2),S=(y[0],y[1],Object(o.useState)(!1)),T=Object(s.a)(S,2),I=T[0],M=T[1],A=Object(o.useContext)(b.a).setTopHeading,P=Object(o.useState)({name:"",aadharNo:"",PANNo:"",GSTNo:"",address:"",district:"",state:"",PIN:""}),L=Object(s.a)(P,2),B=L[0],F=L[1];Object(o.useEffect)((function(){return A("Update Vendor"),function(){A("")}}),[]),Object(o.useEffect)((function(){_()}),[]);var _=function(){var a=Object(u.a)(r.a.mark((function a(){var t,l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={id:e},a.prev=1,a.next=4,d()({url:"".concat(f.a,"/vendor/").concat(p.a.getId(),"/getById"),method:"POST",data:t});case 4:l=a.sent,F(l.data),console.log("Done",l.data),a.next=12;break;case 9:throw a.prev=9,a.t0=a.catch(1),a.t0;case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(){return a.apply(this,arguments)}}(),H=function(e){return function(a){F(Object(n.a)(Object(n.a)({},B),{},Object(l.a)({},e,a.target.value)))}},R=function(){var a=Object(u.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==B.name){a.next=4;break}return M(!0),console.log("missing inputs"),a.abrupt("return");case 4:return t={id:e,update:B},a.next=7,d()({url:"".concat(f.a,"/vendor/").concat(p.a.getId(),"/update"),method:"POST",data:t}).then((function(e){console.log("Added",e._id),j(!0)})).catch((function(e){console.log("err",e)}));case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(E.Label,{className:"font-bold"},m.a.createElement("span",null,"Add Vendor")),m.a.createElement("hr",{className:"mb-5 mt-2"}),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Name*"),m.a.createElement(E.Input,{className:"mt-1",value:B.name,onChange:H("name")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Contact Person"),m.a.createElement(E.Input,{className:"mt-1",value:B.contactPerson,onChange:H("contactPerson")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"GST Number"),m.a.createElement(E.Input,{className:"mt-1",value:B.GSTNo,onChange:H("GSTNo")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"PAN Number"),m.a.createElement(E.Input,{className:"mt-1",value:B.PANNo,onChange:H("PANNo")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Aadhar Number"),m.a.createElement(E.Input,{className:"mt-1",value:B.aadharNo,onChange:H("aadharNo")}))," ")),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full "},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Address"),m.a.createElement(E.Input,{className:"mt-1",value:B.address,onChange:H("address")}))," "),m.a.createElement("div",{className:"flex flex-col w-full "},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"PIN Number"),m.a.createElement(E.Input,{className:"mt-1",value:B.PIN,onChange:H("PIN")}))," ")),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"District"),m.a.createElement(E.Input,{className:"mt-1",value:B.district,onChange:H("district")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"State"),m.a.createElement(E.Input,{className:"mt-1",type:"text",value:B.state,onChange:H("state")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Phone Number 1"),m.a.createElement(E.Input,{className:"mt-1",value:B.phno1,onChange:H("phno1")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Phone Number 2"),m.a.createElement(E.Input,{className:"mt-1",value:B.phno2,onChange:H("phno2")})))),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Bank Name"),m.a.createElement(E.Input,{className:"mt-1",value:B.bankName,onChange:H("bankName")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Acc Name"),m.a.createElement(E.Input,{className:"mt-1",type:"text",value:B.bankAcName,onChange:H("bankAcName")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Acc No."),m.a.createElement(E.Input,{className:"mt-1",value:B.bankAcNo,onChange:H("bankAcNo")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Branch"),m.a.createElement(E.Input,{className:"mt-1",value:B.branch,onChange:H("branch")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"IFSC Code"),m.a.createElement(E.Input,{className:"mt-1",value:B.IFSCCode,onChange:H("IFSCCode")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(E.Label,{className:"w-full"},m.a.createElement("span",null,"Credit Days"),m.a.createElement(E.Input,{className:"mt-1",value:B.creditDays,onChange:H("creditDays")})))),m.a.createElement(E.Button,{onClick:R,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Update Vendor")),m.a.createElement(m.a.Fragment,null,m.a.createElement(E.Modal,{isOpen:C,onClose:function(){return j(!1)}},m.a.createElement(E.ModalHeader,null,"Vendor Updated Successfully!"),m.a.createElement(E.ModalBody,null),m.a.createElement(E.ModalFooter,null,m.a.createElement(E.Button,{className:"w-full sm:w-auto",onClick:function(){return j(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(E.Modal,{isOpen:I,onClose:function(){return M(!1)}},m.a.createElement(E.ModalHeader,null,"Required fields are not filled!"),m.a.createElement(E.ModalBody,null),m.a.createElement(E.ModalFooter,null,m.a.createElement(E.Button,{className:"w-full sm:w-auto",onClick:function(){return M(!1)}},"Okay!")))))}},201:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var l=t(5),n=t.n(l),c=t(12),r=t(3),u=t(0),s=t.n(u),o=t(9),m=t.n(o),i=t(2),d=t(192),f=(t(197),t(10));function p(e){var a=e.isModalOpen,t=e.setIsModalOpen,l=(e.customer,e.setCustomer),o=Object(u.useState)([]),p=Object(r.a)(o,2),E=p[0],b=p[1],N=Object(u.useState)(0),v=Object(r.a)(N,2),h=v[0],w=v[1],x=Object(u.useState)(""),g=Object(r.a)(x,2),O=g[0],C=g[1],j=Object(u.useState)(""),k=Object(r.a)(j,2),y=(k[0],k[1],function(e){C(e.target.value)}),S=function(){var e=Object(c.a)(n.a.mark((function e(a){var t,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:O,role:1},e.prev=2,e.next=5,m()({url:"".concat(f.a,"/customer/customers"),method:"POST",data:t});case 5:l=e.sent,console.log(l.data),b(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){!function(){var e=Object(c.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:O,role:1},e.prev=1,e.next=4,m()({url:"".concat(f.a,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),b(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var T=function(){var e=Object(c.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l({_id:a._id,customerName:a.name}),t(!1);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(i.ModalHeader,null,"Select Customer"),s.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},s.a.createElement(d.d,{selectedIndex:h,onSelect:function(e){return w(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:S},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:y}))))),s.a.createElement(i.TableBody,null,E.map((function(e,a){return s.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return T(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))))),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1)}},"Select"))))}},205:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var l=t(9),n=t.n(l),c=t(10),r=t(18),u=function(e){return n.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}},206:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var l=t(5),n=t.n(l),c=t(12),r=t(3),u=t(0),s=t.n(u),o=t(9),m=t.n(o),i=t(2),d=t(192),f=(t(197),t(10));function p(e){var a=e.isModalOpen,t=e.setIsModalOpen,l=e.account,o=e.setAccount,p=e.customer,E=e.setCustomer,b=Object(u.useState)([]),N=Object(r.a)(b,2),v=N[0],h=N[1],w=Object(u.useState)([]),x=Object(r.a)(w,2),g=x[0],O=x[1],C=Object(u.useState)(0),j=Object(r.a)(C,2),k=j[0],y=j[1],S=Object(u.useState)(""),T=Object(r.a)(S,2),I=T[0],M=T[1],A=function(e){M(e.target.value)},P=function(){var e=Object(c.a)(n.a.mark((function e(a){var t,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:I,role:1},e.prev=2,e.next=5,m()({url:"".concat(f.a,"/customer/customers"),method:"POST",data:t});case 5:l=e.sent,console.log(l.data),h(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){!function(){var e=Object(c.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:I,role:1},e.prev=1,e.next=4,m()({url:"".concat(f.a,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),h(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var L=function(){var e=Object(c.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({_id:a._id,customerName:a.name}),o({_id:"",accountName:""}),e.prev=2,e.next=5,m.a.post("".concat(f.a,"/customer/accounts"),{customerId:a._id});case 5:t=e.sent,console.log(t.data),O(t.data),y(1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),o({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(i.ModalHeader,null,"Select ",0==k?s.a.createElement(s.a.Fragment,null,"Customer"):s.a.createElement(s.a.Fragment,null,"Account")),s.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},s.a.createElement(d.d,{selectedIndex:k,onSelect:function(e){return y(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:P},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:A}))))),s.a.createElement(i.TableBody,null,v.map((function(e,a){return s.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Account"))),s.a.createElement(i.TableBody,null,g.map((function(e,a){return s.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return B(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))))),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",p.customerName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",l.accountName),s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1),O([])}},"Select"))))}}}]);
//# sourceMappingURL=43.2c863ca8.chunk.js.map