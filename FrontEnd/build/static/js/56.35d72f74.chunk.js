(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[56],{1221:function(e,t,a){"use strict";a.r(t);var l=a(16),n=a(5),r=a.n(n),o=a(12),c=a(3),s=a(0),u=a.n(s),i=a(21),m=a.n(i),d=a(9),b=a.n(d),p=a(211),f=a(18),g=a(36),E=a(2),v=a(10),w=a(43),h=a(37),y=a(1);t.default=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(0),d=Object(c.a)(i,2),x=d[0],T=d[1],C=Object(s.useState)(-1),O=Object(c.a)(C,2),N=O[0],j=O[1],k=Object(s.useState)(!1),S=Object(c.a)(k,2),L=S[0],R=S[1],D=Object(s.useState)({}),M=Object(c.a)(D,2),B=M[0],A=M[1],z=Object(s.useState)(0),I=Object(c.a)(z,2),_=I[0],F=I[1],H=Object(s.useContext)(w.a),K=(H.topheading,H.setTopHeading),U=Object(s.useState)(!1),P=Object(c.a)(U,2),Y=(P[0],P[1],Object(s.useState)(1)),q=Object(c.a)(Y,2),G=q[0],J=q[1],V=Object(s.useState)([{CMRRItems:[]}]),X=Object(c.a)(V,2),W=X[0],Q=X[1],Z=Object(s.useState)(!0),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=Object(s.useState)(!0),le=Object(c.a)(ae,2),ne=(le[0],le[1],Object(s.useState)("")),re=Object(c.a)(ne,2),oe=re[0],ce=re[1],se=Object(s.useState)(""),ue=Object(c.a)(se,2),ie=ue[0],me=ue[1],de=Object(s.useState)(""),be=Object(c.a)(de,2),pe=be[0],fe=be[1],ge=Object(s.useState)(""),Ee=Object(c.a)(ge,2),ve=Ee[0],we=(Ee[1],Object(s.useState)("Normal")),he=Object(c.a)(we,2),ye=he[0],xe=he[1],Te=Object(s.useState)({}),Ce=Object(c.a)(Te,2),Oe=Ce[0],Ne=(Ce[1],Object(s.useState)("")),je=Object(c.a)(Ne,2),ke=(je[0],je[1],Object(s.useState)("")),Se=Object(c.a)(ke,2),Le=(Se[0],Se[1],Object(s.useState)("")),Re=Object(c.a)(Le,2),De=Re[0],Me=Re[1],Be=Object(s.useState)(20),Ae=Object(c.a)(Be,2),ze=Ae[0],Ie=Ae[1],_e=Object(s.useState)(-1),Fe=Object(c.a)(_e,2),He=Fe[0],Ke=Fe[1];Object(s.useEffect)((function(){return K("LST History"),function(){K("")}}),[]),Object(s.useEffect)((function(){!function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getter called"),t={pages:{page:G,limit:10},filters:{from:ie,to:pe,status:oe,LSTtype:ye,isDeleted:"false",searchquery:De}},"Deleted"==oe&&(t.filters.status="",t.filters.isDeleted="true"),e.prev=3,e.next=6,b()({url:"".concat(v.a,"/lst/").concat(f.a.getId(),"/getall"),method:"POST",data:t});case 6:a=e.sent,console.log(a.data.out),Ie(a.data.total),Q(a.data.out),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}()()}),[G,ie,pe,ve,oe,ee,ye]),console.log(Oe);var Ue=function(){var e=Object(o.a)(r.a.mark((function e(t,a,l,n){var o,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={id:t,update:{CourierNumber:l,DocketType:n},despatchedBy:f.a.getName()},e.next=3,b()({url:"".concat(v.a,"/lst/").concat(f.a.getId(),"/downloadpdf"),method:"POST",data:o,responseType:"blob"});case 3:c=e.sent,s=new Blob([c.data],{type:"application/pdf"}),R(!1),Object(p.saveAs)(s,"LST_".concat(a,".pdf"));case 7:case"end":return e.stop()}}),e)})));return function(t,a,l,n){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(E.Modal,{isOpen:a,onClose:function(){return n(!1)}},u.a.createElement(E.ModalHeader,null,"Are you sure you want to delete!"),u.a.createElement(E.ModalBody,null),u.a.createElement(E.ModalFooter,null,u.a.createElement(E.Button,{className:"w-full sm:w-auto",onClick:Object(o.a)(r.a.mark((function e(){var t,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=W[N].invItems,console.log(t),t.map(function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t._id,update:{location:W[N].from}},console.log("PAYLOAD",a),e.prev=2,e.next=5,b()({url:"".concat(v.a,"/inventory/").concat(f.a.getId(),"/invupdate"),method:"POST",data:a});case 5:console.log("Done"),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(2),console.log(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()),e.prev=3,e.next=6,b()({url:"".concat(v.a,"/lst/").concat(f.a.getId(),"/delete"),method:"POST",data:{id:x}});case 6:a=e.sent,console.log(a.data),l=W.filter((function(e){return e._id!=x})),Q(l),n(!1),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(3),e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))},"Confirm Delete")))),(console.log(B),u.a.createElement(u.a.Fragment,null,u.a.createElement(E.Modal,{isOpen:L,onClose:function(){return R(!1)}},u.a.createElement(E.ModalHeader,null,"Download LST"),u.a.createElement(E.ModalBody,null,W[_]?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"flex flex-row"},u.a.createElement("div",{className:" my-2 ml-5 mr-2 w-full"},"Docket Type:"),u.a.createElement("input",{value:W[_].DocketType,onChange:function(e){var t=Object(l.a)(W);t[_].DocketType=e.target.value,Q(t)},class:"w-full mr-5 shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})),u.a.createElement("div",{className:"flex flex-row my-2"},u.a.createElement("div",{className:"my-2 ml-5 mr-2 w-full"},"Courier Number:"),u.a.createElement("input",{value:W[_].CourierNumber,onChange:function(e){var t=Object(l.a)(W);t[_].CourierNumber=e.target.value,Q(t)},class:"w-full mr-5  shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))):null),u.a.createElement(E.ModalFooter,null,u.a.createElement(E.Button,{className:"w-full sm:w-auto",onClick:Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ue(W[_]._id,W[_].LSTNo,W[_].CourierNumber,W[_].DocketType);case 1:case"end":return e.stop()}}),e)})))},"Download"))))),u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:oe,onChange:function(e){ce(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Status"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"In Transit"},"In Transit"),u.a.createElement("option",{value:"Received"},"Received"),u.a.createElement("option",{value:"Deleted"},"Deleted")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ye,onChange:function(e){xe(e.target.value)}},u.a.createElement("option",{value:"",selected:!0},"LST type"),u.a.createElement("option",{value:"Normal"},"Normal"),u.a.createElement("option",{value:"CMRR"},"CMRR"),u.a.createElement("option",{value:"Customer"},"Customer")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ie,onChange:function(e){me(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"From Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:pe,onChange:function(e){fe(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"To Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode"),u.a.createElement("option",{value:"Vendor"},"Vendor")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),te(!ee)}},u.a.createElement("input",{value:De,onChange:function(e){return Me(e.target.value)},placeholder:"Search LST Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(E.TableContainer,{className:"mt-4"},u.a.createElement(E.Table,null,u.a.createElement(E.TableHeader,null,u.a.createElement("tr",{className:""},u.a.createElement(E.TableCell,null,"No"),u.a.createElement(E.TableCell,null,"From"),u.a.createElement(E.TableCell,null,"To"),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:""},"Date")," "),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:""},"Num")," "),u.a.createElement(E.TableCell,null," Report"),0==f.a.getRole()?u.a.createElement(E.TableCell,null," Delete"):null,u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"cursor-pointer",onClick:function(){return Ke(-1)}},"Items")))),u.a.createElement(E.TableBody,null,W.map((function(e,t){return u.a.createElement(u.a.Fragment,null,u.a.createElement(E.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600   ".concat(He==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},u.a.createElement(E.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.LSTNo)))),u.a.createElement(E.TableCell,{className:""},u.a.createElement("span",{className:" "},e.from)),u.a.createElement(E.TableCell,{className:"  "},u.a.createElement("span",{className:"  "},e.vendorId?e.vendorName:e.to)),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"}," ",m()(e.date).format("DD/MM/YYYY"))),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Normal"==e.LSTtype||"Customer"==e.LSTtype?e.invItems.length:e.CMRRItems.length)),u.a.createElement(E.TableCell,{className:" "},u.a.createElement(E.Button,{layout:"outline","aria-label":"DropDown",onClick:function(){console.log("dwlod"),A(e),R(!0),F(t)},className:"rounded-lg m-1"},"Download")),0==f.a.getRole()||15==f.a.getRole()?u.a.createElement(E.TableCell,{className:" "},u.a.createElement(E.Button,{layout:"link",size:"icon","aria-label":"Edit"},u.a.createElement(y.b,{key:e._id,to:"/app/lst/update/".concat(e._id)},u.a.createElement(g.EditIcon,{className:"w-5 h-5 mx-2","aria-hidden":"true"}))," "),u.a.createElement(E.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:Object(o.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("delete LST"),n(!0),T(e._id),j(t);case 4:case"end":return a.stop()}}),a)})))},u.a.createElement(g.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"}))):null,u.a.createElement(E.TableCell,{className:" "},u.a.createElement(E.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(He),Ke(-1!=He?-1:t)},className:"rounded-lg m-1"},u.a.createElement(g.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),u.a.createElement(E.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 relative   ".concat(He==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},u.a.createElement(E.TableCell,{className:"absolute w-full m-0"},He==t?function(e,t,a,l){return u.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3"},"Customer"==a?u.a.createElement("div",null,"Customer:",t):null,u.a.createElement("div",{className:"mb- mt-4"},u.a.createElement(E.TableContainer,{className:"mt-4"},u.a.createElement(E.Table,null,u.a.createElement(E.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(E.TableCell,null,"Type"),u.a.createElement(E.TableCell,null,"Name"),u.a.createElement(E.TableCell,null,"Serial Number"),u.a.createElement(E.TableCell,null,"Location"),u.a.createElement(E.TableCell,null,"Inv Number"),u.a.createElement(E.TableCell,null,"Condition"))),u.a.createElement(E.TableBody,null,"Normal"==a||"Customer"==a?u.a.createElement(u.a.Fragment,null,e.map((function(e,t){return u.a.createElement(E.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(He==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){Ke(e._id)}},u.a.createElement(E.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},Object(h.capitalize)(e.type))))),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.name)),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.sno)),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.location)),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.invnumber)),u.a.createElement(E.TableCell,null,u.a.createElement(E.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)))}))):u.a.createElement(u.a.Fragment,null,l.map((function(e,t){return u.a.createElement(E.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(He==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){Ke(e._id)}},u.a.createElement(E.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},Object(h.capitalize)(e.type))))),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.name)),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.sno)),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.location)),u.a.createElement(E.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.invnumber)),u.a.createElement(E.TableCell,null,u.a.createElement(E.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)))}))))))))}(e.invItems,e.customerName,e.LSTtype,e.CMRRItems):null)))})))),u.a.createElement(E.TableFooter,null,u.a.createElement(E.Pagination,{totalResults:ze,resultsPerPage:10,label:"Table navigation",onChange:function(e){J(e)}})))))}},211:function(e,t,a){(function(a){var l,n,r;n=[],void 0===(r="function"===typeof(l=function(){"use strict";function t(e,t,a){var l=new XMLHttpRequest;l.open("GET",e),l.responseType="blob",l.onload=function(){c(l.response,t,a)},l.onerror=function(){console.error("could not download file")},l.send()}function l(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,o=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,a,o){var c=r.URL||r.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?n(s):l(s.href)?t(e,a,o):n(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){n(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,r){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),a);else if(l(e))t(e,a,r);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout((function(){n(o)}))}}:function(e,a,l,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,l);var c="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||c&&s||o)&&"undefined"!=typeof FileReader){var i=new FileReader;i.onloadend=function(){var e=i.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},i.readAsDataURL(e)}else{var m=r.URL||r.webkitURL,d=m.createObjectURL(e);n?n.location=d:location.href=d,n=null,setTimeout((function(){m.revokeObjectURL(d)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?l.apply(t,n):l)||(e.exports=r)}).call(this,a(148))}}]);
//# sourceMappingURL=56.35d72f74.chunk.js.map