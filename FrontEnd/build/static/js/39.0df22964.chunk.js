(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[39],{1209:function(e,a,t){"use strict";t.r(a);var l=t(5),n=t.n(l),r=t(6),c=t(16),o=t(12),u=t(19),s=t(3),m=t(0),i=t.n(m),d=t(9),p=t.n(d),f=t(10),E=t(20),v=t.n(E),b=t(2),y=t(18),h=(t(191),t(193),t(24),t(201),t(196),t(43)),x=(t(205),t(206),t(36));a.default=function(){var e=Object(m.useContext)(h.a).setTopHeading,a=Object(m.useState)("basic"),t=Object(s.a)(a,2),l=(t[0],t[1],Object(m.useState)(!1)),d=Object(s.a)(l,2),E=d[0],g=d[1],N=Object(m.useState)(!1),O=Object(s.a)(N,2),w=O[0],S=O[1],j=Object(m.useState)(-1),C=Object(s.a)(j,2),k=C[0],T=C[1],I=Object(m.useState)(!1),M=Object(s.a)(I,2),Y=M[0],L=M[1],P=Object(m.useState)([]),F=Object(s.a)(P,2),D=F[0],A=F[1],B=Object(m.useState)(!1),G=Object(s.a)(B,2),H=G[0],_=G[1],R=Object(m.useState)(""),K=Object(s.a)(R,2),V=K[0],q=K[1],W=Object(m.useState)(""),z=Object(s.a)(W,2),J=z[0],U=z[1],Q=Object(m.useState)({_id:"",name:"",aadharNo:"",PANNo:"",GSTNo:""}),X=Object(s.a)(Q,2),Z=X[0],$=X[1],ee=Object(u.a)({purchtype:"B2B",vendor:"",vendorId:"",invnumber:"",invdate:v()().format(),location:"Trivandrum",invtype:"Material",gstno:"",panno:"",aadharno:"",purchlocation:"Local",totalInvoice:"0"},"vendorId",""),ae=Object(m.useState)(ee),te=Object(s.a)(ae,2),le=te[0],ne=te[1],re=Object(m.useState)([{histtype:"purchase",date:v()().format(),location:le.location,callId:"Nil",assetId:"Nil",status:"Good",note:"Inventory Purchased"}]),ce=Object(s.a)(re,2),oe=ce[0],ue=(ce[1],{type:"",name:"",sno:"",condition:"Good",taxcategory:"",taxperc:"",rate:"",igst:"0",cgst:"0",sgst:"0",nettax:"0",amount:"0",tcs:"0",invamount:"0",wty:"",expirydate:"",purchtype:"",vendorId:"",vendor:"",invnumber:"",invdate:v()().format(),location:"",invtype:"",gstno:"",panno:"",aadharno:"",purchlocation:"",brand:"",model:"",systype:"item",stocktype:"Purchased",caseId:"imprest"}),se=Object(m.useState)([ue]),me=Object(s.a)(se,2),ie=me[0],de=me[1],pe=Object(m.useState)({type:"",name:"",sno:"",condition:"",location:"",invnumber:""}),fe=Object(s.a)(pe,2),Ee=fe[0],ve=fe[1],be=function(){var e=Object(o.a)(n.a.mark((function e(){var a,t,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,""!=Z._id){e.next=5;break}return q("Please select vendor"),_(!0),e.abrupt("return");case 5:if(ie.map((function(e){"item"!=e.systype||""!==e.name&&""!==e.sno||(q("Required fields not filled!"),_(!0),console.log("missing inputs"),a=!0)})),ie.map((function(e){ie.map((function(t){console.log(e.sno,t.sno),e!=t&&e.sno==t.sno&&(q("Serial numbers have to be unique!"),_(!0),console.log("serial num same"),a=!0)}))})),1!=a){e.next=9;break}return e.abrupt("return");case 9:return t=[],console.log("Submission Start"),(l=Object(c.a)(ie)).map((function(e){e.purchtype=le.purchtype,e.vendorId=Z._id,e.vendor=Z.name,e.invnumber=le.invnumber,e.invdate=le.invdate,e.location=le.location,e.invtype=le.invtype,e.gstno=Z.GSTNo,e.panno=Z.PANNo,e.aadharno=Z.aadharNo,e.purchlocation=le.purchtype,e.history=oe})),console.log(l),e.next=16,p()({url:"".concat(f.API,"/inventory/").concat(y.a.getId(),"/createitems"),method:"POST",data:l}).then((function(e){console.log("Added",e),e.data.map((function(e){return t.push(e._id)})),console.log(t);var a=Object(r.a)(Object(r.a)({},le),{},{invItems:t});p()({url:"".concat(f.API,"/inventory/").concat(y.a.getId(),"/createpurchasehistory"),method:"POST",data:a}).then((function(e){console.log("hisory added",e),de([ue]),ne(ee),ve({type:"",name:"",sno:"",condition:"",location:"",invnumber:""}),q("Item(s) Added"),_(!0),T(0)})).catch((function(e){console.log("Purchase Hisry err",e.response),ve(Object(r.a)({},e))}))})).catch((function(e){console.log("INV err",e.response),e.response&&q(e.response.data.message),_(!0),ve(Object(r.a)({},e))}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function ye(){return(ye=Object(o.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={filters:{searchquery:J}},e.prev=1,e.next=4,p()({url:"".concat(f.API,"/vendor/").concat(y.a.getId(),"/getAll"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data.out),A(t.data.out),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(m.useEffect)((function(){!function(){ye.apply(this,arguments)}()}),[J]),Object(m.useEffect)((function(){return e("Purchase Inventory"),function(){e("")}}),[]),Object(m.useEffect)((function(){var e=Object(c.a)(ie);("Local"==le.purchlocation&&-1!=k?(e[k].sgst=parseInt(e[k].rate)*(parseInt(e[k].taxperc)/200),e[k].cgst=parseInt(e[k].rate)*(parseInt(e[k].taxperc)/200),e[k].nettax=parseInt(e[k].sgst)+parseInt(e[k].cgst),e[k].amount=parseFloat(e[k].rate)+parseFloat(e[k].nettax)):-1!=k&&(e[k].igst=parseInt(e[k].rate)*(parseInt(e[k].taxperc)/100),e[k].nettax=e[k].igst,e[k].sgst=0,e[k].cgst=0,e[k].amount=parseFloat(e[k].rate)+parseFloat(e[k].nettax)),-1!=k)&&(e[k].tcs=.001*parseFloat(e[k].amount),e[k].invamount=parseFloat(e[k].amount)+parseFloat(e[k].tcs),ne(le));return de(e),function(){console.log("Calculations done!")}}),[E]),Object(m.useEffect)((function(){var e=Object(c.a)(ie);if(-1!=k)switch(e[k].wty){case"0D":e[k].expirydate=v()(le.invdate).format("DD-MM-YYYY");break;case"3M":e[k].expirydate=v()(le.invdate).add(3,"M").subtract(1,"days").format("DD-MM-YYYY");break;case"6M":e[k].expirydate=v()(le.invdate).add(6,"M").subtract(1,"days").format("DD-MM-YYYY");break;case"1Y":e[k].expirydate=v()(le.invdate).add(1,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"2Y":e[k].expirydate=v()(le.invdate).add(2,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"3Y":e[k].expirydate=v()(le.invdate).add(3,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"4Y":e[k].expirydate=v()(le.invdate).add(4,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"5Y":e[k].expirydate=v()(le.invdate).add(5,"Y").subtract(1,"days").format("DD-MM-YYYY");break;case"20Y":e[k].expirydate=v()(le.invdate).add(20,"Y").subtract(1,"days").format("DD-MM-YYYY")}return de(e),function(){console.log("Calculations done!")}}),[w]),i.a.createElement(i.a.Fragment,null,function(){return i.a.createElement("div",{className:"px-4 py-3 mt-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},i.a.createElement(b.Label,{className:"font-bold"},i.a.createElement("span",null,"Purchase Information Total Invoice Amount",le.totalInvoice)),i.a.createElement("hr",{className:"mb-5 mt-2"}),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Purchase Type*"),i.a.createElement(b.Select,{className:"mt-1",value:le.purchtype,onChange:function(e){ne(Object(r.a)(Object(r.a)({},le),{},{purchtype:e.target.value}))}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Purchase Type"),i.a.createElement("option",{value:"B2B"},"B2B"),i.a.createElement("option",{value:"B2C"},"B2C")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Location*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){ne(Object(r.a)(Object(r.a)({},le),{},{location:e.target.value}))}},i.a.createElement("option",{value:"Trivandrum"},"Trivandrum"),i.a.createElement("option",{value:"Kottayam"},"Kottayam"),i.a.createElement("option",{value:"Kozhikode"},"Kozhikode")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Purchase Location*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){ne(Object(r.a)(Object(r.a)({},le),{},{purchlocation:e.target.value})),Object(c.a)(ie).map((function(e,a){e.taxcategory="",e.taxperc=""})),de([ue])}},i.a.createElement("option",{value:"Local"},"Local"),i.a.createElement("option",{value:"IGST"},"IGST")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Number*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:le.invnumber,onChange:(e="invnumber",function(a){ne(Object(r.a)(Object(r.a)({},le),{},Object(u.a)({},e,a.target.value)))})}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Date*"),i.a.createElement(b.Input,{className:"mt-1",type:"date",value:le.invdate,onChange:function(e){ne(Object(r.a)(Object(r.a)({},le),{},{invdate:e.target.value})),S(!w)}}))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Invoice Type*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){ne(Object(r.a)(Object(r.a)({},le),{},{invtype:e.target.value}))}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Invoice Type"),i.a.createElement("option",{value:"Material"},"Material"),i.a.createElement("option",{value:"AMC"},"AMC"),i.a.createElement("option",{value:"Addtl Wty"},"Addtl Wty")))),i.a.createElement("div",{className:"flex flex-col w-full  "},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement(b.Button,{layout:"outline",className:"-mb-10 w-full",onClick:function(){return L(!0)}},"Select Vendor")))),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement(b.Label,{className:" mt-3"},"Vendor Name:",Z.name),i.a.createElement(b.Label,{className:" ml-3 mt-3"},"GST No. ",Z.GSTNo)));var e}(),i.a.createElement(i.a.Fragment,null,i.a.createElement(b.Modal,{isOpen:H,onClose:function(){return _(!1)}},i.a.createElement(b.ModalHeader,null),i.a.createElement(b.ModalBody,null,V),i.a.createElement(b.ModalFooter,null,i.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return _(!1)}},"Okay!")))),ie.map((function(e,a){return t=a,i.a.createElement("div",{className:"px-4 py-3 my-2 bg-white rounded-lg shadow-md dark:bg-gray-800"},i.a.createElement(b.Label,{className:"font-bold flex-row flex justify-between"},i.a.createElement("span",null,"Item Number : ",t+1)," ",i.a.createElement("div",{layout:"outline",onClick:function(){var e=Object(c.a)(ie);e=e.filter((function(e,a){if(a!=t)return e})),de(e)},className:"border-gray-100 rounded-full cursor pointer"},i.a.createElement(x.CloseIcon,{fill:"lightgray",className:"w-5 h-5 cursor-pointer ","aria-hidden":"true"}))),i.a.createElement("hr",{className:"mb-5 mt-2"}),i.a.createElement("div",{className:"flex-row flex space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Type*"),i.a.createElement(b.Select,{className:"mt-1",value:ie[t].systype,onChange:function(e){var a=Object(c.a)(ie);a[t].systype=e.target.value,de(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),i.a.createElement("option",{value:"item"},"Item"),i.a.createElement("option",{value:"full system"},"Full System")))),"item"==ie[t].systype?i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Category*"),i.a.createElement(b.Select,{className:"mt-1",value:ie[t].type,onChange:function(e){var a=Object(c.a)(ie);a[t].type=e.target.value.toLowerCase(),de(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),i.a.createElement("option",{value:"mouse"},"Mouse"),i.a.createElement("option",{value:"keyboard"},"Keyboard"),i.a.createElement("option",{value:"monitor"},"Monitor"),i.a.createElement("option",{value:"cpu"},"Cpu"),i.a.createElement("option",{value:"ram"},"Ram"),i.a.createElement("option",{value:"fan"},"Fan"),i.a.createElement("option",{value:"motherboard"},"Motherboard"),i.a.createElement("option",{value:"smps"},"SMPS"),i.a.createElement("option",{value:"hdd"},"HDD"),i.a.createElement("option",{value:"gcard"},"Gcard"),i.a.createElement("option",{value:"enetcard"},"Enet Card"),i.a.createElement("option",{value:"serialcard"},"Serial Card"),i.a.createElement("option",{value:"paralellcard"},"Paralell Card"),i.a.createElement("option",{value:"opticaldrive"},"Optical Drive"),i.a.createElement("option",{value:"others"},"Others")))):i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Category*"),i.a.createElement(b.Select,{className:"mt-1",value:ie[t].type,onChange:function(e){var a=Object(c.a)(ie);a[t].type=e.target.value.toLowerCase(),de(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Type"),i.a.createElement("option",{value:"console"},"Console"),i.a.createElement("option",{value:"DMP"},"DMP"),i.a.createElement("option",{value:"inkjet"},"Inkjet"),i.a.createElement("option",{value:"KVM"},"KVM"),i.a.createElement("option",{value:"laptop"},"Laptop"),i.a.createElement("option",{value:"laser"},"Laser"),i.a.createElement("option",{value:"LMP"},"LMP"),i.a.createElement("option",{value:"module"},"Module"),i.a.createElement("option",{value:"router"},"Router"),i.a.createElement("option",{value:"scanner"},"Scanner"),i.a.createElement("option",{value:"server"},"Server"),i.a.createElement("option",{value:"desktop"},"Desktop"),i.a.createElement("option",{value:"storage"},"Storage"),i.a.createElement("option",{value:"switch"},"Switch"),i.a.createElement("option",{value:"UPS"},"UPS"),i.a.createElement("option",{value:"others"},"Others")))),"item"==ie[t].systype?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Product Name*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:ie[t].name,onChange:function(e){var a=Object(c.a)(ie);a[t].name=e.target.value,de(a)}})),i.a.createElement(b.HelperText,{valid:!1},Ee.name))):i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Brand*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:ie[t].brand,onChange:function(e){var a=Object(c.a)(ie);a[t].brand=e.target.value,de(a)}})),i.a.createElement(b.HelperText,{valid:!1},Ee.brand))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Model*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:ie[t].model,onChange:function(e){var a=Object(c.a)(ie);a[t].model=e.target.value,de(a)}})),i.a.createElement(b.HelperText,{valid:!1},Ee.name)))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Serial Number*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:ie[t].sno,onChange:function(e){var a=Object(c.a)(ie);a[t].sno=e.target.value,de(a)}})),i.a.createElement(b.HelperText,{valid:!1},Ee.sno)),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Select Condition*"),i.a.createElement(b.Select,{className:"mt-1",onChange:function(e){var a=Object(c.a)(ie);a[t].condition=e.target.value,de(a)}},i.a.createElement("option",{value:"Good",selected:!0},"Good"),i.a.createElement("option",{value:"Bad"},"Bad"),i.a.createElement("option",{value:"DOA"},"DOA"),i.a.createElement("option",{value:"Scrap"},"Scrap"),i.a.createElement("option",{value:"ScrapSold"},"Scrap Sold"))))),i.a.createElement("div",{className:"flex-row flex space-x-3"},i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Stock Type*"),i.a.createElement(b.Select,{className:"mt-1",value:ie[t].stocktype,onChange:function(e){var a=Object(c.a)(ie);a[t].stocktype=e.target.value,de(a)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Stock Type"),i.a.createElement("option",{value:"Purchased"},"Purchased"),i.a.createElement("option",{value:"Serviced"},"Serviced")))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Warranty*"),i.a.createElement(b.Select,{className:"mt-1",value:ie[t].wty,onChange:function(e){var a=Object(c.a)(ie);a[t].wty=e.target.value,de(a),T(t),S(!w)}},i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Category"),i.a.createElement("option",{value:"0D"},"0 days"),i.a.createElement("option",{value:"3M"},"3 Months"),i.a.createElement("option",{value:"6M"},"6 Months"),i.a.createElement("option",{value:"1Y"},"1 Year"),i.a.createElement("option",{value:"2Y"},"2 Years"),i.a.createElement("option",{value:"3Y"},"3 Years"),i.a.createElement("option",{value:"4Y"},"4 Years"),i.a.createElement("option",{value:"5Y"},"5 Years"),i.a.createElement("option",{value:"20Y"},"20 Years")))),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Expiry Date"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:ie[t].expirydate,readOnly:!0})),i.a.createElement(b.HelperText,{valid:!1},Ee.name))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Tax Category*"),i.a.createElement(b.Select,{className:"mt-1",value:ie[t].taxcategory,onChange:function(e){var a=Object(c.a)(ie),l=e.target.value.slice(-3,-1);a[t].taxcategory=e.target.value,a[t].taxperc=l,de(a),T(t),g(!E)}},"Local"==le.purchlocation?i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Tax Category"),i.a.createElement("option",{value:"GST 18%"},"GST 18%"),i.a.createElement("option",{value:"GST 28%"},"GST 28%")):i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"",selected:!0,disabled:!0},"Select Tax Category"),i.a.createElement("option",{value:"IGST 18%"},"IGST 18%"),i.a.createElement("option",{value:"IGST 28%"},"IGST 28%"))))),i.a.createElement("div",{className:"flex flex-col w-full"},i.a.createElement(b.Label,{className:"w-full"},i.a.createElement("span",null,"Rate*"),i.a.createElement(b.Input,{className:"mt-1",type:"text",value:ie[t].rate,onChange:function(e){var a=Object(c.a)(ie);a[t].rate=e.target.value,de(a),T(t),g(!E)}})))),i.a.createElement("div",{className:"flex-row flex  space-x-3"},i.a.createElement(b.Label,{className:" mt-3"},"Net Tax: ",parseFloat(ie[t].nettax).toFixed(2)),i.a.createElement(b.Label,{className:" ml-5 mt-3"},"Invoice Amount:",parseFloat(ie[t].invamount).toFixed(2))));var t})),i.a.createElement(b.Card,{className:"mb-4 shadow-md "},i.a.createElement(b.CardBody,null,i.a.createElement("div",{className:"flex flex-row flex-wrap justify-around"},i.a.createElement(b.Button,{onClick:function(){var e=Object(c.a)(ie),a=ue;e.push(a),de(e)},"aria-label":"Notifications","aria-haspopup":"true",layout:"outline",className:" mx-2 "},"Add Item"),i.a.createElement(b.Button,{onClick:function(){var e=Object(c.a)(ie),a=Object(r.a)({},ie[ie.length-1]);a.sno="",console.log(a),e.push(a),de(e)},"aria-label":"Notifications","aria-haspopup":"true",layout:"outline",className:" mx-2 "},"Add Similar Item"),i.a.createElement(b.Button,{onClick:be,"aria-label":"Notifications","aria-haspopup":"true",className:" mx-2 "},"Submit"),i.a.createElement("div",{className:" dark:text-gray-100 text-black font-bold flex-1 my-auto mx-20"},i.a.createElement("span",null,"Invoice Amount: ",parseFloat(le.totalInvoice)))))),i.a.createElement(i.a.Fragment,null,i.a.createElement(b.Modal,{isOpen:Y,onClose:function(){return L(!1)}},i.a.createElement(b.ModalHeader,null,i.a.createElement("tr",null,i.a.createElement(b.TableCell,null,"Pick Vendor"))),i.a.createElement("div",null,i.a.createElement("input",{className:"block w-full my-1 pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:function(e){U(e.target.value)}})),i.a.createElement(b.ModalBody,null,i.a.createElement(b.TableContainer,{className:"h-h-96 overflow-y-auto"},i.a.createElement(b.Table,null,i.a.createElement(b.TableHeader,null,i.a.createElement("tr",null,i.a.createElement(b.TableCell,null,"Customer"))),i.a.createElement(b.TableBody,null,D.map((function(e,a){return i.a.createElement(b.TableRow,{key:a,className:"hover:bg-purple-900 ",onClick:function(){console.log(e),$(e),ne(Object(r.a)(Object(r.a)({},le),{},{vendor:e.name,vendorId:e._id})),L(!1)}},i.a.createElement(b.TableCell,null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("p",{className:"font-semibold"},e.name)))))})))))),i.a.createElement(b.ModalFooter,null,i.a.createElement(b.Button,{className:"w-full sm:w-auto",onClick:function(){return L(!1)}},"Okay!")))))}},201:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var l=t(5),n=t.n(l),r=t(12),c=t(3),o=t(0),u=t.n(o),s=t(9),m=t.n(s),i=t(2),d=t(196),p=(t(198),t(10));function f(e){var a=e.isModalOpen,t=e.setIsModalOpen,l=(e.customer,e.setCustomer),s=Object(o.useState)([]),f=Object(c.a)(s,2),E=f[0],v=f[1],b=Object(o.useState)(0),y=Object(c.a)(b,2),h=y[0],x=y[1],g=Object(o.useState)(""),N=Object(c.a)(g,2),O=N[0],w=N[1],S=Object(o.useState)(""),j=Object(c.a)(S,2),C=(j[0],j[1],function(e){w(e.target.value)}),k=function(){var e=Object(r.a)(n.a.mark((function e(a){var t,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:O,role:1},e.prev=2,e.next=5,m()({url:"".concat(p.API,"/customer/customers"),method:"POST",data:t});case 5:l=e.sent,console.log(l.data),v(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:O,role:1},e.prev=1,e.next=4,m()({url:"".concat(p.API,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),v(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var T=function(){var e=Object(r.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l({_id:a._id,customerName:a.name}),t(!1);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:a,onClose:function(){return t(!1)}},u.a.createElement(i.ModalHeader,null,"Select Customer"),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(d.d,{selectedIndex:h,onSelect:function(e){return x(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:k},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:C}))))),u.a.createElement(i.TableBody,null,E.map((function(e,a){return u.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return T(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1)}},"Select"))))}},205:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var l=t(9),n=t.n(l),r=t(10),c=t(18),o=function(e){return n.a.post("".concat(r.API,"/unit/").concat(c.a.getId(),"/create"),e).then((function(e){return console.log("h",e.data),e.data})).catch((function(e){if(console.log("ERRRROs"),e.response)throw console.log(e.response.data),console.log(e.response.status),e.response.data.errors}))}},206:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var l=t(5),n=t.n(l),r=t(12),c=t(3),o=t(0),u=t.n(o),s=t(9),m=t.n(s),i=t(2),d=t(196),p=(t(198),t(10));function f(e){var a=e.isModalOpen,t=e.setIsModalOpen,l=e.account,s=e.setAccount,f=e.customer,E=e.setCustomer,v=Object(o.useState)([]),b=Object(c.a)(v,2),y=b[0],h=b[1],x=Object(o.useState)([]),g=Object(c.a)(x,2),N=g[0],O=g[1],w=Object(o.useState)(0),S=Object(c.a)(w,2),j=S[0],C=S[1],k=Object(o.useState)(""),T=Object(c.a)(k,2),I=T[0],M=T[1],Y=function(e){M(e.target.value)},L=function(){var e=Object(r.a)(n.a.mark((function e(a){var t,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t={search:I,role:1},e.prev=2,e.next=5,m()({url:"".concat(p.API,"/customer/customers"),method:"POST",data:t});case 5:l=e.sent,console.log(l.data),h(l.data),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){!function(){var e=Object(r.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={search:I,role:1},e.prev=1,e.next=4,m()({url:"".concat(p.API,"/customer/customers"),method:"POST",data:a});case 4:t=e.sent,console.log(t.data),h(t.data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var P=function(){var e=Object(r.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({_id:a._id,customerName:a.name}),s({_id:"",accountName:""}),e.prev=2,e.next=5,m.a.post("".concat(p.API,"/customer/accounts"),{customerId:a._id});case 5:t=e.sent,console.log(t.data),O(t.data),C(1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("axiosErr",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a){return e.apply(this,arguments)}}(),F=function(){var e=Object(r.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),s({_id:a._id,accountName:a.name});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.Modal,{isOpen:a,onClose:function(){return t(!1)}},u.a.createElement(i.ModalHeader,null,"Select ",0==j?u.a.createElement(u.a.Fragment,null,"Customer"):u.a.createElement(u.a.Fragment,null,"Account")),u.a.createElement(i.ModalBody,{className:"overflow-y-scroll h-64"},u.a.createElement(d.d,{selectedIndex:j,onSelect:function(e){return C(e)}},u.a.createElement(d.b,null,u.a.createElement(d.a,null,"Customer"),u.a.createElement(d.a,null,"Account")),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Customer")),u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,u.a.createElement("form",{onSubmit:L},u.a.createElement("input",{className:"block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",placeholder:"Search Customers",onChange:Y}))))),u.a.createElement(i.TableBody,null,y.map((function(e,a){return u.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return P(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))),u.a.createElement(d.c,null,u.a.createElement(i.TableContainer,null,u.a.createElement(i.Table,null,u.a.createElement(i.TableHeader,null,u.a.createElement("tr",null,u.a.createElement(i.TableCell,null,"Account"))),u.a.createElement(i.TableBody,null,N.map((function(e,a){return u.a.createElement(i.TableRow,{key:a,className:"hover:bg-purple-200 cursor-pointer",onClick:function(){return F(e)}},u.a.createElement(i.TableCell,null,u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",{className:"font-semibold"},e.name)))))})))),u.a.createElement(i.TableFooter,null))))),u.a.createElement(i.ModalFooter,null,u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Customer: ",f.customerName),u.a.createElement(i.Badge,{className:"mx-2 text-md",type:"success"},"Account : ",l.accountName),u.a.createElement(i.Button,{className:"w-full sm:w-auto",onClick:function(){t(!1),O([])}},"Select"))))}}}]);
//# sourceMappingURL=39.0df22964.chunk.js.map