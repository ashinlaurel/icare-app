/*! For license information please see 25.0a1d577c.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[25],{1233:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a.n(r),l=a(12),o=a(3),c=a(0),s=a.n(c),i=a(9),u=a.n(i),m=(a(191),a(194)),d=a(2),p=a(36),f=a(196),g=(a(209),a(10)),b=a(1),v=a(43);a(18);var h=function(e){e.title;var t=e.value,a=e.role,r=e.btnone,n=(e.btntwo,e.btnonelink),l=e.children,o=(e.link,e.desc);return s.a.createElement(d.Card,{className:"cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 py-4"},s.a.createElement(d.CardBody,{className:"flex items-center "},l,s.a.createElement("div",null,s.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t.length<15?s.a.createElement(s.a.Fragment,null,t):"".concat(t.substring(0,15),"...")),s.a.createElement("p",{className:" text-sm text-gray-700 dark:text-gray-200"},0==a?"Admin":11==a?"Engineer":12==a?"Assistant":13==a?"Store Keeper":14==a?"Coordinator":15==a?"Engineer":16==a?"Operating Store Keeper":""))),s.a.createElement("div",{className:"flex items-center justify-end pr-4 -mt-3"},s.a.createElement("div",{className:"mx-1"},r?s.a.createElement(b.b,{to:n},s.a.createElement(d.Button,{layout:"outline",size:"small"},r)):null,s.a.createElement("p",{className:"text-md font-semibold text-gray-700 dark:text-gray-200"},o))))};t.default=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),y=Object(o.a)(i,2),x=y[0],E=y[1],k=Object(c.useContext)(v.a).setTopHeading;Object(c.useEffect)((function(){return k("Employee List"),function(){k("")}}),[]);var N=function(){var e=Object(l.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:x},e.prev=2,e.next=5,u()({url:"".concat(g.API,"/admin/employees"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),r(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){!function(){var e=Object(l.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:x,role:1},e.prev=1,e.next=4,u()({url:"".concat(g.API,"/admin/employees"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),r(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]),s.a.createElement("div",{className:"mt-4"},s.a.createElement(m.a,null,"Search"),s.a.createElement(d.Card,{className:"mb-8  shadow-md"},s.a.createElement(d.CardBody,null,s.a.createElement(d.Label,{className:""},s.a.createElement("div",{className:"relative text-gray-500 focus-within:text-purple-600"},s.a.createElement("form",{onSubmit:N},s.a.createElement("input",{className:"block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:function(e){E(e.target.value)}}),s.a.createElement("button",{type:"submit",className:"absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"},"Search")))))),s.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},a.map((function(e){return s.a.createElement(b.b,{to:"/app/employee/getEmployeeById/".concat(e._id)},s.a.createElement(h,{value:e.employeeName,role:e.role},e.photo?s.a.createElement("img",{src:e.photo,style:{height:64,width:64},className:" mr-4 rounded-full"}):s.a.createElement(f.a,{icon:p.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})))}))))}},195:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===l)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},196:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(195),o=a.n(l);t.a=function(e){var t=e.icon,a=e.iconColorClass,r=void 0===a?"text-purple-600 dark:text-purple-100":a,l=e.bgColorClass,c=void 0===l?"bg-purple-100 dark:bg-purple-600":l,s=e.className,i=o()("rounded-full p-5",r,c,s);return n.a.createElement("div",{className:i},n.a.createElement(t,{className:"w-6 h-6"}))}},209:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(2),o=a(1);a(18);t.a=function(e){e.title;var t=e.value,a=e.btnone,r=(e.btntwo,e.btnonelink),c=e.children,s=e.link,i=e.desc;return n.a.createElement(l.Card,{className:"cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 py-4"},n.a.createElement(l.CardBody,{className:"flex items-center "},c,n.a.createElement("div",null,n.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))),n.a.createElement("div",{className:"flex items-center justify-end pr-4 -mt-3"},n.a.createElement("div",{className:"mx-1"},a?n.a.createElement(o.b,{to:r},n.a.createElement(l.Button,{layout:"outline",size:"small"},a)):null,n.a.createElement("p",{className:"text-md font-semibold text-gray-700 dark:text-gray-200"},i)),n.a.createElement("div",{className:"mx-1"},s?n.a.createElement(o.b,{to:s},n.a.createElement(l.Button,{layout:"outline",size:"small"},"Details")):null)))}}}]);
//# sourceMappingURL=25.0a1d577c.chunk.js.map