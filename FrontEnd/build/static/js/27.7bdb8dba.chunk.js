(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[27],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(4),l=a.n(n),r=a(11),c=a(2),o=a(0),s=a.n(o),u=a(7),m=a.n(u),i=a(1),d=a(105),b=(a(99),a(9));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,u=e.setUnit,p=e.account,f=e.setAccount,E=e.customer,g=e.setCustomer,v=e.refresh,h=e.setRefresh,w=e.theunitdetails,y=e.setTheUnitDetails,T=Object(o.useState)([]),x=Object(c.a)(T,2),C=x[0],N=x[1],O=Object(o.useState)([]),j=Object(c.a)(O,2),k=j[0],S=j[1],L=Object(o.useState)([]),R=Object(c.a)(L,2),M=R[0],B=R[1],D=Object(o.useState)(0),A=Object(c.a)(D,2),_=A[0],F=A[1],I=Object(o.useState)(""),z=Object(c.a)(I,2),U=z[0],H=z[1],P=function(e){H(e.target.value)},K=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:U,role:1},e.prev=2,e.next=5,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),N(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:U,role:1},e.prev=1,e.next=4,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),N(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var Y=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),f({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),S(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),f({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),B(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(t),u({_id:t._id,contactPerson:t.contactPerson,contactNo:t.contactNo,unitName:t.unitName});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(i.ModalHeader,null,"Select"," ",0==_?s.a.createElement(s.a.Fragment,null,"Customer"):1==_?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},s.a.createElement(d.d,{selectedIndex:_,onSelect:function(e){return F(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:K},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:P}))))),s.a.createElement(i.TableBody,null,C.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Account"))),s.a.createElement(i.TableBody,null,k.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return q(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Unit"))),s.a.createElement(i.TableBody,null,M.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return G(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(i.TableFooter,null))))),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName),s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!v),w&&y(n),S([]),B([])}},"Select"))))}},1102:function(e,t,a){"use strict";a.r(t);var n=a(15),l=a(4),r=a.n(l),c=a(11),o=a(2),s=a(0),u=a.n(s),m=a(21),i=a.n(m),d=a(7),b=a.n(d),p=a(124),f=a(17),E=a(31),g=a(1),v=a(9),h=(a(106),a(33),a(32)),w=a(115);t.default=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],m=Object(s.useState)(0),d=Object(o.a)(m,2),y=d[0],T=d[1],x=Object(s.useState)(-1),C=Object(o.a)(x,2),N=C[0],O=C[1],j=Object(s.useState)(!1),k=Object(o.a)(j,2),S=k[0],L=k[1],R=Object(s.useState)({}),M=Object(o.a)(R,2),B=M[0],D=M[1],A=Object(s.useState)(0),_=Object(o.a)(A,2),F=_[0],I=_[1],z=Object(s.useContext)(h.a),U=(z.topheading,z.setTopHeading),H=Object(s.useState)(!1),P=Object(o.a)(H,2),K=(P[0],P[1],Object(s.useState)(1)),Y=Object(o.a)(K,2),q=Y[0],G=Y[1],J=Object(s.useState)([{CMRRItems:[]}]),V=Object(o.a)(J,2),X=V[0],W=V[1],Q=Object(s.useState)(!0),Z=Object(o.a)(Q,2),$=Z[0],ee=Z[1],te=Object(s.useState)(!0),ae=Object(o.a)(te,2),ne=(ae[0],ae[1],Object(s.useState)("")),le=Object(o.a)(ne,2),re=le[0],ce=le[1],oe=Object(s.useState)(""),se=Object(o.a)(oe,2),ue=se[0],me=se[1],ie=Object(s.useState)(""),de=Object(o.a)(ie,2),be=de[0],pe=de[1],fe=Object(s.useState)(""),Ee=Object(o.a)(fe,2),ge=Ee[0],ve=(Ee[1],Object(s.useState)("Normal")),he=Object(o.a)(ve,2),we=he[0],ye=he[1],Te=Object(s.useState)({}),xe=Object(o.a)(Te,2),Ce=xe[0],Ne=(xe[1],Object(s.useState)("")),Oe=Object(o.a)(Ne,2),je=(Oe[0],Oe[1],Object(s.useState)("")),ke=Object(o.a)(je,2),Se=(ke[0],ke[1],Object(s.useState)("")),Le=Object(o.a)(Se,2),Re=Le[0],Me=Le[1],Be=Object(s.useState)(20),De=Object(o.a)(Be,2),Ae=De[0],_e=De[1],Fe=Object(s.useState)(-1),Ie=Object(o.a)(Fe,2),ze=Ie[0],Ue=Ie[1];Object(s.useEffect)((function(){return U("LST History"),function(){U("")}}),[]),Object(s.useEffect)((function(){!function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getter called"),t={pages:{page:q,limit:10},filters:{from:ue,to:be,status:re,LSTtype:we,searchquery:Re}},e.prev=2,e.next=5,b()({url:"".concat(v.a,"/lst/").concat(f.a.getId(),"/getall"),method:"POST",data:t});case 5:a=e.sent,console.log(a.data.out),_e(a.data.total),W(a.data.out),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}()()}),[q,ue,be,ge,re,$,we]),console.log(Ce);var He=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n,l){var c,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={id:t,update:{CourierNumber:n,DocketType:l}},e.next=3,b()({url:"".concat(v.a,"/lst/").concat(f.a.getId(),"/downloadpdf"),method:"POST",data:c,responseType:"blob"});case 3:o=e.sent,s=new Blob([o.data],{type:"application/pdf"}),L(!1),Object(p.saveAs)(s,"LST_".concat(a,".pdf"));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,l){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(g.Modal,{isOpen:a,onClose:function(){return l(!1)}},u.a.createElement(g.ModalHeader,null,"Are you sure you want to delete!"),u.a.createElement(g.ModalBody,null),u.a.createElement(g.ModalFooter,null,u.a.createElement(g.Button,{className:"w-full sm:w-auto",onClick:Object(c.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=X[N].invItems,console.log(t),t.map(function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t._id,update:{location:X[N].from}},console.log("PAYLOAD",a),e.prev=2,e.next=5,b()({url:"".concat(v.a,"/inventory/").concat(f.a.getId(),"/invupdate"),method:"POST",data:a});case 5:console.log("Done"),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(2),console.log(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()),e.prev=3,e.next=6,b()({url:"".concat(v.a,"/lst/").concat(f.a.getId(),"/delete"),method:"POST",data:{id:y}});case 6:a=e.sent,console.log(a.data),n=X.filter((function(e){return e._id!=y})),W(n),l(!1),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(3),e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))},"Confirm Delete")))),(console.log(B),u.a.createElement(u.a.Fragment,null,u.a.createElement(g.Modal,{isOpen:S,onClose:function(){return L(!1)}},u.a.createElement(g.ModalHeader,null,"Download LST"),u.a.createElement(g.ModalBody,null,X[F]?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"flex flex-row"},u.a.createElement("div",{className:" my-2 ml-5 mr-2 w-full"},"Docket Type:"),u.a.createElement("input",{value:X[F].DocketType,onChange:function(e){var t=Object(n.a)(X);t[F].DocketType=e.target.value,W(t)},class:"w-full mr-5 shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})),u.a.createElement("div",{className:"flex flex-row my-2"},u.a.createElement("div",{className:"my-2 ml-5 mr-2 w-full"},"Courier Number:"),u.a.createElement("input",{value:X[F].CourierNumber,onChange:function(e){var t=Object(n.a)(X);t[F].CourierNumber=e.target.value,W(t)},class:"w-full mr-5  shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))):null),u.a.createElement(g.ModalFooter,null,u.a.createElement(g.Button,{className:"w-full sm:w-auto",onClick:Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:He(X[F]._id,X[F].LSTNo,X[F].CourierNumber,X[F].DocketType);case 1:case"end":return e.stop()}}),e)})))},"Download"))))),u.a.createElement("div",{className:"mb-64 mt-4"},u.a.createElement("div",{className:""},u.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:re,onChange:function(e){ce(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"Status"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"In Transit"},"In Transit"),u.a.createElement("option",{value:"Received"},"Received")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:we,onChange:function(e){ye(e.target.value)}},u.a.createElement("option",{value:"",selected:!0},"LST type"),u.a.createElement("option",{value:"Normal"},"Normal"),u.a.createElement("option",{value:"CMRR"},"CMRR"),u.a.createElement("option",{value:"Customer"},"Customer")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ue,onChange:function(e){me(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"From Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"relative mx-1 "},u.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:be,onChange:function(e){pe(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0,selected:!0},"To Location"),u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode"),u.a.createElement("option",{value:"Vendor"},"Vendor")),u.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},u.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},u.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),u.a.createElement("div",{class:"block relative xl:ml-64"},u.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},u.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},u.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),ee(!$)}},u.a.createElement("input",{value:Re,onChange:function(e){return Me(e.target.value)},placeholder:"Search LST Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),u.a.createElement(g.TableContainer,{className:"mt-4"},u.a.createElement(g.Table,null,u.a.createElement(g.TableHeader,null,u.a.createElement("tr",{className:""},u.a.createElement(g.TableCell,null,"No"),u.a.createElement(g.TableCell,null,"From"),u.a.createElement(g.TableCell,null,"To"),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:""},"Date")," "),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:""},"Num")," "),u.a.createElement(g.TableCell,null," Report"),0==f.a.getRole()?u.a.createElement(g.TableCell,null," Delete"):null,u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"cursor-pointer",onClick:function(){return Ue(-1)}},"Items")))),u.a.createElement(g.TableBody,null,X.map((function(e,t){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600   ".concat(ze==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},u.a.createElement(g.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.LSTNo)))),u.a.createElement(g.TableCell,{className:""},u.a.createElement("span",{className:" "},e.from)),u.a.createElement(g.TableCell,{className:"  "},u.a.createElement("span",{className:"  "},e.vendorId?e.vendorName:e.to)),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"}," ",i()(e.date).format("DD/MM/YYYY"))),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},"Normal"==e.LSTtype||"Customer"==e.LSTtype?e.invItems.length:e.CMRRItems.length)),u.a.createElement(g.TableCell,{className:" "},u.a.createElement(g.Button,{layout:"outline","aria-label":"DropDown",onClick:function(){console.log("dwlod"),D(e),L(!0),I(t)},className:"rounded-lg m-1"},"Download")),0==f.a.getRole()?u.a.createElement(g.TableCell,{className:" "},u.a.createElement(g.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:Object(c.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("delete LST"),l(!0),T(e._id),O(t);case 4:case"end":return a.stop()}}),a)})))},u.a.createElement(E.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"}))):null,u.a.createElement(g.TableCell,{className:" "},u.a.createElement(g.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(ze),Ue(-1!=ze?-1:t)},className:"rounded-lg m-1"},u.a.createElement(E.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),u.a.createElement(g.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 relative   ".concat(ze==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},u.a.createElement(g.TableCell,{className:"absolute w-full m-0"},ze==t?function(e,t,a,n){return u.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3"},"Customer"==a?u.a.createElement("div",null,"Customer:",t):null,u.a.createElement("div",{className:"mb- mt-4"},u.a.createElement(g.TableContainer,{className:"mt-4"},u.a.createElement(g.Table,null,u.a.createElement(g.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(g.TableCell,null,"Type"),u.a.createElement(g.TableCell,null,"Name"),u.a.createElement(g.TableCell,null,"Serial Number"),u.a.createElement(g.TableCell,null,"Location"),u.a.createElement(g.TableCell,null,"Inv Number"),u.a.createElement(g.TableCell,null,"Condition"))),u.a.createElement(g.TableBody,null,"Normal"==a||"Customer"==a?u.a.createElement(u.a.Fragment,null,e.map((function(e,t){return u.a.createElement(g.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(ze==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){Ue(e._id)}},u.a.createElement(g.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},Object(w.capitalize)(e.type))))),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.name)),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.sno)),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.location)),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.invnumber)),u.a.createElement(g.TableCell,null,u.a.createElement(g.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)))}))):u.a.createElement(u.a.Fragment,null,n.map((function(e,t){return u.a.createElement(g.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(ze==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){Ue(e._id)}},u.a.createElement(g.TableCell,{className:"w-8"},u.a.createElement("div",{className:"flex items-center text-sm "},u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},Object(w.capitalize)(e.type))))),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.name)),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.sno)),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.location)),u.a.createElement(g.TableCell,null,u.a.createElement("span",{className:"text-sm"},e.invnumber)),u.a.createElement(g.TableCell,null,u.a.createElement(g.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)))}))))))))}(e.invItems,e.customerName,e.LSTtype,e.CMRRItems):null)))})))),u.a.createElement(g.TableFooter,null,u.a.createElement(g.Pagination,{totalResults:Ae,resultsPerPage:10,label:"Table navigation",onChange:function(e){G(e)}})))))}},115:function(e,t){t.capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}},124:function(e,t,a){(function(a){var n,l,r;l=[],void 0===(r="function"===typeof(n=function(){"use strict";function t(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){o(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,a,c){var o=r.URL||r.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?l(s):n(s.href)?t(e,a,c):l(s,s.target="_blank")):(s.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(s.href)}),4e4),setTimeout((function(){l(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,r){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),a);else if(n(e))t(e,a,r);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){l(c)}))}}:function(e,a,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,n);var o="application/octet-stream"===e.type,s=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||o&&s||c)&&"undefined"!=typeof FileReader){var m=new FileReader;m.onloadend=function(){var e=m.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=e:location=e,l=null},m.readAsDataURL(e)}else{var i=r.URL||r.webkitURL,d=i.createObjectURL(e);l?l.location=d:location.href=d,l=null,setTimeout((function(){i.revokeObjectURL(d)}),4e4)}});r.saveAs=o.saveAs=o,e.exports=o})?n.apply(t,l):n)||(e.exports=r)}).call(this,a(57))},99:function(e,t,a){}}]);
//# sourceMappingURL=27.7bdb8dba.chunk.js.map