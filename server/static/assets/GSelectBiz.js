import{b as e,bt as a,aD as l,bM as t,p as n,B as s,ad as o,r as d,c as i,a as u,e as c,o as p,f as r,k as h,j as g,W as f,i as b,X as m,V as v,d0 as y,d1 as C,v as x}from"./index.js";const O=e({name:"GSelectBiz",components:{AButton:a,LoadingOutlined:l,SearchOutlined:t},inheritAttrs:!1,props:{showButton:n.bool.def(!1),disabled:n.bool.def(!1),placeholder:{type:String,default:"请选择"},multiple:{type:String,default:"multiple"},loading:n.bool.def(!1),maxTagCount:n.number},emits:["handleOpen","change"],setup(e,{emit:a}){const l=s(),t=o("selectOptions",d([])),n=o("selectValues",i({value:[],change:!1}));return{attrs:l,selectValues:n,options:t,handleChange:function(e){n.value=e,a("change",e)},openModal:function(){a("handleOpen")}}}}),_=(e=>(y("data-v-9cbc213e"),e=e(),C(),e))((()=>x("span",null,"选择",-1)));var k=u(O,[["render",function(e,a,l,t,n,s){const o=c("LoadingOutlined"),d=c("a-input"),i=c("a-select"),u=c("a-col"),y=c("SearchOutlined"),C=c("a-button"),x=c("a-row");return p(),r("div",null,[h(x,{class:"g-select-row",type:"flex",gutter:8},{default:g((()=>[h(u,{class:f(["left",{full:!e.showButton}])},{default:g((()=>[e.loading?(p(),b(d,{key:0,readOnly:"",placeholder:"加载中…"},{prefix:g((()=>[h(o)])),_:1})):(p(),b(i,m({key:1,ref:"select",value:e.selectValues.value,"onUpdate:value":a[0]||(a[0]=a=>e.selectValues.value=a),placeholder:e.placeholder,mode:e.multiple,open:!1,disabled:e.disabled,options:e.options,maxTagCount:e.maxTagCount,onChange:e.handleChange,style:{width:"100%"},onClick:a[1]||(a[1]=a=>!e.disabled&&e.openModal(!1))},e.attrs),null,16,["value","placeholder","mode","disabled","options","maxTagCount","onChange"]))])),_:1},8,["class"]),e.showButton?(p(),b(u,{key:0,class:"right"},{default:g((()=>[h(C,{type:"primary",loading:e.loading,disabled:e.disabled,onClick:a[2]||(a[2]=a=>e.openModal(!0))},{icon:g((()=>[h(y)])),default:g((()=>[_])),_:1},8,["loading","disabled"])])),_:1})):v("",!0)])),_:1})])}],["__scopeId","data-v-9cbc213e"]]);export{k as G};
