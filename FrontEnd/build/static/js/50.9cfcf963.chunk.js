(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[50],{1224:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(5),r=a.n(l),o=a(12),c=a(3),s=a(0),u=a.n(s),i=a(21),m=a.n(i),d=a(9),p=a.n(d),b=a(200),f=a(18),E=a(36),v=a(2),g=a(10),h=(a(199),a(44),a(43));t.default=function(){var e=Object(s.useContext)(h.a),t=(e.topheading,e.setTopHeading),a=Object(s.useState)(!1),l=Object(c.a)(a,2),i=(l[0],l[1],Object(s.useState)(1)),d=Object(c.a)(i,2),w=d[0],y=d[1],x=Object(s.useState)([]),T=Object(c.a)(x,2),C=T[0],O=T[1],N=Object(s.useState)(!0),j=Object(c.a)(N,2),k=j[0],S=j[1],R=Object(s.useState)(!0),I=Object(c.a)(R,2),A=(I[0],I[1],Object(s.useState)("")),L=Object(c.a)(A,2),M=L[0],B=(L[1],Object(s.useState)("")),D=Object(c.a)(B,2),_=D[0],F=D[1],P=Object(s.useState)(""),z=Object(c.a)(P,2),U=z[0],H=z[1],K=Object(s.useState)(""),G=Object(c.a)(K,2),Y=G[0],V=G[1],q=Object(s.useState)("Normal"),J=Object(c.a)(q,2),X=J[0],$=J[1],W=Object(s.useState)({}),Q=Object(c.a)(W,2),Z=Q[0],ee=(Q[1],Object(s.useState)("")),te=Object(c.a)(ee,2),ae=(te[0],te[1],Object(s.useState)("")),ne=Object(c.a)(ae,2),le=(ne[0],ne[1],Object(s.useState)("")),re=Object(c.a)(le,2),oe=re[0],ce=re[1],se=Object(s.useState)(20),ue=Object(c.a)(se,2),ie=ue[0],me=ue[1],de=Object(s.useState)(-1),pe=Object(c.a)(de,2),be=pe[0],fe=pe[1],Ee=Object(s.useState)(!1),ve=Object(c.a)(Ee,2),ge=ve[0],he=ve[1],we=Object(s.useState)(""),ye=Object(c.a)(we,2),xe=ye[0],Te=ye[1],Ce=Object(s.useState)(!1),Oe=Object(c.a)(Ce,2),Ne=Oe[0],je=Oe[1],ke=Object(s.useState)({}),Se=Object(c.a)(ke,2),Re=Se[0],Ie=Se[1],Ae=Object(s.useState)(0),Le=Object(c.a)(Ae,2),Me=Le[0],Be=Le[1];Object(s.useEffect)((function(){return t("Notifications"),function(){t("")}}),[]),Object(s.useEffect)((function(){var e=f.a.getLocation();!function(){var t=Object(o.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getter called"),a={pages:{page:w,limit:10},filters:{from:_,to:U,status:"In Transit",LSTtype:X,searchquery:oe}},"All"!=e&&(a.filters.to=e),t.prev=3,t.next=6,p()({url:"".concat(g.API,"/lst/").concat(f.a.getId(),"/getall"),method:"POST",data:a});case 6:n=t.sent,console.log(n.data.out),me(n.data.total),O(n.data.out),t.next=15;break;case 12:throw t.prev=12,t.t0=t.catch(3),t.t0;case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}()()}),[w,_,U,Y,M,k,X]),console.log(Z);var De=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n,l){var o,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={id:t,update:{CourierNumber:n,DocketType:l}},e.next=3,p()({url:"".concat(g.API,"/lst/").concat(f.a.getId(),"/downloadpdf"),method:"POST",data:o,responseType:"blob"});case 3:c=e.sent,s=new Blob([c.data],{type:"application/pdf"}),je(!1),Object(b.saveAs)(s,"LST_".concat(a,".pdf"));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,l){return e.apply(this,arguments)}}(),_e=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,l,o,c,s,u,i,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=C,l=C[t],o=l.invItems[a],console.log(l,o),c=m()().format(),s={histtype:"lst",date:c,location:l.to,callId:"Nil",assetId:"Nil",status:o.condition,note:"Item received at ".concat(l.to)},u={},"Vendor"==l.to?(s.note="Item received from ".concat(l.vendorName," back to ").concat(l.from),u={id:o._id,update:{location:l.from,sno:o.sno,condition:o.condition,$push:{history:s}}}):u={id:o._id,update:{location:l.to,status:o.condition,$push:{history:s}}},console.log("PAYLOAD",u),e.prev=9,e.next=12,p()({url:"".concat(g.API,"/inventory/").concat(f.a.getId(),"/invupdate"),method:"POST",data:u});case 12:n[t].invItems[a].location=l.to,O(n),fe(-1),fe(t),console.log("Done"),e.next=23;break;case 19:throw e.prev=19,e.t0=e.catch(9),console.log(e.t0),e.t0;case 23:if(i=!1,n[t].invItems.map((function(e){"In Transit"==e.location&&(i=!0)})),1!=i){e.next=29;break}return Te("".concat(o.name," Recieved")),he(!0),e.abrupt("return");case 29:return d={id:l._id,update:{status:"Received"}},e.prev=30,e.next=33,p()({url:"".concat(g.API,"/lst/").concat(f.a.getId(),"/update"),method:"POST",data:d});case 33:Te("".concat(o.name," Recieved.\n All Items Received from LST")),he(!0),console.log("Done"),e.next=42;break;case 38:throw e.prev=38,e.t1=e.catch(30),console.log(e.t1),e.t1;case 42:case"end":return e.stop()}}),e,null,[[9,19],[30,38]])})));return function(t,a){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,l,o,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=C,l=C[t],o=l.CMRRItems[a],console.log(l,o),n[t].CMRRItems[a].location=l.to,O(n),console.log("Done",n),c=!1,n[t].CMRRItems.map((function(e){"In Transit"==e.location&&(c=!0)})),s={id:l._id,update:{CMRRItems:n[t].CMRRItems}},0==c&&(s.update.status="Received"),e.prev=11,e.next=14,p()({url:"".concat(g.API,"/lst/").concat(f.a.getId(),"/update"),method:"POST",data:s});case 14:return 1==c?(Te("".concat(o.name," Recieved")),he(!0)):(Te("".concat(o.name," Recieved.\n All Items Received from LST")),he(!0)),console.log("Done"),e.abrupt("return");case 19:throw e.prev=19,e.t0=e.catch(11),console.log(e.t0),e.t0;case 23:case"end":return e.stop()}}),e,null,[[11,19]])})));return function(t,a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:" font-bold text-xl mt-10 dark:text-white"},"LSTs In Transit"),u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:_,onChange:function(e){F(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"From Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),"All"==f.a.getLocation?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:U,onChange:function(e){H(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"To Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))):null,u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:X,onChange:function(e){$(e.target.value)}},u.a.createElement("option",{value:"",selected:!0},"All"),u.a.createElement("option",{value:"Normal"},"Normal"),u.a.createElement("option",{value:"CMRR"},"CMRR"),u.a.createElement("option",{value:"Customer"},"Customer")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:Y,onChange:function(e){V(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Condition"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Good"},"Good"),u.a.createElement("option",{value:"Bad"},"Bad")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),S(!k)}},u.a.createElement("input",{value:oe,onChange:function(e){return ce(e.target.value)},placeholder:"Search LST Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(v.TableContainer,{className:"mt-4"},u.a.createElement(v.Table,null,u.a.createElement(v.TableHeader,null,u.a.createElement("tr",{className:"flex flex-row justify-between"},u.a.createElement(v.TableCell,null,"LST.No"),u.a.createElement(v.TableCell,null,"From"),u.a.createElement(v.TableCell,null,"To"),u.a.createElement(v.TableCell,null,"Date"),u.a.createElement(v.TableCell,null,"No."),u.a.createElement(v.TableCell,null," Report"),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"cursor-pointer",onClick:function(){return fe(-1)}},"Items")))),u.a.createElement(v.TableBody,null,C.map((function(e,t){return u.a.createElement("div",{className:"flex flex-col justify-around"},u.a.createElement(v.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ".concat(be==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},u.a.createElement(v.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.LSTNo)))),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.from)),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Vendor"==e.to?e.vendorName:e.to)),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"}," ",m()(e.date).format("DD/MM/YYYY"))),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Normal"==e.LSTtype||"Customer"==e.LSTtype?e.invItems.length:e.CMRRItems.length)),u.a.createElement(v.TableCell,{className:"text-center "},u.a.createElement(v.Button,{layout:"outline","aria-label":"DropDown",onClick:function(){console.log("dwlod"),Ie(e),je(!0),Be(t)},className:"rounded-lg m-1"},"Download")),u.a.createElement(v.TableCell,{className:"text-center "},u.a.createElement(v.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(be),console.log(t),fe(be==t?-1:t)},className:"rounded-lg m-1"},u.a.createElement(E.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),be==t?function(e,t){var a=C[e].invItems,l=C[e].LSTtype;C[e].CMRRItems;return console.log("TO",a.to),u.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3"},u.a.createElement("div",{className:"mb- mt-4"},u.a.createElement(v.TableContainer,{className:"mt-4"},u.a.createElement(v.Table,null,u.a.createElement(v.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(v.TableCell,null,"Category"),u.a.createElement(v.TableCell,null,"Description"),u.a.createElement(v.TableCell,null,"Serial Number"),u.a.createElement(v.TableCell,null,"Location"),u.a.createElement(v.TableCell,null,"Inv Number"),u.a.createElement(v.TableCell,null,"Condition"),u.a.createElement(v.TableCell,null,"Receive"))),u.a.createElement(v.TableBody,null,"Normal"==l||"Customer"==l?u.a.createElement(u.a.Fragment,null,C[e].invItems.map((function(t,a){return u.a.createElement(v.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(be==t._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){fe(t._id)}},u.a.createElement(v.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},t.type)))),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.name)),u.a.createElement(v.TableCell,null,"Vendor"==C[e].to&&"In Transit"==t.location?u.a.createElement("span",{className:"text-sm"},u.a.createElement("input",{value:t.sno,onChange:function(a){var l=C,r=C[e].invItems;r=r.filter((function(e){return e._id!=t._id||(console.log("here",a.target.value,e.name),e.sno=a.target.value),e})),l[e].invItems=r,console.log(l),O(Object(n.a)(l))},placeholder:"Cse Id.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-1 py-1 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})):t.sno),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.location)),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.invnumber)),u.a.createElement(v.TableCell,null,"Vendor"==C[e].to&&"In Transit"==t.location?u.a.createElement(v.Select,{value:t.condition,className:"mt-1",onChange:function(a){var l=C,r=C[e].invItems;r=r.filter((function(e){return e._id!=t._id||(console.log("here",a.target.value,e.name),e.condition=a.target.value),e})),l[e].invItems=r,console.log(l),O(Object(n.a)(l))}},u.a.createElement("option",{value:"Good"}," Good"),u.a.createElement("option",{value:"Defective"},"Defective"),u.a.createElement("option",{value:"DOA"},"DOA"),"z",u.a.createElement("option",{value:"Damaged"},"Damaged")):u.a.createElement(v.Badge,{type:"Good"==t.condition?"primary":"danger"},t.condition)),u.a.createElement(v.TableCell,null,u.a.createElement(v.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){"In Transit"==t.location?_e(e,a):(Te("Already Received"),he(!0))}},"In Transit"==t.location?u.a.createElement(u.a.Fragment,null,"Receive"):u.a.createElement(u.a.Fragment,null,"Received"))))}))):u.a.createElement(u.a.Fragment,null,C[e].CMRRItems.map((function(t,a){return u.a.createElement(v.TableRow,{key:a,onClick:function(){}},u.a.createElement(v.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},t.type)))),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.name)),u.a.createElement(v.TableCell,null,t.sno),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.location)),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.invnumber)),u.a.createElement(v.TableCell,null,u.a.createElement(v.Badge,{type:"Good"==t.condition?"primary":"danger"},t.condition)),u.a.createElement(v.TableCell,null,u.a.createElement(v.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){"In Transit"==t.location?Fe(e,a):(Te("Already Received"),he(!0))}},"In Transit"==t.location?u.a.createElement(u.a.Fragment,null,"Receive"):u.a.createElement(u.a.Fragment,null,"Received"))))}))))))))}(t,e.to):null)})))),u.a.createElement(v.TableFooter,null,u.a.createElement(v.Pagination,{totalResults:ie,resultsPerPage:10,label:"Table navigation",onChange:function(e){y(e)}})))),(console.log(Re),u.a.createElement(u.a.Fragment,null,u.a.createElement(v.Modal,{isOpen:Ne,onClose:function(){return je(!1)}},u.a.createElement(v.ModalHeader,null,"Download LST"),u.a.createElement(v.ModalBody,null,C[Me]?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"flex flex-row"},u.a.createElement("div",{className:" my-2 ml-5 mr-2 w-full"},"Docket Type:"),u.a.createElement("input",{value:C[Me].DocketType,onChange:function(e){var t=Object(n.a)(C);t[Me].DocketType=e.target.value,O(t)},class:"w-full mr-5 shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})),u.a.createElement("div",{className:"flex flex-row my-2"},u.a.createElement("div",{className:"my-2 ml-5 mr-2 w-full"},"Courier Number:"),u.a.createElement("input",{value:C[Me].CourierNumber,onChange:function(e){var t=Object(n.a)(C);t[Me].CourierNumber=e.target.value,O(t)},class:"w-full mr-5  shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))):null),u.a.createElement(v.ModalFooter,null,u.a.createElement(v.Button,{className:"w-full sm:w-auto",onClick:Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:De(C[Me]._id,C[Me].LSTNo,C[Me].CourierNumber,C[Me].DocketType);case 1:case"end":return e.stop()}}),e)})))},"Download"))))),u.a.createElement(u.a.Fragment,null,u.a.createElement(v.Modal,{isOpen:ge,onClose:function(){return he(!1)}},u.a.createElement(v.ModalHeader,null,xe),u.a.createElement(v.ModalBody,null),u.a.createElement(v.ModalFooter,null,u.a.createElement(v.Button,{className:"w-full sm:w-auto",onClick:function(){return he(!1)}},"Okay!")))))}},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(5),l=a.n(n),r=a(12),o=a(3),c=a(0),s=a.n(c),u=a(9),i=a.n(u),m=a(2),d=a(192),p=(a(197),a(10));function b(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,u=e.setUnit,b=e.account,f=e.setAccount,E=e.customer,v=e.setCustomer,g=e.refresh,h=e.setRefresh,w=e.theunitdetails,y=e.setTheUnitDetails,x=Object(c.useState)([]),T=Object(o.a)(x,2),C=T[0],O=T[1],N=Object(c.useState)([]),j=Object(o.a)(N,2),k=j[0],S=j[1],R=Object(c.useState)([]),I=Object(o.a)(R,2),A=I[0],L=I[1],M=Object(c.useState)(0),B=Object(o.a)(M,2),D=B[0],_=B[1],F=Object(c.useState)(""),P=Object(o.a)(F,2),z=P[0],U=P[1],H=function(e){U(e.target.value)},K=function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:z,role:1},e.prev=1,e.next=4,i()({url:"".concat(p.API,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){K()}),[z]),Object(c.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:z,role:1},e.prev=1,e.next=4,i()({url:"".concat(p.API,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var G=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),f({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.API,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),S(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),f({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.API,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),L(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(t),u({_id:t._id,contactPerson:t.contactPerson,contactNo:t.contactNo,unitName:t.unitName});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(m.ModalHeader,null,"Select"," ",0==D?s.a.createElement(s.a.Fragment,null,"Customer"):1==D?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(m.ModalBody,{className:"h-64 overflow-auto"},s.a.createElement(d.d,{selectedIndex:D,onSelect:function(e){return _(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,{className:""},s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,s.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:H}))))),s.a.createElement(m.TableBody,null,C.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return G(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Account"))),s.a.createElement(m.TableBody,null,k.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Unit"))),s.a.createElement(m.TableBody,null,A.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return V(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(m.TableFooter,null))))),s.a.createElement(m.ModalFooter,null,s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName),s.a.createElement(m.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!g),w&&y(n),S([]),L([])}},"Select"))))}},200:function(e,t,a){(function(a){var n,l,r;l=[],void 0===(r="function"===typeof(n=function(){"use strict";function t(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,o=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,a,o){var c=r.URL||r.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?l(s):n(s.href)?t(e,a,o):l(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){l(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,r){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),a);else if(n(e))t(e,a,r);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout((function(){l(o)}))}}:function(e,a,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,n);var c="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||c&&s||o)&&"undefined"!=typeof FileReader){var i=new FileReader;i.onloadend=function(){var e=i.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=e:location=e,l=null},i.readAsDataURL(e)}else{var m=r.URL||r.webkitURL,d=m.createObjectURL(e);l?l.location=d:location.href=d,l=null,setTimeout((function(){m.revokeObjectURL(d)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,l):n)||(e.exports=r)}).call(this,a(148))}}]);
//# sourceMappingURL=50.9cfcf963.chunk.js.map