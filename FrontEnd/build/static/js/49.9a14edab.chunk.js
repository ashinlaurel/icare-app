/*! For license information please see 49.9a14edab.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[49],{1095:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),c=a(10),s=a(2),l=a(0),o=a.n(l),i=(a(18),a(7)),u=a.n(i),d=a(15),m=(a(85),a(28)),p=a(1),b=a(8),g=a(30),f=a(6),x=a(29),v=(a(19),a(91));var y=function(e){e.title;var t=e.value,a=e.priority,r=e.contactPerson,n=e.problem,c=e.btnone,s=(e.btntwo,e.btnonelink),l=e.children,i=(e.link,e.desc);return e.assignedDate,e.assignedETA,o.a.createElement(p.Card,{className:"cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 py-4"},o.a.createElement(p.CardBody,{className:"flex items-center "},l,o.a.createElement("div",null,o.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},"Call Id: ",t),o.a.createElement("p",{className:" text-sm text-gray-700 dark:text-gray-200"},"Priority:",a),o.a.createElement("p",{className:" text-sm text-gray-700 dark:text-gray-200"},"Contact Person:",r),o.a.createElement("p",{className:" text-sm text-gray-700 dark:text-gray-200"},"Problem:",n))),o.a.createElement("div",{className:"flex items-center justify-end pr-4 -mt-3"},o.a.createElement("div",{className:"mx-1"},c?o.a.createElement(f.b,{to:s},o.a.createElement(p.Button,{layout:"outline",size:"small"},c)):null,o.a.createElement("p",{className:"text-md font-semibold text-gray-700 dark:text-gray-200"},i))))};t.default=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(l.useContext)(g.a)),r=(a.bbaropen,a.setBBarOpen),i=a.setAssetDetails,p=(a.assetdetails,Object(l.useState)(0)),j=Object(s.a)(p,2),E=(j[0],j[1],Object(l.useContext)(x.a)),O=(E.topheading,E.setTopHeading),h=Object(l.useState)(1),k=Object(s.a)(h,2),N=k[0],C=(k[1],Object(l.useState)([])),w=Object(s.a)(C,2),S=w[0],P=w[1],I=Object(l.useState)(!0),A=Object(s.a)(I,2),D=A[0],T=(A[1],Object(l.useState)("")),B=Object(s.a)(T,2),_=B[0],H=(B[1],Object(l.useState)("")),J=Object(s.a)(H,2),q=J[0],z=(J[1],Object(l.useState)({_id:"",enggName:""})),F=Object(s.a)(z,2),M=(F[0],F[1],Object(l.useState)({})),R=Object(s.a)(M,2);return R[0],R[1],Object(l.useEffect)((function(){return function(){r(0),i({})}}),[]),Object(l.useEffect)((function(){return O("My Calls"),function(){O("")}}),[]),Object(l.useEffect)((function(){Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pages:{page:1,limit:1e4},filters:{callStatus:"",searchquery:"",fromDate:"",toDate:"",employeeId:d.a.getId()}},console.log("HERE",t),e.prev=2,e.next=5,u()({url:"".concat(b.a,"/call/").concat(d.a.getId(),"/getall"),method:"POST",data:t});case 5:a=e.sent,console.log(a.data.out),P(a.data.out),console.log(S+"Now"),P(a.data.out),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()}),[N,_,q,D]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 mt-5"},S.map((function(e,t){return o.a.createElement(f.b,{to:"/app/call/calldetails/".concat(e._id,"/").concat(e.assetId)},o.a.createElement(y,{value:e.callNo,contactPerson:e.contactPerson,problem:e.problem,priority:t+1,link:"/app/call/calldetails/".concat(e._id,"/").concat(e.assetId),assignedDate:e.assignedDate,assignedETA:e.assignedETA},o.a.createElement(v.a,{icon:m.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})))}))))}},89:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===c)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},91:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(89),s=a.n(c);t.a=function(e){var t=e.icon,a=e.iconColorClass,r=void 0===a?"text-purple-600 dark:text-purple-100":a,c=e.bgColorClass,l=void 0===c?"bg-purple-100 dark:bg-purple-600":c,o=e.className,i=s()("rounded-full p-5",r,l,o);return n.a.createElement("div",{className:i},n.a.createElement(t,{className:"w-6 h-6"}))}}}]);
//# sourceMappingURL=49.9a14edab.chunk.js.map