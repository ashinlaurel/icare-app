(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[41],{1209:function(e,a,t){"use strict";t.r(a);var n=t(19),l=t(6),c=t(16),r=t(5),o=t.n(r),u=t(12),s=t(3),m=t(0),i=t.n(m),p=t(9),d=t.n(p),v=t(10),E=t(21),f=t.n(E),b=t(2),x=t(18),h=(t(191),t(194),t(24),t(202),t(192),t(43)),g=(t(205),t(206),t(7)),y=t(37);a.default=function(){var e=Object(g.i)().id,a=Object(g.g)(),t=Object(m.useContext)(h.a).setTopHeading,r=Object(m.useState)("basic"),p=Object(s.a)(r,2),E=(p[0],p[1],Object(m.useState)(!1)),N=Object(s.a)(E,2),w=N[0],O=N[1],S=Object(m.useState)(!1),j=Object(s.a)(S,2),C=j[0],T=j[1],k=Object(m.useState)(-1),I=Object(s.a)(k,2),Y=I[0],M=I[1],D=Object(m.useState)({purchtype:"",vendor:"",invnumber:"",invdate:"",location:"",invtype:"",gstno:"",panno:"",aadharno:"",purchlocation:"Local",totalInvoice:"0"}),L=Object(s.a)(D,2),F=L[0],P=L[1],G=Object(m.useState)([{type:"",name:"",sno:"",condition:"Good",taxcategory:"",taxperc:"",rate:"",igst:"0",cgst:"0",sgst:"0",nettax:"0",amount:"0",tcs:"0",invamount:"0",wty:"",expirydate:"",purchtype:"",vendor:"",invnumber:"",invdate:"",location:"",invtype:"",gstno:"",panno:"",aadharno:"",purchlocation:"",brand:"",model:"",systype:"",stocktype:"",caseId:""}]),B=Object(s.a)(G,2),H=B[0],R=B[1],A=Object(m.useState)({type:"",name:"",sno:"",condition:"",location:"",invnumber:""}),K=Object(s.a)(A,2),_=K[0],U=K[1];Object(m.useEffect)((function(){z()}),[]);var z=function(){var a=Object(u.a)(o.a.mark((function a(){var t,n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={id:e},a.prev=1,a.next=4,d()({url:"".concat(v.a,"/inventory/").concat(x.a.getId(),"/getById"),method:"POST",data:t});case 4:n=a.sent,R([n.data]),P(n.data),P({purchtype:n.data.purchtype,vendor:n.data.vendor,invnumber:n.data.invnumber,invdate:n.data.invdate,location:n.data.location,invtype:n.data.invtype,gstno:n.data.gstno,panno:n.data.panno,aadharno:n.data.aadharno,purchlocation:n.data.purchlocation,totalInvoice:n.data.totalInvoice}),console.log("Done",n.data),a.next=14;break;case 11:throw a.prev=11,a.t0=a.catch(1),a.t0;case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(){return a.apply(this,arguments)}}(),V=function(){var t=Object(u.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==H.name&&""!==H.sno&&""!==H.invnumber){t.next=3;break}return console.log("missing inputs"),t.abrupt("return");case 3:return[],console.log("Submission Start"),(n=Object(c.a)(H)).map((function(e){e.purchtype=F.purchtype,e.vendor=F.vendor,e.invnumber=F.invnumber,e.invdate=F.invdate,e.location=F.location,e.invtype=F.invtype,e.gstno=F.gstno,e.panno=F.panno,e.aadharno=F.aadharno,e.purchlocation=F.purchtype})),r={id:e,update:n[0]},console.log(n),t.next=11,d()({url:"".concat(v.a,"/inventory/").concat(x.a.getId(),"/invupdate"),method:"POST",data:r}).then((function(e){console.log("Updated",e),a.push("/app/inventory")})).catch((function(e){console.log("err",e),U(Object(l.a)({},e))}));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(m.useEffect)((function(){return t("Update Inventory"),function(){t("")}}),[]),Object(m.useEffect)((function(){var e=Object(c.a)(H);if("Local"==F.purchlocation&&-1!=Y?(e[Y].sgst=parseInt(e[Y].rate)*(parseInt(e[Y].taxperc)/200),e[Y].cgst=parseInt(e[Y].rate)*(parseInt(e[Y].taxperc)/200),e[Y].nettax=parseInt(e[Y].sgst)+parseInt(e[Y].cgst),e[Y].amount=parseFloat(e[Y].rate)+parseFloat(e[Y].nettax)):-1!=Y&&(e[Y].igst=parseInt(e[Y].rate)*(parseInt(e[Y].taxperc)/100),e[Y].nettax=e[Y].igst,e[Y].sgst=0,e[Y].cgst=0,e[Y].amount=parseFloat(e[Y].rate)+parseFloat(e[Y].nettax)),-1!=Y){e[Y].tcs=.001*parseFloat(e[Y].amount),e[Y].invamount=parseFloat(e[Y].amount)+parseFloat(e[Y].tcs),e[Y].expirydate=f()().format("DD-MM-YYYY"),console.log(F.totalInvoice,e[Y].invamount),console.log(parseFloat(F.totalInvoice)+parseFloat(e[Y].invamount));var a=F;a.totalInvoice=parseFloat(parseFloat(F.totalInvoice)+parseFloat(e[Y].invamount)),P(a)}return R(e),function(){console.log("Calculations done!")}}),[w]),Object(m.useEffect)((function(){var e=Object(c.a)(H);if(-1!=Y)switch(e[Y].wty){case"0D":e[Y].expirydate=f()(F.invdate).format("DD-MM-YYYY");break;case"3M":e[Y].expirydate=f()().add(3,"M").format("DD-MM-YYYY");break;case"6M":e[Y].expirydate=f()().add(6,"M").format("DD-MM-YYYY");break;case"1Y":e[Y].expirydate=f()().add(1,"Y").format("DD-MM-YYYY");break;case"2Y":e[Y].expirydate=f()().add(2,"Y").format("DD-MM-YYYY");break;case"3Y":e[Y].expirydate=f()().add(3,"Y").format("DD-MM-YYYY");break;case"4Y":e[Y].expirydate=f()().add(4,"Y").format("DD-MM-YYYY");break;case"5Y":e[Y].expirydate=f()().add(5,"Y").format("DD-MM-YYYY")}return R(e),function(){console.log("Calculations done!")}}),[C]);var J=function(e){return function(a){P(Object(l.a)(Object(l.a)({},F),{},Object(n.a)({},e,a.target.value)))}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"px-4 py-3 mt-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},i.a.createElement(b.Label,{className:"font-bold"},i.a.createElement("span",null,"Purchase Information Total Invoice Amount",F.totalInvoice)),i.a.createElement("hr",{className:"mb-5 mt-2"}),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Purchase Type*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:F.purchtype,onChange:J("purchtype")}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Vendor Name*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:F.vendor,onChange:J("vendor")}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Number*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:F.invnumber,onChange:J("invnumber")}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Date*"),i.a.createElement(b.Input,{className:"mt-1",type:"date",value:F.invdate,onChange:J("invdate")})))),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Location*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){P(Object(l.a)(Object(l.a)({},F),{},{location:e.target.value}))}},i.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),i.a.createElement("option",{value:"Kottayam"},"Kottayam"),i.a.createElement("option",{value:"Kozhikode"},"Kozhikode"),i.a.createElement("option",{value:"In Transit"},"In Transit")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Type*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:F.invtype,onChange:J("invtype")}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"GST Number*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:F.gstno,onChange:J("gstno")}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Pan No*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:F.panno,onChange:J("panno")})))),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Aadhar No*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:F.aadharno,onChange:J("aadharno")}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Purchase Location*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){P(Object(l.a)(Object(l.a)({},F),{},{purchlocation:e.target.value})),Object(c.a)(H).map((function(e,a){e.taxcategory="",e.taxperc=""}))}},i.a.createElement("option",{value:"Local"},"Local"),i.a.createElement("option",{value:"IGST"},"IGST")))))),H.map((function(e,a){return t=a,i.a.createElement("div",{className:"px-4 py-3 my-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},i.a.createElement(b.Label,{className:"font-bold flex-row flex justify-between"},i.a.createElement("span",null,"Item Number : ",t+1)," ",i.a.createElement("span",{className:"ml-10"}," ","Net Tax:",H[t].nettax," ,Invoice Amount:"," ",H[t].invamount," ")),i.a.createElement("hr",{className:"mb-5 mt-2"}),i.a.createElement("div",{className:"flex-row flex space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Type*"),i.a.createElement(b.Select,{value:H[t].systype,className:"mt-1",onChange:function(e){var a=Object(c.a)(H);a[t].systype=e.target.value,R(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),i.a.createElement("option",{value:"item"},"Item"),i.a.createElement("option",{value:"full system"},"Full System")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Category*"),i.a.createElement(b.Select,{value:Object(y.capitalize)(H[t].type),className:"mt-1",onChange:function(e){var a=Object(c.a)(H);a[t].type=e.target.value,a[t].type=a[t].type.toLowerCase(),R(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),"item"==H[t].systype?i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"Mouse"},"Mouse"),i.a.createElement("option",{value:"Keyboard"},"Keyboard"),i.a.createElement("option",{value:"Monitor"},"Monitor"),i.a.createElement("option",{value:"Cpu"},"Cpu"),i.a.createElement("option",{value:"Ram"},"Ram"),i.a.createElement("option",{value:"Fan"},"Fan"),i.a.createElement("option",{value:"Motherboard"},"Motherboard"),i.a.createElement("option",{value:"Smps"},"SMPS"),i.a.createElement("option",{value:"Hdd"},"HDD"),i.a.createElement("option",{value:"Gcard"},"Gcard"),i.a.createElement("option",{value:"Enetcard"},"Enet Card"),i.a.createElement("option",{value:"Serialcard"},"Serial Card"),i.a.createElement("option",{value:"Paralellcard"},"Paralell Card"),i.a.createElement("option",{value:"Opticalsrive"},"Optical Drive"),i.a.createElement("option",{value:"Others"},"Others")):i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"console"},"Console"),i.a.createElement("option",{value:"DMP"},"DMP"),i.a.createElement("option",{value:"inkjet"},"Inkjet"),i.a.createElement("option",{value:"KVM"},"KVM"),i.a.createElement("option",{value:"laptop"},"Laptop"),i.a.createElement("option",{value:"laser"},"Laser"),i.a.createElement("option",{value:"LMP"},"LMP"),i.a.createElement("option",{value:"module"},"Module"),i.a.createElement("option",{value:"router"},"Router"),i.a.createElement("option",{value:"scanner"},"Scanner"),i.a.createElement("option",{value:"server"},"Server"),i.a.createElement("option",{value:"desktop"},"Desktop"),i.a.createElement("option",{value:"storage"},"Storage"),i.a.createElement("option",{value:"switch"},"Switch"),i.a.createElement("option",{value:"UPS"},"UPS"),i.a.createElement("option",{value:"others"},"Others"))))),"item"==H[t].systype?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Product Name*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:H[t].name,onChange:function(e){var a=Object(c.a)(H);a[t].name=e.target.value,R(a)}})),i.a.createElement(b.HelperText,{valid:!1},_.name))):i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Brand*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:H.brand,onChange:function(e){var a=Object(c.a)(H);a[t].brand=e.target.value,R(a)}})),i.a.createElement(b.HelperText,{valid:!1},_.brand))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Model*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:H.model,onChange:function(e){var a=Object(c.a)(H);a[t].model=e.target.value,R(a)}})),i.a.createElement(b.HelperText,{valid:!1},_.name)))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Serial Number*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:H[t].sno,onChange:function(e){var a=Object(c.a)(H);a[t].sno=e.target.value,R(a)}})),i.a.createElement(b.HelperText,{valid:!1},_.sno)),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Condition*"),i.a.createElement(b.Select,{value:H[t].condition,className:"mt-1",onChange:function(e){var a=Object(c.a)(H);a[t].condition=e.target.value,R(a)}},i.a.createElement("option",{value:"Good",selected:!0},"Good"),i.a.createElement("option",{value:"Bad"},"Bad"),i.a.createElement("option",{value:"Used"},"Used"),i.a.createElement("option",{value:"DOA"},"DOA"),i.a.createElement("option",{value:"Damaged"},"Damaged"),i.a.createElement("option",{value:"Damaged"},"Scrap"))))),i.a.createElement("div",{className:"flex-row flex space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Stock Type*"),i.a.createElement(b.Select,{className:"mt-1",value:H[t].stocktype,onChange:function(e){var a=Object(c.a)(H);a[t].stocktype=e.target.value,R(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Stock Type"),i.a.createElement("option",{value:"Purchased"},"Purchased"),i.a.createElement("option",{value:"Serviced"},"Serviced")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Warranty*"),i.a.createElement(b.Select,{className:"mt-1",value:H[t].wty,onChange:function(e){var a=Object(c.a)(H);a[t].wty=e.target.value,R(a),M(t),T(!C)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Category"),i.a.createElement("option",{value:"0D"},"0 days"),i.a.createElement("option",{value:"3M"},"3 Months"),i.a.createElement("option",{value:"6M"},"6 Months"),i.a.createElement("option",{value:"1Y"},"1 Year"),i.a.createElement("option",{value:"2Y"},"2 Year"),i.a.createElement("option",{value:"3Y"},"3 Year"),i.a.createElement("option",{value:"4Y"},"4 Year"),i.a.createElement("option",{value:"5Y"},"5 Year")))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Expiry Date"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:H[t].expirydate,readOnly:!0})),i.a.createElement(b.HelperText,{valid:!1},_.name))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Tax Category*"),i.a.createElement(b.Select,{className:"mt-1",value:H[t].taxcategory,onChange:function(e){var a=Object(c.a)(H),n=e.target.value.slice(-3,-1);a[t].taxcategory=e.target.value,a[t].taxperc=n,R(a),M(t),O(!w)}},"Local"==F.purchlocation?i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Tax Category"),i.a.createElement("option",{value:"GST 18%"},"GST 18%"),i.a.createElement("option",{value:"GST 28%"},"GST 28%")):i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Tax Category"),i.a.createElement("option",{value:"IGST 18%"},"IGST 18%"),i.a.createElement("option",{value:"IGST 28%"},"IGST 28%"))))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Rate*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:H[t].rate,onChange:function(e){var a=Object(c.a)(H);a[t].rate=e.target.value,R(a),M(t),O(!w)}})))));var t})),i.a.createElement(b.Card,{className:"mb-4 shadow-md "},i.a.createElement(b.CardBody,null,i.a.createElement("div",{className:"flex flex-row flex-wrap"},i.a.createElement(b.Button,{onClick:V,"aria-label":"Notifications","aria-haspopup":"true",className:" mx-2 "},"Submit")))))}},202:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var n=t(5),l=t.n(n),c=t(12),r=t(3),o=t(0),u=t.n(o),s=t(9),m=t.n(s),i=t(2),p=t(192),d=(t(196),t(10));function v(e){var a=e.isModalOpen,t=e.setIsModalOpen,n=(e.customer,e.setCustomer),s=Object(o.useState)([]),v=Object(r.a)(s,2),E=v[0],f=v[1],b=Object(o.useState)(0),x=Object(r.a)(b,2),h=x[0],g=x[1],y=Object(o.useState)(""),N=Object(r.a)(y,2),w=N[0],O=N[1],S=Object(o.useState)(""),j=Object(r.a)(S,2),C=(j[0],j[1],function(e){O(e.target.value)}),T=function(){var e=Object(c.a)(l.a.mark((function e(a){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:w,role:1},e.prev=2,e.next=5,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:t});case 5:n=e.sent,console.log(n.data),f(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:w,role:1},e.prev=1,e.next=4,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),f(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var k=function(){var e=Object(c.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({_id:a._id,customerName:a.name}),t(!1);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:a,onClose:function(){return t(!1)}},u.a.createElement(i.ModalHeader,null,"Select Customer"),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(p.d,{selectedIndex:h,onSelect:function(e){return g(e)}},u.a.createElement(p.b,null,u.a.createElement(p.a,null,"Customer")),u.a.createElement(p.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:T},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:C}))))),u.a.createElement(i.TableBody,null,E.map((function(e,a){return u.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return k(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1)}},"Select"))))}},205:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(9),l=t.n(n),c=t(10),r=t(18),o=function(e){return l.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}},206:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var n=t(5),l=t.n(n),c=t(12),r=t(3),o=t(0),u=t.n(o),s=t(9),m=t.n(s),i=t(2),p=t(192),d=(t(196),t(10));function v(e){var a=e.isModalOpen,t=e.setIsModalOpen,n=e.account,s=e.setAccount,v=e.customer,E=e.setCustomer,f=Object(o.useState)([]),b=Object(r.a)(f,2),x=b[0],h=b[1],g=Object(o.useState)([]),y=Object(r.a)(g,2),N=y[0],w=y[1],O=Object(o.useState)(0),S=Object(r.a)(O,2),j=S[0],C=S[1],T=Object(o.useState)(""),k=Object(r.a)(T,2),I=k[0],Y=k[1],M=function(e){Y(e.target.value)},D=function(){var e=Object(c.a)(l.a.mark((function e(a){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:I,role:1},e.prev=2,e.next=5,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:t});case 5:n=e.sent,console.log(n.data),h(n.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(c.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:I,role:1},e.prev=1,e.next=4,m()({url:"".concat(d.a,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),h(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var L=function(){var e=Object(c.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({_id:a._id,customerName:a.name}),s({_id:"",accountName:""}),e.prev=2,e.next=5,m.a.post("".concat(d.a,"/customer/accounts"),{customerId:a._id});case 5:t=e.sent,console.log(t.data),w(t.data),C(1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),s({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:a,onClose:function(){return t(!1)}},u.a.createElement(i.ModalHeader,null,"Select ",0==j?u.a.createElement(u.a.Fragment,null,"Customer"):u.a.createElement(u.a.Fragment,null,"Account")),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(p.d,{selectedIndex:j,onSelect:function(e){return C(e)}},u.a.createElement(p.b,null,u.a.createElement(p.a,null,"Customer"),u.a.createElement(p.a,null,"Account")),u.a.createElement(p.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:D},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:M}))))),u.a.createElement(i.TableBody,null,x.map((function(e,a){return u.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return L(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(p.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,N.map((function(e,a){return u.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return F(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",v.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",n.accountName),u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1),w([])}},"Select"))))}}}]);
//# sourceMappingURL=41.b2eefc31.chunk.js.map