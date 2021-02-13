(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[53],{1058:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a.n(n),c=a(10),r=a(16),o=a(9),s=a(2),u=a(0),m=a.n(u),i=a(7),d=a.n(i),p=a(8),E=a(15),b=a(85),N=(a(88),a(1)),h=(a(19),a(94),a(92),a(4));t.default=function(){var e=Object(h.g)(),t=Object(h.i)().id,a=Object(u.useState)(!1),n=Object(s.a)(a,2),i=n[0],f=n[1],v=Object(u.useState)(!1),y=Object(s.a)(v,2),g=(y[0],y[1],Object(u.useState)({_id:"",customerName:""})),C=Object(s.a)(g,2),O=(C[0],C[1],Object(u.useState)({unitName:"",assetId:[],address:"",district:"",state:"",locationType:"",pincode:"",GSTnumber:"",contactPerson:"",contactNo:"",altContact:"",whatsappNo:""})),T=Object(s.a)(O,2),w=T[0],I=T[1],j=function(e){return function(t){I(Object(o.a)(Object(o.a)({},w),{},Object(r.a)({},e,t.target.value)))}},x=function(){var e=Object(c.a)(l.a.mark((function e(){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t},e.prev=1,e.next=4,d()({url:"".concat(p.a,"/unit/").concat(E.a.getId(),"/getbyid"),method:"POST",data:a});case 4:n=e.sent,I({unitName:n.data.unitName,assetId:n.data.assetId,address:n.data.address,district:n.data.district,state:n.data.state,locationType:n.data.locationType,pincode:n.data.pincode,GSTnumber:n.data.GSTnumber,contactPerson:n.data.contactPerson,contactNo:n.data.contactNo,altContact:n.data.altContact,whatsappNo:n.data.whatsappNo}),console.log("Done",n.data[0]),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){x()}),[]);var S=function(){var e=Object(c.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t,update:{unitName:w.unitName,assetId:w.assetId,address:w.address,district:w.district,state:w.state,locationType:w.locationType,pincode:w.pincode,GSTnumber:w.GSTnumber,contactPerson:w.contactPerson,contactNo:w.contactNo,altContact:w.altContact,whatsappNo:w.whatsappNo}},console.log("PAYLOAD",a),e.prev=2,e.next=5,d()({url:"".concat(p.a,"/unit/").concat(E.a.getId(),"/update"),method:"POST",data:a});case 5:f(!0),console.log("Done"),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(b.a,null,"Edit Unit Information"),m.a.createElement("div",{className:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(N.Label,{className:"font-bold"},m.a.createElement("span",null,"Update Unit")),m.a.createElement("hr",{className:"mb-2 mt-2"}),m.a.createElement(m.a.Fragment,null,m.a.createElement(N.Label,null,m.a.createElement("span",null,"Unit Name"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.unitName,onChange:j("unitName")}))),m.a.createElement(N.Label,{className:"font-bold mt-5 mb-2"}),m.a.createElement(N.Label,null,m.a.createElement("span",null,"Address"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.address,onChange:j("address")}))," ",m.a.createElement(N.Label,null,m.a.createElement("span",null,"District"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.district,onChange:j("district")}))," ",m.a.createElement(N.Label,null,m.a.createElement("span",null,"state"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.state,onChange:j("state")}))," ",m.a.createElement(N.Label,null,m.a.createElement("span",null,"Location Type"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.locationType,onChange:j("locationType")}))," ",m.a.createElement(N.Label,null,m.a.createElement("span",null,"PIN code"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.pincode,onChange:j("pincode")}))," ",m.a.createElement(N.Label,null,m.a.createElement("span",null,"GST Number"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.GSTnumber,onChange:j("GSTnumber")}))," ",m.a.createElement(N.Label,null,m.a.createElement("span",null,"Contact Person"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.contactPerson,onChange:j("contactPerson")}))," ",m.a.createElement(N.Label,null,m.a.createElement("span",null,"Contact Number"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.contactNo,onChange:j("contactNo")}))," ",m.a.createElement(N.Label,null,m.a.createElement("span",null,"Whatsapp Number"),m.a.createElement(N.Input,{className:"mt-1",type:"text",value:w.WhatsappNo,onChange:j("WhatsappNo")})),m.a.createElement("hr",{className:"my-8"}),m.a.createElement("hr",null),m.a.createElement(N.Button,{onClick:S,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Update Information")),m.a.createElement(m.a.Fragment,null,m.a.createElement(N.Modal,{isOpen:i,onClose:function(){return f(!1)}},m.a.createElement(N.ModalHeader,null,"Unit Updated Successfully!"),m.a.createElement(N.ModalBody,null),m.a.createElement(N.ModalFooter,null,m.a.createElement(N.Button,{className:"w-full sm:w-auto",onClick:function(){return e.push("/app/unit/getunitbyid/".concat(t))}},"Okay!")))))}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(2),l=a(0),c=a.n(l),r=a(1),o=a(7),s=a.n(o),u=a(8);function m(e){var t=e.isModalOpen,a=e.setIsModalOpen,o=e.setCustomer,m=Object(l.useState)([]),i=Object(n.a)(m,2),d=i[0],p=i[1];Object(l.useEffect)((function(){E()}),[]);var E=function(){s.a.post("".concat(u.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var t=[];e.data.map((function(e){t.push(e)})),p(t)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:t,onClose:function(){return a(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,d.map((function(e,t){return c.a.createElement(r.TableRow,{key:t,className:"hover:bg-purple-900 ",onClick:function(){o({_id:e._id,customerName:e.name}),a(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return a(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}}}]);
//# sourceMappingURL=53.69feecc5.chunk.js.map