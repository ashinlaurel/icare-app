/*! For license information please see 12.d91da5e8.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[12],{1147:function(a,e,t){"use strict";t.r(e);var n=t(5),r=t.n(n),s=t(12),l=t(3),o=t(0),c=t.n(o),i=t(23),m=t.n(i),u=t(8),d=t.n(u),p=t(18),b=t(200),g=(t(243),t(272),t(252),t(189),t(35)),f=t(195),h=(t(212),t(2)),w=(t(253),t(10)),v=t(192),T=t(41);e.default=function(){var a=Object(o.useState)(1),e=Object(l.a)(a,2),t=e[0],n=e[1],i=Object(o.useState)([]),u=Object(l.a)(i,2),j=u[0],S=u[1],E=Object(o.useContext)(T.a),C=(E.topheading,E.setTopHeading),y=Object(o.useState)({}),M=Object(l.a)(y,2),x=(M[0],M[1]),k=Object(o.useState)(""),B=Object(l.a)(k,2),G=B[0],O=B[1],D=Object(o.useState)(""),z=Object(l.a)(D,2),N=z[0],A=z[1],F=Object(o.useState)(""),P=Object(l.a)(F,2),I=P[0],J=P[1],L=Object(o.useState)(!0),W=Object(l.a)(L,2),Y=W[0],H=W[1],K=Object(o.useState)(!0),R=Object(l.a)(K,2),U=R[0],_=R[1],V=Object(o.useState)(!1),q=Object(l.a)(V,2),Q=q[0],Z=q[1],X=Object(o.useState)(0),$=Object(l.a)(X,2),aa=$[0],ea=$[1],ta=Object(o.useState)(0),na=Object(l.a)(ta,2),ra=na[0],sa=na[1],la=Object(o.useState)(0),oa=Object(l.a)(la,2),ca=oa[0],ia=oa[1],ma=Object(o.useState)(0),ua=Object(l.a)(ma,2),da=ua[0],pa=ua[1],ba=Object(o.useState)(0),ga=Object(l.a)(ba,2),fa=ga[0],ha=ga[1],wa=Object(o.useState)(0),va=Object(l.a)(wa,2),Ta=va[0],ja=va[1],Sa=Object(o.useState)(0),Ea=Object(l.a)(Sa,2),Ca=Ea[0],ya=Ea[1],Ma=Object(o.useState)(20),xa=Object(l.a)(Ma,2),ka=xa[0],Ba=xa[1];return Object(o.useEffect)((function(){!function(){var a=Object(s.a)(r.a.mark((function a(){var e,n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("getter called"),e={pages:{page:t,limit:10},filters:{searchtype:G,searchquery:I}},a.prev=2,a.next=5,d()({url:"".concat(w.a,"/asset/").concat(p.a.getId(),"/getall"),method:"POST",data:e});case 5:n=a.sent,console.log(n.data.out),Ba(n.data.total),S(n.data.out),a.next=14;break;case 11:throw a.prev=11,a.t0=a.catch(2),a.t0;case 14:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(){return a.apply(this,arguments)}}()()}),[t,Y]),Object(o.useEffect)((function(){return function(){var a=Object(s.a)(r.a.mark((function a(){var e,t,n,s,l,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d()({url:"".concat(w.a,"/customer/countcustomers"),method:"GET"});case 3:return e=a.sent,a.next=6,d()({url:"".concat(w.a,"/asset/count"),method:"GET"});case 6:return t=a.sent,a.next=9,d()({url:"".concat(w.a,"/asset/countamc"),method:"GET"});case 9:return n=a.sent,a.next=12,d()({url:"".concat(w.a,"/asset/countwty"),method:"GET"});case 12:return s=a.sent,a.next=15,d()({url:"".concat(w.a,"/asset/countnos"),method:"GET"});case 15:return l=a.sent,a.next=18,d()({url:"".concat(w.a,"/unit/count"),method:"GET"});case 18:o=a.sent,sa(e.data),ia(t.data),pa(n.data),ha(s.data),ja(l.data),ya(o.data),a.next=30;break;case 27:throw a.prev=27,a.t0=a.catch(0),a.t0;case 30:case"end":return a.stop()}}),a,null,[[0,27]])})));return function(){return a.apply(this,arguments)}}()(),function(){console.log("exiting dashboard")}}),[]),Object(o.useEffect)((function(){return C("Dashboard"),function(){C("")}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"grid gap-6 mt-5 mb-8 md:grid-cols-2 xl:grid-cols-4"},c.a.createElement(b.a,{title:"Total Customers",value:ra},c.a.createElement(f.a,{icon:g.MoneyIcon,iconColorClass:"text-green-500 dark:text-green-100",bgColorClass:"bg-green-100 dark:bg-green-500",className:"mr-4"})),c.a.createElement(b.a,{title:"Total Units",value:Ca},c.a.createElement(f.a,{icon:g.CartIcon,iconColorClass:"text-blue-500 dark:text-blue-100",bgColorClass:"bg-blue-100 dark:bg-blue-500",className:"mr-4"})),c.a.createElement(b.a,{title:"Total Assets",value:ca},c.a.createElement(f.a,{icon:g.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})),c.a.createElement(b.a,{title:"Assets (AMC)",value:da},c.a.createElement(f.a,{icon:g.ChatIcon,iconColorClass:"text-teal-500 dark:text-teal-100",bgColorClass:"bg-teal-100 dark:bg-teal-500",className:"mr-4"})),c.a.createElement(b.a,{title:"Assets (WTY)",value:fa},c.a.createElement(f.a,{icon:g.ChatIcon,iconColorClass:"text-teal-500 dark:text-teal-100",bgColorClass:"bg-teal-100 dark:bg-teal-500",className:"mr-4"})),c.a.createElement(b.a,{title:"Assets (NOS)",value:Ta},c.a.createElement(f.a,{icon:g.ChatIcon,iconColorClass:"text-teal-500 dark:text-teal-100",bgColorClass:"bg-teal-100 dark:bg-teal-500",className:"mr-4"})),c.a.createElement(b.a,{title:"AMC Contracts",value:"0"},c.a.createElement(f.a,{icon:g.ChatIcon,iconColorClass:"text-teal-500 dark:text-teal-100",bgColorClass:"bg-teal-100 dark:bg-teal-500",className:"mr-4"})),c.a.createElement(b.a,{title:"Total Value",value:"0"},c.a.createElement(f.a,{icon:g.ChatIcon,iconColorClass:"text-teal-500 dark:text-teal-100",bgColorClass:"bg-teal-100 dark:bg-teal-500",className:"mr-4"}))),c.a.createElement("hr",{className:"mb-4"}),c.a.createElement(v.a,null,"Quick Search"),c.a.createElement("div",{className:"flex flex-row items-center space-x-2"},c.a.createElement("div",{className:"relative z-50 "},c.a.createElement("button",{onClick:function(){Z(!Q)},className:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none","aria-label":"Notifications","aria-haspopup":"true"},G?N:"Pick Search Type"),c.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},c.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),c.a.createElement(h.Dropdown,{isOpen:Q,onClose:function(){return Z(!1)}},c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O(""),A(""),_(!0),J(""),H(!Y)}},c.a.createElement("span",null,"All")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("prodserial"),A("Product Serial"),_(!1)}},c.a.createElement("span",null,"Product Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("keyboardsno"),A("Keyboard Serial"),_(!1)}},c.a.createElement("span",null,"Keyboard Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("mousesno"),A("Mouse Serial"),_(!1)}},c.a.createElement("span",null,"Mouse Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("motherboardsno"),A("Motherboard Serial"),_(!1)}},c.a.createElement("span",null,"Motherboard Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("monitorsno"),A("Monitor Serial"),_(!1)}},c.a.createElement("span",null,"Monitor Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("hddsno"),A("HDD Serial"),_(!1)}},c.a.createElement("span",null,"HDD Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("cpusno"),A("CPU Serial"),_(!1)}},c.a.createElement("span",null,"CPU Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("ramsno"),A("Ram Serial"),_(!1)}},c.a.createElement("span",null,"RAM Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("smpssno"),A("SMPS Serial"),_(!1)}},c.a.createElement("span",null,"SMPS Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("fansno"),A("Fan Serial"),_(!1)}},c.a.createElement("span",null,"Fan Serial")),c.a.createElement(h.DropdownItem,{onClick:function(){Z(!1),O("opticaldrivesno"),A("Optical Drive Serial"),_(!1)}},c.a.createElement("span",null,"Optical Drive Serial")))),c.a.createElement("div",{class:"block relative "},c.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},c.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},c.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),c.a.createElement("form",{onSubmit:function(a){a.preventDefault(),H(!Y)}},c.a.createElement("input",{value:I,onChange:function(a){return J(a.target.value)},placeholder:"Search",disabled:U,class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})))),c.a.createElement(h.TableContainer,{className:"mt-4"},c.a.createElement(h.Table,null,c.a.createElement(h.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(h.TableCell,null,"Customer"),c.a.createElement(h.TableCell,null,"Unit"),c.a.createElement(h.TableCell,null,"Business"),c.a.createElement(h.TableCell,null,"Product"),c.a.createElement(h.TableCell,null,"Product Serial"),c.a.createElement(h.TableCell,null,"Contract From"),c.a.createElement(h.TableCell,null,"Contract To"),c.a.createElement(h.TableCell,null,"Purchase Number"),c.a.createElement(h.TableCell,null,"Purchase Date"))),c.a.createElement(h.TableBody,null,j.map((function(a,e){return c.a.createElement(h.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(aa==a._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:e,onClick:function(){ea(a._id),x(a)}},c.a.createElement(h.TableCell,{className:"w-8"},c.a.createElement("div",{className:"flex items-center text-sm "},c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},a.customerName),c.a.createElement("p",{className:"text-xs text-gray-600 dark:text-gray-400"},a.accountName)))),c.a.createElement(h.TableCell,null,c.a.createElement("span",{className:"text-sm"},a.unitName)),c.a.createElement(h.TableCell,null,c.a.createElement(h.Badge,{type:"AMC"==a.business?"primary":"success"},a.business)),c.a.createElement(h.TableCell,null,c.a.createElement("span",{className:"text-sm"},a.producttype)),c.a.createElement(h.TableCell,null,c.a.createElement("span",{className:"text-sm"},a.product.serialno)),c.a.createElement(h.TableCell,null,c.a.createElement("span",{className:"text-sm"},m()(a.contractfrom).format("DD/MM/YYYY"))),c.a.createElement(h.TableCell,null,c.a.createElement("span",{className:"text-sm"},m()(a.contractto).format("DD/MM/YYYY"))),c.a.createElement(h.TableCell,null,c.a.createElement("span",{className:"text-sm"},a.ponumber)),c.a.createElement(h.TableCell,null,c.a.createElement("span",{className:"text-sm"},m()(a.podate).format("DD/MM/YYYY"))))})))),c.a.createElement(h.TableFooter,null,c.a.createElement(h.Pagination,{totalResults:ka,resultsPerPage:10,label:"Table navigation",onChange:function(a){n(a)}}))))}},193:function(a,e,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var a=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var s=typeof n;if("string"===s||"number"===s)a.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&a.push(l)}else if("object"===s)for(var o in n)t.call(n,o)&&n[o]&&a.push(o)}}return a.join(" ")}a.exports?(r.default=r,a.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(a.exports=n)}()},195:function(a,e,t){"use strict";var n=t(0),r=t.n(n),s=t(193),l=t.n(s);e.a=function(a){var e=a.icon,t=a.iconColorClass,n=void 0===t?"text-purple-600 dark:text-purple-100":t,s=a.bgColorClass,o=void 0===s?"bg-purple-100 dark:bg-purple-600":s,c=a.className,i=l()("rounded-full p-5",n,o,c);return r.a.createElement("div",{className:i},r.a.createElement(e,{className:"w-6 h-6"}))}},200:function(a,e,t){"use strict";var n=t(0),r=t.n(n),s=t(2);e.a=function(a){var e=a.title,t=a.value,n=a.children;return r.a.createElement(s.Card,null,r.a.createElement(s.CardBody,{className:"flex items-center"},n,r.a.createElement("div",null,r.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},e),r.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))))}},212:function(a,e,t){"use strict";e.a=[{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/lokesh_coder/128.jpg",name:"Chandler Jacobi",job:"Direct Security Executive",amount:989.4,status:"primary",date:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg",name:"Monserrat Marquardt",job:"Forward Accountability Producer",amount:471.44,status:"danger",date:"Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg",name:"Lonie Wyman",job:"Legacy Program Director",amount:934.24,status:"success",date:"Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg",name:"Corine Abernathy",job:"Chief Factors Planner",amount:351.28,status:"warning",date:"Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/operatino/128.jpg",name:"Lorenz Botsford",job:"Central Accountability Developer",amount:355.3,status:"neutral",date:"Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/akmur/128.jpg",name:"Everette Botsford",job:"Product Group Architect",amount:525.42,status:"success",date:"Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg",name:"Marilou Beahan",job:"Future Security Planner",amount:414.99,status:"success",date:"Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jerrybai1907/128.jpg",name:"Ceasar Sauer",job:"Direct Brand Specialist",amount:488,status:"primary",date:"Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg",name:"Rae McDermott",job:"Lead Branding Engineer",amount:502.69,status:"danger",date:"Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg",name:"Mable Steuber",job:"National Group Executive",amount:911.09,status:"danger",date:"Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg",name:"Julian Glover",job:"Global Branding Assistant",amount:656.94,status:"danger",date:"Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",name:"Duncan Toy",job:"Central Intranet Manager",amount:120.78,status:"danger",date:"Sun Nov 17 2019 11:59:50 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",name:"Blanche Friesen",job:"Forward Identity Executive",amount:676.95,status:"danger",date:"Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg",name:"Orion Koepp",job:"Global Accountability Strategist",amount:447.56,status:"danger",date:"Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg",name:"Dakota Vandervort",job:"Future Assurance Coordinator",amount:765.22,status:"danger",date:"Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/zaki3d/128.jpg",name:"Lily Collier",job:"Forward Configuration Orchestrator",amount:449.11,status:"danger",date:"Sun Aug 18 2019 14:52:01 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/evanshajed/128.jpg",name:"Kayleigh Schumm",job:"Central Division Agent",amount:65.54,status:"danger",date:"Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg",name:"General McGlynn",job:"Central Web Analyst",amount:30.51,status:"danger",date:"Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg",name:"Shayna Schumm",job:"Future Directives Engineer",amount:313.73,status:"danger",date:"Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",name:"Giovanna Sanford",job:"Dynamic Interactions Executive",amount:398.3,status:"danger",date:"Tue Oct 08 2019 17:08:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg",name:"Emie Mante",job:"Direct Factors Supervisor",amount:142.51,status:"danger",date:"Wed Jul 24 2019 19:17:16 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg",name:"Chance Muller",job:"Lead Usability Planner",amount:963.26,status:"danger",date:"Sun Dec 01 2019 14:04:10 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",name:"Armani Torphy",job:"Forward Functionality Analyst",amount:445.23,status:"danger",date:"Tue Dec 24 2019 13:28:36 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",name:"Braeden Ward",job:"Central Integration Director",amount:588.53,status:"danger",date:"Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kimcool/128.jpg",name:"Malcolm Price",job:"District Program Planner",amount:181.93,status:"danger",date:"Thu Oct 24 2019 07:09:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",name:"Susan Jast",job:"Future Paradigm Associate",amount:928.41,status:"danger",date:"Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg",name:"Torrey Reynolds",job:"Lead Security Agent",amount:447.37,status:"danger",date:"Mon Oct 28 2019 04:10:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg",name:"Travon Harber",job:"Legacy Marketing Facilitator",amount:422.48,status:"danger",date:"Sat Nov 09 2019 05:04:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",name:"Hattie Gutkowski",job:"Chief Configuration Supervisor",amount:714.34,status:"danger",date:"Tue Oct 22 2019 22:36:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg",name:"Demarco Lang",job:"Investor Program Designer",amount:536.92,status:"danger",date:"Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nasirwd/128.jpg",name:"Glennie Ziemann",job:"Dynamic Interactions Analyst",amount:597.25,status:"danger",date:"Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/juaumlol/128.jpg",name:"Alta Howe",job:"District Intranet Executive",amount:42.28,status:"danger",date:"Sat Oct 12 2019 22:57:22 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/victordeanda/128.jpg",name:"Sydnee Gottlieb",job:"Global Response Specialist",amount:868.92,status:"danger",date:"Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/baumannzone/128.jpg",name:"Arlene Schmitt",job:"Lead Metrics Consultant",amount:364.68,status:"danger",date:"Thu Oct 03 2019 08:47:32 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/chacky14/128.jpg",name:"Hilda Schoen",job:"National Solutions Facilitator",amount:260.91,status:"danger",date:"Wed Dec 04 2019 06:28:30 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg",name:"Chase Bahringer",job:"Dynamic Communications Designer",amount:454.61,status:"danger",date:"Mon Nov 25 2019 16:59:38 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg",name:"Lucile Hansen",job:"Customer Usability Facilitator",amount:982.22,status:"danger",date:"Sun Aug 25 2019 17:15:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg",name:"Mollie Heaney",job:"Forward Communications Director",amount:390.33,status:"danger",date:"Mon Jul 22 2019 01:45:19 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg",name:"Bennie Kuvalis",job:"Future Factors Agent",amount:456.64,status:"danger",date:"Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg",name:"Jodie Luettgen",job:"Customer Implementation Associate",amount:398.37,status:"danger",date:"Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg",name:"Bethel Quitzon",job:"Dynamic Web Strategist",amount:183.58,status:"danger",date:"Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg",name:"Jon Dietrich",job:"Legacy Creative Planner",amount:439.01,status:"danger",date:"Sun Dec 29 2019 11:11:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg",name:"Nakia Kihn",job:"Central Interactions Coordinator",amount:824.12,status:"danger",date:"Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg",name:"Assunta Grady",job:"Investor Operations Specialist",amount:172.97,status:"danger",date:"Tue Dec 17 2019 01:46:37 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",name:"Lukas Klocko",job:"Human Usability Associate",amount:515.74,status:"danger",date:"Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)"}]},243:function(a,e,t){"use strict";var n=t(0),r=t.n(n);e.a=function(a){var e=a.children,t=a.title;return r.a.createElement("div",{className:"min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"},r.a.createElement("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},t),e)}},252:function(a,e,t){"use strict";var n=t(0),r=t.n(n);e.a=function(a){var e=a.legends;return r.a.createElement("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"},e.map((function(a){return r.a.createElement("div",{className:"flex items-center",key:a.title},r.a.createElement("span",{className:"inline-block w-3 h-3 mr-1 ".concat(a.color," rounded-full")}),r.a.createElement("span",null,a.title))})))}},253:function(a,e,t){"use strict";t.d(e,"c",(function(){return n})),t.d(e,"e",(function(){return r})),t.d(e,"a",(function(){return s})),t.d(e,"d",(function(){return l})),t.d(e,"f",(function(){return o})),t.d(e,"b",(function(){return c}));var n=[{title:"Shirts",color:"bg-blue-500"},{title:"Shoes",color:"bg-teal-600"},{title:"Bags",color:"bg-purple-600"}],r=[{title:"Organic",color:"bg-teal-600"},{title:"Paid",color:"bg-purple-600"}],s=[{title:"Shoes",color:"bg-teal-600"},{title:"Bags",color:"bg-purple-600"}],l={data:{datasets:[{data:[33,33,33],backgroundColor:["#0694a2","#1c64f2","#7e3af2"],label:"Dataset 1"}],labels:["Shoes","Shirts","Bags"]},options:{responsive:!0,cutoutPercentage:80},legend:{display:!1}},o={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Organic",backgroundColor:"#0694a2",borderColor:"#0694a2",data:[43,48,40,54,67,73,70],fill:!1},{label:"Paid",fill:!1,backgroundColor:"#7e3af2",borderColor:"#7e3af2",data:[24,50,64,74,52,51,65]}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!1}},c={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Shoes",backgroundColor:"#0694a2",borderWidth:1,data:[-3,14,52,74,33,90,70]},{label:"Bags",backgroundColor:"#7e3af2",borderWidth:1,data:[66,33,43,12,54,62,84]}]},options:{responsive:!0},legend:{display:!1}}}}]);
//# sourceMappingURL=12.d91da5e8.chunk.js.map