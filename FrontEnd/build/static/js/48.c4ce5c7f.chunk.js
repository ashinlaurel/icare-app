(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[48],{1222:function(e,t,a){"use strict";a.r(t);var n=a(16),l=a(5),r=a.n(l),o=a(12),c=a(3),s=a(0),u=a.n(s),i=a(21),m=a.n(i),d=a(9),p=a.n(d),b=a(211),f=a(18),E=a(36),v=a(2),g=a(10),h=(a(199),a(44),a(43));t.default=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(s.useContext)(h.a),d=(i.topheading,i.setTopHeading),w=Object(s.useState)(!1),y=Object(c.a)(w,2),x=(y[0],y[1],Object(s.useState)(1)),T=Object(c.a)(x,2),C=T[0],O=T[1],N=Object(s.useState)([]),j=Object(c.a)(N,2),k=j[0],S=j[1],R=Object(s.useState)(!0),I=Object(c.a)(R,2),L=I[0],M=I[1],B=Object(s.useState)(!0),D=Object(c.a)(B,2),A=(D[0],D[1],Object(s.useState)("")),_=Object(c.a)(A,2),F=_[0],z=(_[1],Object(s.useState)("")),U=Object(c.a)(z,2),H=U[0],P=U[1],K=Object(s.useState)(""),G=Object(c.a)(K,2),Y=G[0],V=G[1],q=Object(s.useState)(""),J=Object(c.a)(q,2),X=J[0],$=J[1],W=Object(s.useState)("Normal"),Q=Object(c.a)(W,2),Z=Q[0],ee=Q[1],te=Object(s.useState)({}),ae=Object(c.a)(te,2),ne=ae[0],le=(ae[1],Object(s.useState)("")),re=Object(c.a)(le,2),oe=(re[0],re[1],Object(s.useState)("")),ce=Object(c.a)(oe,2),se=(ce[0],ce[1],Object(s.useState)("")),ue=Object(c.a)(se,2),ie=ue[0],me=ue[1],de=Object(s.useState)(20),pe=Object(c.a)(de,2),be=pe[0],fe=pe[1],Ee=Object(s.useState)(-1),ve=Object(c.a)(Ee,2),ge=ve[0],he=ve[1],we=Object(s.useState)(!1),ye=Object(c.a)(we,2),xe=ye[0],Te=ye[1],Ce=Object(s.useState)(""),Oe=Object(c.a)(Ce,2),Ne=Oe[0],je=Oe[1],ke=Object(s.useState)(!1),Se=Object(c.a)(ke,2),Re=Se[0],Ie=Se[1],Le=Object(s.useState)({}),Me=Object(c.a)(Le,2),Be=Me[0],De=Me[1],Ae=Object(s.useState)(0),_e=Object(c.a)(Ae,2),Fe=_e[0],ze=_e[1];Object(s.useEffect)((function(){return d("Notifications"),function(){d("")}}),[]),Object(s.useEffect)((function(){var e=f.a.getLocation();!function(){var t=Object(o.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getter called"),a={pages:{page:C,limit:10},filters:{from:H,to:Y,status:"In Transit",LSTtype:Z,searchquery:ie}},"All"!=e&&(a.filters.to=e),t.prev=3,t.next=6,p()({url:"".concat(g.a,"/lst/").concat(f.a.getId(),"/getall"),method:"POST",data:a});case 6:n=t.sent,console.log(n.data.out),fe(n.data.total),S(n.data.out),t.next=15;break;case 12:throw t.prev=12,t.t0=t.catch(3),t.t0;case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}()()}),[C,H,Y,X,F,L,Z]),console.log(ne);var Ue=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n,l){var o,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={id:t,update:{CourierNumber:n,DocketType:l}},e.next=3,p()({url:"".concat(g.a,"/lst/").concat(f.a.getId(),"/downloadpdf"),method:"POST",data:o,responseType:"blob"});case 3:c=e.sent,s=new Blob([c.data],{type:"application/pdf"}),Ie(!1),Object(b.saveAs)(s,"LST_".concat(a,".pdf"));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,l){return e.apply(this,arguments)}}(),He=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,l,o,c,s,u,i,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k,l=k[t],o=l.invItems[a],console.log(l,o),c=m()().format(),s={histtype:"lst",date:c,location:l.to,callId:"Nil",assetId:"Nil",status:o.condition,note:"Item received at ".concat(l.to)},u={},"Vendor"==l.to?(s.note="Item received from ".concat(l.vendorName," back to ").concat(l.from),u={id:o._id,update:{location:l.from,sno:o.sno,condition:o.condition,$push:{history:s}}}):u={id:o._id,update:{location:l.to,status:o.condition,$push:{history:s}}},console.log("PAYLOAD",u),e.prev=9,e.next=12,p()({url:"".concat(g.a,"/inventory/").concat(f.a.getId(),"/invupdate"),method:"POST",data:u});case 12:n[t].invItems[a].location=l.to,S(n),he(-1),he(t),console.log("Done"),e.next=23;break;case 19:throw e.prev=19,e.t0=e.catch(9),console.log(e.t0),e.t0;case 23:if(i=!1,n[t].invItems.map((function(e){"In Transit"==e.location&&(i=!0)})),1!=i){e.next=29;break}return je("".concat(o.name," Recieved")),Te(!0),e.abrupt("return");case 29:return d={id:l._id,update:{status:"Received"}},e.prev=30,e.next=33,p()({url:"".concat(g.a,"/lst/").concat(f.a.getId(),"/update"),method:"POST",data:d});case 33:je("".concat(o.name," Recieved.\n All Items Received from LST")),Te(!0),console.log("Done"),e.next=42;break;case 38:throw e.prev=38,e.t1=e.catch(30),console.log(e.t1),e.t1;case 42:case"end":return e.stop()}}),e,null,[[9,19],[30,38]])})));return function(t,a){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,l,o,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k,l=k[t],o=l.CMRRItems[a],console.log(l,o),n[t].CMRRItems[a].location=l.to,S(n),console.log("Done",n),c=!1,n[t].CMRRItems.map((function(e){"In Transit"==e.location&&(c=!0)})),s={id:l._id,update:{CMRRItems:n[t].CMRRItems}},0==c&&(s.update.status="Received"),e.prev=11,e.next=14,p()({url:"".concat(g.a,"/lst/").concat(f.a.getId(),"/update"),method:"POST",data:s});case 14:return 1==c?(je("".concat(o.name," Recieved")),Te(!0)):(je("".concat(o.name," Recieved.\n All Items Received from LST")),Te(!0)),console.log("Done"),e.abrupt("return");case 19:throw e.prev=19,e.t0=e.catch(11),console.log(e.t0),e.t0;case 23:case"end":return e.stop()}}),e,null,[[11,19]])})));return function(t,a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:" font-bold text-xl mt-10 dark:text-white"},"LSTs In Transit"),u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:H,onChange:function(e){P(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"From Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),"All"==f.a.getLocation?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:Y,onChange:function(e){V(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"To Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))):null,u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:Z,onChange:function(e){ee(e.target.value)}},u.a.createElement("option",{value:"",selected:!0},"All"),u.a.createElement("option",{value:"Normal"},"Normal"),u.a.createElement("option",{value:"CMRR"},"CMRR"),u.a.createElement("option",{value:"Customer"},"Customer")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:X,onChange:function(e){$(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Condition"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Good"},"Good"),u.a.createElement("option",{value:"Bad"},"Bad")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),M(!L)}},u.a.createElement("input",{value:ie,onChange:function(e){return me(e.target.value)},placeholder:"Search LST Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(v.TableContainer,{className:"mt-4"},u.a.createElement(v.Table,null,u.a.createElement(v.TableHeader,null,u.a.createElement("tr",{className:"flex flex-row justify-between"},u.a.createElement(v.TableCell,null,"LST.No"),u.a.createElement(v.TableCell,null,"From"),u.a.createElement(v.TableCell,null,"To"),u.a.createElement(v.TableCell,null,"Date"),u.a.createElement(v.TableCell,null,"No."),u.a.createElement(v.TableCell,null," Report"),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"cursor-pointer",onClick:function(){return he(-1)}},"Items")))),u.a.createElement(v.TableBody,null,k.map((function(e,t){return u.a.createElement("div",{className:"flex flex-col justify-around"},u.a.createElement(v.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ".concat(a==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){l(t)}},u.a.createElement(v.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.LSTNo)))),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.from)),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Vendor"==e.to?e.vendorName:e.to)),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"}," ",m()(e.date).format("DD/MM/YYYY"))),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Normal"==e.LSTtype||"Customer"==e.LSTtype?e.invItems.length:e.CMRRItems.length)),u.a.createElement(v.TableCell,{className:"text-center "},u.a.createElement(v.Button,{layout:"outline","aria-label":"DropDown",onClick:function(){console.log("dwlod"),De(e),Ie(!0),ze(t)},className:"rounded-lg m-1"},"Download")),u.a.createElement(v.TableCell,{className:"text-center "},u.a.createElement(v.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(a),he(t)},className:"rounded-lg m-1"},u.a.createElement(E.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),ge==t?function(e,t){var r=k[e].invItems,o=k[e].LSTtype;k[e].CMRRItems;return console.log("TO",r.to),u.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3"},u.a.createElement("div",{className:"mb- mt-4"},u.a.createElement(v.TableContainer,{className:"mt-4"},u.a.createElement(v.Table,null,u.a.createElement(v.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(v.TableCell,null,"Category"),u.a.createElement(v.TableCell,null,"Description"),u.a.createElement(v.TableCell,null,"Serial Number"),u.a.createElement(v.TableCell,null,"Location"),u.a.createElement(v.TableCell,null,"Inv Number"),u.a.createElement(v.TableCell,null,"Condition"),u.a.createElement(v.TableCell,null,"Receive"))),u.a.createElement(v.TableBody,null,"Normal"==o||"Customer"==o?u.a.createElement(u.a.Fragment,null,k[e].invItems.map((function(t,r){return u.a.createElement(v.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(a==t._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:r,onClick:function(){l(t._id)}},u.a.createElement(v.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},t.type)))),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.name)),u.a.createElement(v.TableCell,null,"Vendor"==k[e].to&&"In Transit"==t.location?u.a.createElement("span",{className:"text-sm"},u.a.createElement("input",{value:t.sno,onChange:function(a){var l=k,r=k[e].invItems;r=r.filter((function(e){return e._id!=t._id||(console.log("here",a.target.value,e.name),e.sno=a.target.value),e})),l[e].invItems=r,console.log(l),S(Object(n.a)(l))},placeholder:"Cse Id.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-1 py-1 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})):t.sno),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.location)),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.invnumber)),u.a.createElement(v.TableCell,null,"Vendor"==k[e].to&&"In Transit"==t.location?u.a.createElement(v.Select,{value:t.condition,className:"mt-1",onChange:function(a){var l=k,r=k[e].invItems;r=r.filter((function(e){return e._id!=t._id||(console.log("here",a.target.value,e.name),e.condition=a.target.value),e})),l[e].invItems=r,console.log(l),S(Object(n.a)(l))}},u.a.createElement("option",{value:"Good"}," Good"),u.a.createElement("option",{value:"Defective"},"Defective"),u.a.createElement("option",{value:"DOA"},"DOA"),"z",u.a.createElement("option",{value:"Damaged"},"Damaged")):u.a.createElement(v.Badge,{type:"Good"==t.condition?"primary":"danger"},t.condition)),u.a.createElement(v.TableCell,null,u.a.createElement(v.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){"In Transit"==t.location?He(e,r):(je("Already Received"),Te(!0))}},"In Transit"==t.location?u.a.createElement(u.a.Fragment,null,"Receive"):u.a.createElement(u.a.Fragment,null,"Received"))))}))):u.a.createElement(u.a.Fragment,null,k[e].CMRRItems.map((function(t,a){return u.a.createElement(v.TableRow,{key:a,onClick:function(){}},u.a.createElement(v.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},t.type)))),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.name)),u.a.createElement(v.TableCell,null,t.sno),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.location)),u.a.createElement(v.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.invnumber)),u.a.createElement(v.TableCell,null,u.a.createElement(v.Badge,{type:"Good"==t.condition?"primary":"danger"},t.condition)),u.a.createElement(v.TableCell,null,u.a.createElement(v.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){"In Transit"==t.location?Pe(e,a):(je("Already Received"),Te(!0))}},"In Transit"==t.location?u.a.createElement(u.a.Fragment,null,"Receive"):u.a.createElement(u.a.Fragment,null,"Received"))))}))))))))}(t,e.to):null)})))),u.a.createElement(v.TableFooter,null,u.a.createElement(v.Pagination,{totalResults:be,resultsPerPage:10,label:"Table navigation",onChange:function(e){O(e)}})))),(console.log(Be),u.a.createElement(u.a.Fragment,null,u.a.createElement(v.Modal,{isOpen:Re,onClose:function(){return Ie(!1)}},u.a.createElement(v.ModalHeader,null,"Download LST"),u.a.createElement(v.ModalBody,null,k[Fe]?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"flex flex-row"},u.a.createElement("div",{className:" my-2 ml-5 mr-2 w-full"},"Docket Type:"),u.a.createElement("input",{value:k[Fe].DocketType,onChange:function(e){var t=Object(n.a)(k);t[Fe].DocketType=e.target.value,S(t)},class:"w-full mr-5 shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})),u.a.createElement("div",{className:"flex flex-row my-2"},u.a.createElement("div",{className:"my-2 ml-5 mr-2 w-full"},"Courier Number:"),u.a.createElement("input",{value:k[Fe].CourierNumber,onChange:function(e){var t=Object(n.a)(k);t[Fe].CourierNumber=e.target.value,S(t)},class:"w-full mr-5  shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))):null),u.a.createElement(v.ModalFooter,null,u.a.createElement(v.Button,{className:"w-full sm:w-auto",onClick:Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ue(k[Fe]._id,k[Fe].LSTNo,k[Fe].CourierNumber,k[Fe].DocketType);case 1:case"end":return e.stop()}}),e)})))},"Download"))))),u.a.createElement(u.a.Fragment,null,u.a.createElement(v.Modal,{isOpen:xe,onClose:function(){return Te(!1)}},u.a.createElement(v.ModalHeader,null,Ne),u.a.createElement(v.ModalBody,null),u.a.createElement(v.ModalFooter,null,u.a.createElement(v.Button,{className:"w-full sm:w-auto",onClick:function(){return Te(!1)}},"Okay!")))))}},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(5),l=a.n(n),r=a(12),o=a(3),c=a(0),s=a.n(c),u=a(9),i=a.n(u),m=a(2),d=a(192),p=(a(196),a(10));function b(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,u=e.setUnit,b=e.account,f=e.setAccount,E=e.customer,v=e.setCustomer,g=e.refresh,h=e.setRefresh,w=e.theunitdetails,y=e.setTheUnitDetails,x=Object(c.useState)([]),T=Object(o.a)(x,2),C=T[0],O=T[1],N=Object(c.useState)([]),j=Object(o.a)(N,2),k=j[0],S=j[1],R=Object(c.useState)([]),I=Object(o.a)(R,2),L=I[0],M=I[1],B=Object(c.useState)(0),D=Object(o.a)(B,2),A=D[0],_=D[1],F=Object(c.useState)(""),z=Object(o.a)(F,2),U=z[0],H=z[1],P=function(e){H(e.target.value)},K=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:U,role:1},e.prev=2,e.next=5,i()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),O(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:U,role:1},e.prev=1,e.next=4,i()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var G=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),f({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),S(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),f({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,i.a.post("".concat(p.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),M(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(t),u({_id:t._id,contactPerson:t.contactPerson,contactNo:t.contactNo,unitName:t.unitName});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(m.ModalHeader,null,"Select"," ",0==A?s.a.createElement(s.a.Fragment,null,"Customer"):1==A?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(m.ModalBody,{className:"overflow-y-scroll h-64"},s.a.createElement(d.d,{selectedIndex:A,onSelect:function(e){return _(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,s.a.createElement("form",{onSubmit:K},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:P}))))),s.a.createElement(m.TableBody,null,C.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return G(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Account"))),s.a.createElement(m.TableBody,null,k.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(m.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(m.TableContainer,null,s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"Unit"))),s.a.createElement(m.TableBody,null,L.map((function(e,t){return s.a.createElement(m.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return V(e)}},s.a.createElement(m.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(m.TableFooter,null))))),s.a.createElement(m.ModalFooter,null,s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),s.a.createElement(m.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName),s.a.createElement(m.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!g),w&&y(n),S([]),M([])}},"Select"))))}},211:function(e,t,a){(function(a){var n,l,r;l=[],void 0===(r="function"===typeof(n=function(){"use strict";function t(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,o=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,a,o){var c=r.URL||r.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?l(s):n(s.href)?t(e,a,o):l(s,s.target="_blank")):(s.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(s.href)}),4e4),setTimeout((function(){l(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,r){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),a);else if(n(e))t(e,a,r);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout((function(){l(o)}))}}:function(e,a,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,n);var c="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||c&&s||o)&&"undefined"!=typeof FileReader){var i=new FileReader;i.onloadend=function(){var e=i.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=e:location=e,l=null},i.readAsDataURL(e)}else{var m=r.URL||r.webkitURL,d=m.createObjectURL(e);l?l.location=d:location.href=d,l=null,setTimeout((function(){m.revokeObjectURL(d)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,l):n)||(e.exports=r)}).call(this,a(148))}}]);
//# sourceMappingURL=48.c4ce5c7f.chunk.js.map