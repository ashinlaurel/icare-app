(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[60],{1040:function(e,a,t){"use strict";t.r(a);var n=t(16),r=t(9),s=t(2),c=t(3),l=t.n(c),o=t(10),u=t(0),m=t.n(u),i=t(6),d=t(46),p=t.n(d),f=t(47),h=t.n(f),b=(t(28),t(1)),w=t(19),g=t(4),v=t(24),x=t(7),E=t.n(x),j=t(8);a.default=function(){var e=Object(g.g)();Object(u.useEffect)((function(){console.log("empName",v.a.getUsername()),v.a.getUsername()&&e.push("/app/myassets/accounts")}),[]),Object(u.useEffect)((function(){!function(){var e=Object(o.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E()({url:"".concat(j.a,"/test"),method:"GET"});case 3:a=e.sent,console.log(a),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var a=Object(u.useState)({username:"ftest",password:"password"}),t=Object(s.a)(a,2),c=t[0],d=t[1],f=Object(u.useState)(),x=Object(s.a)(f,2),k=x[0],N=x[1],O=function(e){return function(a){d(Object(r.a)(Object(r.a)({},c),{},Object(n.a)({},e,a.target.value)))}},y=function(){var a=Object(o.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),n={username:c.username,password:c.password},""!==c.username&&""!=c.password){a.next=5;break}return N("Please enter username and password"),a.abrupt("return");case 5:Object(w.b)(n,"customer/signin").then((function(a){console.log("Signed In",a.user._id),v.a.setName(a.user.CustomerName),v.a.setUsername(a.user.username),v.a.setToken(a.token),v.a.setId(a.user._id),localStorage.setItem("type",1),console.log("authenticated"),e.push("/app/myassets/accounts")})).catch((function(e){N(e)}));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return m.a.createElement("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900"},m.a.createElement("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"},m.a.createElement("div",{className:"flex flex-col overflow-y-auto md:flex-row"},m.a.createElement("div",{className:"h-32 md:h-auto md:w-1/2"},m.a.createElement("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:p.a,alt:"Office"}),m.a.createElement("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:h.a,alt:"Office"})),m.a.createElement("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},m.a.createElement("div",{className:"w-full"},m.a.createElement("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"},"Customer Login"),m.a.createElement(b.Label,null,m.a.createElement("span",null,"Username"),m.a.createElement(b.Input,{className:"mt-1",placeholder:"username",value:c.username,onChange:O("username")})),m.a.createElement(b.Label,{className:"mt-4"},m.a.createElement("span",null,"Password"),m.a.createElement(b.Input,{className:"mt-1",type:"password",placeholder:"",value:c.password,onChange:O("password")})),m.a.createElement(b.Button,{className:"mt-4",block:!0,tag:i.b,onClick:y},"Log in"),m.a.createElement(b.HelperText,{valid:!1},k))))))}}}]);
//# sourceMappingURL=60.b6d07010.chunk.js.map