/*! For license information please see 42.f2736521.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[42],{1086:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var r=t(3),n=t.n(r),c=t(10),s=t(2),l=t(0),o=t.n(l),m=t(4),d=t(6),p=t(8),i=t(7),u=t.n(i),y=t(15),x=(t(97),t(1)),N=(t(28),t(91),t(85));t(88);function f(){var e=Object(m.g)(),a=Object(m.i)().id,t=Object(l.useState)(!1),r=Object(s.a)(t,2),i=r[0],f=r[1],b=Object(l.useState)(!1),E=Object(s.a)(b,2),g=(E[0],E[1],Object(l.useState)(!1)),v=Object(s.a)(g,2),h=(v[0],v[1],Object(l.useState)("")),k=Object(s.a)(h,2),O=(k[0],k[1],Object(l.useState)("")),w=Object(s.a)(O,2),j=(w[0],w[1],Object(l.useState)("")),C=Object(s.a)(j,2),S=(C[0],C[1],Object(l.useState)({employeeID:"",username:"",email:"",customerName:"",address:"",district:"",state:"",locationType:"",pincode:"",GSTnumber:"",contactPerson:"",contactNo:"",altContact:"",WhatsappNo:"",role:0,parentCustomerId:"",show_password:""})),A=Object(s.a)(S,2),P=A[0],B=A[1],I=Object(l.useState)({email:"",name:"",enc_password:"",confpassword:""}),D=Object(s.a)(I,2),T=(D[0],D[1],function(){var e=Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:a},e.prev=1,e.next=4,u()({url:"".concat(p.a,"/vendor/").concat(y.a.getId(),"/getById"),method:"POST",data:t});case 4:r=e.sent,B(r.data),console.log("Done",r.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}());Object(l.useEffect)((function(){T()}),[]);return o.a.createElement("div",null,o.a.createElement(o.a.Fragment,null,o.a.createElement(x.Modal,{isOpen:i,onClose:function(){return f(!1)}},o.a.createElement(x.ModalHeader,null,"Are you sure you want to delete!"),o.a.createElement(x.ModalBody,null),o.a.createElement(x.ModalFooter,null,o.a.createElement(x.Button,{className:"w-full sm:w-auto",onClick:Object(c.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u()({url:"".concat(p.a,"/vendor/").concat(y.a.getId(),"/delete"),method:"POST",data:{id:a}});case 3:e.push("/app/vendorlist"),console.log("employee deleted"),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))},"Confirm Delete")))),o.a.createElement(N.a,null,"Vendor: ",P.name),o.a.createElement(x.Card,{className:"mb-8 shadow-md"},o.a.createElement(x.CardBody,null,o.a.createElement("div",{className:"flex flex-row flex-wrap "},o.a.createElement("div",{className:"w-1/2"},o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Aadhar No:")," ",P.aadharNo),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," PAN No:")," ",P.PANNo),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," GST No.:")," ",P.GSTNo),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Contact Person.:")," ",P.contactPerson),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Bank Name.:")," ",P.bankName),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Acc Name.:")," ",P.bankAcName),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Acc No.:")," ",P.bankAcNo)),o.a.createElement("div",{className:" w-1/2"},o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Address:")," ",P.address),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," District:")," ",P.district),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," State:")," ",P.state),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Pincode:")," ",P.PIN),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Branch:")," ",P.branch),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," IFSC Code:")," ",P.IFSCCode),o.a.createElement("p",{className:"text-md text-gray-900 dark:text-gray-100 py-2"},o.a.createElement("span",{className:"font-semibold"}," Credit Days:")," ",P.creditDays))),o.a.createElement("div",{className:"my-10"},o.a.createElement(d.b,{to:"/app/vendor/".concat(a,"/update")},o.a.createElement(x.Button,{className:"mr-3"},"Update Info")),o.a.createElement(x.Button,{onClick:function(){return f(!0)},className:"mx-3"},"Delete Vendor"," ")))))}},89:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===c)for(var l in r)t.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},91:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(89),s=t.n(c);a.a=function(e){var a=e.icon,t=e.iconColorClass,r=void 0===t?"text-purple-600 dark:text-purple-100":t,c=e.bgColorClass,l=void 0===c?"bg-purple-100 dark:bg-purple-600":c,o=e.className,m=s()("rounded-full p-5",r,l,o);return n.a.createElement("div",{className:m},n.a.createElement(a,{className:"w-6 h-6"}))}},97:function(e,a,t){"use strict";var r=t(0),n=t.n(r),c=t(1);a.a=function(e){var a=e.title,t=e.value,r=e.children;return n.a.createElement(c.Card,null,n.a.createElement(c.CardBody,{className:"flex items-center"},r,n.a.createElement("div",null,n.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},a),n.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))))}}}]);
//# sourceMappingURL=42.f2736521.chunk.js.map