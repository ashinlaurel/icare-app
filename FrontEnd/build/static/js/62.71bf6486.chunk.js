(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[62],{1085:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t.n(l),c=t(10),r=t(2),s=t(0),m=t.n(s),o=t(1),u=t(7),i=t.n(u),b=t(18),E=t.n(b),d=t(8),p=t(15),T=(t(85),t(88),t(28)),f=t(4),C=t(29);a.default=function(){var e=Object(f.i)().id,a=(Object(f.g)(),Object(s.useState)(0)),t=Object(r.a)(a,2),l=t[0],u=t[1],b=Object(s.useState)(0),g=Object(r.a)(b,2),h=g[0],y=g[1],O=Object(s.useState)(!1),w=Object(r.a)(O,2),j=w[0],x=w[1],v=Object(s.useContext)(C.a),N=(v.topheading,v.setTopHeading),k=Object(s.useState)(1),D=Object(r.a)(k,2),S=D[0],B=D[1],H=Object(s.useState)([]),I=Object(r.a)(H,2),M=I[0],A=I[1],P=Object(s.useState)(20),F=Object(r.a)(P,2),Y=F[0],_=F[1];return Object(s.useEffect)((function(){return N("Salary History"),function(){N("")}}),[]),Object(s.useEffect)((function(){!function(){var a=Object(c.a)(n.a.mark((function a(){var t,l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("getter called"),t={pages:{page:S,limit:10},filters:{queryID:e}},a.prev=2,a.next=5,i()({url:"".concat(d.a,"/admin/").concat(p.a.getId(),"/getAllSalary"),method:"POST",data:t});case 5:l=a.sent,_(l.data.total),A(l.data.out),a.next=13;break;case 10:throw a.prev=10,a.t0=a.catch(2),a.t0;case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(){return a.apply(this,arguments)}}()()}),[S]),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(o.TableContainer,{className:"mt-4"},m.a.createElement(o.Table,null,m.a.createElement(o.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(o.TableCell,null,"Date"),m.a.createElement(o.TableCell,null,"Employee"),m.a.createElement(o.TableCell,null,"Employee ID"),m.a.createElement(o.TableCell,null,"Eligible Days"),m.a.createElement(o.TableCell,null,"Eligible B + DA"),m.a.createElement(o.TableCell,null,"Deductions"),m.a.createElement(o.TableCell,null,"Take Home Salary"),m.a.createElement(o.TableCell,null,"Gross Salary"),m.a.createElement(o.TableCell,null,"CTC"),m.a.createElement(o.TableCell,null,"Delete"))),m.a.createElement(o.TableBody,null,M.map((function(e,a){return m.a.createElement(o.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(l==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:a,onClick:function(){u(e._id)}},m.a.createElement(o.TableCell,{className:"w-8"},m.a.createElement("div",{className:"flex items-center text-sm "},m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},E()(e.date).format("DD/MM/YYYY"))))),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.employeeName)),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.employeeID)),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.EligibleDays)),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.BplusDA)),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.Deduction)),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.TakeHomeSalary)),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.GrossSalary)),m.a.createElement(o.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.CTC)),m.a.createElement(o.TableCell,null,m.a.createElement("div",{className:"flex items-center space-x-4"},m.a.createElement(o.Button,{layout:"link",size:"icon","aria-label":"Delete",onClick:Object(c.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("delete Asset"),x(!0),y(e._id);case 3:case"end":return a.stop()}}),a)})))},m.a.createElement(T.TrashIcon,{className:"w-5 h-5","aria-hidden":"true"})))))})))),m.a.createElement(o.TableFooter,null,m.a.createElement(o.Pagination,{totalResults:Y,resultsPerPage:10,label:"Table navigation",onChange:function(e){B(e)}})))),m.a.createElement(m.a.Fragment,null,m.a.createElement(o.Modal,{isOpen:j,onClose:function(){return x(!1)}},m.a.createElement(o.ModalHeader,null,"Are you sure you want to delete!"),m.a.createElement(o.ModalBody,null),m.a.createElement(o.ModalFooter,null,m.a.createElement(o.Button,{className:"w-full sm:w-auto",onClick:Object(c.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({url:"".concat(d.a,"/admin/").concat(p.a.getId(),"/deleteSalary"),method:"POST",data:{id:h}});case 3:a=e.sent,console.log(a.data),t=M.filter((function(e){return e._id!=h})),A(t),x(!1),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))},"Confirm Delete")))))}}}]);
//# sourceMappingURL=62.71bf6486.chunk.js.map