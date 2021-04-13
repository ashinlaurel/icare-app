(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[61],{1096:function(e,a,t){"use strict";t.r(a);var l=t(4),n=t.n(l),r=t(11),c=t(2),s=t(0),o=t.n(s),u=t(1),m=t(7),i=t.n(m),d=t(21),b=t.n(d),E=t(9),p=t(17),f=(t(98),t(101),t(988)),y=t.n(f),g=(t(987),t(124)),T=t(31),h=t(5),C=t(32),w=t(33);a.default=function(){Object(h.i)().id,Object(h.g)();var e=Object(s.useState)(0),a=Object(c.a)(e,2),t=a[0],l=a[1],m=Object(s.useState)(0),d=Object(c.a)(m,2),f=d[0],O=d[1],x=Object(s.useState)(!1),j=Object(c.a)(x,2),v=j[0],S=j[1],k=Object(s.useContext)(C.a),N=(k.topheading,k.setTopHeading),D=Object(s.useContext)(w.a),B=(D.bbaropen,D.setBBarOpen),M=(D.salaryDetails,D.setSalaryDetails),P=Object(s.useState)(1),A=Object(c.a)(P,2),H=A[0],I=A[1],F=Object(s.useState)([]),Y=Object(c.a)(F,2),_=Y[0],G=Y[1],J=Object(s.useState)(""),R=Object(c.a)(J,2),z=(R[0],R[1],Object(s.useState)("")),q=Object(c.a)(z,2),K=(q[0],q[1],Object(s.useState)(new Date)),L=Object(c.a)(K,2),Q=L[0],U=L[1],V=Object(s.useState)(20),W=Object(c.a)(V,2),X=W[0],Z=W[1];Object(s.useEffect)((function(){return N("Salary History"),function(){N("")}}),[]),Object(s.useEffect)((function(){return function(){B(0),M({})}}),[]),Object(s.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getter called"),a={pages:{page:H,limit:10},filters:{date:Q}},e.prev=2,e.next=5,i()({url:"".concat(E.a,"/admin/").concat(p.a.getId(),"/getAllSalary"),method:"POST",data:a});case 5:t=e.sent,Z(t.data.total),G(t.data.out),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}()()}),[H,Q]);var $=function(){var e=Object(r.a)(n.a.mark((function e(a){var t,l,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:a},e.next=3,i()({url:"".concat(E.a,"/admin/").concat(p.a.getId(),"/downloadsalarypdf"),method:"POST",data:t,responseType:"blob"});case 3:l=e.sent,r=new Blob([l.data],{type:"application/pdf"}),Object(g.saveAs)(r,"Salary.pdf");case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:""},o.a.createElement("div",{class:"my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 "},o.a.createElement("div",{className:"font-semibold dark:text-gray-200"}," Select Month"),o.a.createElement("div",{class:"relative mx-1 "},o.a.createElement("div",{class:" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"},o.a.createElement(y.a,{selected:Q,onChange:function(e){return U(e)},dateFormat:"MM/yyyy",showMonthYearPicker:!0}))))),o.a.createElement("div",null,o.a.createElement(u.TableContainer,{className:"mt-4"},o.a.createElement(u.Table,null,o.a.createElement(u.TableHeader,null,o.a.createElement("tr",null,o.a.createElement(u.TableCell,null,"Date"),o.a.createElement(u.TableCell,null,"Employee"),o.a.createElement(u.TableCell,null,"Employee ID"),o.a.createElement(u.TableCell,null,"Eligible Days"),o.a.createElement(u.TableCell,null,"Eligible B + DA"),o.a.createElement(u.TableCell,null,"Deductions"),o.a.createElement(u.TableCell,null,"Take Home Salary"),o.a.createElement(u.TableCell,null,"Gross Salary"),o.a.createElement(u.TableCell,null,"CTC"),o.a.createElement(u.TableCell,null,"Salary Slip"),o.a.createElement(u.TableCell,null,"Delete"))),o.a.createElement(u.TableBody,null,_.map((function(e,a){return o.a.createElement(u.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(t==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){B(1),l(e._id),M(e)}},o.a.createElement(u.TableCell,{className:"w-8"},o.a.createElement("div",{className:"flex items-center text-sm "},o.a.createElement("div",null,o.a.createElement("p",{className:"font-semibold"},b()(e.date).format("DD/MM/YYYY"))))),o.a.createElement(u.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.employeeName)),o.a.createElement(u.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.employeeID)),o.a.createElement(u.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.EligibleDays)),o.a.createElement(u.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.BplusDA)),o.a.createElement(u.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.Deduction)),o.a.createElement(u.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.TakeHomeSalary)),o.a.createElement(u.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.GrossSalary)),o.a.createElement(u.TableCell,null,o.a.createElement("span",{className:"text-sm"},e.CTC)),o.a.createElement(u.TableCell,{className:"text-center "},o.a.createElement(u.Button,{layout:"outline","aria-label":"DropDown",onClick:function(){console.log("dwlod"),$(e._id)},className:"rounded-lg m-1"},"Download")),o.a.createElement(u.TableCell,null,o.a.createElement("div",{className:"flex items-center space-x-4"},o.a.createElement(u.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:Object(r.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("delete Asset"),S(!0),O(e._id);case 3:case"end":return a.stop()}}),a)})))},o.a.createElement(T.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),o.a.createElement(u.TableFooter,null,o.a.createElement(u.Pagination,{totalResults:X,resultsPerPage:10,label:"Table navigation",onChange:function(e){I(e)}})))),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.Modal,{isOpen:v,onClose:function(){return S(!1)}},o.a.createElement(u.ModalHeader,null,"Are you sure you want to delete!"),o.a.createElement(u.ModalBody,null),o.a.createElement(u.ModalFooter,null,o.a.createElement(u.Button,{className:"w-full sm:w-auto",onClick:Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({url:"".concat(E.a,"/admin/").concat(p.a.getId(),"/deleteSalary"),method:"POST",data:{id:f}});case 3:a=e.sent,console.log(a.data),t=_.filter((function(e){return e._id!=f})),G(t),S(!1),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))},"Confirm Delete")))))}}}]);
//# sourceMappingURL=61.fcb560e9.chunk.js.map