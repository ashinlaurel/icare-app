(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[58],{1201:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a.n(n),c=a(12),s=a(3),o=a(0),r=a.n(o),i=a(21),u=a.n(i),m=a(9),d=a.n(m),p=a(18),f=a(2),b=(a(215),a(10)),E=(a(202),a(199),a(221),a(44)),g=a(43),v=(a(24),a(247),a(373)),x=a(37),O=a(200);t.default=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],Object(o.useContext)(E.a)),n=(a.bbaropen,a.setBBarOpen),i=a.setAssetDetails,m=(a.assetdetails,Object(o.useState)(0)),N=Object(s.a)(m,2),j=N[0],S=(N[1],Object(o.useContext)(g.a)),h=(S.topheading,S.setTopHeading),y=Object(o.useState)(!1),w=Object(s.a)(y,2),T=w[0],C=w[1],A=Object(o.useState)(!1),P=Object(s.a)(A,2),D=(P[0],P[1],Object(o.useState)(1)),k=Object(s.a)(D,2),M=(k[0],k[1]),Y=Object(o.useState)([]),R=Object(s.a)(Y,2),B=R[0],I=R[1],L=Object(o.useState)(!1),U=Object(s.a)(L,2),H=(U[0],U[1],Object(o.useState)(!1)),F=Object(s.a)(H,2),_=(F[0],F[1],Object(o.useState)(!1)),q=Object(s.a)(_,2),G=(q[0],q[1],Object(o.useState)(!0)),J=Object(s.a)(G,2),X=(J[0],J[1],Object(o.useState)(!0)),z=Object(s.a)(X,2),K=(z[0],z[1],Object(o.useState)(null)),V=Object(s.a)(K,2),W=V[0],Q=V[1],Z=Object(o.useState)(!1),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(o.useState)({}),ne=Object(s.a)(ae,2),le=(ne[0],ne[1],Object(o.useState)("")),ce=Object(s.a)(le,2),se=(ce[0],ce[1],Object(o.useState)("")),oe=Object(s.a)(se,2),re=(oe[0],oe[1],Object(o.useState)("")),ie=Object(s.a)(re,2),ue=(ie[0],ie[1],Object(o.useState)("")),me=Object(s.a)(ue,2),de=(me[0],me[1],Object(o.useState)("")),pe=Object(s.a)(de,2),fe=(pe[0],pe[1],Object(o.useState)(20)),be=Object(s.a)(fe,2),Ee=be[0],ge=be[1];Object(o.useEffect)((function(){Object(c.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W){e.next=16;break}return t={pages:{page:1,limit:1e5},filters:{callStatus:"",searchquery:"",fromDate:"",toDate:"",employeeId:W._id}},console.log("HERE",t),e.prev=3,e.next=6,d()({url:"".concat(b.API,"/call/").concat(p.a.getId(),"/getall"),method:"POST",data:t});case 6:a=e.sent,console.log(a.data.out),ge(a.data.total),I(a.data.out),I(a.data.out),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(3),e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))()}),[W]);var ve=function(){var e=Object(c.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,AssignedTo,AssignedDate,ETA,Priority\n",B.map((function(e,a){t+='"'.concat(e.callNo,'","').concat(u()(e.date).format("DD-MM-YYYY"),'","').concat(u()("2018-04-02".concat("T",e.time)).format("h:mm a"),'","').concat(e.unitName,'","').concat(e.phone,'","').concat(e.assetId.producttype,'","').concat(e.assetId.product.serialno,'","').concat(e.problem,'","').concat(Object(x.getCallStatusAsString)(e.callStatus),'","').concat(e.employeeName?e.employeeName:"Not Assigned",'","').concat(u()(e.assignedDate).format("DD-MM-YYYY"),'","').concat(e.assignedETA,'","').concat(a+1,'",\n')})),a=new Blob([t],{type:"text/csv;charset=utf-8;"}),Object(O.saveAs)(a,"CallsExport.csv");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,c,s,o,r,i,m,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a={search:"",limit:1e6},e.prev=2,e.next=5,d()({url:"".concat(b.API,"/admin/").concat(p.a.getId(),"/getAllEmpCalls"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),n.data.map((function(e){t.push(e)})),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:c=[],s=0;case 15:if(!(s<t.length)){e.next=31;break}return o={pages:{page:1,limit:1e5},filters:{callStatus:"",searchquery:"",fromDate:"",toDate:"",employeeId:t[s]._id}},e.prev=17,e.next=20,d()({url:"".concat(b.API,"/call/").concat(p.a.getId(),"/getall"),method:"POST",data:o});case 20:r=e.sent,console.log(r.data.out),c.push(r.data.out),e.next=28;break;case 25:throw e.prev=25,e.t1=e.catch(17),e.t1;case 28:s++,e.next=15;break;case 31:for(i="CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,AssignedTo,AssignedDate,ETA,Priority,\n",m=0;m<c.length;m++)c[m][0]&&(i+="".concat(Object(x.capitalize)(c[m][0].employeeName),",\n")),c[m].map((function(e,t){i+='"'.concat(e.callNo,'","').concat(u()(e.date).format("DD-MM-YYYY"),'","').concat(u()("2018-04-02".concat("T",e.time)).format("h:mm a"),'","').concat(e.unitName,'","').concat(e.phone,'","').concat(e.assetId.producttype,'","').concat(e.assetId.product.serialno,'","').concat(e.problem,'","').concat(Object(x.getCallStatusAsString)(e.callStatus),'","').concat(e.employeeName?e.employeeName:"Not Assigned",'","').concat(u()(e.assignedDate).format("DD-MM-YYYY"),'","').concat(e.assignedETA,'","').concat(t+1,'",\n')}));f=new Blob([i],{type:"text/csv;charset=utf-8;"}),Object(O.saveAs)(f,"CallsExport.csv");case 35:case"end":return e.stop()}}),e,null,[[2,10],[17,25]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return function(){n(0),i({})}}),[]),Object(o.useEffect)((function(){return h("Engineer Call Priority"),function(){h("")}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{isModalOpen:ee,setIsModalOpen:te,setEmployee:Q}),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.Modal,{isOpen:T,onClose:function(){return C(!1)},className:" sdark:bg-gray-800 p-5 my-6 mx-10 px-5  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg "},r.a.createElement(f.ModalHeader,{className:"flex flex-row justify-between text-xl mx-10 px-10"},r.a.createElement("div",{className:"text-lg"},"Download Call Data?")),r.a.createElement(f.ModalBody,null,r.a.createElement(f.Button,{layout:"outline",onClick:function(){ve()}},"Download Current Engineer")))),r.a.createElement(v.a,null),r.a.createElement("div",{className:"mb-64 mt-4"},r.a.createElement("div",{className:"flex flex-row items-center justify-start space-x-2"},r.a.createElement(f.Button,{layout:"outline",onClick:function(){return te(!0)}},"Select Engineer"),r.a.createElement("div",{className:"mx-4"},r.a.createElement(f.Button,{className:"px-12 py-2",layout:"outline",onClick:function(){C(!0)}},"Export")),r.a.createElement("div",{className:"mx-4"},r.a.createElement(f.Button,{className:"px-12 py-2",layout:"outline",onClick:function(){xe()}},"Export All"))),r.a.createElement(f.TableContainer,{className:"mt-4"},r.a.createElement(f.Table,null,r.a.createElement(f.TableHeader,null,r.a.createElement(f.TableCell,null,"Call No"),r.a.createElement(f.TableCell,null,"Date"),r.a.createElement(f.TableCell,null,"Unit Name"),r.a.createElement(f.TableCell,null,"Product"),r.a.createElement(f.TableCell,null,"Problem"),r.a.createElement(f.TableCell,null,"Call Status"),r.a.createElement(f.TableCell,{className:"text-xs"},"Assig. Date"),r.a.createElement(f.TableCell,null,"Priority")),r.a.createElement(f.TableBody,null,W&&B.map((function(e,t){return r.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(j==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},r.a.createElement(f.TableCell,{className:"w-8"},r.a.createElement("div",{className:"flex items-center text-sm "},r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},e.callNo)))),r.a.createElement(f.TableCell,null,r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("span",{className:"text-sm"},u()(e.date).format("DD/MM/YYYY")),r.a.createElement("span",{className:"text-sm"},u()("2018-04-02".concat("T",e.time)).format("h:mm a")))),r.a.createElement(f.TableCell,null,r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("span",{className:"text-sm"},e.unitName),r.a.createElement("span",{className:"text-sm"},"Ph: ",e.phone))),r.a.createElement(f.TableCell,null,r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("span",{className:"text-sm"},e.assetId.producttype),r.a.createElement("span",{className:"text-xs "},"SL:",e.assetId.product.serialno))),r.a.createElement(f.TableCell,{className:"flex flex-row "},r.a.createElement("div",{className:"flex items-center justify-center "},r.a.createElement("div",{className:"flex flex-col items-start overflow-auto text-sm w-40 "},r.a.createElement("span",{className:" "},e.problem),e.employeeId?r.a.createElement("span",null,"Engineer: ",e.employeeName):r.a.createElement("span",null,"Engineer Not Assigned")))),r.a.createElement(f.TableCell,{className:"text-xs  "},r.a.createElement("div",{className:" w-32 overflow-auto "},0==e.callStatus?r.a.createElement("span",{className:" "},"Pending For Allocation"):null,1==e.callStatus?r.a.createElement("span",{className:""},"Pending for Percall Approval"):null,2==e.callStatus?r.a.createElement("span",{className:""},"Pending for Response"):null,3==e.callStatus?r.a.createElement("span",{className:""},"Pending for OEM Response"):null,4==e.callStatus?r.a.createElement("span",{className:""},"Pending for 2nd Response"):null,5==e.callStatus?r.a.createElement("span",{className:""},"Pending for Customer"):null,6==e.callStatus?r.a.createElement("span",{className:""},"Under Observation"):null,7==e.callStatus?r.a.createElement("span",{className:""},"Pending for Others"):null,8==e.callStatus?r.a.createElement("span",{className:""},"Pending for Spare"):null,9==e.callStatus?r.a.createElement("span",{className:""},"Spare in Transit"):null,10==e.callStatus?r.a.createElement("span",{className:""},"Cancelled Calls"):null,11==e.callStatus?r.a.createElement("span",{className:""},"Closed Calls"):null,12==e.callStatus?r.a.createElement("span",{className:""},"Spare Taken CMRR"):null,13==e.callStatus?r.a.createElement("span",{className:" "},"Pending For Spare Collection"):null,14==e.callStatus?r.a.createElement("span",{className:""},"Standby Given"):null,15==e.callStatus?r.a.createElement(f.Badge,null,"Pending For Verification"):null)),r.a.createElement(f.TableCell,null,r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("span",{className:"text-sm"},u()(e.assignedDate).format("DD-MM-YYYY")),r.a.createElement("span",{className:"text-xs"}," ","Time: ",e.assignedETA))),r.a.createElement(f.TableCell,null,t+1))})))),r.a.createElement(f.TableFooter,null,r.a.createElement(f.Pagination,{totalResults:Ee,resultsPerPage:100,label:"Table navigation",onChange:function(e){M(e)}})))))}},200:function(e,t,a){(function(a){var n,l,c;l=[],void 0===(c="function"===typeof(n=function(){"use strict";function t(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){o(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,s=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,a,s){var o=c.URL||c.webkitURL,r=document.createElement("a");a=a||e.name||"download",r.download=a,r.rel="noopener","string"==typeof e?(r.href=e,r.origin===location.origin?l(r):n(r.href)?t(e,a,s):l(r,r.target="_blank")):(r.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(r.href)}),4e4),setTimeout((function(){l(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,c){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,c),a);else if(n(e))t(e,a,c);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){l(s)}))}}:function(e,a,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,n);var o="application/octet-stream"===e.type,r=/constructor/i.test(c.HTMLElement)||c.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||o&&r||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=e:location=e,l=null},u.readAsDataURL(e)}else{var m=c.URL||c.webkitURL,d=m.createObjectURL(e);l?l.location=d:location.href=d,l=null,setTimeout((function(){m.revokeObjectURL(d)}),4e4)}});c.saveAs=o.saveAs=o,e.exports=o})?n.apply(t,l):n)||(e.exports=c)}).call(this,a(148))}}]);
//# sourceMappingURL=58.ad68de77.chunk.js.map