(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[50],{1083:function(e,a,l){"use strict";l.r(a);var t=l(3),n=l.n(t),c=l(9),r=l(16),m=l(7),s=l(2),o=l(0),u=l.n(o),E=l(1),p=l(15),i=l(29),f=(l(158),l(8)),d=l.n(f),N=l(10);function y(e){var a=e.isModalOpen,l=e.setIsModalOpen,t=e.setEmployee,n=Object(o.useState)([]),c=Object(s.a)(n,2),r=c[0],m=c[1];Object(o.useEffect)((function(){console.log("HERERRE"),d.a.post("".concat(N.a,"/admin/").concat(p.a.getId(),"/getAllEmpData")).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),m(a)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(E.Modal,{isOpen:a,onClose:function(){return l(!1)}},u.a.createElement(E.ModalHeader,null,"Select Employee"),u.a.createElement(E.ModalBody,null,u.a.createElement(E.TableContainer,null,u.a.createElement(E.Table,null,u.a.createElement(E.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(E.TableCell,null,"Name"),u.a.createElement(E.TableCell,null,"Email"))),u.a.createElement(E.TableBody,null,r.map((function(e,a){return u.a.createElement(E.TableRow,{key:a,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){console.log(e),t(e),l(!1)}},u.a.createElement(E.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.employeeName)))),u.a.createElement(E.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.email)))))})))),u.a.createElement(E.TableFooter,null))),u.a.createElement(E.ModalFooter,null,u.a.createElement(E.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return l(!1)}},"Cancel"),u.a.createElement(E.Button,{className:"w-full sm:w-auto"},"Accept"))))}a.default=function(){var e=Object(o.useState)(!1),a=Object(s.a)(e,2),l=a[0],t=a[1],f=Object(o.useState)(!1),x=Object(s.a)(f,2),b=x[0],v=x[1],I=Object(o.useContext)(i.a),w=(I.topheading,I.setTopHeading),g={queryID:"",employeeID:"",employeeName:"",date:"",PFNo:"",ESINo:"",UANNo:"",Basic:"",DA:"",HRAperc:"",rent:"",AccountName:"",BankName:"",BankAcNo:"",IFSCCode:"",BranchName:""},O=Object(o.useState)(g),h=Object(s.a)(O,2),C=h[0],S=h[1],F=Object(o.useState)(new Date),D=Object(s.a)(F,2),A=D[0],B=(D[1],Object(o.useState)({BplusDA:"",EligibleDays:"",PerformanceAllowance:"0",Incentive:"0",Bonus:"0",GrossSalary:"",HRA:"",EmplPF:"",EmplESI:"",ExtraMobileUsage:"0",LostDamage:"0",OtherDeductions:"0",Deduction:"",TakeHomeSalary:"",EmployerPF:"",EmployerESI:"",CTC:""})),P=Object(s.a)(B,2),j=P[0],L=P[1];function T(){var e=new Date;return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}Object(o.useEffect)((function(){return L(Object(m.a)(Object(m.a)({},j),{},{BplusDA:parseFloat(parseInt(C.Basic)*(1+parseInt(C.DA)/100)*(parseInt(j.EligibleDays)/T())).toFixed(2),HRA:parseFloat(parseInt(j.BplusDA)*(parseInt(C.HRAperc)/100)).toFixed(2),GrossSalary:parseFloat(parseInt(j.PerformanceAllowance)+parseInt(j.Incentive)+parseInt(j.Bonus)+parseInt(j.BplusDA)+parseInt(j.HRA)).toFixed(2),EmplPF:parseFloat(.12*j.BplusDA).toFixed(2),EmplESI:parseFloat(.0075*j.GrossSalary).toFixed(2),Deduction:parseFloat(parseInt(j.EmplPF)+parseInt(j.EmplESI)+parseInt(j.ExtraMobileUsage)+parseInt(j.OtherDeductions)+parseInt(j.LostDamage)).toFixed(2),TakeHomeSalary:parseFloat(parseInt(j.GrossSalary)-parseInt(j.Deduction)).toFixed(2),EmployerPF:parseFloat(.125*parseInt(j.BplusDA)).toFixed(2),EmployerESI:parseFloat(.0325*parseInt(j.GrossSalary)).toFixed(2),CTC:parseFloat(parseInt(j.GrossSalary)+parseInt(j.EmployerESI)+parseInt(j.EmployerPF)+parseInt(C.rent)).toFixed(2)})),function(){console.log("auto updated")}}),[C,j.BplusDA,j.PerformanceAllowance,j.Incentive,j.Bonus,j.EligibleDays,j.EmplPF,j.EmplESI,j.Deduction,j.EmployerESI,j.EmployerPF,j.ExtraMobileUsage,j.OtherDeductions,j.LostDamage,j.GrossSalary]),Object(o.useMemo)((function(){j.EmplPF>1800&&L(Object(m.a)(Object(m.a)({},j),{},{EmplPF:1800})),j.EmplESI>157.5&&L(Object(m.a)(Object(m.a)({},j),{},{EmplESI:157.5})),j.EmployerESI>682.5&&L(Object(m.a)(Object(m.a)({},j),{},{EmployerESI:682.5})),j.EmployerPF>1875&&L(Object(m.a)(Object(m.a)({},j),{},{EmployerPF:1875}))}),[j.EmplPF,j.EmplESI,j.EmployerESI,j.EmployerPF]);var k=function(e){return function(a){S(Object(m.a)(Object(m.a)({},C),{},Object(r.a)({},e,a.target.value)))}},H=function(e){return function(a){L(Object(m.a)(Object(m.a)({},j),{},Object(r.a)({},e,a.target.value)))}},M=function(){var e=Object(c.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={queryID:C._id,employeeID:C.employeeID,employeeName:C.employeeName,date:A,PFNo:C.PFNo,ESINo:C.ESINo,UANNo:C.UANNo,Basic:C.Basic,DA:C.DA,HRAperc:C.HRAperc,rent:C.rent,BplusDA:j.BplusDA,EligibleDays:j.EligibleDays,HRA:j.HRA,PerformanceAllowance:j.PerformanceAllowance,Bonus:j.Bonus,Incentive:j.Incentive,GrossSalary:j.GrossSalary,EmplPF:j.EmplPF,EmplESI:j.EmplESI,ExtraMobileUsage:j.ExtraMobileUsage,OtherDeductions:j.OtherDeductions,LostDamage:j.LostDamage,Deduction:j.Deduction,TakeHomeSalary:j.TakeHomeSalary,EmployerPF:j.EmployerPF,EmployerESI:j.EmployerESI,CTC:j.CTC,AccountName:C.AccountName,BankName:C.BankName,BankAcNo:C.BankAcNo,IFSCCode:C.IFSCCode,BranchName:C.BranchName},console.log(a),S(g),e.prev=3,e.next=6,d()({url:"".concat(N.a,"/admin/").concat(p.a.getId(),"/createSalary"),method:"POST",data:a});case 6:v(!0),console.log("Done"),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return w("Pay Employee "),function(){w("")}}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement(E.Card,{className:"mb-4 shadow-md mt-4"},u.a.createElement(E.CardBody,null,u.a.createElement("div",{className:"flex flex-row flex-wrap items-center justify-between"},u.a.createElement("div",{className:"dark:text-gray-200"},"Name: ",C.employeeName," "),u.a.createElement("div",{className:"dark:text-gray-200"},"ID: ",C.employeeID," "),u.a.createElement("div",{className:"dark:text-gray-200"}," CTC: ",j.CTC," "),u.a.createElement("div",null,u.a.createElement(E.Button,{"aria-label":"Notifications",onClick:function(){t(!0)},"aria-haspopup":"true",layout:"outline",className:"mt-4 mx-2 "},"Select Employee"," "),u.a.createElement(E.Button,{"aria-label":"Notifications","aria-haspopup":"true",layout:"outline",onClick:M,className:"mt-4 mx-2 "},"Pay Salary"))))),function(){var e;return u.a.createElement("div",{className:"px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},u.a.createElement(E.Label,{className:"font-bold"},u.a.createElement("span",null,"Salary Details")),u.a.createElement("hr",{className:"mb-5 mt-2"}),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"PFNo"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:C.PFNo,readOnly:!0,onChange:k("PFNo")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"ESINo"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:C.ESINo,readOnly:!0,onChange:k("ESINo")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"UANNo"),u.a.createElement(E.Input,{className:"mt-1",type:"text",placeholder:"",value:C.UANNo,readOnly:!0,onChange:k("UANNo")})))),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Basic"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:C.Basic,readOnly:!0}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"DA %"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:C.DA,readOnly:!0}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"HRA %"),u.a.createElement(E.Input,{className:"mt-1",type:"text",placeholder:"",value:C.HRAperc,readOnly:!0})))),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Rent"),u.a.createElement(E.Input,{className:"mt-1 ",type:"text",value:C.rent,readOnly:!0}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Account Name"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:C.AccountName,readOnly:!0}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"Bank Name"),u.a.createElement(E.Input,{className:"mt-1",type:"text",placeholder:"",readOnly:!0,value:C.BankName})))),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Bank Account No"),u.a.createElement(E.Input,{className:"mt-1",type:"text",readOnly:!0,value:C.BankAcNo}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"IFSC Code"),u.a.createElement(E.Input,{className:"mt-1",type:"text",readOnly:!0,value:C.IFSCCode}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"Branch Name"),u.a.createElement(E.Input,{className:"mt-1",type:"text",placeholder:"",value:C.BranchName,readOnly:!0})))),u.a.createElement("hr",{className:"my-4"}),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"Eligible Days"),u.a.createElement(E.Input,{className:"mt-1",type:"text",placeholder:"",value:j.EligibleDays,onChange:H("EligibleDays")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Performance Allowance"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:j.PerformanceAllowance,onChange:H("PerformanceAllowance")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Incentive"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:j.Incentive,onChange:H("Incentive")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"Bonus"),u.a.createElement(E.Input,{className:"mt-1",type:"text",placeholder:"",value:j.Bonus,onChange:H("Bonus")})))),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Extra Mobile Usage"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:j.ExtraMobileUsage,onChange:H("ExtraMobileUsage")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Salary/Other Advances"),u.a.createElement(E.Input,{className:"mt-1",type:"text",value:j.OtherDeductions,onChange:H("OtherDeductions")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"Spare Lost/LostDamage"),u.a.createElement(E.Input,{className:"mt-1",type:"text",placeholder:"",value:j.LostDamage,onChange:H("LostDamage")})))),u.a.createElement("hr",{className:"my-4"}),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"HRA"),u.a.createElement(E.Input,{className:"mt-1",type:"text",readOnly:!0,value:j.HRA,onChange:H("HRA")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"EmplPF"),u.a.createElement(E.Input,{className:"mt-1",type:"text",readOnly:!0,value:j.EmplPF,onChange:H("EmplPF")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"EmplESI"),u.a.createElement(E.Input,{className:"mt-1",readOnly:!0,type:"text",value:j.EmplESI,onChange:H("EmplESI")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"Deduction"),u.a.createElement(E.Input,{className:"mt-1",type:"text",readOnly:!0,placeholder:"",value:j.Deduction,onChange:H("Deduction")})))),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"TakeHomeSalary"),u.a.createElement(E.Input,{className:"mt-1",readOnly:!0,type:"text",value:j.TakeHomeSalary,onChange:H("TakeHomeSalary")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"EmployerPF"),u.a.createElement(E.Input,{className:"mt-1",readOnly:!0,type:"text",value:j.EmployerPF,onChange:H("EmployerPF")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"EmployerESI"),u.a.createElement(E.Input,{className:"mt-1",readOnly:!0,type:"text",placeholder:"",value:j.EmployerESI,onChange:H("EmployerESI")})))),u.a.createElement("div",{className:"flex-row flex  space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"Payable Basic + DA "),u.a.createElement(E.Input,(e={className:"mt-1",readOnly:!0,type:"text"},Object(r.a)(e,"readOnly",!0),Object(r.a)(e,"value",j.BplusDA),Object(r.a)(e,"onChange",H("BplusDA")),e)))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full "},u.a.createElement("span",null,"Gross Salary"),u.a.createElement(E.Input,{className:"mt-1",readOnly:!0,type:"text",placeholder:"",value:j.GrossSalary,onChange:H("GrossSalary")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(E.Label,{className:"w-full"},u.a.createElement("span",null,"CTC"),u.a.createElement(E.Input,{className:"mt-1",readOnly:!0,type:"text",value:j.CTC,onChange:H("CTC")})))))}(),u.a.createElement(u.a.Fragment,null,u.a.createElement(E.Modal,{isOpen:b,onClose:function(){return v(!1)}},u.a.createElement(E.ModalHeader,null,"Payment Successful!"),u.a.createElement(E.ModalBody,null),u.a.createElement(E.ModalFooter,null,u.a.createElement(E.Button,{className:"w-full sm:w-auto",onClick:function(){return v(!1)}},"Okay!")))),u.a.createElement(y,{isModalOpen:l,setIsModalOpen:t,setEmployee:S}))}},158:function(e,a,l){"use strict";l.d(a,"a",(function(){return E}));var t=l(2),n=l(0),c=l.n(n),r=l(1),m=l(8),s=l.n(m),o=l(10),u=l(15);function E(e){var a=e.isModalOpen,l=e.setIsModalOpen,m=e.setEngineer,E=e.nextModal,p=Object(n.useState)([]),i=Object(t.a)(p,2),f=i[0],d=i[1];Object(n.useEffect)((function(){console.log("HERERRE"),s.a.post("".concat(o.a,"/admin/").concat(u.a.getId(),"/getAll")).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),d(a)})).catch((function(e){console.log("axiosErr",e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:a,onClose:function(){return l(!1)}},c.a.createElement(r.ModalHeader,null,"Assign Engineer"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Name"),c.a.createElement(r.TableCell,null,"Email"))),c.a.createElement(r.TableBody,null,f.map((function(e,a){return c.a.createElement(r.TableRow,{key:a,className:"hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 ",onClick:function(){m({_id:e._id,enggName:e.employeeName}),l(!1),E(!0)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.employeeName)))),c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.email)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return l(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}}}]);
//# sourceMappingURL=50.2e1755ae.chunk.js.map