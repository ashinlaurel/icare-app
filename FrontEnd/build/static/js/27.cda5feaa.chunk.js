(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[27],{1075:function(e,t,a){"use strict";a.r(t);var l=a(3),n=a.n(l),r=a(10),c=a(2),o=a(0),s=a.n(o),u=a(18),m=a.n(u),i=a(7),d=a.n(i),b=(a(111),a(15)),p=a(28),f=a(1),E=a(8),v=(a(93),a(30),a(29));t.default=function(){var e=Object(o.useContext)(v.a),t=(e.topheading,e.setTopHeading),a=Object(o.useState)(!1),l=Object(c.a)(a,2),u=(l[0],l[1],Object(o.useState)(1)),i=Object(c.a)(u,2),g=i[0],h=i[1],w=Object(o.useState)([]),y=Object(c.a)(w,2),x=y[0],T=y[1],O=Object(o.useState)(!0),j=Object(c.a)(O,2),C=j[0],N=j[1],k=Object(o.useState)(!0),S=Object(c.a)(k,2),B=(S[0],S[1],Object(o.useState)("")),M=Object(c.a)(B,2),A=M[0],L=M[1],R=Object(o.useState)(""),_=Object(c.a)(R,2),D=_[0],I=(_[1],Object(o.useState)("")),U=Object(c.a)(I,2),F=U[0],H=U[1],z=Object(o.useState)(""),P=Object(c.a)(z,2),Y=P[0],K=(P[1],Object(o.useState)("")),q=Object(c.a)(K,2),G=q[0],J=(q[1],Object(o.useState)({})),V=Object(c.a)(J,2),W=V[0],X=(V[1],Object(o.useState)("")),Q=Object(c.a)(X,2),Z=(Q[0],Q[1],Object(o.useState)("")),$=Object(c.a)(Z,2),ee=($[0],$[1],Object(o.useState)("")),te=Object(c.a)(ee,2),ae=te[0],le=te[1],ne=Object(o.useState)(""),re=Object(c.a)(ne,2),ce=re[0],oe=re[1],se=Object(o.useState)(20),ue=Object(c.a)(se,2),me=ue[0],ie=ue[1],de=Object(o.useState)(-1),be=Object(c.a)(de,2),pe=be[0],fe=be[1];return Object(o.useEffect)((function(){return t("Purchase History"),function(){t("")}}),[]),Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getter called"),t={pages:{page:g,limit:10},filters:{systype:A,location:F,searchquery:ae,vendorsearchquery:ce,stocktype:D}},e.prev=2,e.next=5,d()({url:"".concat(E.a,"/inventory/").concat(b.a.getId(),"/getallhistory"),method:"POST",data:t});case 5:a=e.sent,console.log(a.data.out),ie(a.data.total),T(a.data.out),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}()()}),[g,F,Y,G,A,C,D]),console.log(W),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"mb-64 mt-4"},s.a.createElement("div",{className:""},s.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:A,onChange:function(e){L(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Type"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"item"},"Item"),s.a.createElement("option",{value:"full system"},"Full System")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:F,onChange:function(e){H(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Location"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),s.a.createElement("option",{value:"Kottayam"},"Kottayam"),s.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"block relative xl:ml-64"},s.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},s.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},s.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N(!C)}},s.a.createElement("input",{value:ae,onChange:function(e){return le(e.target.value)},placeholder:"Search Invoice Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))),s.a.createElement("div",{class:"block relative xl:ml-64"},s.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},s.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},s.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N(!C)}},s.a.createElement("input",{value:ce,onChange:function(e){return oe(e.target.value)},placeholder:"Search Vendor",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),s.a.createElement(f.TableContainer,{className:"mt-4"},s.a.createElement(f.Table,null,s.a.createElement(f.TableHeader,null,s.a.createElement("tr",{className:"flex flex-row justify-between"},s.a.createElement(f.TableCell,null," Type"),s.a.createElement(f.TableCell,null,"Vendor"),s.a.createElement(f.TableCell,null,"Inventory No."),s.a.createElement(f.TableCell,null,"Date"),s.a.createElement(f.TableCell,null,"Location"),s.a.createElement(f.TableCell,null,"No.Items"),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"cursor-pointer",onClick:function(){return fe(-1)}},"Items")))),s.a.createElement(f.TableBody,null,x.map((function(e,t){return s.a.createElement("div",{className:"flex flex-col justify-around"},s.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ".concat(pe==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){fe(t)}},s.a.createElement(f.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.purchtype)))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.vendor)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.invnumber)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"}," ",m()(e.invdate).format("DD/MM/YYYY"))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.location)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.invItems.length)),s.a.createElement(f.TableCell,{className:"text-center "},s.a.createElement(f.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(pe),fe(pe==t?-1:t)},className:"rounded-lg m-1"},s.a.createElement(p.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),pe==t?(a=e.invItems,s.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3 "},s.a.createElement("div",{className:"mb- mt-4"},s.a.createElement(f.TableContainer,{className:"mt-4"},s.a.createElement(f.Table,null,s.a.createElement(f.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(f.TableCell,null,"Category"),s.a.createElement(f.TableCell,null,"Description"),s.a.createElement(f.TableCell,null,"Serial Number"),s.a.createElement(f.TableCell,null,"Location"),s.a.createElement(f.TableCell,null,"Invoice Number"),s.a.createElement(f.TableCell,null,"Inv Date"),s.a.createElement(f.TableCell,null,"Wty Expiry"),s.a.createElement(f.TableCell,null,"Status"))),s.a.createElement(f.TableBody,null,a.map((function(e,t){return s.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(pe==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){fe(e._id)}},s.a.createElement(f.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.type)))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.name)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.sno)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.location)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.invnumber)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},m()(e.invdate).format("DD/MM/YY"))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.expirydate)),s.a.createElement(f.TableCell,null,s.a.createElement(f.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)))})))))))):null);var a})))),s.a.createElement(f.TableFooter,null,s.a.createElement(f.Pagination,{totalResults:me,resultsPerPage:10,label:"Table navigation",onChange:function(e){h(e)}})))))}},111:function(e,t,a){(function(a){var l,n,r;n=[],void 0===(r="function"===typeof(l=function(){"use strict";function t(e,t,a){var l=new XMLHttpRequest;l.open("GET",e),l.responseType="blob",l.onload=function(){o(l.response,t,a)},l.onerror=function(){console.error("could not download file")},l.send()}function l(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,a,c){var o=r.URL||r.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?n(s):l(s.href)?t(e,a,c):n(s,s.target="_blank")):(s.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(s.href)}),4e4),setTimeout((function(){n(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,r){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),a);else if(l(e))t(e,a,r);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){n(c)}))}}:function(e,a,l,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,l);var o="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&s||c)&&"undefined"!=typeof FileReader){var m=new FileReader;m.onloadend=function(){var e=m.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},m.readAsDataURL(e)}else{var i=r.URL||r.webkitURL,d=i.createObjectURL(e);n?n.location=d:location.href=d,n=null,setTimeout((function(){i.revokeObjectURL(d)}),4e4)}});r.saveAs=o.saveAs=o,e.exports=o})?l.apply(t,n):l)||(e.exports=r)}).call(this,a(52))},87:function(e,t,a){},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(3),n=a.n(l),r=a(10),c=a(2),o=a(0),s=a.n(o),u=a(7),m=a.n(u),i=a(1),d=a(91),b=(a(87),a(8));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,u=e.setUnit,p=e.account,f=e.setAccount,E=e.customer,v=e.setCustomer,g=e.refresh,h=e.setRefresh,w=Object(o.useState)([]),y=Object(c.a)(w,2),x=y[0],T=y[1],O=Object(o.useState)([]),j=Object(c.a)(O,2),C=j[0],N=j[1],k=Object(o.useState)([]),S=Object(c.a)(k,2),B=S[0],M=S[1],A=Object(o.useState)(0),L=Object(c.a)(A,2),R=L[0],_=L[1],D=Object(o.useState)(""),I=Object(c.a)(D,2),U=I[0],F=I[1],H=function(e){F(e.target.value)},z=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:U,role:1},e.prev=2,e.next=5,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),T(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:U,role:1},e.prev=1,e.next=4,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),T(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var P=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),f({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),N(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),f({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),M(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),u({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(i.ModalHeader,null,"Select"," ",0==R?s.a.createElement(s.a.Fragment,null,"Customer"):1==R?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(i.ModalBody,null,s.a.createElement(d.d,{selectedIndex:R,onSelect:function(e){return _(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:z},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:H}))))),s.a.createElement(i.TableBody,null,x.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return P(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Account"))),s.a.createElement(i.TableBody,null,C.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Unit"))),s.a.createElement(i.TableBody,null,B.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return K(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(i.TableFooter,null)))),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName)),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!g)}},"Select"))))}}}]);
//# sourceMappingURL=27.cda5feaa.chunk.js.map