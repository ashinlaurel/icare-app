(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[28],{1085:function(e,t,a){"use strict";a.r(t);var l=a(95),n=a(3),r=a.n(n),c=a(10),o=a(2),u=a(0),s=a.n(u),m=a(18),i=a.n(m),d=a(7),b=a.n(d),p=a(15),E=a(28),f=a(1),v=a(8),g=(a(93),a(30)),h=a(29);t.default=function(){var e=Object(u.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1],Object(u.useState)(0)),n=Object(o.a)(a,2),m=(n[0],n[1],Object(u.useContext)(g.a)),d=(m.bbaropen,m.setBBarOpen,m.setAssetDetails,m.assetdetails,Object(u.useState)(-1)),y=Object(o.a)(d,2),x=y[0],w=y[1],O=Object(u.useContext)(h.a),T=(O.topheading,O.setTopHeading),C=Object(u.useState)(!1),j=Object(o.a)(C,2),k=(j[0],j[1],Object(u.useState)(1)),N=Object(o.a)(k,2),S=N[0],I=N[1],B=Object(u.useState)([]),_=Object(o.a)(B,2),M=_[0],A=_[1],L=Object(u.useState)([]),D=Object(o.a)(L,2),F=D[0],P=D[1],z=Object(u.useState)(!1),H=Object(o.a)(z,2),K=(H[0],H[1],Object(u.useState)(!1)),R=Object(o.a)(K,2),U=(R[0],R[1],Object(u.useState)(!1)),V=Object(o.a)(U,2),G=(V[0],V[1],Object(u.useState)(!0)),Y=Object(o.a)(G,2),q=Y[0],J=Y[1],W=Object(u.useState)(!0),$=Object(o.a)(W,2),Q=($[0],$[1],Object(u.useState)("")),X=Object(o.a)(Q,2),Z=X[0],ee=X[1],te=Object(u.useState)(""),ae=Object(o.a)(te,2),le=ae[0],ne=ae[1],re=Object(u.useState)(""),ce=Object(o.a)(re,2),oe=ce[0],ue=ce[1],se=Object(u.useState)(""),me=Object(o.a)(se,2),ie=me[0],de=me[1],be=Object(u.useState)(i()().format()),pe=Object(o.a)(be,2),Ee=pe[0],fe=pe[1],ve=Object(u.useState)("Available"),ge=Object(o.a)(ve,2),he=ge[0],ye=ge[1],xe=Object(u.useState)({}),we=Object(o.a)(xe,2),Oe=we[0],Te=(we[1],Object(u.useState)("")),Ce=Object(o.a)(Te,2),je=Ce[0],ke=(Ce[1],Object(u.useState)("")),Ne=Object(o.a)(ke,2),Se=(Ne[0],Ne[1],Object(u.useState)("")),Ie=Object(o.a)(Se,2),Be=Ie[0],_e=Ie[1],Me=Object(u.useState)(!1),Ae=Object(o.a)(Me,2),Le=Ae[0],De=Ae[1],Fe=Object(u.useState)(!1),Pe=Object(o.a)(Fe,2),ze=Pe[0],He=Pe[1],Ke=Object(u.useState)(""),Re=Object(o.a)(Ke,2),Ue=Re[0],Ve=Re[1],Ge=Object(u.useState)(!1),Ye=Object(o.a)(Ge,2),qe=Ye[0],Je=Ye[1],We=Object(u.useState)([]),$e=Object(o.a)(We,2),Qe=$e[0],Xe=$e[1],Ze=Object(u.useState)({_id:"",name:"",aadharNo:"",PANNo:"",GSTNo:""}),et=Object(o.a)(Ze,2),tt=et[0],at=et[1],lt=Object(u.useState)(!1),nt=Object(o.a)(lt,2),rt=nt[0],ct=nt[1];function ot(){return(ot=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={filters:{searchquery:""}},e.prev=1,e.next=4,b()({url:"".concat(v.a,"/vendor/").concat(p.a.getId(),"/getAll"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data.out),Xe(a.data.out),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}Object(u.useEffect)((function(){!function(){ot.apply(this,arguments)}()}),[]);var ut=Object(u.useState)(20),st=Object(o.a)(ut,2),mt=st[0],it=st[1];function dt(e){I(e)}var bt=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var l,n,c,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,a),""!=a&&""!=t){e.next=3;break}return e.abrupt("return");case 3:return l={from:a,date:t},n=0,e.prev=5,e.next=8,b()({url:"".concat(v.a,"/lst/").concat(p.a.getId(),"/lstbydate"),method:"POST",data:l});case 8:n=e.sent,e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(5),e.t0;case 14:c="Trivandrum"==a?"TVM":"Kottayam"==a?"KTM":"CLT",o=i()(t).format("YY"),i()(t).format("MM"),i()(t).format("DD"),(u=n.data+1)<10?u="00"+u:u<100&&(u="0"+u),console.log(n.data),de("ICS"+c+o+u);case 23:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t,a){return e.apply(this,arguments)}}();function pt(){return Et.apply(this,arguments)}function Et(){return(Et=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getter called"),t={pages:{page:S,limit:10},filters:{type:Z,location:le,condition:he,searchtype:je,searchquery:Be}},e.prev=2,e.next=5,b()({url:"".concat(v.a,"/inventory/").concat(p.a.getId(),"/getall"),method:"POST",data:t});case 5:a=e.sent,console.log(a.data.out),it(a.data.total),A(a.data.out),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}Object(u.useEffect)((function(){return T("LST"),function(){T("")}}),[]),Object(u.useEffect)((function(){pt()}),[S,le,he,Z,q]),console.log(Oe);var ft=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=ie){e.next=4;break}return Ve("LST Number necessary"),He(!0),e.abrupt("return");case 4:if(""!=Ee){e.next=8;break}return Ve("Date Necessary"),He(!0),e.abrupt("return");case 8:if(le!=oe){e.next=12;break}return Ve("From and to Location is same!"),He(!0),e.abrupt("return");case 12:if(""!=le){e.next=16;break}return Ve("From location not selected"),He(!0),e.abrupt("return");case 16:if(""!=oe){e.next=20;break}return Ve("To location not selected"),He(!0),e.abrupt("return");case 20:if(0!=F.length){e.next=24;break}return Ve("No items selected"),He(!0),e.abrupt("return");case 24:return t=[],F.map(function(){var e=Object(c.a)(r.a.mark((function e(a){var l,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.push(a._id),l={histtype:"lst",date:Ee,location:"In Transit",callId:"Nil",assetId:"Nil",status:a.condition,note:"Item sent from ".concat(le," to ").concat(oe)},n={id:a._id,update:{location:"In Transit",caseId:a.caseId,$push:{history:l}}},console.log("PAYLOAD",n),e.prev=4,e.next=7,b()({url:"".concat(v.a,"/inventory/").concat(p.a.getId(),"/invupdate"),method:"POST",data:n});case 7:console.log("Done"),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(4),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}()),a={from:le,to:oe,LSTNo:ie,date:Ee,invItems:t,status:"In Transit"},""!=tt._id&&(console.log("here"),a.vendorId=tt._id,a.vendorName=tt.name),console.log("LST",a),e.prev=29,e.next=32,b()({url:"".concat(v.a,"/lst/").concat(p.a.getId(),"/create"),method:"POST",data:a});case 32:console.log("Done"),Ve("LST Submitted"),He(!0),P([]),pt(),e.next=43;break;case 39:throw e.prev=39,e.t0=e.catch(29),console.log(e.t0),e.t0;case 43:case"end":return e.stop()}}),e,null,[[29,39]])})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"mb-64 mt-4"},s.a.createElement("div",{className:"flex flex-row dark:text-white  "},s.a.createElement("div",{className:"mr-2 flex flex-row dark:text-white  "},s.a.createElement("div",{className:"mx-1 my-1  "},"From"),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:le,onChange:function(e){ne(e.target.value),bt(Ee,e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Location"),s.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),s.a.createElement("option",{value:"Kottayam"},"Kottayam"),s.a.createElement("option",{value:"Kozhikode"},"Kozhikode")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),s.a.createElement("div",{className:"flex flex-row dark:text-white  "},s.a.createElement("div",{className:"mx-1 my-1 "},"To"),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:oe,onChange:function(e){ue(e.target.value),"Vendor"==e.target.value?ct(!0):ct(!1)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Location"),s.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),s.a.createElement("option",{value:"Kottayam"},"Kottayam"),s.a.createElement("option",{value:"Kozhikode"},"Kozhikode"),s.a.createElement("option",{value:"Vendor"},"Vendor")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))))),rt?s.a.createElement("div",{className:"mx-2"},s.a.createElement(f.Button,{layout:"outline",className:"w-full",onClick:function(){return Je(!0)}},"Select Vendor")):null,s.a.createElement("div",{className:" flex flex-row dark:text-white  "},s.a.createElement("div",{className:" mx-3 my-1 "},"LST No."),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("input",{value:ie,disabled:!0,onChange:function(e){return de(e.target.value)},class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))),s.a.createElement("div",{className:"flex flex-row dark:text-white  "},s.a.createElement("div",{className:" my-2 "},"Date"),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("input",{type:"date",value:Ee,onChange:function(e){fe(e.target.value),bt(e.target.value,le)},placeholder:"LST No.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))),s.a.createElement("div",{className:"flex flex-row dark:text-white mx-5 "},s.a.createElement(f.Button,{onClick:ft},"Submit"))),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:""},s.a.createElement("div",{class:"mb-1 mt-5 dark:text-white font-semibold "},"Selected Items")),s.a.createElement(f.TableContainer,{className:"mt-4"},s.a.createElement(f.Table,null,s.a.createElement(f.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(f.TableCell,null,"Type"),s.a.createElement(f.TableCell,null,"Name"),s.a.createElement(f.TableCell,null,"Serial Number"),s.a.createElement(f.TableCell,null,"Location"),s.a.createElement(f.TableCell,null,"Inv Number"),s.a.createElement(f.TableCell,null,"Condition"),s.a.createElement(f.TableCell,null,"Case Id"),s.a.createElement(f.TableCell,null,"Remove"))),s.a.createElement(f.TableBody,null,F.map((function(e,t){return s.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(x==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){w(t)}},s.a.createElement(f.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.type)))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.name)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.sno)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.location)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.invnumber)),s.a.createElement(f.TableCell,null,s.a.createElement(f.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)),s.a.createElement(f.TableCell,null,s.a.createElement("input",{value:e.caseId,onChange:function(t){var a=F;a=a.filter((function(a){if(a._id!=e._id)return a;console.log("here",t.target.value);var l=a;return l.caseId=t.target.value,l})),console.log(a),P(a)},defaultValue:"Imprest",placeholder:"Cse Id.",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-1 py-1 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"})),s.a.createElement(f.TableCell,null,s.a.createElement("div",{className:" py-1",onClick:function(){var t=[].concat(Object(l.a)(M),[e]);A(t);var a=F;a=a.filter((function(t){return t._id!=e._id})),P(a)}},s.a.createElement(E.TrashIcon,{className:"w-5 h-5 cursor-pointer m-2 text-2xl",fill:"maroon","aria-hidden":"true"}))))})))))),s.a.createElement("div",{className:"my-5"},s.a.createElement(f.Button,{onClick:function(){if(""==le||""==oe)return Ve("Select From and To Locations"),void He(!0);De(!0)}},"Add Product from Inventory")),Le?s.a.createElement("div",{className:"dark:bg-gray-700 bg-gray-100 px-2 py-2 rounded-lg"},s.a.createElement("div",{className:""},s.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:Z,onChange:function(e){ee(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Item Type"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"mouse"},"Mouse"),s.a.createElement("option",{value:"keyboard"},"Keyboard"),s.a.createElement("option",{value:"monitor"},"Monitor"),s.a.createElement("option",{value:"cpu"},"Cpu"),s.a.createElement("option",{value:"ram"},"Ram"),s.a.createElement("option",{value:"fan"},"Fan"),s.a.createElement("option",{value:"motherboard"},"Motherboard"),s.a.createElement("option",{value:"smps"},"SMPS"),s.a.createElement("option",{value:"hdd"},"HDD"),s.a.createElement("option",{value:"gcard"},"Gcard"),s.a.createElement("option",{value:"enetcard"},"Enet Card"),s.a.createElement("option",{value:"serialcard"},"Serial Card"),s.a.createElement("option",{value:"paralellcard"},"Paralell Card"),s.a.createElement("option",{value:"opticaldrive"},"Optical Drive"),s.a.createElement("option",{value:"others"},"Others")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"relative mx-1 "},s.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:he,onChange:function(e){ye(e.target.value)}},s.a.createElement("option",{value:"",disabled:!0},"Condition"),s.a.createElement("option",{value:""},"All"),s.a.createElement("option",{value:"Good"},"Good"),s.a.createElement("option",{value:"Bad"},"Bad"),s.a.createElement("option",{value:"Used"},"Used"),s.a.createElement("option",{value:"Available",selected:!0},"Available"),s.a.createElement("option",{value:"Defective"},"Defective"),s.a.createElement("option",{value:"Damaged"},"Damaged"),s.a.createElement("option",{value:"DOA"},"DOA")),s.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},s.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),s.a.createElement("div",{class:"block relative xl:ml-64"},s.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},s.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},s.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),J(!q)}},s.a.createElement("input",{value:Be,onChange:function(e){return _e(e.target.value)},placeholder:"Search",class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),s.a.createElement(f.TableContainer,{className:"mt-4"},s.a.createElement(f.Table,null,s.a.createElement(f.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(f.TableCell,null,"Category"),s.a.createElement(f.TableCell,null,"Description"),s.a.createElement(f.TableCell,null,"Serial Number"),s.a.createElement(f.TableCell,null,"Location"),s.a.createElement(f.TableCell,null,"Stock Type"),s.a.createElement(f.TableCell,null,"Wty."),s.a.createElement(f.TableCell,null,"Status"),s.a.createElement(f.TableCell,null,"Add"))),s.a.createElement(f.TableBody,null,M.map((function(e,t){return s.a.createElement(f.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(x==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){w(t)}},s.a.createElement(f.TableCell,{className:"w-8"},s.a.createElement("div",{className:"flex items-center text-sm "},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.type)))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.name)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.sno)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.location)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.stocktype)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.expirydate)),s.a.createElement(f.TableCell,null,s.a.createElement(f.Badge,{type:"Good"==e.condition?"primary":"danger"},e.condition)),s.a.createElement(f.TableCell,null,s.a.createElement(f.Button,{layout:"outline",className:"dark:border-green-700 border-green-400",onClick:function(){var t=!1,a=M;if(a=a.filter((function(t){return t._id!=e._id})),console.log(a),A(a),F.map((function(a){a._id==e._id&&(console.log(a._id,e._id),Ve("Product already Added!"),He(!0),t=!0)})),!t){e.caseId="imprest";var n=[].concat(Object(l.a)(F),[e]);P(n)}}},"Add")))})))),s.a.createElement(f.TableFooter,null,s.a.createElement(f.Pagination,{totalResults:mt,resultsPerPage:10,label:"Table navigation",onChange:dt})))):null),s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Modal,{isOpen:ze,onClose:function(){return He(!1)}},s.a.createElement(f.ModalHeader,null,Ue),s.a.createElement(f.ModalBody,null),s.a.createElement(f.ModalFooter,null,s.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return He(!1)}},"Okay!")))),s.a.createElement(s.a.Fragment,null,s.a.createElement(f.Modal,{isOpen:qe,onClose:function(){return Je(!1)}},s.a.createElement(f.ModalHeader,null,"Pink Vendor"),s.a.createElement(f.ModalBody,null,s.a.createElement(f.TableContainer,null,s.a.createElement(f.Table,null,s.a.createElement(f.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(f.TableCell,null,"Customer"))),s.a.createElement(f.TableBody,null,Qe.map((function(e,t){return s.a.createElement(f.TableRow,{key:t,className:"hover:bg-purple-900 ",onClick:function(){console.log(e),at(e),Je(!1)}},s.a.createElement(f.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))))),s.a.createElement(f.ModalFooter,null,s.a.createElement(f.Button,{className:"w-full sm:w-auto",onClick:function(){return Je(!1)}},"Okay!")))))}},87:function(e,t,a){},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(3),n=a.n(l),r=a(10),c=a(2),o=a(0),u=a.n(o),s=a(7),m=a.n(s),i=a(1),d=a(92),b=(a(87),a(8));function p(e){var t=e.isModalOpen,a=e.setIsModalOpen,l=e.unit,s=e.setUnit,p=e.account,E=e.setAccount,f=e.customer,v=e.setCustomer,g=e.refresh,h=e.setRefresh,y=Object(o.useState)([]),x=Object(c.a)(y,2),w=x[0],O=x[1],T=Object(o.useState)([]),C=Object(c.a)(T,2),j=C[0],k=C[1],N=Object(o.useState)([]),S=Object(c.a)(N,2),I=S[0],B=S[1],_=Object(o.useState)(0),M=Object(c.a)(_,2),A=M[0],L=M[1],D=Object(o.useState)(""),F=Object(c.a)(D,2),P=F[0],z=F[1],H=function(e){z(e.target.value)},K=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:P,role:1},e.prev=2,e.next=5,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:a});case 5:l=e.sent,console.log(l.data),O(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:P,role:1},e.prev=1,e.next=4,m()({url:"".concat(b.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),O(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var R=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({_id:t._id,customerName:t.name}),E({_id:"",accountName:""}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),k(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),E({_id:t._id,accountName:t.name}),s({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(b.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),B(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),s({_id:t._id,unitName:t.unitName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},u.a.createElement(i.ModalHeader,null,"Select"," ",0==A?u.a.createElement(u.a.Fragment,null,"Customer"):1==A?u.a.createElement(u.a.Fragment,null,"Account"):u.a.createElement(u.a.Fragment,null,"Unit")),u.a.createElement(i.ModalBody,null,u.a.createElement(d.d,{selectedIndex:A,onSelect:function(e){return L(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account"),u.a.createElement(d.a,null,"Unit")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:K},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:H}))))),u.a.createElement(i.TableBody,null,w.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return R(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,j.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return U(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Unit"))),u.a.createElement(i.TableBody,null,I.map((function(e,t){return u.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return V(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),u.a.createElement(i.TableFooter,null)))),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",p.accountName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",l.unitName)),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),h(!g)}},"Select"))))}},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(22);var n=a(31);function r(e){return function(e){if(Array.isArray(e))return Object(l.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=28.3ff7779a.chunk.js.map