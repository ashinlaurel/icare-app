(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[59],{1071:function(e,t,a){"use strict";a.r(t);var l=a(93),n=a(3),s=a.n(n),c=a(10),r=a(2),u=a(0),m=a.n(u),o=a(18),b=a.n(o),i=a(6),E=a.n(i),d=a(15),p=(a(85),a(28),a(1)),O=(a(113),a(8)),j=(a(98),a(94),a(115),a(30)),f=a(29),S=(a(19),a(135),a(263));t.default=function(){var e=Object(u.useState)(!1),t=Object(r.a)(e,2),a=(t[0],t[1],Object(u.useContext)(j.a)),n=(a.bbaropen,a.setBBarOpen),o=a.setAssetDetails,i=(a.assetdetails,Object(u.useState)(0)),g=Object(r.a)(i,2),C=g[0],x=(g[1],Object(u.useContext)(f.a)),T=(x.topheading,x.setTopHeading),N=Object(u.useState)(!1),h=Object(r.a)(N,2),v=(h[0],h[1],Object(u.useState)(1)),P=Object(r.a)(v,2),w=(P[0],P[1]),k=Object(u.useState)([]),y=Object(r.a)(k,2),D=y[0],A=y[1],M=Object(u.useState)(!1),R=Object(r.a)(M,2),Y=(R[0],R[1],Object(u.useState)(!1)),B=Object(r.a)(Y,2),I=(B[0],B[1],Object(u.useState)(!1)),F=Object(r.a)(I,2),H=(F[0],F[1],Object(u.useState)(!0)),_=Object(r.a)(H,2),J=(_[0],_[1],Object(u.useState)(!0)),U=Object(r.a)(J,2),q=(U[0],U[1],Object(u.useState)(null)),z=Object(r.a)(q,2),G=z[0],K=z[1],L=Object(u.useState)(!1),Q=Object(r.a)(L,2),V=Q[0],W=Q[1],X=Object(u.useState)({}),Z=Object(r.a)(X,2),$=(Z[0],Z[1],Object(u.useState)("")),ee=Object(r.a)($,2),te=(ee[0],ee[1],Object(u.useState)("")),ae=Object(r.a)(te,2),le=(ae[0],ae[1],Object(u.useState)("")),ne=Object(r.a)(le,2),se=(ne[0],ne[1],Object(u.useState)("")),ce=Object(r.a)(se,2),re=(ce[0],ce[1],Object(u.useState)("")),ue=Object(r.a)(re,2),me=(ue[0],ue[1],Object(u.useState)(20)),oe=Object(r.a)(me,2),be=oe[0],ie=oe[1];Object(u.useEffect)((function(){Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G){e.next=16;break}return t={pages:{page:1,limit:1e4},filters:{callStatus:"",searchquery:"",fromDate:"",toDate:"",employeeId:G._id}},console.log("HERE",t),e.prev=3,e.next=6,E()({url:"".concat(O.a,"/call/").concat(d.a.getId(),"/getall"),method:"POST",data:t});case 6:a=e.sent,console.log(a.data.out),ie(a.data.total),A(a.data.out),A(a.data.out),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(3),e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))()}),[G]),Object(u.useEffect)((function(){return function(){n(0),o({})}}),[]),Object(u.useEffect)((function(){return T("Engineer Call Priority"),function(){T("")}}),[]);var Ee=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("DATA",D),t={assignedCalls:Object(l.a)(D)},console.log(t),a={id:G._id,update:t},e.prev=4,e.next=7,E()({url:"".concat(O.a,"/admin/").concat(d.a.getId(),"/update"),method:"POST",data:a});case 7:console.log("Done"),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(4),e.t0;case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(S.a,{isModalOpen:V,setIsModalOpen:W,setEmployee:K}),m.a.createElement(S.a,null),m.a.createElement("div",{className:"mb-64 mt-4"},m.a.createElement("div",{className:"flex flex-row items-center justify-start space-x-2"},m.a.createElement(p.Button,{layout:"outline",onClick:function(){return W(!0)}},"Select Engineer"),m.a.createElement(p.Button,{onClick:function(){return Ee(!0)}},"Submit")),m.a.createElement(p.TableContainer,{className:"mt-4"},m.a.createElement(p.Table,null,m.a.createElement(p.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(p.TableCell,null,"Call No"),m.a.createElement(p.TableCell,null,"Date"),m.a.createElement(p.TableCell,null,"Assigned Date"),m.a.createElement(p.TableCell,null,"Assigned ETA"),m.a.createElement(p.TableCell,null,"Unit Name"),m.a.createElement(p.TableCell,null,"Phone"),m.a.createElement(p.TableCell,null,"Call Status"),m.a.createElement(p.TableCell,null,"Priority"))),m.a.createElement(p.TableBody,null,G&&D.map((function(e,t){return m.a.createElement(p.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(C==e._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},m.a.createElement(p.TableCell,{className:"w-8"},m.a.createElement("div",{className:"flex items-center text-sm "},m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},e.callNo)))),m.a.createElement(p.TableCell,null,m.a.createElement("span",{className:"text-sm"},b()(e.date).format("DD/MM/YYYY"))),m.a.createElement(p.TableCell,null,m.a.createElement("span",{className:"text-sm"},b()(e.assignedDate).format("DD/MM/YYYY"))),m.a.createElement(p.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.assignedETA)),m.a.createElement(p.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.unitName)),m.a.createElement(p.TableCell,null,m.a.createElement("span",{className:"text-sm"},e.phone)),m.a.createElement(p.TableCell,null,0==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending For Allocation"):null,1==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Percall Approval"):null,2==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Response"):null,3==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for OEM Response"):null,4==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for 2nd Response"):null,5==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Customer"):null,6==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Under Observation"):null,7==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Others"):null,8==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Spare"):null,9==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Spare in Transit"):null,10==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Cancelled Calls"):null,11==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Closed Calls"):null,12==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Spare Taken CMRR"):null,13==e.callStatus?m.a.createElement("span",{className:"text-sm"},"Closed Calls"):null),m.a.createElement(p.TableCell,null,t+1))})))),m.a.createElement(p.TableFooter,null,m.a.createElement(p.Pagination,{totalResults:be,resultsPerPage:10,label:"Table navigation",onChange:function(e){w(e)}})))))}}}]);
//# sourceMappingURL=59.976fab31.chunk.js.map