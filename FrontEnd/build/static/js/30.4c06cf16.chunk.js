(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[30],{1090:function(e,t,a){"use strict";a.r(t);var n=a(94),l=a(3),r=a.n(l),c=a(10),o=a(2),s=a(0),u=a.n(s),m=a(18),i=a.n(m),d=a(7),b=a.n(d),p=a(15),E=a(28),f=a(1),v=a(8),g=(a(93),a(30),a(29));t.default=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),a=t[0],l=t[1],m=Object(s.useContext)(g.a),d=(m.topheading,m.setTopHeading),h=Object(s.useState)(!1),w=Object(o.a)(h,2),x=(w[0],w[1],Object(s.useState)(1)),y=Object(o.a)(x,2),T=y[0],O=y[1],C=Object(s.useState)([]),j=Object(o.a)(C,2),N=j[0],k=j[1],S=Object(s.useState)(!0),I=Object(o.a)(S,2),B=I[0],D=I[1],_=Object(s.useState)(!0),A=Object(o.a)(_,2),F=(A[0],A[1],Object(s.useState)("")),L=Object(o.a)(F,2),M=L[0],R=(L[1],Object(s.useState)("")),z=Object(o.a)(R,2),P=z[0],H=z[1],K=Object(s.useState)(""),G=Object(o.a)(K,2),U=G[0],Y=G[1],V=Object(s.useState)(""),J=Object(o.a)(V,2),$=J[0],q=J[1],Q=Object(s.useState)({}),W=Object(o.a)(Q,2),X=W[0],Z=(W[1],Object(s.useState)("")),ee=Object(o.a)(Z,2),te=(ee[0],ee[1],Object(s.useState)("")),ae=Object(o.a)(te,2),ne=(ae[0],ae[1],Object(s.useState)("")),le=Object(o.a)(ne,2),re=le[0],ce=le[1],oe=Object(s.useState)(20),se=Object(o.a)(oe,2),ue=se[0],me=se[1],ie=Object(s.useState)(-1),de=Object(o.a)(ie,2),be=de[0],pe=de[1],Ee=Object(s.useState)(!1),fe=Object(o.a)(Ee,2),ve=fe[0],ge=fe[1],he=Object(s.useState)(""),we=Object(o.a)(he,2),xe=we[0],ye=we[1];Object(s.useEffect)((function(){return d("Notifications"),function(){d("")}}),[]),Object(s.useEffect)((function(){var e=p.a.getLocation();!function(){var t=Object(c.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getter called"),a={pages:{page:T,limit:10},filters:{from:P,to:U,status:"In Transit",searchquery:re}},"All"!=e&&(a.filters.to=e),t.prev=3,t.next=6,b()({url:"".concat(v.a,"/lst/").concat(p.a.getId(),"/getall"),method:"POST",data:a});case 6:n=t.sent,console.log(n.data.out),me(n.data.total),k(n.data.out),t.next=15;break;case 12:throw t.prev=12,t.t0=t.catch(3),t.t0;case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}()()}),[T,P,U,$,M,B]),console.log(X);var Te=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,l,c,o,s,u,m,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N,l=N[t],c=l.invItems[a],console.log(l,c),o=i()().format(),s={histtype:"lst",date:o,location:l.to,callId:"Nil",assetId:"Nil",status:c.condition,note:"Item received at ".concat(l.to)},u={},"Vendor"==l.to?(s.note="Item received from ".concat(l.vendorName," back to ").concat(l.from),u={id:c._id,update:{location:l.from,sno:c.sno,condition:c.condition,$push:{history:s}}}):u={id:c._id,update:{location:l.to,$push:{history:s}}},console.log("PAYLOAD",u),e.prev=9,e.next=12,b()({url:"".concat(v.a,"/inventory/").concat(p.a.getId(),"/invupdate"),method:"POST",data:u});case 12:n[t].invItems[a].location=l.to,k(n),pe(-1),pe(t),console.log("Done"),e.next=23;break;case 19:throw e.prev=19,e.t0=e.catch(9),console.log(e.t0),e.t0;case 23:if(m=!1,n[t].invItems.map((function(e){"In Transit"==e.location&&(m=!0)})),1!=m){e.next=29;break}return ye("".concat(c.name," Recieved")),ge(!0),e.abrupt("return");case 29:return d={id:l._id,update:{status:"Received"}},e.prev=30,e.next=33,b()({url:"".concat(v.a,"/lst/").concat(p.a.getId(),"/update"),method:"POST",data:d});case 33:ye("".concat(c.name," Recieved.\n All Items Received from LST")),ge(!0),console.log("Done"),e.next=42;break;case 38:throw e.prev=38,e.t1=e.catch(30),console.log(e.t1),e.t1;case 42:case"end":return e.stop()}}),e,null,[[9,19],[30,38]])})));return function(t,a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:" font-bold text-xl mt-10 dark:text-white"},"LSTs In Transit"),u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:P,onChange:function(e){H(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"From Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),"All"==p.a.getLocation?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:U,onChange:function(e){Y(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"To Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))):null,u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:$,onChange:function(e){q(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Condition"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Good"},"Good"),u.a.createElement("option",{value:"Bad"},"Bad")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),D(!B)}},u.a.createElement("input",{value:re,onChange:function(e){return ce(e.target.value)},placeholder:"Search LST Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(f.TableContainer,{className:"mt-4"},u.a.createElement(f.Table,null,u.a.createElement(f.TableHeader,null,u.a.createElement("tr",{className:"flex flex-row justify-between"},u.a.createElement(f.TableCell,null,"LST.No"),u.a.createElement(f.TableCell,null,"From"),u.a.createElement(f.TableCell,null,"To"),u.a.createElement(f.TableCell,null,"Date"),u.a.createElement(f.TableCell,null,"No."),u.a.createElement(f.TableCell,null," Report"),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"cursor-pointer",onClick:function(){return pe(-1)}},"Items")))),u.a.createElement(f.TableBody,null,N.map((function(e,t){return u.a.createElement("div",{className:"flex flex-col justify-around"},u.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ".concat(a==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){l(t)}},u.a.createElement(f.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.LSTNo)))),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.from)),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Vendor"==e.to?e.vendorName:e.to)),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"}," ",i()(e.date).format("DD/MM/YYYY"))),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.invItems.length)),u.a.createElement(f.TableCell,{className:"text-center "},u.a.createElement(f.Button,{layout:"outline","aria-label":"DropDown",onClick:function(){console.log("dwlod")},className:"rounded-lg m-1"},"Download")),u.a.createElement(f.TableCell,{className:"text-center "},u.a.createElement(f.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(a),pe(t)},className:"rounded-lg m-1"},u.a.createElement(E.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),be==t?function(e,t){var r=N[e].invItems;return console.log("TO",r.to),u.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3"},u.a.createElement("div",{className:"mb- mt-4"},u.a.createElement(f.TableContainer,{className:"mt-4"},u.a.createElement(f.Table,null,u.a.createElement(f.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(f.TableCell,null,"Category"),u.a.createElement(f.TableCell,null,"Description"),u.a.createElement(f.TableCell,null,"Serial Number"),u.a.createElement(f.TableCell,null,"Location"),u.a.createElement(f.TableCell,null,"Inv Number"),u.a.createElement(f.TableCell,null,"Condition"),u.a.createElement(f.TableCell,null,"Receive"))),u.a.createElement(f.TableBody,null,N[e].invItems.map((function(t,r){return u.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(a==t._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:r,onClick:function(){l(t._id)}},u.a.createElement(f.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},t.type)))),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.name)),u.a.createElement(f.TableCell,null,"Vendor"==N[e].to&&"In Transit"==t.location?u.a.createElement("span",{className:"text-sm"},u.a.createElement("input",{value:t.sno,onChange:function(a){var l=N,r=N[e].invItems;r=r.filter((function(e){return e._id!=t._id||(console.log("here",a.target.value,e.name),e.sno=a.target.value),e})),l[e].invItems=r,console.log(l),k(Object(n.a)(l))},placeholder:"Cse Id.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-1 py-1 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})):t.sno),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.location)),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.invnumber)),u.a.createElement(f.TableCell,null,"Vendor"==N[e].to&&"In Transit"==t.location?u.a.createElement(f.Select,{value:t.condition,className:"mt-1",onChange:function(a){var l=N,r=N[e].invItems;r=r.filter((function(e){return e._id!=t._id||(console.log("here",a.target.value,e.name),e.condition=a.target.value),e})),l[e].invItems=r,console.log(l),k(Object(n.a)(l))}},u.a.createElement("option",{value:"Good"}," Good"),u.a.createElement("option",{value:"Defective"},"Defective"),u.a.createElement("option",{value:"DOA"},"DOA"),"z",u.a.createElement("option",{value:"Damaged"},"Damaged")):u.a.createElement(f.Badge,{type:"Good"==t.condition?"primary":"danger"},t.condition)),u.a.createElement(f.TableCell,null,u.a.createElement(f.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){"In Transit"==t.location?Te(e,r):(ye("Already Received"),ge(!0))}},"In Transit"==t.location?u.a.createElement(u.a.Fragment,null,"Receive"):u.a.createElement(u.a.Fragment,null,"Received"))))})))))))}(t,e.to):null)})))),u.a.createElement(f.TableFooter,null,u.a.createElement(f.Pagination,{totalResults:ue,resultsPerPage:10,label:"Table navigation",onChange:function(e){O(e)}})))),u.a.createElement(u.a.Fragment,null,u.a.createElement(f.Modal,{isOpen:ve,onClose:function(){return ge(!1)}},u.a.createElement(f.ModalHeader,null,xe),u.a.createElement(f.ModalBody,null),u.a.createElement(f.ModalFooter,null,u.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return ge(!1)}},"Okay!")))))}},87:function(e,t,a){},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(3),l=a.n(n),r=a(10),c=a(2),o=a(0),s=a.n(o),u=a(7),m=a.n(u),i=a(1),d=a(92),b=(a(87),a(8));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,u=e.setUnit,p=e.account,E=e.setAccount,f=e.customer,v=e.setCustomer,g=e.refresh,h=e.setRefresh,w=Object(o.useState)([]),x=Object(c.a)(w,2),y=x[0],T=x[1],O=Object(o.useState)([]),C=Object(c.a)(O,2),j=C[0],N=C[1],k=Object(o.useState)([]),S=Object(c.a)(k,2),I=S[0],B=S[1],D=Object(o.useState)(0),_=Object(c.a)(D,2),A=_[0],F=_[1],L=Object(o.useState)(""),M=Object(c.a)(L,2),R=M[0],z=M[1],P=function(e){z(e.target.value)},H=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:R,role:1},e.prev=2,e.next=5,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),T(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:R,role:1},e.prev=1,e.next=4,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),T(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var K=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),E({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),N(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),E({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),B(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),u({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(i.ModalHeader,null,"Select"," ",0==A?s.a.createElement(s.a.Fragment,null,"Customer"):1==A?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(i.ModalBody,null,s.a.createElement(d.d,{selectedIndex:A,onSelect:function(e){return F(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:H},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:P}))))),s.a.createElement(i.TableBody,null,y.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return K(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Account"))),s.a.createElement(i.TableBody,null,j.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return G(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Unit"))),s.a.createElement(i.TableBody,null,I.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return U(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(i.TableFooter,null)))),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName)),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!g)}},"Select"))))}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(22);var l=a(31);function r(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=30.4c06cf16.chunk.js.map