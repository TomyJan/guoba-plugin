import{a as e,b as t,bQ as n,v as s,e as i,o,f as a,z as r,m as d,k as l,bG as p,bT as m,bD as c}from"./index.js";import{S as u}from"./index6.js";import{b as h}from"./index34.js";import"./index9.js";import"./createAsyncComponent.js";import"./FullscreenOutlined.js";import"./index10.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./uniqBy.js";import"./_baseIteratee.js";import"./get.js";import"./RedoOutlined.js";import"./lock.js";import"./ArrowLeftOutlined.js";var f=e(t({name:"SwitchItem",components:{Switch:u},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=n("setting-switch-item"),{t:i}=c();return{prefixCls:t,t:i,handleChange:function(t){e.event&&h(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}}),[["render",function(e,t,n,s,c,u){const h=i("Switch");return o(),a("div",{class:m(e.prefixCls)},[r("span",null,d(e.title),1),l(h,p(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}],["__scopeId","data-v-fd7354e2"]]);export{f as default};
