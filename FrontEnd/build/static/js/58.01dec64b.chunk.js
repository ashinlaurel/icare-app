(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[58],{1070:function(e,t,a){"use strict";a.r(t);var l=a(3),n=a.n(l),s=a(94),c=a(10),r=a(2),u=a(0),m=a.n(u),o=a(18),i=a.n(o),b=a(7),d=a.n(b),E=a(15),p=(a(85),a(28),a(1)),O=(a(113),a(8)),j=(a(100),a(93),a(115),a(30)),f=a(29),S=(a(19),a(135),a(263));t.default=function(){var e=Object(u.useState)(!1),t=Object(r.a)(e,2),a=(t[0],t[1],Object(u.useContext)(j.a)),l=(a.bbaropen,a.setBBarOpen),o=a.setAssetDetails,b=(a.assetdetails,Object(u.useState)(0)),g=Object(r.a)(b,2),C=g[0],N=(g[1],Object(u.useContext)(f.a)),x=(N.topheading,N.setTopHeading),T=Object(u.useState)(!1),v=Object(r.a)(T,2),h=(v[0],v[1],Object(u.useState)(1)),P=Object(r.a)(h,2),w=(P[0],P[1]),y=Object(u.useState)([]),k=Object(r.a)(y,2),R=k[0],A=k[1],D=Object(u.useState)(!1),M=Object(r.a)(D,2),B=(M[0],M[1],Object(u.useState)(!1)),_=Object(r.a)(B,2),Y=(_[0],_[1],Object(u.useState)(!1)),F=Object(r.a)(Y,2),I=(F[0],F[1],Object(u.useState)(!0)),H=Object(r.a)(I,2),J=(H[0],H[1],Object(u.useState)(!0)),U=Object(r.a)(J,2),q=(U[0],U[1],Object(u.useState)({_id:"",enggName:"",assignedCalls:[]})),z=Object(r.a)(q,2),G=z[0],K=z[1],L=Object(u.useState)(!1),Q=Object(r.a)(L,2),V=Q[0],W=Q[1],X=Object(u.useState)({}),Z=Object(r.a)(X,2),$=(Z[0],Z[1],Object(u.useState)("")),ee=Object(r.a)($,2),te=(ee[0],ee[1],Object(u.useState)("")),ae=Object(r.a)(te,2),le=(ae[0],ae[1],Object(u.useState)("")),ne=Object(r.a)(le,2),se=(ne[0],ne[1],Object(u.useState)("")),ce=Object(r.a)(se,2),re=(ce[0],ce[1],Object(u.useState)("")),ue=Object(r.a)(re,2),me=(ue[0],ue[1],Object(u.useState)(20)),oe=Object(r.a)(me,2),ie=oe[0];oe[1],Object(u.useEffect)((function(){A(G.assignedCalls)}),[G]),Object(u.useEffect)((function(){return function(){l(0),o({})}}),[]),Object(u.useEffect)((function(){return x("Assign Call Priority"),function(){x("")}}),[]);var be=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("DATA",R),t={assignedCalls:Object(s.a)(R)},console.log(t),a={id:G._id,update:t},e.prev=4,e.next=7,d()({url:"".concat(O.a,"/admin/").concat(E.a.getId(),"/update"),method:"POST",data:a});case 7:console.log("Done"),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(4),e.t0;case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(m.a.Fragment,null,m.a.createElement(S.a,{isModalOpen:V,setIsModalOpen:W,setEmployee:K}),m.a.createElement(S.a,null),m.a.createElement("div",{className:"mb-64 mt-4"},m.a.createElement("div",{className:"flex flex-row items-center justify-start space-x-2"},m.a.createElement(p.Button,{layout:"outline",onClick:function(){return W(!0)}},"Select Engineer"),m.a.createElement(p.Button,{onClick:function(){return be(!0)}},"Submit")),m.a.createElement(p.TableContainer,{className:"mt-4"},m.a.createElement(p.Table,null,m.a.createElement(p.TableHeader,null,m.a.createElement("tr",null,m.a.createElement(p.TableCell,null,"Call No"),m.a.createElement(p.TableCell,null,"Date"),m.a.createElement(p.TableCell,null,"Unit Name"),m.a.createElement(p.TableCell,null,"Phone"),m.a.createElement(p.TableCell,null,"Call Status"),m.a.createElement(p.TableCell,null,"Priority"))),m.a.createElement(p.TableBody,null,R.map((function(e,t){var a=e._id,l=e.callId,n=e.priority;return m.a.createElement(p.TableRow,{className:"hover:shadow-lg dark:hover:bg-gray-600 ".concat(C==l._id?"bg-blue-300 shadow-lg dark:bg-gray-600":"white"," "),key:t,onClick:function(){}},m.a.createElement(p.TableCell,{className:"w-8"},m.a.createElement("div",{className:"flex items-center text-sm "},m.a.createElement("div",null,m.a.createElement("p",{className:"font-semibold"},l.callNo)))),m.a.createElement(p.TableCell,null,m.a.createElement("span",{className:"text-sm"},i()(l.date).format("DD/MM/YYYY"))),m.a.createElement(p.TableCell,null,m.a.createElement("span",{className:"text-sm"},l.unitName)),m.a.createElement(p.TableCell,null,m.a.createElement("span",{className:"text-sm"},l.phone)),m.a.createElement(p.TableCell,null,0==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending For Allocation"):null,1==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Percall Approval"):null,2==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Response"):null,3==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for OEM Response"):null,4==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for 2nd Response"):null,5==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Customer"):null,6==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Under Observation"):null,7==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Others"):null,8==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Pending for Spare"):null,9==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Spare in Transit"):null,10==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Cancelled Calls"):null,11==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Closed Calls"):null,12==l.callStatus?m.a.createElement("span",{className:"text-sm"},"Spare Taken CMRR"):null),m.a.createElement(p.TableCell,null,m.a.createElement("input",{value:n,onChange:function(e){var t=R;t=t.filter((function(t){if(t._id!=a)return t;console.log("here",e.target.value);var l=t;return l.priority=e.target.value,l})),console.log(t),A(t)}})))})))),m.a.createElement(p.TableFooter,null,m.a.createElement(p.Pagination,{totalResults:ie,resultsPerPage:10,label:"Table navigation",onChange:function(e){w(e)}})))))}}}]);
//# sourceMappingURL=58.01dec64b.chunk.js.map