(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[58],{1200:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(12),c=a(3),s=a(0),l=a.n(s),d=a(10),m=a(18),u=a(2),i=a(43),f=a(7),h=a(20),y=a.n(h),p=a(9),M=a.n(p);t.default=function(){Object(f.g)();var e=Object(s.useContext)(i.a).setTopHeading,t=Object(s.useState)(""),a=Object(c.a)(t,2),n=a[0],h=a[1];Object(s.useEffect)((function(){return e("Mark Attendance"),p(),function(){e("")}}),[]);var p=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={employee:m.a.getId(),employeeName:m.a.getName(),month:y()().format("MMMM"),year:y()().format("YYYY"),monthDayCount:y()().daysInMonth(),today:{date:y()().format("DD-MM-YY"),dayNo:y()().format("DD"),isPresent:""}},e.next=3,M()({url:"".concat(d.a,"/attendance/").concat(m.a.getId(),"/checkAttendance"),method:"POST",data:t}).then((function(e){console.log("********88***********"),console.log(e.data.isPresent),h(e.data.isPresent)})).catch((function(e){console.log("err",e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={employee:m.a.getId(),employeeName:m.a.getName(),month:y()().format("MMMM"),year:y()().format("YYYY"),monthDayCount:y()().daysInMonth(),today:{date:y()().format("DD-MM-YY"),dayNo:y()().format("DD"),isPresent:"Present"}},e.next=3,M()({url:"".concat(d.a,"/attendance/").concat(m.a.getId(),"/markAttendance"),method:"POST",data:t}).then((function(e){console.log("hello"),p()})).catch((function(e){console.log("err",e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"w-1/4"},l.a.createElement(u.Card,{className:"my-8 shadow-md"},l.a.createElement(u.CardBody,null,l.a.createElement("div",{className:"dark:text-white text-xl font-bold"}," ","Date: ",y()().format("DD-MM-YY")),l.a.createElement("hr",{className:"my-3"}),l.a.createElement("div",{className:"flex-row flex items-center justify-center"},l.a.createElement(u.Button,{onClick:function(){g()},disabled:"Present"==n},"Present"==n?"Already Marked":"Mark Attendance"))))))}}}]);
//# sourceMappingURL=58.14e68a0a.chunk.js.map