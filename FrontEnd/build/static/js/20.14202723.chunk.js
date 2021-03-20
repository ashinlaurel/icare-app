(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[20],{1092:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a.n(n),c=a(10),r=a(16),o=a(9),u=a(2),s=a(0),m=a.n(s),i=(a(7),a(8),a(85)),d=(a(88),a(1)),p=(a(19),a(95),a(98));var E=a(99);t.default=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],b=Object(s.useState)(!1),f=Object(u.a)(b,2),N=f[0],h=f[1],C=Object(s.useState)(!1),v=Object(u.a)(C,2),O=v[0],g=v[1],y=Object(s.useState)({_id:"",customerName:""}),T=Object(u.a)(y,2),j=T[0],w=T[1],x=Object(s.useState)({_id:"",accountName:""}),M=Object(u.a)(x,2),S=M[0],k=M[1],I=Object(s.useState)({unitName:"defaultUnit",assetId:[],address:"default",district:"default",state:"default",locationType:"default",pincode:"default",GSTnumber:"default",contactPerson:"default",contactNo:"default",altContact:"default",WhatsappNo:"default"}),B=Object(u.a)(I,2),F=B[0],_=B[1],L=function(e){return function(t){_(Object(o.a)(Object(o.a)({},F),{},Object(r.a)({},e,t.target.value)))}},A=function(){var e=Object(c.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=j._id&&""!=S._id){e.next=3;break}return g(!0),e.abrupt("return");case 3:a={customerId:j._id,customerName:j.customerMame,accountId:S._id,accountName:S.accountName,unitName:F.unitName,address:F.address,district:F.district,state:F.state,locationType:F.locationType,pincode:F.pincode,GSTnumber:F.GSTnumber,contactPerson:F.contactPerson,contactNo:F.contactNo,altContact:F.altContact,whatsappNo:F.WhatsappNo},Object(p.a)(a).then((function(e){console.log("Signed Up",e),h(!0)})).catch((function(e){console.log("err",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{isModalOpen:a,setIsModalOpen:n,setAccount:k,account:S,customer:j,setCustomer:w}),m.a.createElement(i.a,null,"Add Unit"),m.a.createElement("div",{className:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(d.Label,{className:"font-bold"},m.a.createElement("span",null,"Add Unit")),m.a.createElement("hr",{className:"mb-5 mt-2"}),m.a.createElement(d.Label,null,m.a.createElement("span",null,"Unit Name"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.unitName,onChange:L("unitName")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"Address"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.address,onChange:L("address")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"District"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.district,onChange:L("district")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"state"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.state,onChange:L("state")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"Location Type"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.locationType,onChange:L("locationType")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"PIN code"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.pincode,onChange:L("pincode")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"GST Number"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.GSTnumber,onChange:L("GSTnumber")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"Contact Person"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.contactPerson,onChange:L("contactPerson")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"Contact Number"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.contactNo,onChange:L("contactNo")}))," ",m.a.createElement(d.Label,null,m.a.createElement("span",null,"Whatsapp Number"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:F.WhatsappNo,onChange:L("WhatsappNo")})),m.a.createElement("hr",{className:"my-8"}),m.a.createElement(d.Button,{onClick:function(){return n(!0)},"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4 mx-3"},"Select Customer"),m.a.createElement("hr",{className:"my-8"}),m.a.createElement(d.Button,{onClick:A,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Create Unit")),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Modal,{isOpen:N,onClose:function(){return h(!1)}},m.a.createElement(d.ModalHeader,null,"Unit Created Successfully!"),m.a.createElement(d.ModalBody,null),m.a.createElement(d.ModalFooter,null,m.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return h(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Modal,{isOpen:O,onClose:function(){return g(!1)}},m.a.createElement(d.ModalHeader,null,"Customer or Account Not Selected!"),m.a.createElement(d.ModalBody,null,"If Customer does not have any accounts under it, make them first."),m.a.createElement(d.ModalFooter,null,m.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return g(!1)}},"Okay!")))))}},87:function(e,t,a){},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(2),l=a(0),c=a.n(l),r=a(1),o=a(7),u=a.n(o),s=a(8);function m(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setCustomer,m=Object(l.useState)([]),i=Object(n.a)(m,2),d=i[0],p=i[1];Object(l.useEffect)((function(){E()}),[]);var E=function(){u.a.post("".concat(s.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),p(t)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:t,onClose:function(){return a(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,d.map((function(e,t){return c.a.createElement(r.TableRow,{key:t,className:"hover:bg-purple-900 ",onClick:function(){o({_id:e._id,customerName:e.name}),a(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(7),l=a.n(n),c=a(8),r=a(15),o=function(e){return l.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(3),l=a.n(n),c=a(10),r=a(2),o=a(0),u=a.n(o),s=a(1),m=a(7),i=a.n(m),d=a(92),p=(a(87),a(8));function E(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.account,m=e.setAccount,E=e.customer,b=e.setCustomer,f=Object(o.useState)([]),N=Object(r.a)(f,2),h=N[0],C=N[1],v=Object(o.useState)([]),O=Object(r.a)(v,2),g=O[0],y=O[1],T=Object(o.useState)([]),j=Object(r.a)(T,2),w=(j[0],j[1],Object(o.useState)(0)),x=Object(r.a)(w,2),M=x[0],S=x[1];Object(o.useEffect)((function(){i.a.post("".concat(p.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),C(t)})).catch((function(e){console.log("axiosErr",e)}))}),[]);var k=function(){var e=Object(c.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({_id:t._id,customerName:t.name}),e.prev=1,e.next=4,i.a.post("".concat(p.a,"/customer/accounts"),{customerId:t._id});case 4:a=e.sent,console.log(a.data),y(a.data),S(1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("axiosErr",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),m({_id:t._id,accountName:t.name});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(s.ModalHeader,null,"Select ",0==M?u.a.createElement(u.a.Fragment,null,"Customer"):u.a.createElement(u.a.Fragment,null,"Account")),u.a.createElement(s.ModalBody,null,u.a.createElement(d.d,{selectedIndex:M,onSelect:function(e){return S(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account")),u.a.createElement(d.c,null,u.a.createElement(s.TableContainer,null,u.a.createElement(s.Table,null,u.a.createElement(s.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(s.TableCell,null,"Customer"))),u.a.createElement(s.TableBody,null,h.map((function(e,t){return u.a.createElement(s.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return k(e)}},u.a.createElement(s.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(s.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(s.TableContainer,null,u.a.createElement(s.Table,null,u.a.createElement(s.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(s.TableCell,null,"Account"))),u.a.createElement(s.TableBody,null,g.map((function(e,t){return u.a.createElement(s.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return I(e)}},u.a.createElement(s.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(s.TableFooter,null)))),u.a.createElement(s.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),u.a.createElement(s.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",n.accountName)),u.a.createElement(s.ModalFooter,null,u.a.createElement(s.Button,{className:"w-full sm:w-auto",onClick:function(){return a(!1)}},"Select"))))}}}]);
//# sourceMappingURL=20.14202723.chunk.js.map