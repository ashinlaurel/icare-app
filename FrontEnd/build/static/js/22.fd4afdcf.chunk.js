(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[22],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var l=t(3),n=t.n(l),c=t(10),r=t(2),o=t(0),s=t.n(o),m=t(1),u=t(7),i=t.n(u),d=t(92),p=(t(86),t(8));function E(e){var a=e.isModalOpen,t=e.setIsModalOpen,l=e.account,u=e.setAccount,E=e.customer,f=e.setCustomer,b=Object(o.useState)([]),N=Object(r.a)(b,2),v=N[0],w=N[1],x=Object(o.useState)([]),h=Object(r.a)(x,2),g=h[0],O=h[1],y=Object(o.useState)([]),C=Object(r.a)(y,2),j=(C[0],C[1],Object(o.useState)(0)),T=Object(r.a)(j,2),I=T[0],L=T[1];Object(o.useEffect)((function(){i.a.post("".concat(p.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),w(a)})).catch((function(e){console.log("axiosErr",e)}))}),[]);var S=function(){var e=Object(c.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({_id:a._id,customerName:a.name}),e.prev=1,e.next=4,i.a.post("".concat(p.a,"/customer/accounts"),{customerId:a._id});case 4:t=e.sent,console.log(t.data),O(t.data),L(1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("axiosErr",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),u({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(m.ModalHeader,null,"Select ",0==I?s.a.createElement(s.a.Fragment,null,"Customer"):s.a.createElement(s.a.Fragment,null,"Account")),s.a.createElement(m.ModalBody,null,s.a.createElement(d.d,{selectedIndex:I,onSelect:function(e){return L(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account")),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Customer"))),s.a.createElement(m.TableBody,null,v.map((function(e,a){return s.a.createElement(m.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return S(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Account"))),s.a.createElement(m.TableBody,null,g.map((function(e,a){return s.a.createElement(m.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return M(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null)))),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",l.accountName)),s.a.createElement(m.ModalFooter,null,s.a.createElement(m.Button,{className:"w-full sm:w-auto",onClick:function(){return t(!1)}},"Select"))))}},1062:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t.n(l),c=t(10),r=t(16),o=t(9),s=t(2),m=t(0),u=t.n(m),i=(t(7),t(8),t(15)),d=(t(85),t(88),t(1)),p=t(19),E=(t(95),t(92),t(29)),f=(t(99),t(100),t(4));a.default=function(){Object(f.g)();var e=Object(m.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],b=Object(m.useState)("Male"),N=Object(s.a)(b,2),v=N[0],w=N[1],x=Object(m.useState)(""),h=Object(s.a)(x,2),g=h[0],O=h[1],y=Object(m.useState)("All"),C=Object(s.a)(y,2),j=C[0],T=C[1],I=Object(m.useState)(!1),L=Object(s.a)(I,2),S=L[0],M=L[1],k=Object(m.useState)(!1),F=Object(s.a)(k,2),A=(F[0],F[1],Object(m.useState)(!1)),H=Object(s.a)(A,2),P=H[0],B=H[1],D=Object(m.useContext)(E.a).setTopHeading,_=Object(m.useState)({employeeID:"",email:"",password:"",confpassword:"",employeeName:"",address:"",district:"Trivandrum",state:"Kerala",pincode:"",contactPerson:"",contactNo:"",contactNoLand:"",contactPersonOcc:"",altContact:"",WhatsappNo:""}),R=Object(s.a)(_,2),W=R[0],K=R[1],z=Object(m.useState)({email:"",name:"",enc_password:"",confpassword:""}),J=Object(s.a)(z,2),q=J[0],U=J[1];Object(m.useEffect)((function(){return D("Add Employee"),function(){D("")}}),[]);var G=function(e){return function(a){K(Object(o.a)(Object(o.a)({},W),{},Object(r.a)({},e,a.target.value)))}},Q=function(){var e=Object(c.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.password===W.confpassword){e.next=3;break}return U(Object(o.a)(Object(o.a)({},q),{},{confpassword:"Confirm password does not match"})),e.abrupt("return");case 3:if(!(""===W.employeeID|""===W.employeeName|""===W.email|""===W.password|""===W.confpassword)){e.next=6;break}return B(!0),e.abrupt("return");case 6:a={employeeID:W.employeeID,employeeName:W.employeeName,email:W.email,password:W.password,role:t,address:W.address,district:W.district,state:W.state,pincode:W.pincode,contactPerson:W.contactPerson,contactNo:W.contactNo,contactNoLand:W.contactNoLand,contactPersonOcc:W.contactPersonOcc,whatsappNo:W.WhatsappNo,sex:v,dob:g,location:j},console.log(a),Object(p.c)(a,"admin/".concat(i.a.getId(),"/signup")).then((function(e){console.log("Signed Up",e._id),M(!0),U({employeeID:"",username:"",email:"",customerName:"",enc_password:"",confpassword:""}),K({employeeID:"",email:"",password:"",confpassword:"",employeeName:"",address:"",district:"Trivandrum",state:"Kerala",pincode:"",contactPerson:"",contactNo:"",contactNoLand:"",contactPersonOcc:"",altContact:"",WhatsappNo:""})})).catch((function(e){console.log("err",e),U(Object(o.a)({},e))}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,function(){return u.a.createElement("div",{className:"px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},u.a.createElement(d.Label,{className:"font-bold"},u.a.createElement("span",null,"Add Employee")),u.a.createElement("hr",{className:"mb-5 mt-2"}),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Employee ID*"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:W.employeeID,onChange:G("employeeID")})),u.a.createElement(d.HelperText,{valid:!1},q.employeeID))),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Select Account Type*"),u.a.createElement(d.Select,{className:"mt-1",onChange:function(e){l(parseInt(e.target.value))}},u.a.createElement("option",{value:"0"},"Admin"),u.a.createElement("option",{value:"11"},"Engineer"),u.a.createElement("option",{value:"12"},"Assistant"),u.a.createElement("option",{value:"13"},"Store Keeper"),u.a.createElement("option",{value:"14"},"Coordinator"),u.a.createElement("option",{value:"15"},"Accounts")))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Location"),u.a.createElement(d.Select,{className:"mt-1",onChange:function(e){T(e.target.value)}},u.a.createElement("option",{value:"All"},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Employee Name*"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:W.employeeName,onChange:G("employeeName")})),u.a.createElement(d.HelperText,{valid:!1},q.employeeName)),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full "},u.a.createElement("span",null,"Email*"),u.a.createElement(d.Input,{className:"mt-1",type:"email",placeholder:"",value:W.email,onChange:G("email")})),u.a.createElement(d.HelperText,{valid:!1},q.email))),u.a.createElement("div",{className:"flex-row flex space-x-3 "},u.a.createElement(d.Label,{className:"w-full mt-4"},u.a.createElement("span",null,"Password*"),u.a.createElement(d.Input,{className:"mt-1",placeholder:"",type:"password",value:W.password,onChange:G("password")})),u.a.createElement(d.HelperText,{valid:!1},q.enc_password),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full mt-4"},u.a.createElement("span",null,"Confirm password*"),u.a.createElement(d.Input,{className:"mt-1",type:"password",value:W.confpassword,onChange:(e="confpassword",function(a){K(Object(o.a)(Object(o.a)({},W),{},Object(r.a)({},e,a.target.value))),W.password!==a.target.value?U(Object(o.a)(Object(o.a)({},q),{},{confpassword:"Confirm password does not match"})):U(Object(o.a)(Object(o.a)({},q),{},{confpassword:""}))})})),u.a.createElement(d.HelperText,{valid:!1},q.confpassword))),u.a.createElement(d.Label,{className:"font-bold mt-5 mb-2"},u.a.createElement("span",null,"Additional Information")),u.a.createElement("hr",null),u.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Sex"),u.a.createElement(d.Select,{className:"mt-1",onChange:function(e){w(e.target.value)}},u.a.createElement("option",{value:"Male"},"Male"),u.a.createElement("option",{value:"Female"},"Female"),u.a.createElement("option",{value:"Other"},"Other")))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Contact Number(Mobile)"),u.a.createElement(d.Input,{className:"mt-1",value:W.contactNo,onChange:G("contactNo")}))," ",10!=W.contactNo.length&&0!=W.contactNo?u.a.createElement(u.a.Fragment,null,u.a.createElement(d.HelperText,{valid:!1},"Phone number shound be 10 digits")):null),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Contact Number(Landline)"),u.a.createElement(d.Input,{className:"mt-1",value:W.contactNoLand,onChange:G("contactNoLand")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Whatsapp Number"),u.a.createElement(d.Input,{className:"mt-1",value:W.WhatsappNo,onChange:G("WhatsappNo")})),10!=W.WhatsappNo.length&&0!=W.WhatsappNo?u.a.createElement(u.a.Fragment,null,u.a.createElement(d.HelperText,{valid:!1},"Phone number shound be 10 digits")):null)),u.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"DOB"),u.a.createElement(d.Input,{className:"mt-1",type:"date",name:"brand",value:g,onChange:function(e){O(e.target.value)}}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Father/Husband Name"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:W.contactPerson,onChange:G("contactPerson")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Father/Husband's Occupation"),u.a.createElement(d.Input,{className:"mt-1",value:W.contactPersonOcc,onChange:G("contactPersonOcc")}))," ")),u.a.createElement(d.Label,{className:"my-2"},u.a.createElement("span",null,"Address"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:W.address,onChange:G("address")}))," ",u.a.createElement("div",{className:"flex-row flex space-x-3 my-2"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"District"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:W.district,onChange:G("district")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"State"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:W.state,onChange:G("state")}))," "),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"PIN code"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:W.pincode,onChange:G("pincode")}))," ",6!=W.pincode.length&&0!=W.pincode?u.a.createElement(u.a.Fragment,null,u.a.createElement(d.HelperText,{valid:!1},"PIN shound be 6 digits")):null)),u.a.createElement(d.Button,{onClick:Q,"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"},"Add Employee"));var e}(),u.a.createElement(u.a.Fragment,null,u.a.createElement(d.Modal,{isOpen:S,onClose:function(){return M(!1)}},u.a.createElement(d.ModalHeader,null,0===t?u.a.createElement(u.a.Fragment,null,"Admin "):null,11===t?u.a.createElement(u.a.Fragment,null,"Engineer "):null,12===t?u.a.createElement(u.a.Fragment,null,"Assistant "):null,"Created Successfully!"),u.a.createElement(d.ModalBody,null),u.a.createElement(d.ModalFooter,null,u.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return M(!1)}},"Okay!")))),u.a.createElement(u.a.Fragment,null,u.a.createElement(d.Modal,{isOpen:P,onClose:function(){return B(!1)}},u.a.createElement(d.ModalHeader,null,"Required fields are not filled!"),u.a.createElement(d.ModalBody,null),u.a.createElement(d.ModalFooter,null,u.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return B(!1)}},"Okay!")))))}},86:function(e,a,t){},95:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var l=t(2),n=t(0),c=t.n(n),r=t(1),o=t(7),s=t.n(o),m=t(8);function u(e){var a=e.isModalOpen,t=e.setIsModalOpen,o=e.setCustomer,u=Object(n.useState)([]),i=Object(l.a)(u,2),d=i[0],p=i[1];Object(n.useEffect)((function(){E()}),[]);var E=function(){s.a.post("".concat(m.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),p(a)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:a,onClose:function(){return t(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,d.map((function(e,a){return c.a.createElement(r.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){o({_id:e._id,customerName:e.name}),t(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return t(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},99:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var l=t(7),n=t.n(l),c=t(8),r=t(15),o=function(e){return n.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}}}]);
//# sourceMappingURL=22.fd4afdcf.chunk.js.map