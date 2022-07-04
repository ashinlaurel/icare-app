/*! For license information please see 21.0651ac73.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[21],{1185:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=a(12),o=a(3),s=a(0),l=a.n(s),u=a(9),i=a.n(u),m=(a(191),a(193)),p=a(2),d=a(36),f=a(195),b=a(209),g=a(10),v=a(1),h=a(43),x=a(207);t.default=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],u=Object(s.useState)(""),E=Object(o.a)(u,2),y=E[0],N=E[1],w=Object(s.useContext)(h.a).setTopHeading,k=Object(s.useState)(1),C=Object(o.a)(k,2),j=C[0],O=C[1],S=Object(s.useState)(!1),A=Object(o.a)(S,2),B=A[0],P=A[1];Object(s.useEffect)((function(){return w("Customers"),function(){w("")}}),[]);var T=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O(1);case 3:I();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function I(){return M.apply(this,arguments)}function M(){return(M=Object(c.a)(r.a.mark((function e(){var t,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:y,role:1,page:j},e.prev=1,e.next=4,i()({url:"".concat(g.API,"/customer/customers"),method:"POST",data:t});case 4:c=e.sent,console.log(c.data),y?n(c.data):(o=[],a.map((function(e){o.push(e)})),c.data.map((function(e){o.push(e)})),n(o)),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}Object(s.useEffect)((function(){I()}),[j]);var D=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="SlNo,CustomerName,Account,UnitName,Address,District,State,Pincode,LocationType,GstNo,ContactPerson,ContactNo,WhatsappNo,CustomerEmail,UserName,\n",e.prev=1,e.next=4,i()({url:"".concat(g.API,"/unit/getUnitsExport"),method:"POST"});case 4:a=e.sent,console.log(a.data),a.data.map((function(e,a){t+='"'.concat(a+1,'","').concat(e.customerName,'","').concat(e.accountName,'","').concat(e.unitName,'","').concat(e.address,'","').concat(e.district,'","').concat(e.state,'","').concat(e.pincode,'","').concat(e.locationType,'","').concat(e.GSTnumber,'","').concat(e.contactPerson,'","').concat(e.contactNo,'","').concat(e.whatsappNo,'","').concat(e.customerId.email,'","').concat(e.username,'",\n')})),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:n=new Blob([t],{type:"text/csv;charset=utf-8;"}),Object(x.saveAs)(n,"Customers.csv"),P(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(p.Modal,{isOpen:B,onClose:function(){return P(!1)},className:" dark:bg-gray-800 p-5  mx-10  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg  "},l.a.createElement(p.ModalHeader,{className:""},l.a.createElement("div",{className:"text-lg w-88"},"Are you sure you want to export the entire Customers List ?")),l.a.createElement(p.ModalBody,null,l.a.createElement("div",{className:""},l.a.createElement(p.Button,{layout:"outline",onClick:function(){D()}},"Export"))))),l.a.createElement("div",{className:"mt-4"},l.a.createElement(m.a,null,"Search"),l.a.createElement("div",{className:" flex flex-row justify-start items-center w-full"},l.a.createElement("div",{className:"mb-8  shadow-md w-11/12 p-3 bg-white dark:bg-gray-800 rounded-lg"},l.a.createElement("div",{className:"relative text-gray-500 focus-within:text-purple-600"},l.a.createElement("form",{onSubmit:T},l.a.createElement("input",{className:"block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:function(e){N(e.target.value)}}),l.a.createElement("button",{type:"submit",className:"absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"},"Search")))),l.a.createElement("div",{class:"mb-8 ml-8  w-1/12 "},l.a.createElement(p.Button,{className:"py-3",onClick:function(){P(!0)}},"Export All"))),l.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},a.map((function(e){return l.a.createElement(v.b,{to:"/app/customer/accounts/".concat(e._id)},l.a.createElement(b.a,{value:e.name,link:"/app/customer/getCustomerById/".concat(e._id)},l.a.createElement(f.a,{icon:d.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})))}))),l.a.createElement("div",{className:"flex justify-center items-center"},l.a.createElement(p.Button,{onClick:function(){var e=j;e++,O(e)}},"Load More"))))}},194:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(194),o=a.n(c);t.a=function(e){var t=e.icon,a=e.iconColorClass,n=void 0===a?"text-purple-600 dark:text-purple-100":a,c=e.bgColorClass,s=void 0===c?"bg-purple-100 dark:bg-purple-600":c,l=e.className,u=o()("rounded-full p-5",n,s,l);return r.a.createElement("div",{className:u},r.a.createElement(t,{className:"w-6 h-6"}))}},209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(2),o=a(1);a(18);t.a=function(e){e.title;var t=e.value,a=e.btnone,n=(e.btntwo,e.btnonelink),s=e.children,l=e.link,u=e.desc;return r.a.createElement(c.Card,{className:"cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 py-4"},r.a.createElement(c.CardBody,{className:"flex items-center "},s,r.a.createElement("div",null,r.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))),r.a.createElement("div",{className:"flex items-center justify-end pr-4 -mt-3"},r.a.createElement("div",{className:"mx-1"},a?r.a.createElement(o.b,{to:n},r.a.createElement(c.Button,{layout:"outline",size:"small"},a)):null,r.a.createElement("p",{className:"text-md font-semibold text-gray-700 dark:text-gray-200"},u)),r.a.createElement("div",{className:"mx-1"},l?r.a.createElement(o.b,{to:l},r.a.createElement(c.Button,{layout:"outline",size:"small"},"Details")):null)))}}}]);
//# sourceMappingURL=21.0651ac73.chunk.js.map