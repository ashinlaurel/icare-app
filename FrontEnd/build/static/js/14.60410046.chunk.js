/*! For license information please see 14.60410046.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[14],{1136:function(e,a,t){"use strict";t.r(a);var n=t(4),r=t.n(n),l=t(13),c=t(2),o=t(0),s=t.n(o),u=t(23),i=t.n(u),m=t(8),d=t.n(m),p=t(19),b=(t(162),t(35),t(168),t(185),t(3)),f=(t(189),t(10)),E=(t(174),t(170),t(5)),g=t(37);a.default=function(){var e=Object(o.useContext)(g.a),a=(e.bbaropen,e.setBBarOpen,e.setAssetDetails,e.assetdetails,Object(o.useState)(0)),t=Object(c.a)(a,2),n=t[0],u=t[1],m=Object(E.i)(),h=(m.id,m.accountid,m.unitid),w=Object(o.useState)(!1),v=Object(c.a)(w,2),T=(v[0],v[1],Object(o.useState)(1)),j=Object(c.a)(T,2),S=j[0],y=j[1],C=Object(o.useState)([]),k=Object(c.a)(C,2),M=k[0],x=k[1],O=Object(o.useState)(!1),N=Object(c.a)(O,2),B=N[0],D=N[1],G=Object(o.useState)(!1),z=Object(c.a)(G,2),I=z[0],F=z[1],A=Object(o.useState)(!1),P=Object(c.a)(A,2),_=(P[0],P[1],Object(o.useState)(!0)),L=Object(c.a)(_,2),J=L[0],U=L[1],H=Object(o.useState)(!0),R=Object(c.a)(H,2),W=(R[0],R[1]),Y=Object(o.useState)(""),K=Object(c.a)(Y,2),V=K[0],q=(K[1],Object(o.useState)("")),Q=Object(c.a)(q,2),Z=Q[0],X=Q[1],$=Object(o.useState)({_id:"",unitName:""}),ee=Object(c.a)($,2),ae=(ee[0],ee[1],Object(o.useState)({_id:"",customerName:""})),te=Object(c.a)(ae,2),ne=(te[0],te[1],Object(o.useState)({_id:"",accountName:""})),re=Object(c.a)(ne,2),le=(re[0],re[1],Object(o.useState)({})),ce=Object(c.a)(le,2),oe=ce[0],se=ce[1],ue=Object(o.useState)(""),ie=Object(c.a)(ue,2),me=ie[0],de=ie[1],pe=Object(o.useState)(""),be=Object(c.a)(pe,2),fe=be[0],Ee=be[1],ge=Object(o.useState)(""),he=Object(c.a)(ge,2),we=he[0],ve=he[1],Te=Object(o.useState)(0),je=Object(c.a)(Te,2),Se=je[0],ye=je[1];return Object(o.useEffect)((function(){!function(){var e=Object(l.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={pages:{page:S,limit:10},filters:{business:V,producttype:Z,unitId:h,searchtype:me,searchquery:we}},e.prev=1,e.next=4,d()({url:"".concat(f.a,"/asset/").concat(p.a.getId(),"/getall"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data.out),x(t.data.out),ye(t.data.total),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()()}),[S,V,Z,J]),console.log(oe),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"mb-64"},s.a.createElement("div",{className:""},s.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 "},s.a.createElement("div",{className:"relative "},s.a.createElement("button",{onClick:function(){D(!B)},className:"shadow-md z-50 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none","aria-label":"Notifications","aria-haspopup":"true"},Z||"Pick Product"),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),s.a.createElement(b.Dropdown,{isOpen:B,onClose:function(){return D(!1)}},s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("")}},s.a.createElement("span",null,"All")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Console")}},s.a.createElement("span",null,"Console")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("DMP")}},s.a.createElement("span",null,"DMP")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Inkjet")}},s.a.createElement("span",null,"Inkjet")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("KVM")}},s.a.createElement("span",null,"KVM")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Laptop")}},s.a.createElement("span",null,"Laptop")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Laser")}},s.a.createElement("span",null,"Laser")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("LMP")}},s.a.createElement("span",null,"LMP")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Module")}},s.a.createElement("span",null,"Module")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Router")}},s.a.createElement("span",null,"Router")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Scanner")}},s.a.createElement("span",null,"Scanner")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Server")}},s.a.createElement("span",null,"Server")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Desktop")}},s.a.createElement("span",null,"Desktop")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Storage")}},s.a.createElement("span",null,"Storage")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Switch")}},s.a.createElement("span",null,"Switch")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("UPS")}},s.a.createElement("span",null,"UPS")),s.a.createElement(b.DropdownItem,{onClick:function(){D(!1),X("Others")}},s.a.createElement("span",null,"Others")))),s.a.createElement("div",{className:"relative "},s.a.createElement("button",{onClick:function(){F(!I)},className:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none","aria-label":"Notifications","aria-haspopup":"true"},me?fe:"Pick Search Type"),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),s.a.createElement(b.Dropdown,{isOpen:I,onClose:function(){return F(!1)}},s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de(""),Ee(""),W(!0),ve(""),U(!J)}},s.a.createElement("span",null,"All")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("keyboardsno"),Ee("Keyboard Serial"),W(!1)}},s.a.createElement("span",null,"Keyboard Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("mousesno"),Ee("Mouse Serial"),W(!1)}},s.a.createElement("span",null,"Mouse Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("motherboardsno"),Ee("Motherboard Serial"),W(!1)}},s.a.createElement("span",null,"Motherboard Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("monitorsno"),Ee("Monitor Serial"),W(!1)}},s.a.createElement("span",null,"Monitor Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("hddsno"),Ee("HDD Serial"),W(!1)}},s.a.createElement("span",null,"HDD Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("cpusno"),Ee("CPU Serial"),W(!1)}},s.a.createElement("span",null,"CPU Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("ramsno"),Ee("Ram Serial"),W(!1)}},s.a.createElement("span",null,"RAM Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("smpssno"),Ee("SMPS Serial"),W(!1)}},s.a.createElement("span",null,"SMPS Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("fansno"),Ee("Fan Serial"),W(!1)}},s.a.createElement("span",null,"Fan Serial")),s.a.createElement(b.DropdownItem,{onClick:function(){F(!1),de("opticaldrivesno"),Ee("Optical Drive Serial"),W(!1)}},s.a.createElement("span",null,"Optical Drive Serial")))),s.a.createElement("div",{class:"block relative xl:ml-64"},s.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},s.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},s.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),U(!J)}},s.a.createElement("input",{value:we,onChange:function(e){return ve(e.target.value)},placeholder:"Search",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),s.a.createElement(b.TableContainer,{className:"mt-4"},s.a.createElement(b.Table,null,s.a.createElement(b.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(b.TableCell,null,"Customer"),s.a.createElement(b.TableCell,null,"Unit"),s.a.createElement(b.TableCell,null,"Business"),s.a.createElement(b.TableCell,null,"Product"),s.a.createElement(b.TableCell,null,"Product Serial"),s.a.createElement(b.TableCell,null,"Contract From"),s.a.createElement(b.TableCell,null,"Contract To"),s.a.createElement(b.TableCell,null,"Purchase Number"),s.a.createElement(b.TableCell,null,"Purchase Date"))),s.a.createElement(b.TableBody,null,M.map((function(e,a){return s.a.createElement(b.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(n==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){u(e._id),se(e)}},s.a.createElement(b.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.customerName),s.a.createElement("p",{className:"text-xs text-gray-600 dark:text-gray-400"},e.accountName)))),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.unitName)),s.a.createElement(b.TableCell,null,s.a.createElement(b.Badge,{type:"AMC"==e.business?"primary":"success"},e.business)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.producttype)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.product.serialno)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},i()(e.contractfrom).format("DD/MM/YYYY"))),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},i()(e.contractto).format("DD/MM/YYYY"))),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.ponumber)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},i()(e.podate).format("DD/MM/YYYY"))))})))),s.a.createElement(b.TableFooter,null,s.a.createElement(b.Pagination,{totalResults:Se,resultsPerPage:10,label:"Table navigation",onChange:function(e){y(e)}})))))}},163:function(e,a,t){},166:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},168:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(166),c=t.n(l);a.a=function(e){var a=e.icon,t=e.iconColorClass,n=void 0===t?"text-purple-600 dark:text-purple-100":t,l=e.bgColorClass,o=void 0===l?"bg-purple-100 dark:bg-purple-600":l,s=e.className,u=c()("rounded-full p-5",n,o,s);return r.a.createElement("div",{className:u},r.a.createElement(a,{className:"w-6 h-6"}))}},170:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(4),r=t.n(n),l=t(13),c=t(2),o=t(0),s=t.n(o),u=t(8),i=t.n(u),m=t(3),d=t(169),p=(t(163),t(10));function b(e){var a=e.isModalOpen,t=e.setIsModalOpen,n=e.unit,u=e.setUnit,b=e.account,f=e.setAccount,E=e.customer,g=e.setCustomer,h=e.refresh,w=e.setRefresh,v=e.theunitdetails,T=e.setTheUnitDetails,j=Object(o.useState)([]),S=Object(c.a)(j,2),y=S[0],C=S[1],k=Object(o.useState)([]),M=Object(c.a)(k,2),x=M[0],O=M[1],N=Object(o.useState)([]),B=Object(c.a)(N,2),D=B[0],G=B[1],z=Object(o.useState)(0),I=Object(c.a)(z,2),F=I[0],A=I[1],P=Object(o.useState)(""),_=Object(c.a)(P,2),L=_[0],J=_[1],U=function(e){J(e.target.value)},H=function(){var e=Object(l.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:L,role:1},e.prev=2,e.next=5,i()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 5:n=e.sent,console.log(n.data),C(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(l.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:L,role:1},e.prev=1,e.next=4,i()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),C(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var R=function(){var e=Object(l.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:a._id,customerName:a.name}),f({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.a,"/customer/accounts"),{customerId:a._id});case 6:t=e.sent,console.log(t.data),O(t.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),f({_id:a._id,accountName:a.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.a,"/customer/units"),{accountId:a._id});case 6:t=e.sent,console.log(t.data),G(t.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(a),u({_id:a._id,contactPerson:a.contactPerson,contactNo:a.contactNo,unitName:a.unitName});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(m.ModalHeader,null,"Select"," ",0==F?s.a.createElement(s.a.Fragment,null,"Customer"):1==F?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(m.ModalBody,{className:"overflow-y-scroll h-64"},s.a.createElement(d.d,{selectedIndex:F,onSelect:function(e){return A(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,s.a.createElement("form",{onSubmit:H},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:U}))))),s.a.createElement(m.TableBody,null,y.map((function(e,a){return s.a.createElement(m.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return R(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Account"))),s.a.createElement(m.TableBody,null,x.map((function(e,a){return s.a.createElement(m.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return W(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Unit"))),s.a.createElement(m.TableBody,null,D.map((function(e,a){return s.a.createElement(m.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(m.TableFooter,null))))),s.a.createElement(m.ModalFooter,null,s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName),s.a.createElement(m.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1),w(!h),v&&T(n),O([]),G([])}},"Select"))))}},174:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(4),r=t.n(n),l=t(13),c=t(2),o=t(0),s=t.n(o),u=t(8),i=t.n(u),m=t(3),d=t(169),p=(t(163),t(10));function b(e){var a=e.isModalOpen,t=e.setIsModalOpen,n=e.unit,u=e.setUnit,b=e.account,f=e.setAccount,E=e.customer,g=e.setCustomer,h=Object(o.useState)([]),w=Object(c.a)(h,2),v=w[0],T=w[1],j=Object(o.useState)([]),S=Object(c.a)(j,2),y=S[0],C=S[1],k=Object(o.useState)([]),M=Object(c.a)(k,2),x=M[0],O=M[1],N=Object(o.useState)(0),B=Object(c.a)(N,2),D=B[0],G=B[1],z=Object(o.useState)(""),I=Object(c.a)(z,2),F=I[0],A=I[1],P=function(e){A(e.target.value)},_=function(){var e=Object(l.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:F,role:1},e.prev=2,e.next=5,i()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 5:n=e.sent,console.log(n.data),T(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(l.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:F,role:1},e.prev=1,e.next=4,i()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),T(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var L=function(){var e=Object(l.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:a._id,customerName:a.name}),f({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.a,"/customer/accounts"),{customerId:a._id});case 6:t=e.sent,console.log(t.data),C(t.data),G(1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),f({_id:a._id,accountName:a.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.a,"/customer/units"),{accountId:a._id});case 6:t=e.sent,console.log(t.data),O(t.data),G(2),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),u({_id:a._id,unitName:a.unitName});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(m.ModalHeader,null,"Select"," ",0==D?s.a.createElement(s.a.Fragment,null,"Customer"):1==D?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(m.ModalBody,{className:"overflow-y-scroll h-64"},s.a.createElement(d.d,{selectedIndex:D,onSelect:function(e){return G(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,s.a.createElement("form",{onSubmit:_},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:P}))))),s.a.createElement(m.TableBody,null,v.map((function(e,a){return s.a.createElement(m.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Account"))),s.a.createElement(m.TableBody,null,y.map((function(e,a){return s.a.createElement(m.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return J(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,{className:" w-full overflow-y-scroll"},s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Unit"))),s.a.createElement(m.TableBody,null,x.map((function(e,a){return s.a.createElement(m.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return U(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(m.TableFooter,null))))),s.a.createElement(m.ModalFooter,null,s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName),s.a.createElement(m.Button,{className:"w-full sm:w-auto",onClick:function(){return t(!1)}},"Select"))))}},185:function(e,a,t){"use strict";a.a=[{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/lokesh_coder/128.jpg",name:"Chandler Jacobi",job:"Direct Security Executive",amount:989.4,status:"primary",date:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg",name:"Monserrat Marquardt",job:"Forward Accountability Producer",amount:471.44,status:"danger",date:"Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg",name:"Lonie Wyman",job:"Legacy Program Director",amount:934.24,status:"success",date:"Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg",name:"Corine Abernathy",job:"Chief Factors Planner",amount:351.28,status:"warning",date:"Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/operatino/128.jpg",name:"Lorenz Botsford",job:"Central Accountability Developer",amount:355.3,status:"neutral",date:"Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/akmur/128.jpg",name:"Everette Botsford",job:"Product Group Architect",amount:525.42,status:"success",date:"Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nateschulte/128.jpg",name:"Marilou Beahan",job:"Future Security Planner",amount:414.99,status:"success",date:"Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jerrybai1907/128.jpg",name:"Ceasar Sauer",job:"Direct Brand Specialist",amount:488,status:"primary",date:"Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg",name:"Rae McDermott",job:"Lead Branding Engineer",amount:502.69,status:"danger",date:"Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg",name:"Mable Steuber",job:"National Group Executive",amount:911.09,status:"danger",date:"Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg",name:"Julian Glover",job:"Global Branding Assistant",amount:656.94,status:"danger",date:"Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",name:"Duncan Toy",job:"Central Intranet Manager",amount:120.78,status:"danger",date:"Sun Nov 17 2019 11:59:50 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",name:"Blanche Friesen",job:"Forward Identity Executive",amount:676.95,status:"danger",date:"Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg",name:"Orion Koepp",job:"Global Accountability Strategist",amount:447.56,status:"danger",date:"Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg",name:"Dakota Vandervort",job:"Future Assurance Coordinator",amount:765.22,status:"danger",date:"Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/zaki3d/128.jpg",name:"Lily Collier",job:"Forward Configuration Orchestrator",amount:449.11,status:"danger",date:"Sun Aug 18 2019 14:52:01 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/evanshajed/128.jpg",name:"Kayleigh Schumm",job:"Central Division Agent",amount:65.54,status:"danger",date:"Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg",name:"General McGlynn",job:"Central Web Analyst",amount:30.51,status:"danger",date:"Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg",name:"Shayna Schumm",job:"Future Directives Engineer",amount:313.73,status:"danger",date:"Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",name:"Giovanna Sanford",job:"Dynamic Interactions Executive",amount:398.3,status:"danger",date:"Tue Oct 08 2019 17:08:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg",name:"Emie Mante",job:"Direct Factors Supervisor",amount:142.51,status:"danger",date:"Wed Jul 24 2019 19:17:16 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg",name:"Chance Muller",job:"Lead Usability Planner",amount:963.26,status:"danger",date:"Sun Dec 01 2019 14:04:10 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",name:"Armani Torphy",job:"Forward Functionality Analyst",amount:445.23,status:"danger",date:"Tue Dec 24 2019 13:28:36 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",name:"Braeden Ward",job:"Central Integration Director",amount:588.53,status:"danger",date:"Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kimcool/128.jpg",name:"Malcolm Price",job:"District Program Planner",amount:181.93,status:"danger",date:"Thu Oct 24 2019 07:09:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",name:"Susan Jast",job:"Future Paradigm Associate",amount:928.41,status:"danger",date:"Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg",name:"Torrey Reynolds",job:"Lead Security Agent",amount:447.37,status:"danger",date:"Mon Oct 28 2019 04:10:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg",name:"Travon Harber",job:"Legacy Marketing Facilitator",amount:422.48,status:"danger",date:"Sat Nov 09 2019 05:04:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",name:"Hattie Gutkowski",job:"Chief Configuration Supervisor",amount:714.34,status:"danger",date:"Tue Oct 22 2019 22:36:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg",name:"Demarco Lang",job:"Investor Program Designer",amount:536.92,status:"danger",date:"Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nasirwd/128.jpg",name:"Glennie Ziemann",job:"Dynamic Interactions Analyst",amount:597.25,status:"danger",date:"Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/juaumlol/128.jpg",name:"Alta Howe",job:"District Intranet Executive",amount:42.28,status:"danger",date:"Sat Oct 12 2019 22:57:22 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/victordeanda/128.jpg",name:"Sydnee Gottlieb",job:"Global Response Specialist",amount:868.92,status:"danger",date:"Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/baumannzone/128.jpg",name:"Arlene Schmitt",job:"Lead Metrics Consultant",amount:364.68,status:"danger",date:"Thu Oct 03 2019 08:47:32 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/chacky14/128.jpg",name:"Hilda Schoen",job:"National Solutions Facilitator",amount:260.91,status:"danger",date:"Wed Dec 04 2019 06:28:30 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg",name:"Chase Bahringer",job:"Dynamic Communications Designer",amount:454.61,status:"danger",date:"Mon Nov 25 2019 16:59:38 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg",name:"Lucile Hansen",job:"Customer Usability Facilitator",amount:982.22,status:"danger",date:"Sun Aug 25 2019 17:15:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg",name:"Mollie Heaney",job:"Forward Communications Director",amount:390.33,status:"danger",date:"Mon Jul 22 2019 01:45:19 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg",name:"Bennie Kuvalis",job:"Future Factors Agent",amount:456.64,status:"danger",date:"Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg",name:"Jodie Luettgen",job:"Customer Implementation Associate",amount:398.37,status:"danger",date:"Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg",name:"Bethel Quitzon",job:"Dynamic Web Strategist",amount:183.58,status:"danger",date:"Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg",name:"Jon Dietrich",job:"Legacy Creative Planner",amount:439.01,status:"danger",date:"Sun Dec 29 2019 11:11:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg",name:"Nakia Kihn",job:"Central Interactions Coordinator",amount:824.12,status:"danger",date:"Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg",name:"Assunta Grady",job:"Investor Operations Specialist",amount:172.97,status:"danger",date:"Tue Dec 17 2019 01:46:37 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",name:"Lukas Klocko",job:"Human Usability Associate",amount:515.74,status:"danger",date:"Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)"}]}}]);
//# sourceMappingURL=14.60410046.chunk.js.map