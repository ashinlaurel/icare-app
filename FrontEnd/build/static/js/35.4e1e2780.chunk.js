/*! For license information please see 35.4e1e2780.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[35],{101:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(1),c=a(6);a(15);t.a=function(e){e.title;var t=e.value,a=e.btnone,r=(e.btntwo,e.btnonelink),o=e.children,s=e.link,i=e.desc;return n.a.createElement(l.Card,{className:"cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 py-4"},n.a.createElement(l.CardBody,{className:"flex items-center "},o,n.a.createElement("div",null,n.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))),n.a.createElement("div",{className:"flex items-center justify-end pr-4 -mt-3"},n.a.createElement("div",{className:"mx-1"},a?n.a.createElement(c.b,{to:r},n.a.createElement(l.Button,{layout:"outline",size:"small"},a)):null,n.a.createElement("p",{className:"text-md font-semibold text-gray-700 dark:text-gray-200"},i)),n.a.createElement("div",{className:"mx-1"},s?n.a.createElement(c.b,{to:s},n.a.createElement(l.Button,{layout:"outline",size:"small"},"Details")):null)))}},1063:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),l=a(10),c=a(2),o=a(0),s=a.n(o),i=a(7),u=a.n(i),m=a(86),d=a(88),p=(a(1),a(28)),f=a(92),g=a(101),v=a(8),b=a(6);t.default=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(o.useEffect)((function(){!function(){var e=Object(l.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={customerId:localStorage.getItem("id")},e.prev=1,e.next=4,u()({url:"".concat(v.a,"/customer/accounts"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),r(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,null,"Accounts"),s.a.createElement(d.a,null," Accounts"),s.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},a.map((function(e){return s.a.createElement(b.b,{key:e._id,to:"/app/myassets/accounts/units/".concat(localStorage.getItem("id"),"/").concat(e._id)},s.a.createElement(g.a,{value:e.name},s.a.createElement(f.a,{icon:p.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})))}))))}},90:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var c=n.apply(null,r);c&&e.push(c)}else if("object"===l)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},92:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(90),c=a.n(l);t.a=function(e){var t=e.icon,a=e.iconColorClass,r=void 0===a?"text-purple-600 dark:text-purple-100":a,l=e.bgColorClass,o=void 0===l?"bg-purple-100 dark:bg-purple-600":l,s=e.className,i=c()("rounded-full p-5",r,o,s);return n.a.createElement("div",{className:i},n.a.createElement(t,{className:"w-6 h-6"}))}}}]);
//# sourceMappingURL=35.4e1e2780.chunk.js.map