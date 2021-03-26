(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[44],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(4),n=a.n(l),r=a(11),c=a(3),o=a(0),s=a.n(o),u=a(7),m=a.n(u),i=a(1),d=a(102),b=(a(96),a(9));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,u=e.setUnit,p=e.account,E=e.setAccount,f=e.customer,v=e.setCustomer,g=e.refresh,h=e.setRefresh,x=Object(o.useState)([]),w=Object(c.a)(x,2),T=w[0],y=w[1],C=Object(o.useState)([]),N=Object(c.a)(C,2),O=N[0],j=N[1],k=Object(o.useState)([]),S=Object(c.a)(k,2),I=S[0],R=S[1],M=Object(o.useState)(0),B=Object(c.a)(M,2),L=B[0],D=B[1],_=Object(o.useState)(""),F=Object(c.a)(_,2),A=F[0],z=F[1],P=function(e){z(e.target.value)},H=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:A,role:1},e.prev=2,e.next=5,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),y(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:A,role:1},e.prev=1,e.next=4,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),y(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var K=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),E({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),j(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),E({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),R(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),u({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(i.ModalHeader,null,"Select"," ",0==L?s.a.createElement(s.a.Fragment,null,"Customer"):1==L?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(i.ModalBody,null,s.a.createElement(d.d,{selectedIndex:L,onSelect:function(e){return D(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:H},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:P}))))),s.a.createElement(i.TableBody,null,T.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return K(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Account"))),s.a.createElement(i.TableBody,null,O.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return G(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Unit"))),s.a.createElement(i.TableBody,null,I.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return U(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(i.TableFooter,null)))),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName)),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!g)}},"Select"))))}},1100:function(e,t,a){"use strict";a.r(t);var l=a(15),n=a(4),r=a.n(n),c=a(11),o=a(3),s=a(0),u=a.n(s),m=a(21),i=a.n(m),d=a(7),b=a.n(d),p=a(17),E=a(32),f=a(1),v=a(9),g=(a(103),a(34),a(33));t.default=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),a=t[0],n=t[1],m=Object(s.useContext)(g.a),d=(m.topheading,m.setTopHeading),h=Object(s.useState)(!1),x=Object(o.a)(h,2),w=(x[0],x[1],Object(s.useState)(1)),T=Object(o.a)(w,2),y=T[0],C=T[1],N=Object(s.useState)([]),O=Object(o.a)(N,2),j=O[0],k=O[1],S=Object(s.useState)(!0),I=Object(o.a)(S,2),R=I[0],M=I[1],B=Object(s.useState)(!0),L=Object(o.a)(B,2),D=(L[0],L[1],Object(s.useState)("")),_=Object(o.a)(D,2),F=_[0],A=(_[1],Object(s.useState)("")),z=Object(o.a)(A,2),P=z[0],H=z[1],K=Object(s.useState)(""),G=Object(o.a)(K,2),U=G[0],Y=G[1],V=Object(s.useState)(""),J=Object(o.a)(V,2),$=J[0],q=J[1],Q=Object(s.useState)("Normal"),W=Object(o.a)(Q,2),X=W[0],Z=W[1],ee=Object(s.useState)({}),te=Object(o.a)(ee,2),ae=te[0],le=(te[1],Object(s.useState)("")),ne=Object(o.a)(le,2),re=(ne[0],ne[1],Object(s.useState)("")),ce=Object(o.a)(re,2),oe=(ce[0],ce[1],Object(s.useState)("")),se=Object(o.a)(oe,2),ue=se[0],me=se[1],ie=Object(s.useState)(20),de=Object(o.a)(ie,2),be=de[0],pe=de[1],Ee=Object(s.useState)(-1),fe=Object(o.a)(Ee,2),ve=fe[0],ge=fe[1],he=Object(s.useState)(!1),xe=Object(o.a)(he,2),we=xe[0],Te=xe[1],ye=Object(s.useState)(""),Ce=Object(o.a)(ye,2),Ne=Ce[0],Oe=Ce[1];Object(s.useEffect)((function(){return d("Notifications"),function(){d("")}}),[]),Object(s.useEffect)((function(){var e=p.a.getLocation();!function(){var t=Object(c.a)(r.a.mark((function t(){var a,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getter called"),a={pages:{page:y,limit:10},filters:{from:P,to:U,status:"In Transit",LSTtype:X,searchquery:ue}},"All"!=e&&(a.filters.to=e),t.prev=3,t.next=6,b()({url:"".concat(v.a,"/lst/").concat(p.a.getId(),"/getall"),method:"POST",data:a});case 6:l=t.sent,console.log(l.data.out),pe(l.data.total),k(l.data.out),t.next=15;break;case 12:throw t.prev=12,t.t0=t.catch(3),t.t0;case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}()()}),[y,P,U,$,F,R,X]),console.log(ae);var je=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var l,n,c,o,s,u,m,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=j,n=j[t],c=n.invItems[a],console.log(n,c),o=i()().format(),s={histtype:"lst",date:o,location:n.to,callId:"Nil",assetId:"Nil",status:c.condition,note:"Item received at ".concat(n.to)},u={},"Vendor"==n.to?(s.note="Item received from ".concat(n.vendorName," back to ").concat(n.from),u={id:c._id,update:{location:n.from,sno:c.sno,condition:c.condition,$push:{history:s}}}):u={id:c._id,update:{location:n.to,$push:{history:s}}},console.log("PAYLOAD",u),e.prev=9,e.next=12,b()({url:"".concat(v.a,"/inventory/").concat(p.a.getId(),"/invupdate"),method:"POST",data:u});case 12:l[t].invItems[a].location=n.to,k(l),ge(-1),ge(t),console.log("Done"),e.next=23;break;case 19:throw e.prev=19,e.t0=e.catch(9),console.log(e.t0),e.t0;case 23:if(m=!1,l[t].invItems.map((function(e){"In Transit"==e.location&&(m=!0)})),1!=m){e.next=29;break}return Oe("".concat(c.name," Recieved")),Te(!0),e.abrupt("return");case 29:return d={id:n._id,update:{status:"Received"}},e.prev=30,e.next=33,b()({url:"".concat(v.a,"/lst/").concat(p.a.getId(),"/update"),method:"POST",data:d});case 33:Oe("".concat(c.name," Recieved.\n All Items Received from LST")),Te(!0),console.log("Done"),e.next=42;break;case 38:throw e.prev=38,e.t1=e.catch(30),console.log(e.t1),e.t1;case 42:case"end":return e.stop()}}),e,null,[[9,19],[30,38]])})));return function(t,a){return e.apply(this,arguments)}}(),ke=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var l,n,c,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=j,n=j[t],c=n.CMRRItems[a],console.log(n,c),l[t].CMRRItems[a].location=n.to,k(l),console.log("Done",l),o=!1,l[t].CMRRItems.map((function(e){"In Transit"==e.location&&(o=!0)})),s={id:n._id,update:{CMRRItems:l[t].CMRRItems}},0==o&&(s.update.status="Received"),e.prev=11,e.next=14,b()({url:"".concat(v.a,"/lst/").concat(p.a.getId(),"/update"),method:"POST",data:s});case 14:return 1==o?(Oe("".concat(c.name," Recieved")),Te(!0)):(Oe("".concat(c.name," Recieved.\n All Items Received from LST")),Te(!0)),console.log("Done"),e.abrupt("return");case 19:throw e.prev=19,e.t0=e.catch(11),console.log(e.t0),e.t0;case 23:case"end":return e.stop()}}),e,null,[[11,19]])})));return function(t,a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:" font-bold text-xl mt-10 dark:text-white"},"LSTs In Transit"),u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:P,onChange:function(e){H(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"From Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),"All"==p.a.getLocation?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:U,onChange:function(e){Y(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"To Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))):null,u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:X,onChange:function(e){Z(e.target.value)}},u.a.createElement("option",{value:"",selected:!0},"LST type"),u.a.createElement("option",{value:"Normal"},"Normal"),u.a.createElement("option",{value:"CMRR"},"CMRR"),u.a.createElement("option",{value:"Customer"},"Customer")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:$,onChange:function(e){q(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Condition"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Good"},"Good"),u.a.createElement("option",{value:"Bad"},"Bad")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),M(!R)}},u.a.createElement("input",{value:ue,onChange:function(e){return me(e.target.value)},placeholder:"Search LST Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(f.TableContainer,{className:"mt-4"},u.a.createElement(f.Table,null,u.a.createElement(f.TableHeader,null,u.a.createElement("tr",{className:"flex flex-row justify-between"},u.a.createElement(f.TableCell,null,"LST.No"),u.a.createElement(f.TableCell,null,"From"),u.a.createElement(f.TableCell,null,"To"),u.a.createElement(f.TableCell,null,"Date"),u.a.createElement(f.TableCell,null,"No."),u.a.createElement(f.TableCell,null," Report"),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"cursor-pointer",onClick:function(){return ge(-1)}},"Items")))),u.a.createElement(f.TableBody,null,j.map((function(e,t){return u.a.createElement("div",{className:"flex flex-col justify-around"},u.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ".concat(a==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){n(t)}},u.a.createElement(f.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.LSTNo)))),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.from)),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Vendor"==e.to?e.vendorName:e.to)),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"}," ",i()(e.date).format("DD/MM/YYYY"))),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Normal"==e.LSTtype||"Customer"==e.LSTtype?e.invItems.length:e.CMRRItems.length)),u.a.createElement(f.TableCell,{className:"text-center "},u.a.createElement(f.Button,{layout:"outline","aria-label":"DropDown",onClick:function(){console.log("dwlod")},className:"rounded-lg m-1"},"Download")),u.a.createElement(f.TableCell,{className:"text-center "},u.a.createElement(f.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(a),ge(t)},className:"rounded-lg m-1"},u.a.createElement(E.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),ve==t?function(e,t){var r=j[e].invItems,c=j[e].LSTtype;j[e].CMRRItems;return console.log("TO",r.to),u.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3"},u.a.createElement("div",{className:"mb- mt-4"},u.a.createElement(f.TableContainer,{className:"mt-4"},u.a.createElement(f.Table,null,u.a.createElement(f.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(f.TableCell,null,"Category"),u.a.createElement(f.TableCell,null,"Description"),u.a.createElement(f.TableCell,null,"Serial Number"),u.a.createElement(f.TableCell,null,"Location"),u.a.createElement(f.TableCell,null,"Inv Number"),u.a.createElement(f.TableCell,null,"Condition"),u.a.createElement(f.TableCell,null,"Receive"))),u.a.createElement(f.TableBody,null,"Normal"==c||"Customer"==c?u.a.createElement(u.a.Fragment,null,j[e].invItems.map((function(t,r){return u.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(a==t._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:r,onClick:function(){n(t._id)}},u.a.createElement(f.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},t.type)))),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.name)),u.a.createElement(f.TableCell,null,"Vendor"==j[e].to&&"In Transit"==t.location?u.a.createElement("span",{className:"text-sm"},u.a.createElement("input",{value:t.sno,onChange:function(a){var n=j,r=j[e].invItems;r=r.filter((function(e){return e._id!=t._id||(console.log("here",a.target.value,e.name),e.sno=a.target.value),e})),n[e].invItems=r,console.log(n),k(Object(l.a)(n))},placeholder:"Cse Id.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-1 py-1 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})):t.sno),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.location)),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.invnumber)),u.a.createElement(f.TableCell,null,"Vendor"==j[e].to&&"In Transit"==t.location?u.a.createElement(f.Select,{value:t.condition,className:"mt-1",onChange:function(a){var n=j,r=j[e].invItems;r=r.filter((function(e){return e._id!=t._id||(console.log("here",a.target.value,e.name),e.condition=a.target.value),e})),n[e].invItems=r,console.log(n),k(Object(l.a)(n))}},u.a.createElement("option",{value:"Good"}," Good"),u.a.createElement("option",{value:"Defective"},"Defective"),u.a.createElement("option",{value:"DOA"},"DOA"),"z",u.a.createElement("option",{value:"Damaged"},"Damaged")):u.a.createElement(f.Badge,{type:"Good"==t.condition?"primary":"danger"},t.condition)),u.a.createElement(f.TableCell,null,u.a.createElement(f.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){"In Transit"==t.location?je(e,r):(Oe("Already Received"),Te(!0))}},"In Transit"==t.location?u.a.createElement(u.a.Fragment,null,"Receive"):u.a.createElement(u.a.Fragment,null,"Received"))))}))):u.a.createElement(u.a.Fragment,null,j[e].CMRRItems.map((function(t,a){return u.a.createElement(f.TableRow,{key:a,onClick:function(){}},u.a.createElement(f.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},t.type)))),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.name)),u.a.createElement(f.TableCell,null,t.sno),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.location)),u.a.createElement(f.TableCell,null,u.a.createElement("span",{className:"text-sm"},t.invnumber)),u.a.createElement(f.TableCell,null,u.a.createElement(f.Badge,{type:"Good"==t.condition?"primary":"danger"},t.condition)),u.a.createElement(f.TableCell,null,u.a.createElement(f.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){"In Transit"==t.location?ke(e,a):(Oe("Already Received"),Te(!0))}},"In Transit"==t.location?u.a.createElement(u.a.Fragment,null,"Receive"):u.a.createElement(u.a.Fragment,null,"Received"))))}))))))))}(t,e.to):null)})))),u.a.createElement(f.TableFooter,null,u.a.createElement(f.Pagination,{totalResults:be,resultsPerPage:10,label:"Table navigation",onChange:function(e){C(e)}})))),u.a.createElement(u.a.Fragment,null,u.a.createElement(f.Modal,{isOpen:we,onClose:function(){return Te(!1)}},u.a.createElement(f.ModalHeader,null,Ne),u.a.createElement(f.ModalBody,null),u.a.createElement(f.ModalFooter,null,u.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return Te(!1)}},"Okay!")))))}},96:function(e,t,a){}}]);
//# sourceMappingURL=44.325c0bc4.chunk.js.map