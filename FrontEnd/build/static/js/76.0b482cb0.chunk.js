(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[76],{1210:function(e,a,t){"use strict";t.r(a);var l=t(5),n=t.n(l),r=t(12),c=t(3),s=t(0),o=t.n(s),m=t(20),u=t.n(m),i=t(9),b=t.n(i),d=(t(207),t(18)),E=t(36),p=t(2),g=t(10),f=(t(202),t(44),t(43));a.default=function(){var e=Object(s.useContext)(f.a),a=(e.topheading,e.setTopHeading),t=Object(s.useState)(!1),l=Object(c.a)(t,2),m=(l[0],l[1],Object(s.useState)(1)),i=Object(c.a)(m,2),v=i[0],h=i[1],y=Object(s.useState)([]),x=Object(c.a)(y,2),w=x[0],T=x[1],C=Object(s.useState)(!0),j=Object(c.a)(C,2),O=j[0],N=j[1],S=Object(s.useState)(!0),k=Object(c.a)(S,2),D=(k[0],k[1],Object(s.useState)("")),I=Object(c.a)(D,2),z=I[0],B=I[1],M=Object(s.useState)(""),L=Object(c.a)(M,2),P=L[0],Y=(L[1],Object(s.useState)("")),A=Object(c.a)(Y,2),H=A[0],K=A[1],F=Object(s.useState)(""),R=Object(c.a)(F,2),_=R[0],q=(R[1],Object(s.useState)("")),J=Object(c.a)(q,2),V=J[0],G=(J[1],Object(s.useState)({})),W=Object(c.a)(G,2),Q=W[0],U=(W[1],Object(s.useState)("")),X=Object(c.a)(U,2),Z=(X[0],X[1],Object(s.useState)("")),$=Object(c.a)(Z,2),ee=($[0],$[1],Object(s.useState)("")),ae=Object(c.a)(ee,2),te=ae[0],le=ae[1],ne=Object(s.useState)(""),re=Object(c.a)(ne,2),ce=re[0],se=re[1],oe=Object(s.useState)(20),me=Object(c.a)(oe,2),ue=me[0],ie=me[1],be=Object(s.useState)(-1),de=Object(c.a)(be,2),Ee=de[0],pe=de[1];return Object(s.useEffect)((function(){return a("Purchase History"),function(){a("")}}),[]),Object(s.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getter called"),a={pages:{page:v,limit:10},filters:{systype:z,location:H,searchquery:te,vendorsearchquery:ce,stocktype:P}},e.prev=2,e.next=5,b()({url:"".concat(g.API,"/inventory/").concat(d.a.getId(),"/getallhistory"),method:"POST",data:a});case 5:t=e.sent,console.log(t.data.out),ie(t.data.total),T(t.data.out),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}()()}),[v,H,_,V,z,O,P]),console.log(Q),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mb-64 mt-4"},o.a.createElement("div",{className:""},o.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},o.a.createElement("div",{class:"relative mx-1 "},o.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:z,onChange:function(e){B(e.target.value)}},o.a.createElement("option",{value:"",disabled:!0,selected:!0},"Type"),o.a.createElement("option",{value:""},"All"),o.a.createElement("option",{value:"item"},"Item"),o.a.createElement("option",{value:"full system"},"Full System")),o.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},o.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),o.a.createElement("div",{class:"relative mx-1 "},o.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:H,onChange:function(e){K(e.target.value)}},o.a.createElement("option",{value:"",disabled:!0,selected:!0},"Location"),o.a.createElement("option",{value:""},"All"),o.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),o.a.createElement("option",{value:"Kottayam"},"Kottayam"),o.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),o.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},o.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),o.a.createElement("div",{class:"block relative xl:ml-64"},o.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},o.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},o.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N(!O)}},o.a.createElement("input",{value:te,onChange:function(e){return le(e.target.value)},placeholder:"Search Invoice Number",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))),o.a.createElement("div",{class:"block relative xl:ml-64"},o.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},o.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},o.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),N(!O)}},o.a.createElement("input",{value:ce,onChange:function(e){return se(e.target.value)},placeholder:"Search Vendor",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),o.a.createElement(p.TableContainer,{className:"mt-4"},o.a.createElement(p.Table,null,o.a.createElement(p.TableHeader,null,o.a.createElement("tr",{className:"flex flex-row justify-between"},o.a.createElement(p.TableCell,null," Type"),o.a.createElement(p.TableCell,null,"Vendor"),o.a.createElement(p.TableCell,null,"Inventory No."),o.a.createElement(p.TableCell,null,"Date"),o.a.createElement(p.TableCell,null,"Location"),o.a.createElement(p.TableCell,null,"No.Items"),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"cursor-pointer",onClick:function(){return pe(-1)}},"Items")))),o.a.createElement(p.TableBody,null,w.map((function(e,a){return o.a.createElement("div",{className:"flex flex-col justify-around"},o.a.createElement(p.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ".concat(Ee==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){}},o.a.createElement(p.TableCell,{className:"w-8"},o.a.createElement("div",{className:"flex items-center text-sm "},o.a.createElement("div",null,o.a.createElement("p",{className:"font-semibold"},e.purchtype)))),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.vendor)),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.invnumber)),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"}," ",u()(e.invdate).format("DD/MM/YYYY"))),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.location)),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.invItems.length)),o.a.createElement(p.TableCell,{className:"text-center "},o.a.createElement(p.Button,{size:"icon","aria-label":"DropDown",onClick:function(){console.log(Ee),pe(Ee==a?-1:a)},className:"rounded-lg m-1"},o.a.createElement(E.DropdownIcon,{className:"w-5 h-5","aria-hidden":"true"})))),Ee==a?(t=e.invItems,o.a.createElement("div",{className:" bg-gray-200 dark:bg-gray-700 p-3 "},o.a.createElement("div",{className:"mb- mt-4"},o.a.createElement(p.TableContainer,{className:"mt-4"},o.a.createElement(p.Table,null,o.a.createElement(p.TableHeader,null,o.a.createElement("tr",null,o.a.createElement(p.TableCell,null,"Category"),o.a.createElement(p.TableCell,null,"Description"),o.a.createElement(p.TableCell,null,"Serial Number"),o.a.createElement(p.TableCell,null,"Location"),o.a.createElement(p.TableCell,null,"Invoice Number"),o.a.createElement(p.TableCell,null,"Inv Date"),o.a.createElement(p.TableCell,null,"Wty Expiry"),o.a.createElement(p.TableCell,null,"Status"))),o.a.createElement(p.TableBody,null,t.map((function(e,a){return o.a.createElement(p.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(Ee==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){pe(e._id)}},o.a.createElement(p.TableCell,{className:"w-8"},o.a.createElement("div",{className:"flex items-center text-sm "},o.a.createElement("div",null,o.a.createElement("p",{className:"font-semibold"},e.type)))),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.name)),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.sno)),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.location)),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.invnumber)),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},u()(e.invdate).format("DD/MM/YY"))),o.a.createElement(p.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.expirydate)),o.a.createElement(p.TableCell,null,o.a.createElement(p.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)))})))))))):null);var t})))),o.a.createElement(p.TableFooter,null,o.a.createElement(p.Pagination,{totalResults:ue,resultsPerPage:10,label:"Table navigation",onChange:function(e){h(e)}})))))}}}]);
//# sourceMappingURL=76.0b482cb0.chunk.js.map