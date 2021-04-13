(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[64],{1088:function(e,a,t){"use strict";t.r(a);var l=t(4),n=t.n(l),r=t(11),c=t(18),o=t(10),m=t(2),s=t(0),u=t.n(s),i=t(17),d=t(1),p=t(32),E=t(9),v=t(7),f=t.n(v),b=t(21),y=t.n(b);a.default=function(){var e=Object(s.useContext)(p.a),a=(e.topheading,e.setTopHeading),t=Object(s.useState)(!1),l=Object(m.a)(t,2),v=l[0],b=l[1],x=Object(s.useState)(""),Y=Object(m.a)(x,2),N=Y[0],w=Y[1],g=Object(s.useState)("Mouse"),M=Object(m.a)(g,2),h=(M[0],M[1],Object(s.useState)("Good")),S=Object(m.a)(h,2),D=S[0],O=S[1],k=Object(s.useState)("Trivandrum"),C=Object(m.a)(k,2),j=C[0],I=C[1],L=Object(s.useState)(!1),T=Object(m.a)(L,2),F=T[0],P=T[1],A=Object(s.useState)({name:"",sno:"",invnumber:"",systype:"item",invdate:"",expirydate:"",wty:"",brand:"",model:"",stocktype:"Serviced"}),H=Object(m.a)(A,2),K=H[0],B=H[1],G=Object(s.useState)({type:"",name:"",sno:"",condition:"",location:"",takenFrom:"",caseId:""}),U=Object(m.a)(G,2),R=U[0],z=U[1];Object(s.useEffect)((function(){return a("Create Item"),function(){a("")}}),[]);var J=function(e){return function(a){B(Object(o.a)(Object(o.a)({},K),{},Object(c.a)({},e,a.target.value)))}},V=function(){var e=Object(r.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==K.sno){e.next=5;break}return w("Serial number necessary"),b(!0),console.log("missing inputs"),e.abrupt("return");case 5:if(""!==K.invdate){e.next=10;break}return w("Added Date Required Necessary"),b(!0),console.log("missing inputs"),e.abrupt("return");case 10:if(""!==K.wty){e.next=15;break}return w("Warranty Period Necessary"),b(!0),console.log("missing inputs"),e.abrupt("return");case 15:return a={name:K.name,sno:K.sno,type:K.type,condition:D,location:j,invnumber:K.invnumber,systype:K.systype,invdate:K.invdate,expirydate:K.expirydate,wty:K.wty,brand:K.brand,model:K.model},console.log(a),e.next=19,f()({url:"".concat(E.a,"/inventory/").concat(i.a.getId(),"/create"),method:"POST",data:a}).then((function(e){console.log("Added",e._id),w("Added to Inventory"),b(!0);var a=K;a.name="",a.sno="",a.invnumber="",B(a),z({type:"",name:"",sno:"",condition:"",location:"",invnumber:""})})).catch((function(e){console.log("err",e),z(Object(o.a)({},e))}));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useMemo)((function(){var e=K;switch(e.wty){case"0D":e.expirydate=y()(K.invdate).format("DD-MM-YYYY");break;case"3M":e.expirydate=y()(K.invdate).add(3,"M").subtract(1,"days").format("DD-MM-YYYY");break;case"6M":e.expirydate=y()(K.invdate).add(6,"M").subtract(1,"days").format("DD-MM-YYYY");break;case"1Y":e.expirydate=y()(K.invdate).add(1,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"2Y":e.expirydate=y()(K.invdate).add(2,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"3Y":e.expirydate=y()(K.invdate).add(3,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"4Y":e.expirydate=y()(K.invdate).add(4,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"5Y":e.expirydate=y()(K.invdate).add(5,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"20Y":e.expirydate=y()(K.invdate).add(20,"Y").subtract(1,"days").format("DD-MM-YYYY")}return B(e),function(){console.log("Calculations done!")}}),[F]),u.a.createElement("div",{className:"px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"},u.a.createElement(d.Label,{className:"font-bold"},u.a.createElement("span",null,"Add Item To Inventory")),u.a.createElement("hr",{className:"mb-5 mt-2"}),u.a.createElement("div",{className:"flex-row flex space-x-3"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Select Type*"),u.a.createElement(d.Select,{className:"mt-1",value:K.systype,onChange:J("systype")},u.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),u.a.createElement("option",{value:"item"},"Item"),u.a.createElement("option",{value:"full system"},"Full System")))),"item"==K.systype?u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Select Category*"),u.a.createElement(d.Select,{className:"mt-1",value:K.type,onChange:J("type")},u.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),u.a.createElement("option",{value:"mouse"},"Mouse"),u.a.createElement("option",{value:"keyboard"},"Keyboard"),u.a.createElement("option",{value:"monitor"},"Monitor"),u.a.createElement("option",{value:"cpu"},"Cpu"),u.a.createElement("option",{value:"ram"},"Ram"),u.a.createElement("option",{value:"fan"},"Fan"),u.a.createElement("option",{value:"motherboard"},"Motherboard"),u.a.createElement("option",{value:"smps"},"SMPS"),u.a.createElement("option",{value:"hdd"},"HDD"),u.a.createElement("option",{value:"gcard"},"Gcard"),u.a.createElement("option",{value:"enetcard"},"Enet Card"),u.a.createElement("option",{value:"serialcard"},"Serial Card"),u.a.createElement("option",{value:"paralellcard"},"Paralell Card"),u.a.createElement("option",{value:"opticaldrive"},"Optical Drive"),u.a.createElement("option",{value:"others"},"Others")))):u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Select Category*"),u.a.createElement(d.Select,{className:"mt-1",value:K.type,onChange:J("type")},u.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),u.a.createElement("option",{value:"console"},"Console"),u.a.createElement("option",{value:"DMP"},"DMP"),u.a.createElement("option",{value:"inkjet"},"Inkjet"),u.a.createElement("option",{value:"KVM"},"KVM"),u.a.createElement("option",{value:"laptop"},"Laptop"),u.a.createElement("option",{value:"laser"},"Laser"),u.a.createElement("option",{value:"LMP"},"LMP"),u.a.createElement("option",{value:"module"},"Module"),u.a.createElement("option",{value:"router"},"Router"),u.a.createElement("option",{value:"scanner"},"Scanner"),u.a.createElement("option",{value:"server"},"Server"),u.a.createElement("option",{value:"desktop"},"Desktop"),u.a.createElement("option",{value:"storage"},"Storage"),u.a.createElement("option",{value:"switch"},"Switch"),u.a.createElement("option",{value:"UPS"},"UPS"),u.a.createElement("option",{value:"others"},"Others")))),"item"==K.systype?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Product Name*"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:K.name,onChange:J("name")})),u.a.createElement(d.HelperText,{valid:!1},R.name))):u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Brand*"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:K.brand,onChange:J("brand")})),u.a.createElement(d.HelperText,{valid:!1},R.brand))),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Model*"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:K.model,onChange:J("model")})),u.a.createElement(d.HelperText,{valid:!1},R.name)))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Serial Number*"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:K.sno,onChange:J("sno")})),u.a.createElement(d.HelperText,{valid:!1},R.sno)),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Select Condition*"),u.a.createElement(d.Select,{className:"mt-1",onChange:function(e){O(e.target.value)}},u.a.createElement("option",{value:"Good",selected:!0},"Good"),u.a.createElement("option",{value:"Bad"},"Bad"),u.a.createElement("option",{value:"Used"},"Used"),u.a.createElement("option",{value:"DOA"},"DOA"),u.a.createElement("option",{value:"Damaged"},"Damaged"),u.a.createElement("option",{value:"Damaged"},"Scrap"))))),u.a.createElement("div",{className:"flex-row flex space-x-3 my-2"},u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Select Location*"),u.a.createElement(d.Select,{className:"mt-1",onChange:function(e){I(e.target.value)}},u.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),u.a.createElement("option",{value:"Kottayam"},"Kottayam"),u.a.createElement("option",{value:"Kozhikode"},"Kozhikode")))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Date Of Addition*"),u.a.createElement(d.Input,{className:"mt-1",type:"date",value:K.invdate,onChange:J("invdate")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Warranty*"),u.a.createElement(d.Select,{className:"mt-1",value:K.wty,onChange:function(e){var a=K;a.wty=e.target.value,B(a),P(!F)}},u.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Category"),u.a.createElement("option",{value:"0D"},"0 days"),u.a.createElement("option",{value:"3M"},"3 Months"),u.a.createElement("option",{value:"6M"},"6 Months"),u.a.createElement("option",{value:"1Y"},"1 Year"),u.a.createElement("option",{value:"2Y"},"2 Years"),u.a.createElement("option",{value:"3Y"},"3 Years"),u.a.createElement("option",{value:"4Y"},"4 Years"),u.a.createElement("option",{value:"5Y"},"5 Years"),u.a.createElement("option",{value:"20Y"},"20 Years")))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Expiry Date"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:K.expirydate,readOnly:!0})),u.a.createElement(d.HelperText,{valid:!1},R.name)),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Taken From"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:K.takenFrom,onChange:J("takenFrom")}))),u.a.createElement("div",{className:"flex flex-col w-full"},u.a.createElement(d.Label,{className:"w-full"},u.a.createElement("span",null,"Case ID"),u.a.createElement(d.Input,{className:"mt-1",type:"text",value:K.caseId,onChange:J("caseId")})))),u.a.createElement(d.Button,{onClick:function(){V()},"aria-label":"Notifications","aria-haspopup":"true",className:"mt-4"}," ","Add Item"),u.a.createElement(u.a.Fragment,null,u.a.createElement(d.Modal,{isOpen:v,onClose:function(){return b(!1)}},u.a.createElement(d.ModalHeader,null,N),u.a.createElement(d.ModalBody,null),u.a.createElement(d.ModalFooter,null,u.a.createElement(d.Button,{className:"w-full sm:w-auto",onClick:function(){return b(!1)}},"Okay!")))))}}}]);
//# sourceMappingURL=64.fe4e5784.chunk.js.map