(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[43],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(4),l=a.n(n),r=a(11),c=a(2),o=a(0),s=a.n(o),u=a(7),m=a.n(u),i=a(1),d=a(105),p=(a(99),a(9));function b(e){var t=e.isModalOpen,a=e.setIsModalOpen,n=e.unit,u=e.setUnit,b=e.account,E=e.setAccount,f=e.customer,g=e.setCustomer,h=e.refresh,w=e.setRefresh,v=e.theunitdetails,x=e.setTheUnitDetails,O=Object(o.useState)([]),C=Object(c.a)(O,2),N=C[0],y=C[1],k=Object(o.useState)([]),j=Object(c.a)(k,2),S=j[0],T=j[1],D=Object(o.useState)([]),M=Object(c.a)(D,2),I=M[0],P=M[1],B=Object(o.useState)(0),F=Object(c.a)(B,2),L=F[0],A=F[1],_=Object(o.useState)(""),Y=Object(c.a)(_,2),R=Y[0],U=Y[1],H=function(e){U(e.target.value)},z=function(){var e=Object(r.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={search:R,role:1},e.prev=2,e.next=5,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:a});case 5:n=e.sent,console.log(n.data),y(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:R,role:1},e.prev=1,e.next=4,m()({url:"".concat(p.a,"/customer/customers"),method:"POST",data:t});case 4:a=e.sent,console.log(a.data),y(a.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var J=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({_id:t._id,customerName:t.name}),E({_id:"",accountName:""}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(p.a,"/customer/accounts"),{customerId:t._id});case 6:a=e.sent,console.log(a.data),T(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),E({_id:t._id,accountName:t.name}),u({_id:"",unitName:""}),e.prev=3,e.next=6,m.a.post("".concat(p.a,"/customer/units"),{accountId:t._id});case 6:a=e.sent,console.log(a.data),P(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("-------------piking unit"),console.log(t),u({_id:t._id,contactPerson:t.contactPerson,contactNo:t.contactNo,unitName:t.unitName});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.Modal,{isOpen:t,onClose:function(){return a(!1)}},s.a.createElement(i.ModalHeader,null,"Select"," ",0==L?s.a.createElement(s.a.Fragment,null,"Customer"):1==L?s.a.createElement(s.a.Fragment,null,"Account"):s.a.createElement(s.a.Fragment,null,"Unit")),s.a.createElement(i.ModalBody,null,s.a.createElement(d.d,{selectedIndex:L,onSelect:function(e){return A(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account"),s.a.createElement(d.a,null,"Unit")),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Customer")),s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,s.a.createElement("form",{onSubmit:z},s.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:H}))))),s.a.createElement(i.TableBody,null,N.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return J(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Account"))),s.a.createElement(i.TableBody,null,S.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return K(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(i.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(i.TableContainer,null,s.a.createElement(i.Table,null,s.a.createElement(i.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(i.TableCell,null,"Unit"))),s.a.createElement(i.TableBody,null,I.map((function(e,t){return s.a.createElement(i.TableRow,{key:t,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return q(e)}},s.a.createElement(i.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.unitName)))))})))),s.a.createElement(i.TableFooter,null)))),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",b.accountName),s.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Unit: ",n.unitName)),s.a.createElement(i.ModalFooter,null,s.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){a(!1),w(!h),v&&x(n),T([]),P([])}},"Select"))))}},1080:function(e,t,a){"use strict";a.r(t);var n=a(18),l=a(10),r=a(4),c=a.n(r),o=a(11),s=a(2),u=a(0),m=a.n(u),i=a(7),d=a.n(i),p=a(9),b=a(21),E=a.n(b),f=a(17),g=a(1),h=(a(22),a(32)),w=a(5),v=a(33),x=a(106);a(31);t.default=function(){Object(w.g)();var e=Object(u.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(u.useState)(!1),b=Object(s.a)(i,2),O=b[0],C=b[1],N=Object(u.useState)(!1),y=Object(s.a)(N,2),k=y[0],j=y[1],S=Object(u.useState)(!1),T=Object(s.a)(S,2),D=T[0],M=T[1],I=Object(u.useState)(""),P=Object(s.a)(I,2),B=P[0],F=P[1],L=Object(u.useContext)(h.a).setTopHeading,A=Object(u.useContext)(v.a),_=(A.bbaropen,A.setBBarOpen),Y=A.setAssetDetails,R=(A.assetdetails,Object(u.useState)(0)),U=Object(s.a)(R,2),H=U[0],z=U[1],J=Object(u.useState)(1),K=Object(s.a)(J,2),q=K[0],V=K[1],W=Object(u.useState)([]),G=Object(s.a)(W,2),Q=G[0],X=G[1],Z=Object(u.useState)(!1),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(u.useState)(!1),ne=Object(s.a)(ae,2),le=ne[0],re=ne[1],ce=Object(u.useState)(!1),oe=Object(s.a)(ce,2),se=oe[0],ue=oe[1],me=Object(u.useState)(!0),ie=Object(s.a)(me,2),de=ie[0],pe=ie[1],be=Object(u.useState)(!0),Ee=Object(s.a)(be,2),fe=Ee[0],ge=Ee[1],he=Object(u.useState)(""),we=Object(s.a)(he,2),ve=we[0],xe=we[1],Oe=Object(u.useState)(""),Ce=Object(s.a)(Oe,2),Ne=Ce[0],ye=Ce[1],ke=Object(u.useState)({_id:"",unitName:""}),je=Object(s.a)(ke,2),Se=je[0],Te=je[1],De=Object(u.useState)({}),Me=Object(s.a)(De,2),Ie=Me[0],Pe=Me[1],Be=Object(u.useState)({_id:"",customerName:""}),Fe=Object(s.a)(Be,2),Le=Fe[0],Ae=Fe[1],_e=Object(u.useState)({_id:"",accountName:""}),Ye=Object(s.a)(_e,2),Re=Ye[0],Ue=Ye[1],He=Object(u.useState)({}),ze=Object(s.a)(He,2),Je=ze[0],Ke=ze[1],qe=Object(u.useState)(""),Ve=Object(s.a)(qe,2),We=Ve[0],Ge=Ve[1],Qe=Object(u.useState)(""),Xe=Object(s.a)(Qe,2),Ze=Xe[0],$e=Xe[1],et=Object(u.useState)(""),tt=Object(s.a)(et,2),at=tt[0],nt=tt[1],lt=Object(u.useState)([{date:"",callStatus:"0",engineer:"Yet To Be Assigned",callAttendDate:"Nil",startOfService:"Nil",endOfService:"Nil",note:"Call has been registered",actionTaken:"Nil"}]),rt=Object(s.a)(lt,2),ct=rt[0],ot=rt[1],st=Object(u.useState)(20),ut=Object(s.a)(st,2),mt=ut[0],it=ut[1],dt=Object(u.useState)(""),pt=Object(s.a)(dt,2),bt=pt[0],Et=pt[1];function ft(e){V(e)}Object(u.useEffect)((function(){return function(){_(0),Y({})}}),[]),Object(u.useEffect)((function(){return L("Assets Management"),function(){L("")}}),[]),Object(u.useEffect)((function(){!function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getter called"),t={pages:{page:q,limit:10},filters:{business:ve,producttype:Ne,customer:Le,account:Re,unitId:Se._id,customerId:Le._id,accountId:Re._id,searchtype:We,searchquery:at}},e.prev=2,e.next=5,d()({url:"".concat(p.a,"/asset/").concat(f.a.getId(),"/getall"),method:"POST",data:t});case 5:a=e.sent,console.log(a.data.out),it(a.data.total),X(a.data.out),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}()()}),[q,ve,Ne,de]),Object(u.useEffect)((function(){console.log("-----------------------unit details ------------------------"),console.log(Ie),xt(Object(l.a)(Object(l.a)({},vt),{},{contactPerson:Ie.contactPerson,phone:Ie.contactNo}))}),[de]);var gt={callNo:"",date:"",contactPerson:"",phone:"",callStatus:"Pending for allocation",problem:"",time:""},ht=Object(u.useState)(gt),wt=Object(s.a)(ht,2),vt=wt[0],xt=wt[1],Ot=Object(u.useState)({}),Ct=Object(s.a)(Ot,2);Ct[0],Ct[1],Object(u.useEffect)((function(){return L("Register Call"),function(){L("")}}),[]);var Nt=function(e){return function(t){var a=t.target.value;xt(Object(l.a)(Object(l.a)({},vt),{},Object(n.a)({},e,t.target.value))),"date"==e&&yt(a)}},yt=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,n,r,o,s,u,m,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={date:t},n=0,e.prev=2,e.next=5,d()({url:"".concat(p.a,"/call/").concat(f.a.getId(),"/callsbydate"),method:"POST",data:a});case 5:n=e.sent,e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(2),e.t0;case 11:r=E()(t).format("YY"),o=E()(t).format("MM"),s=E()(t).format("DD"),(u=n.data+1)<10&&(u="0"+u),m=r+o+s+u,xt(Object(l.a)(Object(l.a)({},vt),{},{callNo:m,date:t})),(i=ct)[0].date=t,ot(i),console.log(m);case 22:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),kt=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==vt.callNo&&""!==vt.problem&&""!==vt.date&&""!==vt.time){e.next=3;break}return C(!0),e.abrupt("return");case 3:if(JSON.stringify(Je)!=JSON.stringify({})){e.next=6;break}return j(!0),e.abrupt("return");case 6:return Et(vt.callNo),t={callNo:vt.callNo,date:vt.date,time:vt.time,contactPerson:vt.contactPerson,phone:vt.phone,problem:vt.problem,unitId:Je.unitId,unitName:Je.unitName,accountId:Je.accountId,accountName:Je.accountName,customerId:Je.customerId,customerName:Je.customerName,assetId:Je._id,callStatus:0,history:ct,regtimestamp:E()().format()},console.log("CALL->",t),e.prev=9,e.next=12,d()({url:"".concat(p.a,"/call/").concat(f.a.getId(),"/create"),method:"POST",data:t});case 12:r(!0),xt(gt),console.log("Done"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(9),console.log(e.t0.response.data),1==e.t0.response.data.errid&&(F(e.t0.response.data.message),M(!0));case 21:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"px-4 py-3 mt-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},m.a.createElement(g.Label,{className:"font-bold"},m.a.createElement("span",null,"Call Information")),m.a.createElement("hr",{className:"mb-5 mt-2"}),m.a.createElement("div",{className:"flex-row flex space-x-3"},m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(g.Label,{className:"w-full"},m.a.createElement("span",null,"Call Number*"),m.a.createElement(g.Input,{disabled:!0,className:"mt-1",type:"text",value:vt.callNo,onChange:Nt("callNo")})))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(g.Label,{className:"w-full"},m.a.createElement("span",null,"Date*"),m.a.createElement(g.Input,{className:"mt-1",type:"date",value:vt.date,onChange:Nt("date")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(g.Label,{className:"w-full"},m.a.createElement("span",null,"Time*"),m.a.createElement(g.Input,{className:"mt-1",type:"time",value:vt.time,onChange:Nt("time")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(g.Label,{className:"w-full"},m.a.createElement("span",null,"Contact Person*"),m.a.createElement(g.Input,{className:"mt-1",type:"text",placeholder:"",value:vt.contactPerson,onChange:Nt("contactPerson")}))),m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(g.Label,{className:"w-full"},m.a.createElement("span",null,"Phone Number*"),m.a.createElement(g.Input,{className:"mt-1",type:"text",value:vt.phone,onChange:Nt("phone")})))),m.a.createElement("div",{className:"flex-row flex space-x-3 "},m.a.createElement("div",{className:"flex flex-col w-full"},m.a.createElement(g.Label,{className:"w-full"},m.a.createElement("span",null,"Problem Description*"),m.a.createElement(g.Input,{className:"mt-1",type:"text",value:vt.problem,onChange:Nt("problem")})))),m.a.createElement(m.a.Fragment,null)),m.a.createElement(m.a.Fragment,null,m.a.createElement(x.a,{isModalOpen:se,setIsModalOpen:ue,setUnit:Te,unit:Se,customer:Le,setCustomer:Ae,account:Re,setAccount:Ue,refresh:de,setRefresh:pe,theunitdetails:Ie,setTheUnitDetails:Pe}),m.a.createElement("div",{className:"mb-64 mt-1"},m.a.createElement("div",{className:"dark:text-white flex items-center font-bold my-2 text-xl"},"Pick Asset"),m.a.createElement("div",{className:""},m.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 "},m.a.createElement("div",{class:"relative  "},m.a.createElement("button",{class:" shadow-md appearance-none h-full rounded border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",onClick:function(){ue(!se)}},"Pick Customer"),m.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},m.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},m.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),m.a.createElement("div",{class:"relative mx-5 "},m.a.createElement("select",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500",value:ve,onChange:function(e){xe(e.target.value)}},m.a.createElement("option",{value:"",disabled:!0,selected:!0},"Business Type"),m.a.createElement("option",{value:""},"All"),m.a.createElement("option",{value:"AMC"},"AMC"),m.a.createElement("option",{value:"WTY"},"Warranty"),m.a.createElement("option",{value:"NOS"},"NOS")),m.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},m.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},m.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),m.a.createElement("div",{className:"relative z-40 "},m.a.createElement("button",{onClick:function(){te(!ee)},className:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none","aria-label":"Notifications","aria-haspopup":"true"},Ne||"Pick Product"),m.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},m.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},m.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),m.a.createElement(g.Dropdown,{isOpen:ee,onClose:function(){return te(!1)}},m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("")}},m.a.createElement("span",null,"All")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Console")}},m.a.createElement("span",null,"Console")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("DMP")}},m.a.createElement("span",null,"DMP")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Inkjet")}},m.a.createElement("span",null,"Inkjet")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("KVM")}},m.a.createElement("span",null,"KVM")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Laptop")}},m.a.createElement("span",null,"Laptop")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Laser")}},m.a.createElement("span",null,"Laser")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("LMP")}},m.a.createElement("span",null,"LMP")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Module")}},m.a.createElement("span",null,"Module")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Router")}},m.a.createElement("span",null,"Router")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Scanner")}},m.a.createElement("span",null,"Scanner")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Server")}},m.a.createElement("span",null,"Server")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Desktop")}},m.a.createElement("span",null,"Desktop")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Storage")}},m.a.createElement("span",null,"Storage")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Switch")}},m.a.createElement("span",null,"Switch")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("UPS")}},m.a.createElement("span",null,"UPS")),m.a.createElement(g.DropdownItem,{onClick:function(){te(!1),ye("Others")}},m.a.createElement("span",null,"Others")))),m.a.createElement("div",{className:"relative "},m.a.createElement("button",{onClick:function(){re(!le)},className:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none","aria-label":"Notifications","aria-haspopup":"true"},We?Ze:"Pick Search Type"),m.a.createElement("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},m.a.createElement("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},m.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),m.a.createElement(g.Dropdown,{isOpen:le,onClose:function(){return re(!1)}},m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge(""),$e(""),ge(!0),nt(""),pe(!de)}},m.a.createElement("span",null,"All")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("prodserial"),$e("Product Serial"),ge(!1)}},m.a.createElement("span",null,"Product Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("keyboardsno"),$e("Keyboard Serial"),ge(!1)}},m.a.createElement("span",null,"Keyboard Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("mousesno"),$e("Mouse Serial"),ge(!1)}},m.a.createElement("span",null,"Mouse Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("motherboardsno"),$e("Motherboard Serial"),ge(!1)}},m.a.createElement("span",null,"Motherboard Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("monitorsno"),$e("Monitor Serial"),ge(!1)}},m.a.createElement("span",null,"Monitor Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("hddsno"),$e("HDD Serial"),ge(!1)}},m.a.createElement("span",null,"HDD Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("cpusno"),$e("CPU Serial"),ge(!1)}},m.a.createElement("span",null,"CPU Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("ramsno"),$e("Ram Serial"),ge(!1)}},m.a.createElement("span",null,"RAM Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("smpssno"),$e("SMPS Serial"),ge(!1)}},m.a.createElement("span",null,"SMPS Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("fansno"),$e("Fan Serial"),ge(!1)}},m.a.createElement("span",null,"Fan Serial")),m.a.createElement(g.DropdownItem,{onClick:function(){re(!1),Ge("opticaldrivesno"),$e("Optical Drive Serial"),ge(!1)}},m.a.createElement("span",null,"Optical Drive Serial")))),m.a.createElement("div",{class:"block relative xl:ml-64"},m.a.createElement("span",{class:"h-full absolute inset-y-0 left-0 flex items-center pl-2"},m.a.createElement("svg",{viewBox:"0 0 24 24",class:"h-4 w-4 fill-current text-gray-500"},m.a.createElement("path",{d:"M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"}))),m.a.createElement("form",{onSubmit:function(e){e.preventDefault(),pe(!de)}},m.a.createElement("input",{value:at,onChange:function(e){return nt(e.target.value)},placeholder:"Search",disabled:fe,class:"shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"}))))),m.a.createElement(g.TableContainer,{className:"mt-4"},m.a.createElement(g.Table,null,m.a.createElement(g.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(g.TableCell,null,"Customer"),m.a.createElement(g.TableCell,null,"Unit"),m.a.createElement(g.TableCell,null,"Business"),m.a.createElement(g.TableCell,null,"Product"),m.a.createElement(g.TableCell,null,"Product Serial"),m.a.createElement(g.TableCell,null,"Contract From"),m.a.createElement(g.TableCell,null,"Contract To"),m.a.createElement(g.TableCell,null,"Purchase Number"),m.a.createElement(g.TableCell,null,"Purchase Date"))),m.a.createElement(g.TableBody,null,Q.map((function(e,t){return m.a.createElement(g.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(H==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){z(e._id),Ke(e),Y(e),_(1)}},m.a.createElement(g.TableCell,{className:"w-8"},m.a.createElement("div",{className:"flex items-center text-sm "},m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},e.customerName),m.a.createElement("p",{className:"text-xs text-gray-600 dark:text-gray-400"},e.accountName)))),m.a.createElement(g.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.unitName)),m.a.createElement(g.TableCell,null,m.a.createElement(g.Badge,{type:"AMC"==e.business?"primary":"success"},e.business)),m.a.createElement(g.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.producttype)),m.a.createElement(g.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.product.serialno)),m.a.createElement(g.TableCell,null,m.a.createElement("span",{className:"text-sm"},E()(e.contractfrom).format("DD/MM/YYYY"))),m.a.createElement(g.TableCell,null,m.a.createElement("span",{className:"text-sm"},E()(e.contractto).format("DD/MM/YYYY"))),m.a.createElement(g.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.ponumber)),m.a.createElement(g.TableCell,null,m.a.createElement("span",{className:"text-sm"},E()(e.podate).format("DD/MM/YYYY"))))})))),m.a.createElement(g.TableFooter,null,m.a.createElement(g.Pagination,{totalResults:mt,resultsPerPage:10,label:"Table navigation",onChange:ft})),m.a.createElement("div",{className:"flex justify-end"},m.a.createElement(g.Button,{className:" mb-10 my-2 ",onClick:kt},"Register Call"))))),m.a.createElement(m.a.Fragment,null,m.a.createElement(g.Modal,{isOpen:a,onClose:function(){return r(!1)}},m.a.createElement(g.ModalHeader,null,"Created Call No. ",bt," Successfully!"),m.a.createElement(g.ModalBody,null),m.a.createElement(g.ModalFooter,null,m.a.createElement(g.Button,{className:"w-full sm:w-auto",onClick:function(){return r(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(g.Modal,{isOpen:O,onClose:function(){return C(!1)}},m.a.createElement(g.ModalHeader,null,"Required fields are not filled!"),m.a.createElement(g.ModalBody,null),m.a.createElement(g.ModalFooter,null,m.a.createElement(g.Button,{className:"w-full sm:w-auto",onClick:function(){return C(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(g.Modal,{isOpen:k,onClose:function(){return j(!1)}},m.a.createElement(g.ModalHeader,null,"Asset is not selected!"),m.a.createElement(g.ModalBody,null,"Please select asset before registering call."),m.a.createElement(g.ModalFooter,null,m.a.createElement(g.Button,{className:"w-full sm:w-auto",onClick:function(){return j(!1)}},"Okay!")))),m.a.createElement(m.a.Fragment,null,m.a.createElement(g.Modal,{isOpen:D,onClose:function(){return M(!1)}},m.a.createElement(g.ModalHeader,null,"Call already raised for asset!"),m.a.createElement(g.ModalBody,null,"Call No ",B," already raised for asset."),m.a.createElement(g.ModalFooter,null,m.a.createElement(g.Button,{className:"w-full sm:w-auto",onClick:function(){return M(!1)}},"Okay!")))))}},99:function(e,t,a){}}]);
//# sourceMappingURL=43.2ff4154e.chunk.js.map