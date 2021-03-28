(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[51],{106:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(3),l=t(0),c=t.n(l),r=t(1),o=t(7),s=t.n(o),m=t(9);function u(e){var a=e.isModalOpen,t=e.setIsModalOpen,o=e.setCustomer,u=Object(l.useState)([]),d=Object(n.a)(u,2),p=d[0],i=d[1];Object(l.useEffect)((function(){E()}),[]);var E=function(){s.a.post("".concat(m.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),i(a)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:a,onClose:function(){return t(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,p.map((function(e,a){return c.a.createElement(r.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){o({_id:e._id,customerName:e.name}),t(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return t(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},1074:function(e,a,t){"use strict";t.r(a);var n=t(4),l=t.n(n),c=t(11),r=t(18),o=t(10),s=t(3),m=t(0),u=t.n(m),d=t(7),p=t.n(d),i=t(9),E=t(17),b=t(97),f=t(100),h=t(1),N=(t(22),t(106),t(104),t(5));a.default=function(){var e=Object(N.g)(),a=Object(N.i)().id,t=Object(m.useState)(!1),n=Object(s.a)(t,2),d=n[0],C=n[1],v=Object(m.useState)(!1),y=Object(s.a)(v,2),g=(y[0],y[1],Object(m.useState)({_id:"",customerName:""})),T=Object(s.a)(g,2),O=(T[0],T[1],Object(m.useState)({username:"",email:"",password:"",confpassword:"",name:"",unitId:[],address:"",district:"",state:"",locationType:"",pincode:"",GSTnumber:"",contactPerson:"",contactNo:"",altContact:"",WhatsappNo:"",role:0})),w=Object(s.a)(O,2),j=w[0],x=w[1],I=Object(m.useState)({email:"",name:"",enc_password:"",confpassword:""}),L=Object(s.a)(I,2),S=L[0],k=(L[1],function(e){return function(a){x(Object(o.a)(Object(o.a)({},j),{},Object(r.a)({},e,a.target.value)))}}),P=function(){var e=Object(c.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:a},e.prev=1,e.next=4,p()({url:"".concat(i.a,"/customer/").concat(E.a.getId(),"/getCustomerById"),method:"POST",data:t});case 4:n=e.sent,x({username:n.data[0].username,email:n.data[0].email,name:n.data[0].name,address:n.data[0].address,district:n.data[0].district,state:n.data[0].state,locationType:n.data[0].locationType,pincode:n.data[0].pincode,GSTnumber:n.data[0].GSTnumber,contactPerson:n.data[0].contactPerson,contactNo:n.data[0].contactNo,altContact:n.data[0].altContact,role:n.data[0].role}),console.log("Done",n.data[0]),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){P()}),[]);var M=function(){var e=Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:a,update:{name:j.name,address:j.address,district:j.district,state:j.state,locationType:j.locationType,pincode:j.pincode,GSTnumber:j.GSTnumber,contactPerson:j.contactPerson,contactNo:j.contactNo,altContact:j.altContact,whatsappNo:j.WhatsappNo}},console.log("PAYLOAD",t),e.prev=2,e.next=5,p()({url:"".concat(i.a,"/customer/").concat(E.a.getId(),"/update"),method:"POST",data:t});case 5:C(!0),console.log("Done"),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,null,"Add Customer"),u.a.createElement("div",{className:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},u.a.createElement(h.Label,{className:"font-bold"},u.a.createElement("span",null,"Update Customer")),u.a.createElement("hr",{className:"mb-2 mt-2"}),u.a.createElement(h.Label,null,u.a.createElement("span",null," Type"),u.a.createElement(f.a,null,1==j.role?u.a.createElement(u.a.Fragment,null,"Customer"):u.a.createElement(u.a.Fragment,null,"Account"))),u.a.createElement(h.Label,null,u.a.createElement("span",null,"UserName"),u.a.createElement(f.a,null,j.username," ")),u.a.createElement(h.HelperText,{valid:!1},S.username),u.a.createElement(h.Label,null,u.a.createElement("span",null,"Email"),u.a.createElement(f.a,null,j.email," ")),u.a.createElement(u.a.Fragment,null,u.a.createElement(h.Label,null,u.a.createElement("span",null,"Customer Name"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.name,onChange:k("name")})),u.a.createElement(h.HelperText,{valid:!1},S.customerName)),u.a.createElement(h.HelperText,{valid:!1},S.email),u.a.createElement(h.Label,{className:"font-bold mt-5 mb-2"},u.a.createElement("span",null,"Additional Information")),u.a.createElement("hr",null),u.a.createElement(h.Label,null,u.a.createElement("span",null,"Address"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.address,onChange:k("address")}))," ",u.a.createElement(h.Label,null,u.a.createElement("span",null,"District"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.district,onChange:k("district")}))," ",u.a.createElement(h.Label,null,u.a.createElement("span",null,"state"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.state,onChange:k("state")}))," ",u.a.createElement(h.Label,null,u.a.createElement("span",null,"Location Type"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.locationType,onChange:k("locationType")}))," ",u.a.createElement(h.Label,null,u.a.createElement("span",null,"PIN code"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.pincode,onChange:k("pincode")}))," ",u.a.createElement(h.Label,null,u.a.createElement("span",null,"GST Number"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.GSTnumber,onChange:k("GSTnumber")}))," ",u.a.createElement(h.Label,null,u.a.createElement("span",null,"Contact Person"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.contactPerson,onChange:k("contactPerson")}))," ",u.a.createElement(h.Label,null,u.a.createElement("span",null,"Contact Number"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.contactNo,onChange:k("contactNo")}))," ",u.a.createElement(h.Label,null,u.a.createElement("span",null,"Whatsapp Number"),u.a.createElement(h.Input,{className:"mt-1",type:"text",value:j.WhatsappNo,onChange:k("WhatsappNo")})),u.a.createElement("hr",{className:"my-8"}),u.a.createElement("hr",null),u.a.createElement(h.Button,{onClick:M,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Update Information")),u.a.createElement(u.a.Fragment,null,u.a.createElement(h.Modal,{isOpen:d,onClose:function(){return C(!1)}},u.a.createElement(h.ModalHeader,null,"Customer Updated Successfully!"),u.a.createElement(h.ModalBody,null),u.a.createElement(h.ModalFooter,null,u.a.createElement(h.Button,{className:"w-full sm:w-auto",onClick:function(){return e.push("/app/customer/getCustomerById/".concat(a))}},"Okay!")))))}}}]);
//# sourceMappingURL=51.1cb2f8ec.chunk.js.map