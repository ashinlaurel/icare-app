(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[43],{1078:function(e,t,a){"use strict";a.r(t);var l=a(3),n=a.n(l),r=a(9),c=a(2),o=a(0),s=a.n(o),u=a(19),m=a.n(u),i=a(8),d=a.n(i),b=a(15),E=a(28),p=a(1),f=a(10),v=(a(94),a(30),a(29));t.default=function(){var e=Object(o.useState)(0),t=Object(c.a)(e,2),a=t[0],l=t[1],u=Object(o.useContext)(v.a),i=(u.topheading,u.setTopHeading),g=Object(o.useState)(!1),h=Object(c.a)(g,2),x=(h[0],h[1],Object(o.useState)(1)),w=Object(c.a)(x,2),T=w[0],y=w[1],C=Object(o.useState)([]),O=Object(c.a)(C,2),N=O[0],j=O[1],k=Object(o.useState)(!0),S=Object(c.a)(k,2),B=S[0],I=S[1],F=Object(o.useState)(!0),L=Object(c.a)(F,2),M=(L[0],L[1],Object(o.useState)("")),R=Object(c.a)(M,2),_=R[0],A=(R[1],Object(o.useState)("")),D=Object(c.a)(A,2),z=D[0],P=D[1],H=Object(o.useState)(""),K=Object(c.a)(H,2),U=K[0],Y=K[1],G=Object(o.useState)(""),J=Object(c.a)(G,2),q=J[0],Q=J[1],V=Object(o.useState)({}),W=Object(c.a)(V,2),X=W[0],Z=(W[1],Object(o.useState)("")),$=Object(c.a)(Z,2),ee=($[0],$[1],Object(o.useState)("")),te=Object(c.a)(ee,2),ae=(te[0],te[1],Object(o.useState)("")),le=Object(c.a)(ae,2),ne=le[0],re=le[1],ce=Object(o.useState)(20),oe=Object(c.a)(ce,2),se=oe[0],ue=oe[1],me=Object(o.useState)(-1),ie=Object(c.a)(me,2),de=ie[0],be=ie[1],Ee=Object(o.useState)(!1),pe=Object(c.a)(Ee,2),fe=pe[0],ve=pe[1],ge=Object(o.useState)(""),he=Object(c.a)(ge,2),xe=he[0],we=he[1];Object(o.useEffect)((function(){return i("Notifications"),function(){i("")}}),[]),Object(o.useEffect)((function(){var e=b.a.getLocation();!function(){var t=Object(r.a)(n.a.mark((function t(){var a,l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getter called"),a={pages:{page:T,limit:10},filters:{from:z,to:U,status:"In Transit",searchquery:ne}},"All"!=e&&(a.filters.to=e),t.prev=3,t.next=6,d()({url:"".concat(f.a,"/lst/").concat(b.a.getId(),"/getall"),method:"POST",data:a});case 6:l=t.sent,console.log(l.data.out),ue(l.data.total),j(l.data.out),t.next=15;break;case 12:throw t.prev=12,t.t0=t.catch(3),t.t0;case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}()()}),[T,z,U,q,_,B]),console.log(X);var Te=function(){var e=Object(r.a)(n.a.mark((function e(t,a){var l,r,c,o,s,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=N,r=N[t],c=r.invItems[a],console.log(r,c),o={id:c._id,update:{location:r.to}},console.log("PAYLOAD",o),e.prev=6,e.next=9,d()({url:"".concat(f.a,"/inventory/").concat(b.a.getId(),"/invupdate"),method:"POST",data:o});case 9:l[t].invItems[a].location=r.to,j(l),be(-1),be(t),console.log("Done"),e.next=20;break;case 16:throw e.prev=16,e.t0=e.catch(6),console.log(e.t0),e.t0;case 20:if(s=!1,l[t].invItems.map((function(e){"In Transit"==e.location&&(s=!0)})),1!=s){e.next=26;break}return we("".concat(c.name," Recieved")),ve(!0),e.abrupt("return");case 26:return u={id:r._id,update:{status:"Received"}},e.prev=27,e.next=30,d()({url:"".concat(f.a,"/lst/").concat(b.a.getId(),"/update"),method:"POST",data:u});case 30:we("".concat(c.name," Recieved.\n All Items Received from LST")),ve(!0),console.log("Done"),e.next=39;break;case 35:throw e.prev=35,e.t1=e.catch(27),console.log(e.t1),e.t1;case 39:case"end":return e.stop()}}),e,null,[[6,16],[27,35]])})));return function(t,a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"mb-64 mt-4"},s.a.createElement("div",{className:" font-bold text-xl mt-10 dark:text-white"},"LSTs In Transit"),s.a.createElement("div",{className:""},s.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:z,onChange:function(e){P(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"From Location"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),s.a.createElement("option",{value:"Kottayam"},"Kottayam"),s.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),"All"==b.a.getLocation?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:U,onChange:function(e){Y(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"To Location"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),s.a.createElement("option",{value:"Kottayam"},"Kottayam"),s.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))):null,s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:q,onChange:function(e){Q(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Condition"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"Good"},"Good"),s.a.createElement("option",{value:"Bad"},"Bad")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"block relative xl:ml-64"},s.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},s.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},s.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),I(!B)}},s.a.createElement("input",{value:ne,onChange:function(e){return re(e.target.value)},placeholder:"Search LST Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),s.a.createElement(p.TableContainer,{className:"mt-4"},s.a.createElement(p.Table,null,s.a.createElement(p.TableHeader,null,s.a.createElement("tr",{className:"flex flex-row justify-between"},s.a.createElement(p.TableCell,null,"LST.No"),s.a.createElement(p.TableCell,null,"From"),s.a.createElement(p.TableCell,null,"To"),s.a.createElement(p.TableCell,null,"Date"),s.a.createElement(p.TableCell,null,"No."),s.a.createElement(p.TableCell,null," Report"),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"cursor-pointer",onClick:function(){return be(-1)}},"Items")))),s.a.createElement(p.TableBody,null,N.map((function(e,t){return s.a.createElement("div",{className:"flex flex-col justify-around"},s.a.createElement(p.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ".concat(a==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){l(t)}},s.a.createElement(p.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.LSTNo)))),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.from)),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.to)),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"}," ",m()(e.date).format("DD/MM/YYYY"))),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.invItems.length)),s.a.createElement(p.TableCell,{className:"text-center "},s.a.createElement(p.Button,{layout:"outline","aria-label":"DropDown",onClick:function(){console.log("dwlod")},className:"rounded-lg m-1"},"Download")),s.a.createElement(p.TableCell,{className:"text-center "},s.a.createElement(p.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(a),be(t)},className:"rounded-lg m-1"},s.a.createElement(E.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),de==t?(n=e.invItems,r=t,s.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3"},s.a.createElement("div",{className:"mb- mt-4"},s.a.createElement(p.TableContainer,{className:"mt-4"},s.a.createElement(p.Table,null,s.a.createElement(p.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(p.TableCell,null,"Type"),s.a.createElement(p.TableCell,null,"Name"),s.a.createElement(p.TableCell,null,"Serial Number"),s.a.createElement(p.TableCell,null,"Location"),s.a.createElement(p.TableCell,null,"Inv Number"),s.a.createElement(p.TableCell,null,"Condition"),s.a.createElement(p.TableCell,null,"Recieve"))),s.a.createElement(p.TableBody,null,n.map((function(e,t){return s.a.createElement(p.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(a==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){l(e._id)}},s.a.createElement(p.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.type)))),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.name)),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.sno)),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.location)),s.a.createElement(p.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.invnumber)),s.a.createElement(p.TableCell,null,s.a.createElement(p.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)),s.a.createElement(p.TableCell,null,s.a.createElement(p.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){"In Transit"==e.location?Te(r,t):(we("Already Recieved"),ve(!0))}},"In Transit"==e.location?s.a.createElement(s.a.Fragment,null,"Receive"):s.a.createElement(s.a.Fragment,null,"Received"))))})))))))):null);var n,r})))),s.a.createElement(p.TableFooter,null,s.a.createElement(p.Pagination,{totalResults:se,resultsPerPage:10,label:"Table navigation",onChange:function(e){y(e)}})))),s.a.createElement(s.a.Fragment,null,s.a.createElement(p.Modal,{isOpen:fe,onClose:function(){return ve(!1)}},s.a.createElement(p.ModalHeader,null,xe),s.a.createElement(p.ModalBody,null),s.a.createElement(p.ModalFooter,null,s.a.createElement(p.Button,{className:"w-full sm:w-auto",onClick:function(){return ve(!1)}},"Okay!")))))}},87:function(e,t,a){},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var l=a(3),n=a.n(l),r=a(9),c=a(2),o=a(0),s=a.n(o),u=a(8),m=a.n(u),i=a(1),d=a(92),b=(a(87),a(10));function E(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,u=e.setUnit,E=e.account,p=e.setAccount,f=e.customer,v=e.setCustomer,g=e.refresh,h=e.setRefresh,x=Object(o.useState)([]),w=Object(c.a)(x,2),T=w[0],y=w[1],C=Object(o.useState)([]),O=Object(c.a)(C,2),N=O[0],j=O[1],k=Object(o.useState)([]),S=Object(c.a)(k,2),B=S[0],I=S[1],F=Object(o.useState)(0),L=Object(c.a)(F,2),M=L[0],R=L[1],_=Object(o.useState)(""),A=Object(c.a)(_,2),D=A[0],z=A[1],P=function(e){z(e.target.value)},H=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:D,role:1},e.prev=2,e.next=5,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),y(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:D,role:1},e.prev=1,e.next=4,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),y(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var K=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),p({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),j(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),p({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),I(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),u({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(i.ModalHeader,null,"Select"," ",0==M?s.a.createElement(s.a.Fragment,null,"Customer"):1==M?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(i.ModalBody,null,s.a.createElement(d.d,{selectedIndex:M,onSelect:function(e){return R(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:H},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:P}))))),s.a.createElement(i.TableBody,null,T.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return K(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Account"))),s.a.createElement(i.TableBody,null,N.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return U(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Unit"))),s.a.createElement(i.TableBody,null,B.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(i.TableFooter,null)))),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",E.accountName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName)),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!g)}},"Select"))))}}}]);
//# sourceMappingURL=43.a405a034.chunk.js.map