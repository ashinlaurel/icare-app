(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[36],{1183:function(e,a,t){"use strict";t.r(a);var n=t(5),l=t.n(n),c=t(12),r=t(19),o=t(6),s=t(3),u=t(0),m=t.n(u),i=(t(9),t(10),t(18)),d=(t(191),t(194),t(2)),p=t(24),f=t(201),E=(t(192),t(43)),b=t(205),N=t(206),w=t(7);a.default=function(){Object(w.g)();var e=Object(u.useState)(0),a=Object(s.a)(e,2),t=a[0],n=a[1],h=Object(u.useState)(!1),v=Object(s.a)(h,2),g=v[0],x=v[1],O=Object(u.useState)(!1),C=Object(s.a)(O,2),j=C[0],y=C[1],T=Object(u.useState)(!1),S=Object(s.a)(T,2),k=S[0],I=S[1],F=Object(u.useContext)(E.a).setTopHeading,M=Object(u.useState)(!1),_=Object(s.a)(M,2),L=_[0],A=_[1],H=Object(u.useState)(!1),P=Object(s.a)(H,2),B=P[0],G=P[1],W=Object(u.useState)({_id:"",customerName:""}),R=Object(s.a)(W,2),U=R[0],D=R[1],J=Object(u.useState)({_id:"",accountName:""}),q=Object(s.a)(J,2),z=q[0],K=q[1],Q=Object(u.useState)({_id:"",customerName:""}),V=Object(s.a)(Q,2),X=V[0],Y=V[1],Z=Object(u.useState)({username:"",email:"",password:"",confpassword:"",customerName:"",accountId:[],accountName:"",unitId:[],unitName:"",address:"",district:"",state:"",locationType:"",pincode:"",GSTnumber:"",contactPerson:"",contactNo:"",altContact:"",WhatsappNo:""}),$=Object(s.a)(Z,2),ee=$[0],ae=$[1],te=Object(u.useState)({email:"",name:"",enc_password:"",confpassword:""}),ne=Object(s.a)(te,2),le=ne[0],ce=ne[1];Object(u.useEffect)((function(){return F("Add Customer"),function(){F("")}}),[]);var re=function(e){return function(a){ae(Object(o.a)(Object(o.a)({},ee),{},Object(r.a)({},e,a.target.value)))}},oe=function(){var e=Object(c.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee.password===ee.confpassword){e.next=3;break}return ce(Object(o.a)(Object(o.a)({},le),{},{confpassword:"Confirm password does not match"})),e.abrupt("return");case 3:if(!(""===ee.customerName|""===ee.username|""===ee.email|""===ee.password|""===ee.confpassword)){e.next=6;break}return I(!0),e.abrupt("return");case 6:a={username:ee.username,name:ee.customerName,email:ee.email,password:ee.password,role:1,childAccountIds:[],address:ee.address,district:ee.district,state:ee.state,locationType:ee.locationType,pincode:ee.pincode,GSTnumber:ee.GSTnumber,contactPerson:ee.contactPerson,contactNo:ee.contactNo,altContact:ee.altContact,whatsappNo:ee.WhatsappNo,show_password:ee.password},Object(p.c)(a,"customer/".concat(i.a.getId(),"/signup")).then((function(e){console.log("Signed Up",e._id),x(!0),ce({username:"",email:"",customerName:"",enc_password:"",confpassword:""})})).catch((function(e){console.log("err",e),ce(Object(o.a)({},e))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(c.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee.password===ee.confpassword){e.next=3;break}return ce(Object(o.a)(Object(o.a)({},le),{},{confpassword:"Confirm password does not match"})),e.abrupt("return");case 3:if(!(""===ee.accountName|""===ee.username|""===ee.email|""===ee.password|""===ee.confpassword)){e.next=6;break}return I(!0),e.abrupt("return");case 6:if(""!=X._id){e.next=9;break}return y(!0),e.abrupt("return");case 9:console.log("username",ee.username),t={username:ee.username,name:ee.accountName,email:ee.email,password:ee.password,parentCustomerId:X._id,parentCustomerName:X.customerName,role:2,address:ee.address,district:ee.district,state:ee.state,locationType:ee.locationType,pincode:ee.pincode,GSTnumber:ee.GSTnumber,contactPerson:ee.contactPerson,contactNo:ee.contactNo,altContact:ee.altContact,whatsappNo:ee.WhatsappNo,show_password:ee.password},Object(p.c)(t,"customer/".concat(i.a.getId(),"/signup")).then((function(e){x(!0),console.log("Signed Up",e),ce({username:"",email:"",accountName:"",enc_password:"",confpassword:""})})).catch((function(e){console.log("err",e),ce(Object(o.a)({},e))}));case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),ue=function(){var e=Object(c.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=U._id&&""!=z._id){e.next=3;break}return y(!0),e.abrupt("return");case 3:t={username:ee.username,email:ee.email,customerId:U._id,customerName:U.customerMame,accountId:z._id,accountName:z.accountName,unitName:ee.unitName,address:ee.address,district:ee.district,state:ee.state,locationType:ee.locationType,pincode:ee.pincode,GSTnumber:ee.GSTnumber,contactPerson:ee.contactPerson,contactNo:ee.contactNo,altContact:ee.altContact,whatsappNo:ee.WhatsappNo,show_password:ee.password},Object(b.a)(t).then((function(e){console.log("Signed Up",e),x(!0)})).catch((function(e){console.log("err",e)}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(f.a,{isModalOpen:L,setIsModalOpen:A,setCustomer:Y,customer:U}),m.a.createElement(N.a,{isModalOpen:B,setIsModalOpen:G,setAccount:K,account:z,customer:U,setCustomer:D}),function(){return m.a.createElement("div",{className:"px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(d.Label,{className:"font-bold"},m.a.createElement("span",null,"Add Customer")),m.a.createElement("hr",{className:"mb-5 mt-2"}),m.a.createElement("div",{className:"flex-row flex space-x-3"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Select Account Type*"),m.a.createElement(d.Select,{className:"mt-1",onChange:function(e){n(parseInt(e.target.value))}},m.a.createElement("option",{value:"0"},"Customer"),m.a.createElement("option",{value:"1"},"Account"),m.a.createElement("option",{value:"2"},"Unit")))),0===t?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Customer Name*"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.customerName,onChange:re("customerName")})),m.a.createElement(d.HelperText,{valid:!1},le.customerName))):null,1===t?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Account Name*"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.accountName,onChange:re("accountName")})),m.a.createElement(d.HelperText,{valid:!1},le.accountName))):null,2===t?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Unit Name*"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.unitName,onChange:re("unitName")})))):null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"User Name*"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.username,onChange:re("username")})),m.a.createElement(d.HelperText,{valid:!1},le.username)),m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Email*"),m.a.createElement(d.Input,{className:"mt-1",type:"email",placeholder:"",value:ee.email,onChange:re("email")})),m.a.createElement(d.HelperText,{valid:!1},le.email)),m.a.createElement("div",{className:"flex-row flex space-x-3 "},m.a.createElement(d.Label,{className:"w-full mt-4"},m.a.createElement("span",null,"Password*"),m.a.createElement(d.Input,{className:"mt-1",placeholder:"",type:"password",value:ee.password,onChange:re("password")})),m.a.createElement(d.HelperText,{valid:!1},le.enc_password),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full mt-4"},m.a.createElement("span",null,"Confirm password*"),m.a.createElement(d.Input,{className:"mt-1",type:"password",value:ee.confpassword,onChange:(e="confpassword",function(a){ae(Object(o.a)(Object(o.a)({},ee),{},Object(r.a)({},e,a.target.value))),ee.password!==a.target.value?ce(Object(o.a)(Object(o.a)({},le),{},{confpassword:"Confirm password does not match"})):ce(Object(o.a)(Object(o.a)({},le),{},{confpassword:""}))})})),m.a.createElement(d.HelperText,{valid:!1},le.confpassword))),m.a.createElement(d.Label,{className:"font-bold mt-5 mb-2"},m.a.createElement("span",null,"Additional Information")),m.a.createElement("hr",null),m.a.createElement("div",{className:"flex-row flex space-x-3 mt-3 mb-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"GST Number"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.GSTnumber,onChange:re("GSTnumber")}))," ",15!=ee.GSTnumber.length&&0!=ee.GSTnumber?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.HelperText,{valid:!1},"GST number shound be 15 digits")):null),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Contact Person"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.contactPerson,onChange:re("contactPerson")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Contact Number"),m.a.createElement(d.Input,{className:"mt-1",type:"number",value:ee.contactNo,onChange:re("contactNo")}))," ",10!=ee.contactNo.length&&0!=ee.contactNo?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.HelperText,{valid:!1},"Phone number shound be 10 digits")):null),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Whatsapp Number"),m.a.createElement(d.Input,{className:"mt-1",type:"number",value:ee.WhatsappNo,onChange:re("WhatsappNo")})),10!=ee.WhatsappNo.length&&0!=ee.WhatsappNo?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.HelperText,{valid:!1},"Phone number shound be 10 digits")):null)),m.a.createElement(d.Label,{className:"my-2"},m.a.createElement("span",null,"Address"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.address,onChange:re("address")}))," ",m.a.createElement("div",{className:"flex-row flex space-x-3 my-2"},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"District"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.district,onChange:re("district")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"State"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.state,onChange:re("state")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"Location Type"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.locationType,onChange:re("locationType")}))," "),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(d.Label,{className:"w-full"},m.a.createElement("span",null,"PIN code"),m.a.createElement(d.Input,{className:"mt-1",type:"text",value:ee.pincode,onChange:re("pincode")}))," ",6!=ee.pincode.length&&0!=ee.pincode?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.HelperText,{valid:!1},"PIN shound be 6 digits")):null)),1===t?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Button,{onClick:function(){return A(!0)},"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4 mr-2"},""===X.customerName?m.a.createElement(m.a.Fragment,null,"Select Associations"):m.a.createElement(m.a.Fragment,null,"Customer: ",X.customerName))):null,2===t?m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Button,{onClick:function(){return G(!0)},"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4 mr-2"},""===U.customerName?m.a.createElement(m.a.Fragment,null,"Select Associations"):m.a.createElement("div",{className:"flex "},m.a.createElement("div",null,"Customer: ",U.customerName),m.a.createElement("div",{className:"ml-1"},"Account: ",z.accountName)))):null,m.a.createElement(d.Button,{onClick:function(){0===t?oe():1===t?se():ue()},"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"}," ","Create ",0===t&&m.a.createElement(m.a.Fragment,null," Customer ")||1===t&&m.a.createElement(m.a.Fragment,null,"Account")||2==t&&m.a.createElement(m.a.Fragment,null,"Unit")));var e}(),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Modal,{isOpen:g,onClose:function(){return x(!1)}},m.a.createElement(d.ModalHeader,null,0===t?m.a.createElement(m.a.Fragment,null,"Customer "):null,1===t?m.a.createElement(m.a.Fragment,null,"Account "):null,2===t?m.a.createElement(m.a.Fragment,null,"Unit "):null,"Created Successfully!"),m.a.createElement(d.ModalBody,null),m.a.createElement(d.ModalFooter,null,m.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return window.location.reload()}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Modal,{isOpen:j,onClose:function(){return y(!1)}},m.a.createElement(d.ModalHeader,null,"Customer Not Selected!"),m.a.createElement(d.ModalBody,null),m.a.createElement(d.ModalFooter,null,m.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return y(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.Modal,{isOpen:k,onClose:function(){return I(!1)}},m.a.createElement(d.ModalHeader,null,"Required fields are not filled!"),m.a.createElement(d.ModalBody,null),m.a.createElement(d.ModalFooter,null,m.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return I(!1)}},"Okay!")))))}},201:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(5),l=t.n(n),c=t(12),r=t(3),o=t(0),s=t.n(o),u=t(9),m=t.n(u),i=t(2),d=t(192),p=(t(197),t(10));function f(e){var a=e.isModalOpen,t=e.setIsModalOpen,n=(e.customer,e.setCustomer),u=Object(o.useState)([]),f=Object(r.a)(u,2),E=f[0],b=f[1],N=Object(o.useState)(0),w=Object(r.a)(N,2),h=w[0],v=w[1],g=Object(o.useState)(""),x=Object(r.a)(g,2),O=x[0],C=x[1],j=Object(o.useState)(""),y=Object(r.a)(j,2),T=(y[0],y[1],function(e){C(e.target.value)}),S=function(){var e=Object(c.a)(l.a.mark((function e(a){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:O,role:1},e.prev=2,e.next=5,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 5:n=e.sent,console.log(n.data),b(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:O,role:1},e.prev=1,e.next=4,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),b(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var k=function(){var e=Object(c.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({_id:a._id,customerName:a.name}),t(!1);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(i.ModalHeader,null,"Select Customer"),s.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},s.a.createElement(d.d,{selectedIndex:h,onSelect:function(e){return v(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:S},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:T}))))),s.a.createElement(i.TableBody,null,E.map((function(e,a){return s.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return k(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))))),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1)}},"Select"))))}},205:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(9),l=t.n(n),c=t(10),r=t(18),o=function(e){return l.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}},206:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(5),l=t.n(n),c=t(12),r=t(3),o=t(0),s=t.n(o),u=t(9),m=t.n(u),i=t(2),d=t(192),p=(t(197),t(10));function f(e){var a=e.isModalOpen,t=e.setIsModalOpen,n=e.account,u=e.setAccount,f=e.customer,E=e.setCustomer,b=Object(o.useState)([]),N=Object(r.a)(b,2),w=N[0],h=N[1],v=Object(o.useState)([]),g=Object(r.a)(v,2),x=g[0],O=g[1],C=Object(o.useState)(0),j=Object(r.a)(C,2),y=j[0],T=j[1],S=Object(o.useState)(""),k=Object(r.a)(S,2),I=k[0],F=k[1],M=function(e){F(e.target.value)},_=function(){var e=Object(c.a)(l.a.mark((function e(a){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:I,role:1},e.prev=2,e.next=5,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 5:n=e.sent,console.log(n.data),h(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:I,role:1},e.prev=1,e.next=4,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),h(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var L=function(){var e=Object(c.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({_id:a._id,customerName:a.name}),u({_id:"",accountName:""}),e.prev=2,e.next=5,m.a.post("".concat(p.a,"/customer/accounts"),{customerId:a._id});case 5:t=e.sent,console.log(t.data),O(t.data),T(1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),u({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(i.ModalHeader,null,"Select ",0==y?s.a.createElement(s.a.Fragment,null,"Customer"):s.a.createElement(s.a.Fragment,null,"Account")),s.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},s.a.createElement(d.d,{selectedIndex:y,onSelect:function(e){return T(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:_},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:M}))))),s.a.createElement(i.TableBody,null,w.map((function(e,a){return s.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Account"))),s.a.createElement(i.TableBody,null,x.map((function(e,a){return s.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return A(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))))),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",n.accountName),s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1),O([])}},"Select"))))}}}]);
//# sourceMappingURL=36.32129c45.chunk.js.map