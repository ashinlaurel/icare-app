/*! For license information please see 38.da3c09fe.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[38],{102:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},104:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(102),c=t.n(l);a.a=function(e){var a=e.icon,t=e.iconColorClass,n=void 0===t?"text-purple-600 dark:text-purple-100":t,l=e.bgColorClass,s=void 0===l?"bg-purple-100 dark:bg-purple-600":l,o=e.className,m=c()("rounded-full p-5",n,s,o);return r.a.createElement("div",{className:m},r.a.createElement(a,{className:"w-6 h-6"}))}},1073:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t(4),r=t.n(n),l=t(11),c=t(2),s=t(0),o=t.n(s),m=t(5),d=t(3),u=t(9),p=t(7),i=t.n(p),E=t(17),f=(t(109),t(1)),y=(t(31),t(104),t(98));t(101);function g(){var e=Object(m.g)(),a=Object(m.i)().id,t=Object(s.useState)(!1),n=Object(c.a)(t,2),p=n[0],g=n[1],x=Object(s.useState)(!1),b=Object(c.a)(x,2),N=b[0],w=b[1],h=Object(s.useState)(!1),v=Object(c.a)(h,2),C=v[0],k=v[1],O=Object(s.useState)(""),j=Object(c.a)(O,2),P=j[0],S=j[1],T=Object(s.useState)(""),F=Object(c.a)(T,2),B=F[0],I=F[1],M=Object(s.useState)(""),A=Object(c.a)(M,2),_=A[0],D=A[1],G=Object(s.useState)({username:"",email:"",customerName:"",address:"",district:"",state:"",locationType:"",pincode:"",GSTnumber:"",contactPerson:"",contactNo:"",altContact:"",WhatsappNo:"",role:0,parentCustomerId:"",show_password:""}),H=Object(c.a)(G,2),L=H[0],U=H[1],J=Object(s.useState)({email:"",name:"",enc_password:"",confpassword:""}),R=Object(c.a)(J,2),W=(R[0],R[1],function(){var e=Object(l.a)(r.a.mark((function e(){var t,n,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:a,pass:P},e.prev=1,e.next=4,i()({url:"".concat(u.a,"/customer/").concat(E.a.getId(),"/resetPassByAdmin"),method:"POST",data:t});case 4:n=e.sent,k(!0),w(!1),console.log("Done",n),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:(l=L).show_password=P,U(l);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()),q=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:a},e.prev=1,e.next=4,i()({url:"".concat(u.a,"/customer/").concat(E.a.getId(),"/getCustomerById"),method:"POST",data:t});case 4:n=e.sent,U({username:n.data[0].username,email:n.data[0].email,name:n.data[0].name,customerName:n.data[0].customerName,address:n.data[0].address,district:n.data[0].district,state:n.data[0].state,locationType:n.data[0].locationType,pincode:n.data[0].pincode,GSTnumber:n.data[0].GSTnumber,contactPerson:n.data[0].contactPerson,contactNo:n.data[0].contactNo,altContact:n.data[0].altContact,role:n.data[0].role,parentCustomerId:n.data[0].parentCustomerId,show_password:n.data[0].show_password}),console.log("Done",n.data[0]),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){q()}),[]);return o.a.createElement("div",null,o.a.createElement(o.a.Fragment,null,o.a.createElement(f.Modal,{isOpen:N,onClose:function(){return w(!1)}},o.a.createElement(f.ModalHeader,null,"Change Password for ",L.username,"!"),o.a.createElement(f.ModalBody,null,o.a.createElement("div",{className:"px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},o.a.createElement(f.Label,null,o.a.createElement("span",null,"New Password"),o.a.createElement(f.Input,{className:"mt-5",type:"password",value:P,onChange:function(e){return S(e.target.value)},placeholder:"New Password"}))," ",o.a.createElement(f.Label,null,o.a.createElement("span",null,"Confirm Password"),o.a.createElement(f.Input,{className:"my-5",type:"password",placeholder:"Confirm Password",value:B,onChange:function(e){I(e.target.value),e.target.value!=P?D("Passwords do not match!"):D("")}})),o.a.createElement(f.HelperText,{valid:!1},_))),o.a.createElement(f.ModalFooter,null,o.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return W()}},"Change Password")))),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.Modal,{isOpen:C,onClose:function(){return k(!1)}},o.a.createElement(f.ModalHeader,null,"Password Updated Successfully!"),o.a.createElement(f.ModalBody,null),o.a.createElement(f.ModalFooter,null,o.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return k(!1)}},"Okay!")))),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.Modal,{isOpen:p,onClose:function(){return g(!1)}},o.a.createElement(f.ModalHeader,null,"Are you sure you want to delete!"),o.a.createElement(f.ModalBody,null,"All ",1==L.role?o.a.createElement(o.a.Fragment,null,"accounts, "):o.a.createElement(o.a.Fragment,null)," units and assets under this",1==L.role?o.a.createElement(o.a.Fragment,null," customer "):o.a.createElement(o.a.Fragment,null," account "),"will get deleted"," "),o.a.createElement(f.ModalFooter,null,o.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("role",L.role),t.prev=1,1!=L.role){t.next=9;break}return console.log("Here role",L.role),t.next=6,i()({url:"".concat(u.a,"/customer/").concat(E.a.getId(),"/deletecust"),method:"POST",data:{id:a}});case 6:e.push("/app/customer"),t.next=12;break;case 9:return t.next=11,i()({url:"".concat(u.a,"/customer/").concat(E.a.getId(),"/deleteacc"),method:"POST",data:{id:a}});case 11:e.push("/app/customer/accounts/".concat(L.parentCustomerId));case 12:console.log("unit deleted"),t.next=18;break;case 15:throw t.prev=15,t.t0=t.catch(1),t.t0;case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))},"Confirm Delete")))),o.a.createElement(y.a,null,L.name," Type:",1==L.role?o.a.createElement(o.a.Fragment,null,"Customer"):o.a.createElement(o.a.Fragment,null,"Account")," "),o.a.createElement(f.Card,{className:"mb-8 shadow-md"},o.a.createElement(f.CardBody,null,o.a.createElement("div",{className:"flex flex-row flex-wrap"},o.a.createElement("div",null,o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Username:")," ",L.username),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Email:")," ",L.email),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Password:")," ",L.show_password),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Name:")," ",L.name),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Contact Person:")," ",L.contactPerson),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Contact Number:")," ",L.contactNo),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Alternate Contact:")," ",L.altContact)),o.a.createElement("div",{className:"ml-10 lg:mr-48  mx-20"},o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Location Type:")," ",L.locationType),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Address:")," ",L.address),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," District:")," ",L.district),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," State:")," ",L.state),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Pincode:")," ",L.pincode),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," GST Number:")," ",L.GSTnumber))),o.a.createElement("div",{className:"my-10"},o.a.createElement(d.b,{to:"/app/customer/".concat(a,"/update")},o.a.createElement(f.Button,{className:"mr-3"},"Update Info")),o.a.createElement(f.Button,{className:"mx-3",onClick:function(){return w(!0)}},"Reset Password"),o.a.createElement(f.Button,{onClick:function(){return g(!0)},className:"mx-3"},"Delete ",1==L.role?o.a.createElement(o.a.Fragment,null,"Customer"):o.a.createElement(o.a.Fragment,null,"Account"))))))}},109:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1);a.a=function(e){var a=e.title,t=e.value,n=e.children;return r.a.createElement(l.Card,null,r.a.createElement(l.CardBody,{className:"flex items-center"},n,r.a.createElement("div",null,r.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},a),r.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))))}}}]);
//# sourceMappingURL=38.da3c09fe.chunk.js.map