"use strict";(self["webpackChunksw_web"]=self["webpackChunksw_web"]||[]).push([[443],{7339:function(t,e,a){a.r(e),a.d(e,{default:function(){return N}});var s=a(3396);function o(t,e,a,o,n,r){const i=(0,s.up)("TheCalculator");return(0,s.wg)(),(0,s.j4)(i)}var n=a(7139);const r={class:"container-fluid"},i={class:"row"},l={class:"row teaxtbox"},u={key:0},c={class:"row commonbutton"},p=["value"],d=["value"],m={class:"col-md-3"},h={class:"col-md-3"};function g(t,e,a,o,g,A){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",i,[(0,s._)("div",null,[(0,s._)("div",l,[(0,s._)("div",null,(0,n.zw)(o.state.firstNumber)+" "+(0,n.zw)(o.state.operation||"")+" "+(0,n.zw)(o.state.secondNumber||""),1),void 0!==o.state.result?((0,s.wg)(),(0,s.iD)("div",u," Result: "+(0,n.zw)(o.state.result),1)):(0,s.kq)("",!0)]),(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.operations,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-2",key:t},[((0,s.wg)(),(0,s.iD)("input",{type:"submit",value:t,key:t,onClick:e[0]||(e[0]=t=>o.setOperation(t.target.value))},null,8,p))])))),128)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.numbers,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-3",key:t},[((0,s.wg)(),(0,s.iD)("input",{type:"submit",key:t,value:t,onClick:e[1]||(e[1]=t=>o.setValue(t.target.value))},null,8,d))])))),128)),(0,s._)("div",m,[(0,s._)("input",{type:"submit",value:"clear",id:"del",onClick:e[2]||(e[2]=(...t)=>o.clearData&&o.clearData(...t))})]),(0,s._)("div",h,[(0,s._)("input",{type:"submit",value:"=",id:"equal",onClick:e[3]||(e[3]=(...t)=>o.performOperation&&o.performOperation(...t))})])])])])])}var A=a(4870),v=a(4239),f={name:"TheCalculator",setup(){const t=(0,A.qj)({firstNumber:void 0,secondNumber:void 0,operation:void 0,result:void 0}),e=[0,1,2,3,4,5,6,7,8,9],a=["squareRoot","sum","subtract","divide","multiply","randomString"];function s(e){this.state.result=void 0;const a=void 0===this.state.operation;a?t.firstNumber?this.state.firstNumber=Number(t.firstNumber+e):this.state.firstNumber=e:t.secondNumber?this.state.secondNumber=t.secondNumber+e:this.state.secondNumber=e}async function o(t){this.state.operation=t}function n(){t.firstNumber=void 0,t.secondNumber=void 0,t.operation=void 0}async function r(){console.log("perform");try{console.log("fetching");const e=await fetch("http://localhost:3000/operations",{method:"POST",headers:{Authorization:`Bearer ${v.Z.state.token}`,Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({operation:t.operation,params:{a:t.firstNumber,b:t.secondNumber}})}),a=JSON.parse(JSON.stringify(await e.json()));200===e.status?this.state.result=a.result:this.state.result=a.message}catch(e){console.log(e,"el mes"),this.state.result=e.message}n()}return{state:t,clearData:n,numbers:e,operations:a,setValue:s,setOperation:o,performOperation:r}}},w=a(89);const b=(0,w.Z)(f,[["render",g],["__scopeId","data-v-7f25c560"]]);var _=b,k={components:{TheCalculator:_}};const y=(0,w.Z)(k,[["render",o]]);var N=y},1717:function(t,e,a){a.r(e),a.d(e,{default:function(){return U}});var s=a(3396),o=a(9242),n=a(7139),r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD6SURBVDiNzdOhTkNBEIXhbyqKAVFUQdbV8hQIXBHFYUpIAMGToFCkBlMEeMJDIMEhwVFRBBgGQaHLTdNLguEkI/Y/k5PZzazMVBaG6FdYE3vYR+eHV2kcIDFBt+DtKU/szg3ABl6Lxjss1wU0ICJauMSSmbo4U6NGRATO0cBN4V1gKyIOFwaghVN0MCq8Y6zjaWFAZj5n5nVmvlfNzJxk5lXdBH/SPw+IiF5ErMzhjYjYjIjVugnW8IiTgu3gAQcYV1d512zj2lM2KthXPaD1vYk1GuC+OL9hOzPH/OIRM/MFPbxM0VFm3pYN5RU6Pr/sHpoVr49h9ft/AOSRuyu8LG2fAAAAAElFTkSuQmCC";const i={class:"container"},l={class:"table table-striped"},u=(0,s._)("img",{src:r},null,-1),c=[u],p=(0,s._)("img",{src:r},null,-1),d=[p],m=(0,s._)("img",{src:r},null,-1),h=[m],g=(0,s._)("img",{src:r},null,-1),A=[g],v={class:"form-horizontal"},f={class:"form-group"},w={class:"form-group"},b=(0,s._)("span",null,"Items per page",-1),_=(0,s._)("option",null,"2",-1),k=(0,s._)("option",null,"5",-1),y=(0,s._)("option",null,"10",-1),N=[_,k,y];function C(t,e,a,r,u,p){const m=(0,s.up)("paginate");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("table",l,[(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,[(0,s._)("a",{href:"#",onClick:e[0]||(e[0]=t=>p.sortList("type"))},c),(0,s.Uk)(" Operation "),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>u.operationFilter=t)},null,512),[[o.nr,u.operationFilter]])]),(0,s._)("th",null,[(0,s._)("a",{href:"#",onClick:e[2]||(e[2]=t=>p.sortList("amount"))},d),(0,s.Uk)(" Cost ")]),(0,s._)("th",null,[(0,s._)("a",{href:"#",onClick:e[3]||(e[3]=t=>p.sortList("operation_response"))},h),(0,s.Uk)(" Operation Response ")]),(0,s._)("th",null,[(0,s._)("a",{href:"#",onClick:e[4]||(e[4]=t=>p.sortList("date"))},A),(0,s.Uk)(" Operation Date ")])])]),(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.records,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,n.zw)(t.type),1),(0,s._)("td",null,(0,n.zw)(t.amount),1),(0,s._)("td",null,(0,n.zw)(t.operation_response),1),(0,s._)("td",null,(0,n.zw)(t.date),1)])))),128))])]),(0,s._)("div",v,[(0,s._)("div",f,[(0,s.Wm)(m,{modelValue:p.page,"onUpdate:modelValue":e[5]||(e[5]=t=>p.page=t),"page-count":p.count,"page-range":u.range,"margin-pages":u.margin,"click-handler":p.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},null,8,["modelValue","page-count","page-range","margin-pages","click-handler"])]),(0,s._)("div",w,[b,(0,s.wy)((0,s._)("select",{class:"form-select","onUpdate:modelValue":e[6]||(e[6]=t=>u.items=t),onChange:e[7]||(e[7]=(...t)=>p.loadData&&p.loadData(...t))},N,544),[[o.bM,u.items]])])])])}var D=a(4239),B=a(4501),V={data(){return{operationFilter:void 0,response:{data:[],pagination:{}},range:3,margin:1,items:2,currentPage:1,sortedByAsc:!0}},components:{paginate:B.Z},methods:{sortList(t){this.sortedByAsc?(this.response.data.sort(((e,a)=>e[t]>a[t]?-1:1)),this.sortedByAsc=!1):(this.response.data.sort(((e,a)=>e[t]<a[t]?-1:1)),this.sortedByAsc=!0)},async clickCallback(t){this.currentPage=t,await this.loadData()},async loadData(){try{const t=await fetch(`http://localhost:3000/records?page=${this.currentPage}&items=${this.items}`,{method:"GET",headers:{Authorization:`Bearer ${D.Z.state.token}`,Accept:"application/json","Content-Type":"application/json"}}),e=JSON.parse(JSON.stringify(await t.json()));this.response=e["records"]}catch(t){console.log(t)}}},computed:{records(){return this.operationFilter?this.response.data.filter((t=>t.type.toLowerCase().includes(this.operationFilter.toLowerCase()))):this.response.data||[]},count(){return this.response.pagination.total||0},page(){return this.response.pagination.currentPage||1}},async mounted(){await this.loadData()}},z=a(89);const O=(0,z.Z)(V,[["render",C]]);var U=O}}]);
//# sourceMappingURL=about.dd3267f6.js.map