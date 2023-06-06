"use strict";(self["webpackChunksw_web"]=self["webpackChunksw_web"]||[]).push([[443],{1994:function(t,e,a){a.r(e),a.d(e,{default:function(){return z}});var s=a(3396);function n(t,e,a,n,o,r){const i=(0,s.up)("TheCalculator");return(0,s.wg)(),(0,s.j4)(i)}var o=a(7139);const r=t=>((0,s.dD)("data-v-244718c1"),t=t(),(0,s.Cn)(),t),i={class:"container-fluid"},l=r((()=>(0,s._)("hr",null,null,-1))),u={class:"row"},c={class:"row teaxtbox"},d={key:0},p={class:"row commonbutton"},m=["value"],h=["value"],g={class:"col-md-3"},A={class:"col-md-3"};function v(t,e,a,n,r,v){return(0,s.wg)(),(0,s.iD)("div",i,[l,(0,s._)("div",u,[(0,s._)("div",null,[(0,s._)("div",c,[(0,s._)("div",null,(0,o.zw)(n.state.firstNumber)+" "+(0,o.zw)(n.state.operation||"")+" "+(0,o.zw)(n.state.secondNumber||""),1),void 0!==n.state.result?((0,s.wg)(),(0,s.iD)("div",d," Result: "+(0,o.zw)(n.state.result),1)):(0,s.kq)("",!0)]),(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.operations,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-2",key:t},[((0,s.wg)(),(0,s.iD)("input",{type:"submit",value:t,key:t,onClick:e[0]||(e[0]=t=>n.setOperation(t.target.value))},null,8,m))])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.numbers,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-3",key:t},[((0,s.wg)(),(0,s.iD)("input",{type:"submit",key:t,value:t,onClick:e[1]||(e[1]=t=>n.setValue(t.target.value))},null,8,h))])))),128)),(0,s._)("div",g,[(0,s._)("input",{type:"submit",value:"clear",id:"del",onClick:e[2]||(e[2]=(...t)=>n.clearData&&n.clearData(...t))})]),(0,s._)("div",A,[(0,s._)("input",{type:"submit",value:"=",id:"equal",onClick:e[3]||(e[3]=(...t)=>n.performOperation&&n.performOperation(...t))})])])])])])}var w=a(4870),b=a(4239),f={name:"TheCalculator",setup(){const t=(0,w.qj)({firstNumber:void 0,secondNumber:void 0,operation:void 0,result:void 0}),e=[0,1,2,3,4,5,6,7,8,9],a=["squareRoot","sum","subtract","divide","multiply","randomString"];function s(e){this.state.result=void 0;const a=void 0===this.state.operation;a?t.firstNumber?this.state.firstNumber=Number(t.firstNumber+e):this.state.firstNumber=e:t.secondNumber?this.state.secondNumber=t.secondNumber+e:this.state.secondNumber=e}async function n(t){this.state.operation=t}function o(){t.firstNumber=void 0,t.secondNumber=void 0,t.operation=void 0}async function r(){console.log("perform");try{console.log("fetching");const e=await fetch("https://azx2495nd9.execute-api.us-east-1.amazonaws.com/operations",{method:"POST",headers:{Authorization:`Bearer ${b.Z.state.token}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({operation:t.operation,params:{a:t.firstNumber,b:t.secondNumber}})}),a=JSON.parse(JSON.stringify(await e.json()));200===e.status?this.state.result=a.result:this.state.result=a.message}catch(e){console.log(e,"el mes"),this.state.result=e.message}o()}return{state:t,clearData:o,numbers:e,operations:a,setValue:s,setOperation:n,performOperation:r}}},_=a(89);const k=(0,_.Z)(f,[["render",v],["__scopeId","data-v-244718c1"]]);var y=k,C={components:{TheCalculator:y}};const N=(0,_.Z)(C,[["render",n]]);var z=N},4789:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var s=a(3396),n=a(9242),o=a(7139),r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD6SURBVDiNzdOhTkNBEIXhbyqKAVFUQdbV8hQIXBHFYUpIAMGToFCkBlMEeMJDIMEhwVFRBBgGQaHLTdNLguEkI/Y/k5PZzazMVBaG6FdYE3vYR+eHV2kcIDFBt+DtKU/szg3ABl6Lxjss1wU0ICJauMSSmbo4U6NGRATO0cBN4V1gKyIOFwaghVN0MCq8Y6zjaWFAZj5n5nVmvlfNzJxk5lXdBH/SPw+IiF5ErMzhjYjYjIjVugnW8IiTgu3gAQcYV1d512zj2lM2KthXPaD1vYk1GuC+OL9hOzPH/OIRM/MFPbxM0VFm3pYN5RU6Pr/sHpoVr49h9ft/AOSRuyu8LG2fAAAAAElFTkSuQmCC";const i={class:"container"},l=(0,s._)("hr",null,null,-1),u={class:"table table-striped"},c=(0,s._)("img",{src:r},null,-1),d=[c],p=(0,s._)("img",{src:r},null,-1),m=[p],h=(0,s._)("img",{src:r},null,-1),g=[h],A=(0,s._)("img",{src:r},null,-1),v=[A],w=(0,s._)("th",null,null,-1),b=["onClick"],f={class:"form-horizontal"},_={class:"form-group"},k={class:"form-group"},y=(0,s._)("span",null,"Items per page",-1),C=(0,s._)("option",null,"2",-1),N=(0,s._)("option",null,"5",-1),z=(0,s._)("option",null,"10",-1),D=[C,N,z];function B(t,e,a,r,c,p){const h=(0,s.up)("paginate");return(0,s.wg)(),(0,s.iD)("div",i,[l,(0,s._)("table",u,[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,[(0,s._)("a",{href:"#",onClick:e[0]||(e[0]=t=>p.sortList("type"))},d),(0,s.Uk)(" Operation "),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>c.operationFilter=t)},null,512),[[n.nr,c.operationFilter]])]),(0,s._)("th",null,[(0,s._)("a",{href:"#",onClick:e[2]||(e[2]=t=>p.sortList("amount"))},m),(0,s.Uk)(" Cost ")]),(0,s._)("th",null,[(0,s._)("a",{href:"#",onClick:e[3]||(e[3]=t=>p.sortList("operation_response"))},g),(0,s.Uk)(" Operation Response ")]),(0,s._)("th",null,[(0,s._)("a",{href:"#",onClick:e[4]||(e[4]=t=>p.sortList("date"))},v),(0,s.Uk)(" Operation Date ")]),w])]),(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.records,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,o.zw)(t.type),1),(0,s._)("td",null,(0,o.zw)(t.amount),1),(0,s._)("td",null,(0,o.zw)(t.operation_response),1),(0,s._)("td",null,(0,o.zw)(t.date),1),(0,s._)("td",null,[(0,s._)("button",{type:"button",onClick:e=>p.remove(t.id),class:"btn btn-danger btn-sm"},"Remove",8,b)])])))),128))])]),(0,s._)("div",f,[(0,s._)("div",_,[(0,s.Wm)(h,{modelValue:p.page,"onUpdate:modelValue":e[5]||(e[5]=t=>p.page=t),"page-count":p.count,"page-range":c.range,"margin-pages":c.margin,"click-handler":p.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},null,8,["modelValue","page-count","page-range","margin-pages","click-handler"])]),(0,s._)("div",k,[y,(0,s.wy)((0,s._)("select",{class:"form-select","onUpdate:modelValue":e[6]||(e[6]=t=>c.items=t),onChange:e[7]||(e[7]=(...t)=>p.loadData&&p.loadData(...t))},D,544),[[n.bM,c.items]])])])])}var V=a(4239),O=a(4501),j={data(){return{operationFilter:void 0,response:{data:[],pagination:{}},range:3,margin:1,items:2,currentPage:1,sortedByAsc:!0}},components:{paginate:O.Z},methods:{async remove(t){await fetch(`https://azx2495nd9.execute-api.us-east-1.amazonaws.com/records?recordId=${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${V.Z.state.token}`,Accept:"application/json","Content-Type":"application/json"}}),await this.loadData()},sortList(t){this.sortedByAsc?(this.response.data.sort(((e,a)=>e[t]>a[t]?-1:1)),this.sortedByAsc=!1):(this.response.data.sort(((e,a)=>e[t]<a[t]?-1:1)),this.sortedByAsc=!0)},async clickCallback(t){this.currentPage=t,await this.loadData()},async loadData(){try{const t=await fetch(`https://azx2495nd9.execute-api.us-east-1.amazonaws.com/records?page=${this.currentPage}&items=${this.items}`,{method:"GET",headers:{Authorization:`Bearer ${V.Z.state.token}`,Accept:"application/json","Content-Type":"application/json"}}),e=JSON.parse(JSON.stringify(await t.json()));this.response=e["records"]}catch(t){console.log(t)}}},computed:{records(){return this.operationFilter?this.response.data.filter((t=>t.type.toLowerCase().includes(this.operationFilter.toLowerCase()))):this.response.data||[]},count(){return this.response.pagination.total||0},page(){return this.response.pagination.currentPage||1}},async mounted(){await this.loadData()}},U=a(89);const F=(0,U.Z)(j,[["render",B]]);var I=F}}]);
//# sourceMappingURL=about.fcdfb5d6.js.map