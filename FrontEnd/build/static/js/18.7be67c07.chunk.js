(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[18],{1130:function(e,a,t){"use strict";t.r(a);var n=t(4),l=t.n(n),c=t(13),r=t(20),o=t(12),s=t(2),u=t(0),m=t.n(u),i=(t(8),t(10),t(19)),d=(t(162),t(165),t(3)),p=t(24),f=t(171),E=(t(169),t(36)),b=t(175),N=t(176),w=t(5);a.default=function(){Object(w.g)();var e=Object(u.useState)(0),a=Object(s.a)(e,2),t=a[0],n=a[1],h=Object(u.useState)(!1),g=Object(s.a)(h,2),v=g[0],x=g[1],C=Object(u.useState)(!1),O=Object(s.a)(C,2),j=O[0],T=O[1],y=Object(u.useState)(!1),S=Object(s.a)(y,2),I=S[0],F=S[1],k=Object(u.useContext)(E.a).setTopHeading,M=Object(u.useState)(!1),_=Object(s.a)(M,2),L=_[0],A=_[1],B=Object(u.useState)(!1),H=Object(s.a)(B,2),P=H[0],G=H[1],W=Object(u.useState)({_id:"",customerName:""}),R=Object(s.a)(W,2),U=R[0],J=R[1],q=Object(u.useState)({_id:"",accountName:""}),D=Object(s.a)(q,2),z=D[0],K=D[1],Q=Object(u.useState)({_id:"",customerName:""}),V=Object(s.a)(Q,2),X=V[0],Y=V[1],Z=Object(u.useState)({username:"",email:"",password:"",confpassword:"",customerName:"",accountId:[],accountName:"",unitId:[],unitName:"",address:"",district:"",state:"",locationType:"",pincode:"",GSTnumber:"",contactPerson:"",contactNo:"",altContact:"",WhatsappNo:""}),$=Object(s.a)(Z,2),ee=$[0],ae=$[1],te=Object(u.useState)({email:"",name:"",enc_password:"",confpassword:""}),ne=Object(s.a)(te,2),le=ne[0],ce=ne[1];Object(u.useEffect)((function(){return k("Add Customer"),function(){k("")}}),[]);var re=function(e){return function(a){ae(Object(o.a)(Object(o.a)({},ee),{},Object(r.a)({},e,a.target.value)))}},oe=function(){var e=Object(c.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee.password===ee.confpassword){e.next=3;break}return ce(Object(o.a)(Object(o.a)({},le),{},{confpassword:"Confirm password does not match"})),e.abrupt("return");case 3:if(!(""===ee.customerName|""===ee.username|""===ee.email|""===ee.password|""===ee.confpassword)){e.next=6;break}return F(!0),e.abrupt("return");case 6:a={username:ee.username,name:ee.customerName,email:ee.email,password:ee.password,role:1,childAccountIds:[],address:ee.address,district:ee.district,state:ee.state,locationType:ee.locationType,pincode:ee.pincode,GSTnumber:ee.GSTnumber,contactPerson:ee.contactPerson,contactNo:ee.contactNo,altContact:ee.altContact,whatsappNo:ee.WhatsappNo,show_password:ee.password},Object(p.c)(a,"customer/".concat(i.a.getId(),"/signup")).then((function(e){console.log("Signed Up",e._id),x(!0),ce({username:"",email:"",customerName:"",enc_password:"",confpassword:""})})).catch((function(e){console.log("err",e),ce(Object(o.a)({},e))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(c.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee.password===ee.confpassword){e.next=3;break}return ce(Object(o.a)(Object(o.a)({},le),{},{confpassword:"Confirm password does not match"})),e.abrupt("return");case 3:if(!(""===ee.accountName|""===ee.username|""===ee.email|""===ee.password|""===ee.confpassword)){e.next=6;break}return F(!0),e.abrupt("return");case 6:if(""!=X._id){e.next=9;break}return T(!0),e.abrupt("return");case 9:console.log("username",ee.username),t={username:ee.username,name:ee.accountName,email:ee.email,password:ee.password,parentCustomerId:X._id,parentCustomerName:X.customerName,role:2,address:ee.address,district:ee.district,state:ee.state,locationType:ee.locationType,pincode:ee.pincode,GSTnumber:ee.GSTnumber,contactPerson:ee.contactPerson,contactNo:ee.contactNo,altContact:ee.altContact,whatsappNo:ee.WhatsappNo,show_password:ee.password},Object(p.c)(t,"customer/".concat(i.a.getId(),"/signup")).then((function(e){x(!0),console.log("Signed Up",e),ce({username:"",email:"",accountName:"",enc_password:"",confpassword:""})})).catch((function(e){console.log("err",e),ce(Object(o.a)({},e))}));case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),ue=function(){var e=Object(c.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=U._id&&""!=z._id){e.next=3;break}return T(!0),e.abrupt("return");case 3:t={username:ee.username,email:ee.email,customerId:U._id,customerName:U.customerMame,accountId:z._id,accountName:z.accountName,unitName:ee.unitName,address:ee.address,district:ee.district,state:ee.state,locationType:ee.locationType,pincode:ee.pincode,GSTnumber:ee.GSTnumber,contactPerson:ee.contactPerson,contactNo:ee.contactNo,altContact:ee.altContact,whatsappNo:ee.WhatsappNo,show_password:ee.password},Object(b.a)(t).then((function(e){console.log("Signed Up",e),x(!0)})).catch((function(e){console.log("err",e)}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(f.a,{isModalOpen:L,setIsModalOpen:A,setCustomer:Y}),m.a.createElement(N.a,{isModalOpen:P,setIsModalOpen:G,setAccount:K,account:z,customer:U,setCustomer:J}),function(){return m.a.createElement("div",{className:"px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(d.Label,{className:"font-bold"},m.a.createElement("span",null,"Add Customer")),m.a.createElement("hr",{className:"mb-5 mt-2"}),m.a.createElement("div",{className:"flex-row flex space-x-3"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Select Account Type*"),m.a.createElement(d.Select,{className:"mt-1",onChange:function(e){n(parseInt(e.target.value))}},m.a.createElement("option",{value:"0"},"Customer"),m.a.createElement("option",{value:"1"},"Account"),m.a.createElement("option",{value:"2"},"Unit")))),0===t?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Customer Name*"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.customerName,onChange:re("customerName")})),m.a.createElement(d.HelperText,{valid:!1},le.customerName))):null,1===t?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Account Name*"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.accountName,onChange:re("accountName")})),m.a.createElement(d.HelperText,{valid:!1},le.accountName))):null,2===t?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Unit Name*"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.unitName,onChange:re("unitName")})))):null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"User Name*"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.username,onChange:re("username")})),m.a.createElement(d.HelperText,{valid:!1},le.username)),m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Email*"),m.a.createElement(d.Input,{className:"mt-1",type:"email",placeholder:"",value:ee.email,onChange:re("email")})),m.a.createElement(d.HelperText,{valid:!1},le.email)),m.a.createElement("div",{className:"flex-row flex space-x-3 "},m.a.createElement(d.Label,{className:"w-full mt-4"},m.a.createElement("span",null,"Password*"),m.a.createElement(d.Input,{className:"mt-1",placeholder:"",type:"password",value:ee.password,onChange:re("password")})),m.a.createElement(d.HelperText,{valid:!1},le.enc_password),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full mt-4"},m.a.createElement("span",null,"Confirm password*"),m.a.createElement(d.Input,{className:"mt-1",type:"password",value:ee.confpassword,onChange:(e="confpassword",function(a){ae(Object(o.a)(Object(o.a)({},ee),{},Object(r.a)({},e,a.target.value))),ee.password!==a.target.value?ce(Object(o.a)(Object(o.a)({},le),{},{confpassword:"Confirm password does not match"})):ce(Object(o.a)(Object(o.a)({},le),{},{confpassword:""}))})})),m.a.createElement(d.HelperText,{valid:!1},le.confpassword))),m.a.createElement(d.Label,{className:"font-bold mt-5 mb-2"},m.a.createElement("span",null,"Additional Information")),m.a.createElement("hr",null),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"GST Number"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.GSTnumber,onChange:re("GSTnumber")}))," ",15!=ee.GSTnumber.length&&0!=ee.GSTnumber?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.HelperText,{valid:!1},"GST number shound be 15 digits")):null),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Contact Person"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.contactPerson,onChange:re("contactPerson")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Contact Number"),m.a.createElement(d.Input,{className:"mt-1",type:"number",value:ee.contactNo,onChange:re("contactNo")}))," ",10!=ee.contactNo.length&&0!=ee.contactNo?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.HelperText,{valid:!1},"Phone number shound be 10 digits")):null),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Whatsapp Number"),m.a.createElement(d.Input,{className:"mt-1",type:"number",value:ee.WhatsappNo,onChange:re("WhatsappNo")})),10!=ee.WhatsappNo.length&&0!=ee.WhatsappNo?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.HelperText,{valid:!1},"Phone number shound be 10 digits")):null)),m.a.createElement(d.Label,{className:"my-2"},m.a.createElement("span",null,"Address"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.address,onChange:re("address")}))," ",m.a.createElement("div",{className:"flex-row flex space-x-3 my-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"District"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.district,onChange:re("district")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"State"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.state,onChange:re("state")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Location Type"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.locationType,onChange:re("locationType")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"PIN code"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.pincode,onChange:re("pincode")}))," ",6!=ee.pincode.length&&0!=ee.pincode?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.HelperText,{valid:!1},"PIN shound be 6 digits")):null)),1===t?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Button,{onClick:function(){return A(!0)},"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4 mr-2"},""===X.customerName?m.a.createElement(m.a.Fragment,null,"Select Associations"):m.a.createElement(m.a.Fragment,null,"Customer: ",X.customerName))):null,2===t?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Button,{onClick:function(){return G(!0)},"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4 mr-2"},"Select Associations")):null,m.a.createElement(d.Button,{onClick:function(){0===t?oe():1===t?se():ue()},"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"}," ","Create ",0===t&&m.a.createElement(m.a.Fragment,null," Customer ")||1===t&&m.a.createElement(m.a.Fragment,null,"Account")||2==t&&m.a.createElement(m.a.Fragment,null,"Unit")));var e}(),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Modal,{isOpen:v,onClose:function(){return x(!1)}},m.a.createElement(d.ModalHeader,null,0===t?m.a.createElement(m.a.Fragment,null,"Customer "):null,1===t?m.a.createElement(m.a.Fragment,null,"Account "):null,2===t?m.a.createElement(m.a.Fragment,null,"Unit "):null,"Created Successfully!"),m.a.createElement(d.ModalBody,null),m.a.createElement(d.ModalFooter,null,m.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return window.location.reload()}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Modal,{isOpen:j,onClose:function(){return T(!1)}},m.a.createElement(d.ModalHeader,null,"Customer Not Selected!"),m.a.createElement(d.ModalBody,null),m.a.createElement(d.ModalFooter,null,m.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return T(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Modal,{isOpen:I,onClose:function(){return F(!1)}},m.a.createElement(d.ModalHeader,null,"Required fields are not filled!"),m.a.createElement(d.ModalBody,null),m.a.createElement(d.ModalFooter,null,m.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return F(!1)}},"Okay!")))))}},163:function(e,a,t){},171:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(2),l=t(0),c=t.n(l),r=t(3),o=t(8),s=t.n(o),u=t(10);function m(e){var a=e.isModalOpen,t=e.setIsModalOpen,o=e.setCustomer,m=Object(l.useState)([]),i=Object(n.a)(m,2),d=i[0],p=i[1];Object(l.useEffect)((function(){f()}),[]);var f=function(){s.a.post("".concat(u.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),p(a)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:a,onClose:function(){return t(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,d.map((function(e,a){return c.a.createElement(r.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){o({_id:e._id,customerName:e.name}),t(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return t(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},175:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(8),l=t.n(n),c=t(10),r=t(19),o=function(e){return l.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}},176:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(4),l=t.n(n),c=t(13),r=t(2),o=t(0),s=t.n(o),u=t(3),m=t(8),i=t.n(m),d=t(169),p=(t(163),t(10));function f(e){var a=e.isModalOpen,t=e.setIsModalOpen,n=e.account,m=e.setAccount,f=e.customer,E=e.setCustomer,b=Object(o.useState)([]),N=Object(r.a)(b,2),w=N[0],h=N[1],g=Object(o.useState)([]),v=Object(r.a)(g,2),x=v[0],C=v[1],O=Object(o.useState)([]),j=Object(r.a)(O,2),T=(j[0],j[1],Object(o.useState)(0)),y=Object(r.a)(T,2),S=y[0],I=y[1];Object(o.useEffect)((function(){i.a.post("".concat(p.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),h(a)})).catch((function(e){console.log("axiosErr",e)}))}),[]);var F=function(){var e=Object(c.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({_id:a._id,customerName:a.name}),e.prev=1,e.next=4,i.a.post("".concat(p.a,"/customer/accounts"),{customerId:a._id});case 4:t=e.sent,console.log(t.data),C(t.data),I(1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("axiosErr",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),m({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(u.ModalHeader,null,"Select ",0==S?s.a.createElement(s.a.Fragment,null,"Customer"):s.a.createElement(s.a.Fragment,null,"Account")),s.a.createElement(u.ModalBody,null,s.a.createElement(d.d,{selectedIndex:S,onSelect:function(e){return I(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account")),s.a.createElement(d.c,null,s.a.createElement(u.TableContainer,null,s.a.createElement(u.Table,null,s.a.createElement(u.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(u.TableCell,null,"Customer"))),s.a.createElement(u.TableBody,null,w.map((function(e,a){return s.a.createElement(u.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return F(e)}},s.a.createElement(u.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(u.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(u.TableContainer,null,s.a.createElement(u.Table,null,s.a.createElement(u.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(u.TableCell,null,"Account"))),s.a.createElement(u.TableBody,null,x.map((function(e,a){return s.a.createElement(u.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return k(e)}},s.a.createElement(u.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(u.TableFooter,null)))),s.a.createElement(u.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),s.a.createElement(u.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",n.accountName)),s.a.createElement(u.ModalFooter,null,s.a.createElement(u.Button,{className:"w-full sm:w-auto",onClick:function(){return t(!1)}},"Select"))))}}}]);
//# sourceMappingURL=18.7be67c07.chunk.js.map