/*! For license information please see 24.ebdb7f1b.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[24],{1185:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=a(12),s=a(3),o=a(0),l=a.n(o),i=a(9),u=a.n(i),m=(a(191),a(194),a(2),a(36)),d=a(196),p=a(209),f=a(10),b=a(7),v=a(44),g=a(43);t.default=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useContext)(g.a).setTopHeading;Object(o.useEffect)((function(){return i("Units"),function(){i("")}}),[]);var x=Object(b.i)(),E=x.id,h=x.accountid,y=Object(o.useContext)(v.a);return y.bbaropen,y.setBBarOpen,y.setAssetDetails,y.assetdetails,Object(o.useEffect)((function(){!function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat(f.API,"/customer/units"),{accountId:h});case 3:t=e.sent,console.log(t.data),a=[],t.data.map((function(e){a.push(e)})),n(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("axiosErr",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[]),l.a.createElement("div",{className:"mt-4"},l.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},a.map((function(e){return l.a.createElement(p.a,{btnone:"Assets",btnonelink:"/app/customer/accounts/units/".concat(E,"/").concat(h,"/").concat(e._id),value:e.unitName,object:e,link:"/app/unit/getUnitById/".concat(e._id)},l.a.createElement(d.a,{icon:m.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"}))}))))}},195:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(195),s=a.n(c);t.a=function(e){var t=e.icon,a=e.iconColorClass,n=void 0===a?"text-purple-600 dark:text-purple-100":a,c=e.bgColorClass,o=void 0===c?"bg-purple-100 dark:bg-purple-600":c,l=e.className,i=s()("rounded-full p-5",n,o,l);return r.a.createElement("div",{className:i},r.a.createElement(t,{className:"w-6 h-6"}))}},209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(2),s=a(1);a(18);t.a=function(e){e.title;var t=e.value,a=e.btnone,n=(e.btntwo,e.btnonelink),o=e.children,l=e.link,i=e.desc;return r.a.createElement(c.Card,{className:"cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 py-4"},r.a.createElement(c.CardBody,{className:"flex items-center "},o,r.a.createElement("div",null,r.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))),r.a.createElement("div",{className:"flex items-center justify-end pr-4 -mt-3"},r.a.createElement("div",{className:"mx-1"},a?r.a.createElement(s.b,{to:n},r.a.createElement(c.Button,{layout:"outline",size:"small"},a)):null,r.a.createElement("p",{className:"text-md font-semibold text-gray-700 dark:text-gray-200"},i)),r.a.createElement("div",{className:"mx-1"},l?r.a.createElement(s.b,{to:l},r.a.createElement(c.Button,{layout:"outline",size:"small"},"Details")):null)))}}}]);
//# sourceMappingURL=24.ebdb7f1b.chunk.js.map