import{b as a,ah as e,ai as l,aj as t,p as n,z as s,ak as o,r as d,c as i,a as u,e as c,o as p,f as r,k as h,j as g,U as f,i as m,V as b,R as v,al as y,am as C,an as x}from"./index.js";const O=a({name:"GSelectBiz",components:{AButton:e,LoadingOutlined:l,SearchOutlined:t},inheritAttrs:!1,props:{showButton:n.bool.def(!1),disabled:n.bool.def(!1),placeholder:{type:String,default:"请选择"},multiple:{type:String,default:"multiple"},loading:n.bool.def(!1),maxTagCount:n.number},emits:["handleOpen","change"],setup(a,{emit:e}){const l=s(),t=o("selectOptions",d([])),n=o("selectValues",i({value:[],change:!1}));return{attrs:l,selectValues:n,options:t,handleChange:function(a){n.value=a,e("change",a)},openModal:function(){e("handleOpen")}}}}),k=(a=>(y("data-v-5644c45a"),a=a(),C(),a))((()=>x("span",null,"选择",-1)));var _=u(O,[["render",function(a,e,l,t,n,s){const o=c("LoadingOutlined"),d=c("a-input"),i=c("a-select"),u=c("a-col"),y=c("SearchOutlined"),C=c("a-button"),x=c("a-row");return p(),r("div",null,[h(x,{class:"g-select-row",type:"flex",gutter:8},{default:g((()=>[h(u,{class:f(["left",{full:!a.showButton}])},{default:g((()=>[a.loading?(p(),m(d,{key:0,readOnly:"",placeholder:"加载中…"},{prefix:g((()=>[h(o)])),_:1})):(p(),m(i,b({key:1,ref:"select",value:a.selectValues.value,"onUpdate:value":e[0]||(e[0]=e=>a.selectValues.value=e),placeholder:a.placeholder,mode:a.multiple,open:!1,disabled:a.disabled,options:a.options,maxTagCount:a.maxTagCount,onChange:a.handleChange,style:{width:"100%"},onClick:e[1]||(e[1]=e=>!a.disabled&&a.openModal(!1))},a.attrs),null,16,["value","placeholder","mode","disabled","options","maxTagCount","onChange"]))])),_:1},8,["class"]),a.showButton?(p(),m(u,{key:0,class:"right"},{default:g((()=>[h(C,{type:"primary",loading:a.loading,disabled:a.disabled,onClick:e[2]||(e[2]=e=>a.openModal(!0))},{icon:g((()=>[h(y)])),default:g((()=>[k])),_:1},8,["loading","disabled"])])),_:1})):v("",!0)])),_:1})])}],["__scopeId","data-v-5644c45a"]]);export{_ as G};
