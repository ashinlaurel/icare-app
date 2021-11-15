(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[55],{1188:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a.n(n),c=a(12),r=a(19),o=a(6),u=a(3),s=a(0),m=a.n(s),i=a(9),p=a.n(i),d=a(10),b=a(18),E=a(191),f=(a(194),a(2)),h=(a(24),a(202),a(192),a(7));t.default=function(){var e=Object(h.g)(),t=Object(h.i)().id,a=Object(s.useState)(!1),n=Object(u.a)(a,2),i=n[0],N=n[1],v=Object(s.useState)(!1),y=Object(u.a)(v,2),O=(y[0],y[1],Object(s.useState)({_id:"",customerName:""})),g=Object(u.a)(O,2),w=(g[0],g[1],Object(s.useState)({unitName:"",assetId:[],address:"",district:"",state:"",locationType:"",pincode:"",GSTnumber:"",contactPerson:"",contactNo:"",altContact:"",whatsappNo:""})),C=Object(u.a)(w,2),T=C[0],j=C[1],x=function(e){return function(t){j(Object(o.a)(Object(o.a)({},T),{},Object(r.a)({},e,t.target.value)))}},S=function(){var e=Object(c.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t},e.prev=1,e.next=4,p()({url:"".concat(d.a,"/unit/").concat(b.a.getId(),"/getbyid"),method:"POST",data:a});case 4:n=e.sent,j({unitName:n.data.unitName,assetId:n.data.assetId,address:n.data.address,district:n.data.district,state:n.data.state,locationType:n.data.locationType,pincode:n.data.pincode,GSTnumber:n.data.GSTnumber,contactPerson:n.data.contactPerson,contactNo:n.data.contactNo,altContact:n.data.altContact,whatsappNo:n.data.whatsappNo}),console.log("Done",n.data[0]),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){S()}),[]);var k=function(){var e=Object(c.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t,update:{unitName:T.unitName,assetId:T.assetId,address:T.address,district:T.district,state:T.state,locationType:T.locationType,pincode:T.pincode,GSTnumber:T.GSTnumber,contactPerson:T.contactPerson,contactNo:T.contactNo,altContact:T.altContact,whatsappNo:T.whatsappNo}},console.log("PAYLOAD",a),e.prev=2,e.next=5,p()({url:"".concat(d.a,"/unit/").concat(b.a.getId(),"/update"),method:"POST",data:a});case 5:N(!0),console.log("Done"),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,null,"Edit Unit Information"),m.a.createElement("div",{className:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(f.Label,{className:"font-bold"},m.a.createElement("span",null,"Update Unit")),m.a.createElement("hr",{className:"mb-2 mt-2"}),m.a.createElement(m.a.Fragment,null,m.a.createElement(f.Label,null,m.a.createElement("span",null,"Unit Name"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.unitName,onChange:x("unitName")}))),m.a.createElement(f.Label,{className:"font-bold mt-5 mb-2"}),m.a.createElement(f.Label,null,m.a.createElement("span",null,"Address"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.address,onChange:x("address")}))," ",m.a.createElement(f.Label,null,m.a.createElement("span",null,"District"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.district,onChange:x("district")}))," ",m.a.createElement(f.Label,null,m.a.createElement("span",null,"state"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.state,onChange:x("state")}))," ",m.a.createElement(f.Label,null,m.a.createElement("span",null,"Location Type"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.locationType,onChange:x("locationType")}))," ",m.a.createElement(f.Label,null,m.a.createElement("span",null,"PIN code"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.pincode,onChange:x("pincode")}))," ",m.a.createElement(f.Label,null,m.a.createElement("span",null,"GST Number"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.GSTnumber,onChange:x("GSTnumber")}))," ",m.a.createElement(f.Label,null,m.a.createElement("span",null,"Contact Person"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.contactPerson,onChange:x("contactPerson")}))," ",m.a.createElement(f.Label,null,m.a.createElement("span",null,"Contact Number"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.contactNo,onChange:x("contactNo")}))," ",m.a.createElement(f.Label,null,m.a.createElement("span",null,"Whatsapp Number"),m.a.createElement(f.Input,{className:"mt-1",type:"text",value:T.WhatsappNo,onChange:x("WhatsappNo")})),m.a.createElement("hr",{className:"my-8"}),m.a.createElement("hr",null),m.a.createElement(f.Button,{onClick:k,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Update Information")),m.a.createElement(m.a.Fragment,null,m.a.createElement(f.Modal,{isOpen:i,onClose:function(){return N(!1)}},m.a.createElement(f.ModalHeader,null,"Unit Updated Successfully!"),m.a.createElement(f.ModalBody,null),m.a.createElement(f.ModalFooter,null,m.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return e.push("/app/unit/getunitbyid/".concat(t))}},"Okay!")))))}},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(5),l=a.n(n),c=a(12),r=a(3),o=a(0),u=a.n(o),s=a(9),m=a.n(s),i=a(2),p=a(192),d=(a(196),a(10));function b(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=(e.customer,e.setCustomer),s=Object(o.useState)([]),b=Object(r.a)(s,2),E=b[0],f=b[1],h=Object(o.useState)(0),N=Object(r.a)(h,2),v=N[0],y=N[1],O=Object(o.useState)(""),g=Object(r.a)(O,2),w=g[0],C=g[1],T=Object(o.useState)(""),j=Object(r.a)(T,2),x=(j[0],j[1],function(e){C(e.target.value)}),S=function(){var e=Object(c.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:w,role:1},e.prev=2,e.next=5,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),f(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:w,role:1},e.prev=1,e.next=4,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),f(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var k=function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({_id:t._id,customerName:t.name}),a(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select Customer"),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(p.d,{selectedIndex:v,onSelect:function(e){return y(e)}},u.a.createElement(p.b,null,u.a.createElement(p.a,null,"Customer")),u.a.createElement(p.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:S},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:x}))))),u.a.createElement(i.TableBody,null,E.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return k(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1)}},"Select"))))}}}]);
//# sourceMappingURL=55.734e06a8.chunk.js.map