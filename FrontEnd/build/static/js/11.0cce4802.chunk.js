(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[11],{107:function(e,t){t.capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}},1077:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a.n(n),r=a(10),o=a(2),c=a(0),s=a.n(c),u=a(18),i=a.n(u),m=a(6),d=a.n(m),p=a(15),f=a(28),b=a(1),v=(a(971),a(112)),y=a(8),E=(a(94),a(30)),g=a(7),h=a(29),w=a(107);t.default=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],u=Object(c.useState)(0),m=Object(o.a)(u,2),x=m[0],O=m[1],C=Object(c.useState)(!1),j=Object(o.a)(C,2),T=j[0],k=j[1],N=Object(c.useState)(!1),S=Object(o.a)(N,2),M=S[0],_=S[1],A=Object(c.useState)(0),F=Object(o.a)(A,2),B=F[0],D=F[1],P=Object(c.useState)(!1),R=Object(o.a)(P,2),L=R[0],I=R[1],U=Object(c.useContext)(E.a),H=(U.bbaropen,U.setBBarOpen),z=U.setAssetDetails,V=(U.assetdetails,Object(c.useState)(0)),G=Object(o.a)(V,2),Y=G[0],K=G[1],q=Object(c.useContext)(h.a),W=(q.topheading,q.setTopHeading),J=Object(c.useState)(!1),X=Object(o.a)(J,2),$=(X[0],X[1],Object(c.useState)(1)),Q=Object(o.a)($,2),Z=Q[0],ee=Q[1],te=Object(c.useState)([]),ae=Object(o.a)(te,2),ne=ae[0],le=ae[1],re=Object(c.useState)(!1),oe=Object(o.a)(re,2),ce=(oe[0],oe[1],Object(c.useState)(!1)),se=Object(o.a)(ce,2),ue=(se[0],se[1],Object(c.useState)(!1)),ie=Object(o.a)(ue,2),me=(ie[0],ie[1],Object(c.useState)(!0)),de=Object(o.a)(me,2),pe=de[0],fe=de[1],be=Object(c.useState)(!0),ve=Object(o.a)(be,2),ye=(ve[0],ve[1],Object(c.useState)("")),Ee=Object(o.a)(ye,2),ge=Ee[0],he=Ee[1],we=Object(c.useState)(""),xe=Object(o.a)(we,2),Oe=xe[0],Ce=xe[1],je=Object(c.useState)(""),Te=Object(o.a)(je,2),ke=Te[0],Ne=Te[1],Se=Object(c.useState)({}),Me=Object(o.a)(Se,2),_e=Me[0],Ae=(Me[1],Object(c.useState)("")),Fe=Object(o.a)(Ae,2),Be=Fe[0],De=(Fe[1],Object(c.useState)("")),Pe=Object(o.a)(De,2),Re=(Pe[0],Pe[1],Object(c.useState)("")),Le=Object(o.a)(Re,2),Ie=Le[0],Ue=Le[1],He=Object(c.useState)(20),ze=Object(o.a)(He,2),Ve=ze[0],Ge=ze[1],Ye=function(){var e=Object(r.a)(l.a.mark((function e(){var t,a,n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="name,id,sno,condition,location,invnumber,invdate,invtype,purchtype,purchlocation,vendor,gstno,panno,aadharno,taxcategory,taxperc,rate,igst,cgst,sgst,nettax,amount,tcs,invamount,wty,expirydate,brand,model,systype,stocktype,caseId \n",n={pages:{page:Z,limit:1e7},filters:{type:ge.toLocaleLowerCase(),location:Oe,condition:ke,searchtype:Be,searchquery:Ie}},e.prev=2,e.next=5,d()({url:"".concat(y.a,"/inventory/").concat(p.a.getId(),"/getall"),method:"POST",data:n});case 5:r=e.sent,console.log(r.data.out),a=r.data.out,e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:a.map((function(e){t+="".concat(e.name,",").concat(e.id,",").concat(e.sno,",").concat(e.condition,",").concat(e.location,",").concat(e.invnumber,",").concat(e.invdate,",").concat(e.invtype,",").concat(e.purchtype,",").concat(e.purchlocation,",").concat(e.vendor,",").concat(e.gstno,",").concat(e.panno,",").concat(e.aadharno,",").concat(e.taxcategory,",").concat(e.taxperc,",").concat(e.rate,",").concat(e.igst,",").concat(e.cgst,",").concat(e.sgst,",").concat(e.nettax,",").concat(e.amount,",").concat(e.tcs,",").concat(e.invamount,",").concat(e.wty,",").concat(e.expirydate,",").concat(e.brand,",").concat(e.model,",").concat(e.systype,",").concat(e.stocktype,",").concat(e.caseId,"\n")})),o=new Blob([t],{type:"text/csv;charset=utf-8;"}),Object(v.saveAs)(o,"Inventory.csv");case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){H(0),z({})}}),[]),Object(c.useEffect)((function(){return W("Inventory"),function(){W("")}}),[]),Object(c.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getter called"),t={pages:{page:Z,limit:10},filters:{type:ge.toLocaleLowerCase(),location:Oe,condition:ke,searchtype:Be,searchquery:Ie}},e.prev=2,e.next=5,d()({url:"".concat(y.a,"/inventory/").concat(p.a.getId(),"/getall"),method:"POST",data:t});case 5:a=e.sent,console.log(a.data.out),Ge(a.data.total),le(a.data.out),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}()()}),[Z,Oe,ke,ge,pe]),console.log(_e),s.a.createElement(s.a.Fragment,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(b.Modal,{isOpen:a,onClose:function(){return n(!1)}},s.a.createElement(b.ModalHeader,null,"Are you sure you want to delete!"),s.a.createElement(b.ModalBody,null),s.a.createElement(b.ModalFooter,null,s.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()({url:"".concat(y.a,"/inventory/").concat(p.a.getId(),"/delete"),method:"POST",data:{id:x}});case 3:t=e.sent,console.log(t.data),a=ne.filter((function(e){return e._id!=x})),le(a),n(!1),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))},"Confirm Delete")))),function(){if(ne[B]){var e=ne[B];return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.Modal,{isOpen:T,onClose:function(){return k(!1)},className:"w-7/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"},s.a.createElement(b.ModalHeader,{className:"flex flex-row justify-between text-xl"},s.a.createElement("div",null,e.name),s.a.createElement("div",null,"Condition: ",s.a.createElement(b.Badge,null,e.condition)," ")),s.a.createElement(b.ModalBody,null,s.a.createElement("div",{className:"font-semibold text-xl my-2"},"Product Description"),s.a.createElement("div",{className:" py-3 px-10 flex flex-col lg:flex-row items-center dark:bg-gray-700 justify-between bg-gray-100 rounded-lg "},s.a.createElement("div",{className:"my-3  flex-col flex"},s.a.createElement("div",{className:"font-semibold"}," Serial No: ",e.sno),s.a.createElement("div",null,"Invnetory No: ",e.invnumber),s.a.createElement("div",null,"Location: ",e.location),s.a.createElement("div",null,"GST No: ",e.gstno),s.a.createElement("div",null,"Expiry Date: ",e.expirydate)),s.a.createElement("div",{className:"my-3 font- flex-col flex"},s.a.createElement("span",{className:"font-semibold"},"Type: ",e.type),s.a.createElement("div",null,"inventory Date: ",i()(e.invdate).format("DD/MM/YY")),s.a.createElement("div",null,"Purchase Location: ",e.purchlocation),s.a.createElement("div",null,"PAN No: ",e.panno),s.a.createElement("div",null,"Warranty: ",e.wty)),s.a.createElement("div",{className:"my-3  flex-col flex"},s.a.createElement("div",{className:"font-semibold"},"Vendor: ",e.vendor),s.a.createElement("div",null,"Inventory Type: ",e.invtype),s.a.createElement("div",null,"Purchase type: ",e.purchtype),s.a.createElement("div",null,"Aadhar No: ",e.aadharno))),s.a.createElement("div",{className:"font-semibold text-xl my-2"},"Product Rates"),s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center dark:bg-gray-700 justify-between bg-gray-100 rounded-lg p-5 "},s.a.createElement("div",{className:"my-3  flex-col flex"},s.a.createElement("span",{className:"font-semibold"},"Amount:",e.amount),s.a.createElement("div",{className:"font-semibold"},"Net tax: ",e.nettax),s.a.createElement("div",null,"IGST: ",e.igst),s.a.createElement("div",null,"TCS: ",e.tcs)),s.a.createElement("div",{className:"my-3 font- flex-col flex"},s.a.createElement("div",{className:"font-semibold"},"Rate: ",e.rate),s.a.createElement("span",null,"Tax Category:",e.taxcategory),s.a.createElement("div",null,"CGST : ",e.cgst)),s.a.createElement("div",{className:"my-3  flex-col flex"},s.a.createElement("div",{className:"font-semibold"},"Invoice Amount:",e.invamount),s.a.createElement("div",null,"Tax percentage: ",e.taxperc),s.a.createElement("div",null,"SGST: ",e.sgst))),s.a.createElement("div",{className:"flex flex-col lg:flex-row items-center justify-between"})),s.a.createElement(b.ModalFooter,null)))}}(),s.a.createElement(s.a.Fragment,null,s.a.createElement(b.Modal,{isOpen:L,onClose:function(){return I(!1)},className:"w-7/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"},s.a.createElement(b.ModalHeader,{className:"flex flex-row justify-between text-xl"},s.a.createElement("div",{className:"text-lg"},"Download Inventory Data?")),s.a.createElement(b.ModalBody,null,s.a.createElement(b.Button,{layout:"outline",onClick:Ye},"Download")),s.a.createElement(b.ModalFooter,null))),function(){if(ne[B]){var e=ne[B],t=ne[B].history;return console.log(t),s.a.createElement(s.a.Fragment,null,s.a.createElement(b.Modal,{isOpen:M,onClose:function(){return _(!1)},className:"w-7/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"},s.a.createElement(b.ModalHeader,{className:"flex flex-row justify-between text-xl"},s.a.createElement("div",null,e.name),s.a.createElement("div",null,"Condition: ",s.a.createElement(b.Badge,null,e.condition)," ")),s.a.createElement(b.ModalBody,null,s.a.createElement("div",{className:"font-semibold text-xl my-2"},"Inventory History"),s.a.createElement(b.TableContainer,{className:"mt-4"},s.a.createElement(b.Table,null,s.a.createElement(b.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(b.TableCell,null,"Date"),s.a.createElement(b.TableCell,null,"Type"),s.a.createElement(b.TableCell,null,"Call ID"),s.a.createElement(b.TableCell,null,"Asset ID"),s.a.createElement(b.TableCell,null,"Location"),s.a.createElement(b.TableCell,null,"Status"),s.a.createElement(b.TableCell,null,"Notes"))),s.a.createElement(b.TableBody,null,t.map((function(e,t){return s.a.createElement(b.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(Y==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},s.a.createElement(b.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},i()(e.date).format("DD-MM-YYYY"))))),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},Object(w.capitalize)(e.histtype))),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.callId)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.assetId)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.location)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.status)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.note)))})))))),s.a.createElement(b.ModalFooter,null)))}}(),s.a.createElement("div",{className:"mb-64 mt-4"},s.a.createElement("div",{className:""},s.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ge,onChange:function(e){he(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Item Type"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"Mouse"},"Mouse"),s.a.createElement("option",{value:"Keyboard"},"Keyboard"),s.a.createElement("option",{value:"Monitor"},"Monitor"),s.a.createElement("option",{value:"Cpu"},"Cpu"),s.a.createElement("option",{value:"Ram"},"Ram"),s.a.createElement("option",{value:"Fan"},"Fan"),s.a.createElement("option",{value:"Motherboard"},"Motherboard"),s.a.createElement("option",{value:"SMPS"},"SMPS"),s.a.createElement("option",{value:"HDD"},"HDD"),s.a.createElement("option",{value:"SMPS"},"SMPS"),s.a.createElement("option",{value:"GCard"},"Gcard"),s.a.createElement("option",{value:"EnetCard"},"Enet Card"),s.a.createElement("option",{value:"SerialCard"},"Serial Card"),s.a.createElement("option",{value:"ParalellCard"},"Paralell Card"),s.a.createElement("option",{value:"OpticalDrive"},"Optical Drive"),s.a.createElement("option",{value:"Others"},"Others")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:Oe,onChange:function(e){Ce(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Location"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),s.a.createElement("option",{value:"Kottayam"},"Kottayam"),s.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ke,onChange:function(e){Ne(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Condition"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"Good"},"Good"),s.a.createElement("option",{value:"Bad"},"Bad"),s.a.createElement("option",{value:"Used"},"Used")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"block relative xl:ml-64"},s.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},s.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},s.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fe(!pe)}},s.a.createElement("input",{value:Ie,onChange:function(e){return Ue(e.target.value)},placeholder:"Search",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))),s.a.createElement("div",{class:"block relative xl:ml-64"},s.a.createElement(b.Button,{layout:"outline",onClick:function(){I(!0)}},"Download Database")))),s.a.createElement(b.TableContainer,{className:"mt-4"},s.a.createElement(b.Table,null,s.a.createElement(b.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(b.TableCell,null,"Location"),s.a.createElement(b.TableCell,null,"Stock Type"),s.a.createElement(b.TableCell,null,"Category"),s.a.createElement(b.TableCell,null,"Description"),s.a.createElement(b.TableCell,null,"S.No"),s.a.createElement(b.TableCell,null,"Vendor"),s.a.createElement(b.TableCell,null,"Inv No."),s.a.createElement(b.TableCell,null,"Inv Date"),s.a.createElement(b.TableCell,null,"Wty Expiry"),s.a.createElement(b.TableCell,null,"Status"),s.a.createElement(b.TableCell,null,"View/History"),s.a.createElement(b.TableCell,null,"Edit/Delete"))),s.a.createElement(b.TableBody,null,ne.map((function(e,t){return s.a.createElement(b.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(Y==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){K(e._id)}},s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.location)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.stocktype)),s.a.createElement(b.TableCell,{className:"w-8"},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},Object(w.capitalize)(e.type)))),s.a.createElement(b.TableCell,null,"item"==e.systype?s.a.createElement("span",{className:"text-sm"},e.name):s.a.createElement("span",{className:"text-sm"},e.brand+e.model)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.sno)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.vendor)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.invnumber)),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},i()(e.invdate).format("DD/MM/YY"))),s.a.createElement(b.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.expirydate)),s.a.createElement(b.TableCell,null,s.a.createElement(b.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)),s.a.createElement(b.TableCell,null,s.a.createElement("div",{className:"flex justify-start items-center space-x-2"},s.a.createElement(b.Button,{onClick:function(){D(t),k(!0)},layout:"outline"},"View"),s.a.createElement(b.Button,{onClick:function(){D(t),_(!0)},layout:"outline"},"History"))),s.a.createElement(b.TableCell,null,s.a.createElement("div",{className:"flex items-center space-x-4"},s.a.createElement(b.Button,{layout:"link",size:"icon","aria-label":"Edit"},s.a.createElement(g.b,{key:e._id,to:"/app/inventory/update/".concat(e._id)},s.a.createElement(f.EditIcon,{className:"w-5 h-5","aria-hidden":"true"}))," "),s.a.createElement(b.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:Object(r.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("delete Asset"),n(!0),O(e._id);case 3:case"end":return t.stop()}}),t)})))},s.a.createElement(f.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),s.a.createElement(b.TableFooter,null,s.a.createElement(b.Pagination,{totalResults:Ve,resultsPerPage:10,label:"Table navigation",onChange:function(e){ee(e)}})))))}},112:function(e,t,a){(function(a){var n,l,r;l=[],void 0===(r="function"===typeof(n=function(){"use strict";function t(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,o=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,a,o){var c=r.URL||r.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?l(s):n(s.href)?t(e,a,o):l(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){l(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,r){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),a);else if(n(e))t(e,a,r);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout((function(){l(o)}))}}:function(e,a,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,n);var c="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||c&&s||o)&&"undefined"!=typeof FileReader){var i=new FileReader;i.onloadend=function(){var e=i.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=e:location=e,l=null},i.readAsDataURL(e)}else{var m=r.URL||r.webkitURL,d=m.createObjectURL(e);l?l.location=d:location.href=d,l=null,setTimeout((function(){m.revokeObjectURL(d)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,l):n)||(e.exports=r)}).call(this,a(52))},264:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function l(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}var r=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},o=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},c=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},s=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(l(e),l(t)))}),[]))},u=t.jsons2arrays=function(e,t){var a=t=t||s(e),n=t;o(t)&&(a=t.map((function(e){return e.label})),n=t.map((function(e){return e.key})));var r=e.map((function(e){return n.map((function(t){return i(t,e)}))}));return[a].concat(l(r))},i=t.getHeaderValue=function(e,t){var a=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,a,n){if(void 0!==e[t])return e[t];n.splice(1)}),t);return void 0===a?e in t?t[e]:"":a},m=t.elementOrEmpty=function(e){return e||0===e?e:""},d=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return m(e)})).map((function(e){return""+a+e+a})).join(t)})).join("\n")},p=t.arrays2csv=function(e,t,a,n){return d(t?[t].concat(l(e)):e,a,n)},f=t.jsons2csv=function(e,t,a,n){return d(u(e,t),a,n)},b=t.string2csv=function(e,t,a,n){return t?t.join(a)+"\n"+e:e},v=t.toCSV=function(e,t,a,n){if(o(e))return f(e,t,a,n);if(c(e))return p(e,t,a,n);if("string"===typeof e)return b(e,t,a);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,a,n,l){var o=v(e,a,n,l),c=r()?"application/csv":"text/csv",s=new Blob([t?"\ufeff":"",o],{type:c}),u="data:"+c+";charset=utf-8,"+(t?"\ufeff":"")+o,i=window.URL||window.webkitURL;return"undefined"===typeof i.createObjectURL?u:i.createObjectURL(s)}},265:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var n,l=a(0),r=((n=l)&&n.__esModule,a(20));t.propTypes={data:(0,r.oneOfType)([r.string,r.array]).isRequired,headers:r.array,target:r.string,separator:r.string,filename:r.string,uFEFF:r.bool,onClick:r.func,asyncOnClick:r.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]},86:function(e,t,a){},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(3),l=a.n(n),r=a(10),o=a(2),c=a(0),s=a.n(c),u=a(6),i=a.n(u),m=a(1),d=a(92),p=(a(86),a(8));function f(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,u=e.setUnit,f=e.account,b=e.setAccount,v=e.customer,y=e.setCustomer,E=e.refresh,g=e.setRefresh,h=Object(c.useState)([]),w=Object(o.a)(h,2),x=w[0],O=w[1],C=Object(c.useState)([]),j=Object(o.a)(C,2),T=j[0],k=j[1],N=Object(c.useState)([]),S=Object(o.a)(N,2),M=S[0],_=S[1],A=Object(c.useState)(0),F=Object(o.a)(A,2),B=F[0],D=F[1],P=Object(c.useState)(""),R=Object(o.a)(P,2),L=R[0],I=R[1],U=function(e){I(e.target.value)},H=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:L,role:1},e.prev=2,e.next=5,i()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),O(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:L,role:1},e.prev=1,e.next=4,i()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var z=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y({_id:t._id,customerName:t.name}),b({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),k(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),b({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),_(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),u({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(m.ModalHeader,null,"Select"," ",0==B?s.a.createElement(s.a.Fragment,null,"Customer"):1==B?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(m.ModalBody,null,s.a.createElement(d.d,{selectedIndex:B,onSelect:function(e){return D(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,s.a.createElement("form",{onSubmit:H},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:U}))))),s.a.createElement(m.TableBody,null,x.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return z(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Account"))),s.a.createElement(m.TableBody,null,T.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return V(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Unit"))),s.a.createElement(m.TableBody,null,M.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return G(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(m.TableFooter,null)))),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",v.customerName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",f.accountName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName)),s.a.createElement(m.ModalFooter,null,s.a.createElement(m.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),g(!E)}},"Select"))))}},971:function(e,t,a){e.exports=a(972)},972:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var n=r(a(973)),l=r(a(974));function r(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=n.default,t.CSVLink=l.default},973:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=(n=r)&&n.__esModule?n:{default:n},c=a(264),s=a(265);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,a=e.headers,n=e.separator,l=e.enclosingCharacter,r=e.uFEFF,o=e.target,c=e.specs,s=e.replace;this.state.page=window.open(this.buildURI(t,r,a,n,l),o,c,s)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(o.default.Component);u.defaultProps=Object.assign(s.defaultProps,{target:"_blank"}),u.propTypes=s.propTypes,t.default=u},974:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),c=(n=o)&&n.__esModule?n:{default:n},s=a(264),u=a(265);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.buildURI=a.buildURI.bind(a),a.state={href:""},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,a=e.headers,n=e.separator,l=e.uFEFF,r=e.enclosingCharacter;this.setState({href:this.buildURI(t,l,a,n,r)})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props,a=t.data,n=t.headers,l=t.separator,r=t.uFEFF;this.setState({href:this.buildURI(a,r,n,l)})}}},{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,a=t.data,n=t.headers,l=t.separator,r=t.filename,o=t.enclosingCharacter,c=t.uFEFF,u=new Blob([c?"\ufeff":"",(0,s.toCSV)(a,n,l,o)]);return window.navigator.msSaveBlob(u,r),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(a){!1!==a?t.handleLegacy(e):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,a=(t.data,t.headers,t.separator,t.filename),n=(t.uFEFF,t.children),r=(t.onClick,t.asyncOnClick,t.enclosingCharacter,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return c.default.createElement("a",l({download:a},r,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick()}),n)}}]),t}(c.default.Component);i.defaultProps=u.defaultProps,i.propTypes=u.propTypes,t.default=i}}]);
//# sourceMappingURL=11.0cce4802.chunk.js.map