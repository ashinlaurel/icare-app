(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[16],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var l=t(3),n=t.n(l),c=t(10),r=t(2),o=t(0),s=t.n(o),u=t(1),m=t(7),i=t.n(m),d=t(92),p=(t(87),t(8));function E(e){var a=e.isModalOpen,t=e.setIsModalOpen,l=e.account,m=e.setAccount,E=e.customer,f=e.setCustomer,v=Object(o.useState)([]),b=Object(r.a)(v,2),y=b[0],x=b[1],g=Object(o.useState)([]),h=Object(r.a)(g,2),N=h[0],O=h[1],w=Object(o.useState)([]),j=Object(r.a)(w,2),S=(j[0],j[1],Object(o.useState)(0)),C=Object(r.a)(S,2),T=C[0],M=C[1];Object(o.useEffect)((function(){i.a.post("".concat(p.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),x(a)})).catch((function(e){console.log("axiosErr",e)}))}),[]);var Y=function(){var e=Object(c.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f({_id:a._id,customerName:a.name}),e.prev=1,e.next=4,i.a.post("".concat(p.a,"/customer/accounts"),{customerId:a._id});case 4:t=e.sent,console.log(t.data),O(t.data),M(1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("axiosErr",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),m({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.Modal,{isOpen:a,onClose:function(){return t(!1)}},s.a.createElement(u.ModalHeader,null,"Select ",0==T?s.a.createElement(s.a.Fragment,null,"Customer"):s.a.createElement(s.a.Fragment,null,"Account")),s.a.createElement(u.ModalBody,null,s.a.createElement(d.d,{selectedIndex:T,onSelect:function(e){return M(e)}},s.a.createElement(d.b,null,s.a.createElement(d.a,null,"Customer"),s.a.createElement(d.a,null,"Account")),s.a.createElement(d.c,null,s.a.createElement(u.TableContainer,null,s.a.createElement(u.Table,null,s.a.createElement(u.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(u.TableCell,null,"Customer"))),s.a.createElement(u.TableBody,null,y.map((function(e,a){return s.a.createElement(u.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return Y(e)}},s.a.createElement(u.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(u.TableFooter,null))),s.a.createElement(d.c,null,s.a.createElement(u.TableContainer,null,s.a.createElement(u.Table,null,s.a.createElement(u.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(u.TableCell,null,"Account"))),s.a.createElement(u.TableBody,null,N.map((function(e,a){return s.a.createElement(u.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return I(e)}},s.a.createElement(u.TableCell,null,s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))))})))),s.a.createElement(u.TableFooter,null)))),s.a.createElement(u.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",E.customerName),s.a.createElement(u.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",l.accountName)),s.a.createElement(u.ModalFooter,null,s.a.createElement(u.Button,{className:"w-full sm:w-auto",onClick:function(){return t(!1)}},"Select"))))}},1078:function(e,a,t){"use strict";t.r(a);var l=t(16),n=t(3),c=t.n(n),r=t(9),o=t(93),s=t(10),u=t(2),m=t(0),i=t.n(m),d=t(7),p=t.n(d),E=t(8),f=t(18),v=t.n(f),b=t(1),y=t(15),x=(t(85),t(88),t(19),t(94),t(92),t(29)),g=(t(99),t(100),t(28));a.default=function(){var e=Object(m.useContext)(x.a).setTopHeading,a=Object(m.useState)("basic"),t=Object(u.a)(a,2),n=(t[0],t[1],Object(m.useState)(!1)),d=Object(u.a)(n,2),f=d[0],h=d[1],N=Object(m.useState)(!1),O=Object(u.a)(N,2),w=O[0],j=O[1],S=Object(m.useState)(-1),C=Object(u.a)(S,2),T=C[0],M=C[1],Y=Object(m.useState)(!1),I=Object(u.a)(Y,2),k=I[0],L=I[1],D=Object(m.useState)([]),F=Object(u.a)(D,2),B=F[0],P=F[1],A=Object(m.useState)(!1),G=Object(u.a)(A,2),H=G[0],R=G[1],_=Object(m.useState)(""),K=Object(u.a)(_,2),V=K[0],q=K[1],W=Object(m.useState)({_id:"",name:"",aadharNo:"",PANNo:"",GSTNo:""}),z=Object(u.a)(W,2),J=z[0],U=z[1],Q={purchtype:"B2B",vendor:"",invnumber:"",invdate:v()().format(),location:"Trivandrum",invtype:"Material",gstno:"",panno:"",aadharno:"",purchlocation:"Local",totalInvoice:"0",vendorId:""},X=Object(m.useState)(Q),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],ae=Object(m.useState)([{histtype:"purchase",date:v()().format(),location:$.location,callId:"Nil",assetId:"Nil",status:"Good",note:"Inventory Purchased"}]),te=Object(u.a)(ae,2),le=te[0],ne=(te[1],{type:"",name:"",sno:"",condition:"Good",taxcategory:"GST 18%",taxperc:"",rate:"",igst:"0",cgst:"0",sgst:"0",nettax:"0",amount:"0",tcs:"0",invamount:"0",wty:"",expirydate:"",purchtype:"",vendorId:"",vendor:"",invnumber:"",invdate:v()().format(),location:"",invtype:"",gstno:"",panno:"",aadharno:"",purchlocation:"",brand:"",model:"",systype:"item",stocktype:"Purchased",caseId:"imprest"}),ce=Object(m.useState)([ne]),re=Object(u.a)(ce,2),oe=re[0],se=re[1],ue=Object(m.useState)({type:"",name:"",sno:"",condition:"",location:"",invnumber:""}),me=Object(u.a)(ue,2),ie=me[0],de=me[1],pe=function(){var e=Object(s.a)(c.a.mark((function e(){var a,t,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,""!=J._id){e.next=5;break}return q("Please select vendor"),R(!0),e.abrupt("return");case 5:if(oe.map((function(e){""!==e.name&&""!==e.sno||(q("Required fields not filled!"),R(!0),console.log("missing inputs"),a=!0)})),oe.map((function(e){oe.map((function(t){console.log(e.sno,t.sno),e!=t&&e.sno==t.sno&&(q("Serial numbers have to be unique!"),R(!0),console.log("serial num same"),a=!0)}))})),1!=a){e.next=9;break}return e.abrupt("return");case 9:return t=[],console.log("Submission Start"),(l=Object(o.a)(oe)).map((function(e){e.purchtype=$.purchtype,e.vendorId=J._id,e.vendor=J.name,e.invnumber=$.invnumber,e.invdate=$.invdate,e.location=$.location,e.invtype=$.invtype,e.gstno=J.GSTNo,e.panno=J.PANNo,e.aadharno=J.aadharNo,e.purchlocation=$.purchtype,e.history=le})),console.log(l),e.next=16,p()({url:"".concat(E.a,"/inventory/").concat(y.a.getId(),"/createitems"),method:"POST",data:l}).then((function(e){console.log("Added",e),e.data.map((function(e){return t.push(e._id)})),console.log(t);var a=Object(r.a)(Object(r.a)({},$),{},{invItems:t});p()({url:"".concat(E.a,"/inventory/").concat(y.a.getId(),"/createpurchasehistory"),method:"POST",data:a}).then((function(e){console.log("hisory added",e),se([ne]),ee(Q),de({type:"",name:"",sno:"",condition:"",location:"",invnumber:""}),q("Item(s) Added"),R(!0)})).catch((function(e){console.log("Purchase Hisry err",e.response),de(Object(r.a)({},e))}))})).catch((function(e){console.log("INV err",e.response),e.response&&q(e.response.data.message),R(!0),de(Object(r.a)({},e))}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Ee(){return(Ee=Object(s.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={filters:{searchquery:""}},e.prev=1,e.next=4,p()({url:"".concat(E.a,"/vendor/").concat(y.a.getId(),"/getAll"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data.out),P(t.data.out),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(m.useEffect)((function(){!function(){Ee.apply(this,arguments)}()}),[]),Object(m.useEffect)((function(){return e("Purchase Inventory"),function(){e("")}}),[]),Object(m.useEffect)((function(){var e=Object(o.a)(oe);("Local"==$.purchlocation&&-1!=T?(e[T].sgst=parseInt(e[T].rate)*(parseInt(e[T].taxperc)/200),e[T].cgst=parseInt(e[T].rate)*(parseInt(e[T].taxperc)/200),e[T].nettax=parseInt(e[T].sgst)+parseInt(e[T].cgst),e[T].amount=parseFloat(e[T].rate)+parseFloat(e[T].nettax)):-1!=T&&(e[T].igst=parseInt(e[T].rate)*(parseInt(e[T].taxperc)/100),e[T].nettax=e[T].igst,e[T].sgst=0,e[T].cgst=0,e[T].amount=parseFloat(e[T].rate)+parseFloat(e[T].nettax)),-1!=T)&&(e[T].tcs=.001*parseFloat(e[T].amount),e[T].invamount=parseFloat(e[T].amount)+parseFloat(e[T].tcs),e[T].expirydate=v()().format("DD-MM-YYYY"),ee($));return se(e),function(){console.log("Calculations done!")}}),[f]),Object(m.useEffect)((function(){var e=Object(o.a)(oe);if(-1!=T)switch(e[T].wty){case"0D":e[T].expirydate=v()($.invdate).format("DD-MM-YYYY");break;case"3M":e[T].expirydate=v()($.invdate).add(3,"M").subtract(1,"days").format("DD-MM-YYYY");break;case"6M":e[T].expirydate=v()($.invdate).add(6,"M").subtract(1,"days").format("DD-MM-YYYY");break;case"1Y":e[T].expirydate=v()($.invdate).add(1,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"2Y":e[T].expirydate=v()($.invdate).add(2,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"3Y":e[T].expirydate=v()($.invdate).add(3,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"4Y":e[T].expirydate=v()($.invdate).add(4,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"5Y":e[T].expirydate=v()($.invdate).add(5,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"20Y":e[T].expirydate=v()($.invdate).add(20,"Y").subtract(1,"days").format("DD-MM-YYYY")}return se(e),function(){console.log("Calculations done!")}}),[w]),i.a.createElement(i.a.Fragment,null,function(){return i.a.createElement("div",{className:"px-4 py-3 mt-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},i.a.createElement(b.Label,{className:"font-bold"},i.a.createElement("span",null,"Purchase Information Total Invoice Amount",$.totalInvoice)),i.a.createElement("hr",{className:"mb-5 mt-2"}),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Purchase Type*"),i.a.createElement(b.Select,{className:"mt-1",value:$.purchtype,onChange:function(e){ee(Object(r.a)(Object(r.a)({},$),{},{purchtype:e.target.value}))}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Purchase Type"),i.a.createElement("option",{value:"B2B"},"B2B"),i.a.createElement("option",{value:"B2C"},"B2C")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Location*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){ee(Object(r.a)(Object(r.a)({},$),{},{location:e.target.value}))}},i.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),i.a.createElement("option",{value:"Kottayam"},"Kottayam"),i.a.createElement("option",{value:"Kozhikode"},"Kozhikode")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Purchase Location*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){ee(Object(r.a)(Object(r.a)({},$),{},{purchlocation:e.target.value})),Object(o.a)(oe).map((function(e,a){e.taxcategory="",e.taxperc=""})),se([ne])}},i.a.createElement("option",{value:"Local"},"Local"),i.a.createElement("option",{value:"IGST"},"IGST")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Number*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:$.invnumber,onChange:(e="invnumber",function(a){ee(Object(r.a)(Object(r.a)({},$),{},Object(l.a)({},e,a.target.value)))})}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Date*"),i.a.createElement(b.Input,{className:"mt-1",type:"date",value:$.invdate,onChange:function(e){ee(Object(r.a)(Object(r.a)({},$),{},{invdate:e.target.value})),j(!w)}}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Type*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){ee(Object(r.a)(Object(r.a)({},$),{},{invtype:e.target.value}))}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Invoice Type"),i.a.createElement("option",{value:"Material"},"Material"),i.a.createElement("option",{value:"AMC"},"AMC"),i.a.createElement("option",{value:"Addtl Wty"},"Addtl Wty")))),i.a.createElement("div",{className:"flex flex-col w-full  "},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement(b.Button,{layout:"outline",className:"-mb-10 w-full",onClick:function(){return L(!0)}},"Select Vendor")))),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement(b.Label,{className:" mt-3"},"Vendor Name:",J.name),i.a.createElement(b.Label,{className:" ml-3 mt-3"},"GST No. ",J.GSTNo)));var e}(),i.a.createElement(i.a.Fragment,null,i.a.createElement(b.Modal,{isOpen:H,onClose:function(){return R(!1)}},i.a.createElement(b.ModalHeader,null),i.a.createElement(b.ModalBody,null,V),i.a.createElement(b.ModalFooter,null,i.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return R(!1)}},"Okay!")))),oe.map((function(e,a){return t=a,i.a.createElement("div",{className:"px-4 py-3 my-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},i.a.createElement(b.Label,{className:"font-bold flex-row flex justify-between"},i.a.createElement("span",null,"Item Number : ",t+1)," ",i.a.createElement("div",{layout:"outline",onClick:function(){var e=Object(o.a)(oe);e=e.filter((function(e,a){if(a!=t)return e})),se(e)},className:"border-gray-100 rounded-full cursor pointer"},i.a.createElement(g.CloseIcon,{fill:"lightgray",className:"w-5 h-5 cursor-pointer ","aria-hidden":"true"}))),i.a.createElement("hr",{className:"mb-5 mt-2"}),i.a.createElement("div",{className:"flex-row flex space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Type*"),i.a.createElement(b.Select,{className:"mt-1",value:oe[t].systype,onChange:function(e){var a=Object(o.a)(oe);a[t].systype=e.target.value,se(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),i.a.createElement("option",{value:"item"},"Item"),i.a.createElement("option",{value:"full system"},"Full System")))),"item"==oe[t].systype?i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Category*"),i.a.createElement(b.Select,{className:"mt-1",value:oe[t].type,onChange:function(e){var a=Object(o.a)(oe);a[t].type=e.target.value.toLowerCase(),se(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),i.a.createElement("option",{value:"mouse"},"Mouse"),i.a.createElement("option",{value:"keyboard"},"Keyboard"),i.a.createElement("option",{value:"monitor"},"Monitor"),i.a.createElement("option",{value:"cpu"},"Cpu"),i.a.createElement("option",{value:"ram"},"Ram"),i.a.createElement("option",{value:"fan"},"Fan"),i.a.createElement("option",{value:"motherboard"},"Motherboard"),i.a.createElement("option",{value:"smps"},"SMPS"),i.a.createElement("option",{value:"hdd"},"HDD"),i.a.createElement("option",{value:"gcard"},"Gcard"),i.a.createElement("option",{value:"enetcard"},"Enet Card"),i.a.createElement("option",{value:"serialcard"},"Serial Card"),i.a.createElement("option",{value:"paralellcard"},"Paralell Card"),i.a.createElement("option",{value:"opticaldrive"},"Optical Drive"),i.a.createElement("option",{value:"others"},"Others")))):i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Category*"),i.a.createElement(b.Select,{className:"mt-1",value:oe[t].type,onChange:function(e){var a=Object(o.a)(oe);a[t].type=e.target.value.toLowerCase(),se(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),i.a.createElement("option",{value:"console"},"Console"),i.a.createElement("option",{value:"DMP"},"DMP"),i.a.createElement("option",{value:"inkjet"},"Inkjet"),i.a.createElement("option",{value:"KVM"},"KVM"),i.a.createElement("option",{value:"laptop"},"Laptop"),i.a.createElement("option",{value:"laser"},"Laser"),i.a.createElement("option",{value:"LMP"},"LMP"),i.a.createElement("option",{value:"module"},"Module"),i.a.createElement("option",{value:"router"},"Router"),i.a.createElement("option",{value:"scanner"},"Scanner"),i.a.createElement("option",{value:"server"},"Server"),i.a.createElement("option",{value:"desktop"},"Desktop"),i.a.createElement("option",{value:"storage"},"Storage"),i.a.createElement("option",{value:"switch"},"Switch"),i.a.createElement("option",{value:"UPS"},"UPS"),i.a.createElement("option",{value:"others"},"Others")))),"item"==oe[t].systype?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Product Name*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:oe[t].name,onChange:function(e){var a=Object(o.a)(oe);a[t].name=e.target.value,se(a)}})),i.a.createElement(b.HelperText,{valid:!1},ie.name))):i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Brand*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:oe[t].brand,onChange:function(e){var a=Object(o.a)(oe);a[t].brand=e.target.value,se(a)}})),i.a.createElement(b.HelperText,{valid:!1},ie.brand))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Model*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:oe[t].model,onChange:function(e){var a=Object(o.a)(oe);a[t].model=e.target.value,se(a)}})),i.a.createElement(b.HelperText,{valid:!1},ie.name)))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Serial Number*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:oe[t].sno,onChange:function(e){var a=Object(o.a)(oe);a[t].sno=e.target.value,se(a)}})),i.a.createElement(b.HelperText,{valid:!1},ie.sno)),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Condition*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){var a=Object(o.a)(oe);a[t].condition=e.target.value,se(a)}},i.a.createElement("option",{value:"Good",selected:!0},"Good"),i.a.createElement("option",{value:"Defective"},"Defective"),i.a.createElement("option",{value:"DOA"},"DOA"),i.a.createElement("option",{value:"Damaged"},"Damaged"))))),i.a.createElement("div",{className:"flex-row flex space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Stock Type*"),i.a.createElement(b.Select,{className:"mt-1",value:oe[t].stocktype,onChange:function(e){var a=Object(o.a)(oe);a[t].stocktype=e.target.value,se(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Stock Type"),i.a.createElement("option",{value:"Purchased"},"Purchased"),i.a.createElement("option",{value:"Serviced"},"Serviced")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Warranty*"),i.a.createElement(b.Select,{className:"mt-1",value:oe[t].wty,onChange:function(e){var a=Object(o.a)(oe);a[t].wty=e.target.value,se(a),M(t),j(!w)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Category"),i.a.createElement("option",{value:"0D"},"0 days"),i.a.createElement("option",{value:"3M"},"3 Months"),i.a.createElement("option",{value:"6M"},"6 Months"),i.a.createElement("option",{value:"1Y"},"1 Year"),i.a.createElement("option",{value:"2Y"},"2 Years"),i.a.createElement("option",{value:"3Y"},"3 Years"),i.a.createElement("option",{value:"4Y"},"4 Years"),i.a.createElement("option",{value:"5Y"},"5 Years"),i.a.createElement("option",{value:"20Y"},"20 Years")))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Expiry Date"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:oe[t].expirydate,readOnly:!0})),i.a.createElement(b.HelperText,{valid:!1},ie.name))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Tax Category*"),i.a.createElement(b.Select,{className:"mt-1",value:oe[t].taxcategory,onChange:function(e){var a=Object(o.a)(oe),l=e.target.value.slice(-3,-1);a[t].taxcategory=e.target.value,a[t].taxperc=l,se(a),M(t),h(!f)}},"Local"==$.purchlocation?i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Tax Category"),i.a.createElement("option",{value:"GST 18%"},"GST 18%"),i.a.createElement("option",{value:"GST 28%"},"GST 28%")):i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Tax Category"),i.a.createElement("option",{value:"IGST 18%"},"IGST 18%"),i.a.createElement("option",{value:"IGST 28%"},"IGST 28%"))))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Rate*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:oe[t].rate,onChange:function(e){var a=Object(o.a)(oe);a[t].rate=e.target.value,se(a),M(t),h(!f)}})))),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement(b.Label,{className:" mt-3"},"Net Tax:",parseFloat(oe[t].nettax)),i.a.createElement(b.Label,{className:" ml-5 mt-3"},"Invoice Amount:",parseFloat(oe[t].invamount))));var t})),i.a.createElement(b.Card,{className:"mb-4 shadow-md "},i.a.createElement(b.CardBody,null,i.a.createElement("div",{className:"flex flex-row flex-wrap justify-around"},i.a.createElement(b.Button,{onClick:function(){var e=Object(o.a)(oe),a=ne;e.push(a),se(e)},"aria-label":"Notifications","aria-haspopup":"true",layout:"outline",className:" mx-2 "},"Add Item"),i.a.createElement(b.Button,{onClick:function(){var e=Object(o.a)(oe),a=Object(r.a)({},oe[oe.length-1]);a.sno="",console.log(a),e.push(a),se(e)},"aria-label":"Notifications","aria-haspopup":"true",layout:"outline",className:" mx-2 "},"Add Similar Item"),i.a.createElement(b.Button,{onClick:pe,"aria-label":"Notifications","aria-haspopup":"true",className:" mx-2 "},"Submit"),i.a.createElement(b.Button,{onClick:function(){console.log($)},"aria-label":"Notifications","aria-haspopup":"true",className:" mx-2 "},"Test"),i.a.createElement("div",{className:" dark:text-gray-100 text-black font-bold flex-1 my-auto mx-20"},i.a.createElement("span",null,"Invoice Amount: ",parseFloat($.totalInvoice)))))),i.a.createElement(i.a.Fragment,null,i.a.createElement(b.Modal,{isOpen:k,onClose:function(){return L(!1)}},i.a.createElement(b.ModalHeader,null,"Pink Vendor"),i.a.createElement(b.ModalBody,null,i.a.createElement(b.TableContainer,null,i.a.createElement(b.Table,null,i.a.createElement(b.TableHeader,null,i.a.createElement("tr",null,i.a.createElement(b.TableCell,null,"Customer"))),i.a.createElement(b.TableBody,null,B.map((function(e,a){return i.a.createElement(b.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){console.log(e),U(e),L(!1)}},i.a.createElement(b.TableCell,null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("p",{className:"font-semibold"},e.name)))))})))))),i.a.createElement(b.ModalFooter,null,i.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return L(!1)}},"Okay!")))))}},87:function(e,a,t){},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(22);var n=t(31);function c(e){return function(e){if(Array.isArray(e))return Object(l.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},94:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(2),n=t(0),c=t.n(n),r=t(1),o=t(7),s=t.n(o),u=t(8);function m(e){var a=e.isModalOpen,t=e.setIsModalOpen,o=e.setCustomer,m=Object(n.useState)([]),i=Object(l.a)(m,2),d=i[0],p=i[1];Object(n.useEffect)((function(){E()}),[]);var E=function(){s.a.post("".concat(u.a,"/customer/customers"),{search:"",role:1}).then((function(e){console.log(e.data);var a=[];e.data.map((function(e){a.push(e)})),p(a)})).catch((function(e){console.log("axiosErr",e)}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Modal,{isOpen:a,onClose:function(){return t(!1)}},c.a.createElement(r.ModalHeader,null,"Modal header"),c.a.createElement(r.ModalBody,null,c.a.createElement(r.TableContainer,null,c.a.createElement(r.Table,null,c.a.createElement(r.TableHeader,null,c.a.createElement("tr",null,c.a.createElement(r.TableCell,null,"Customer"))),c.a.createElement(r.TableBody,null,d.map((function(e,a){return c.a.createElement(r.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){o({_id:e._id,customerName:e.name}),t(!1)}},c.a.createElement(r.TableCell,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{className:"font-semibold"},e.name)))))})))),c.a.createElement(r.TableFooter,null))),c.a.createElement(r.ModalFooter,null,c.a.createElement(r.Button,{className:"w-full sm:w-auto",layout:"outline",onClick:function(){return t(!1)}},"Cancel"),c.a.createElement(r.Button,{className:"w-full sm:w-auto"},"Accept"))))}},99:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var l=t(7),n=t.n(l),c=t(8),r=t(15),o=function(e){return n.a.post("".concat(c.a,"/unit/").concat(r.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}}}]);
//# sourceMappingURL=16.0d5e06a2.chunk.js.map