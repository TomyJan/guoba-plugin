var e=(e,t,r)=>new Promise(((o,s)=>{var i=e=>{try{a(r.next(e))}catch(t){s(t)}},m=e=>{try{a(r.throw(e))}catch(t){s(t)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,m);a((r=r.apply(e,t)).next())}));import{b as t,aM as r,r as o,e as s,o as i,f as m,k as a,s as n,j as l,l as u,V as d,w as p,aL as c}from"./index.js";import{B as h}from"./BasicForm.js";import{u as j}from"./miao.data.js";import{j as f}from"./miao.api.js";import{l as b}from"./lodash.default.js";import"./index4.js";import"./index5.js";import"./useFormItem.js";import"./index3.js";import"./DeleteOutlined.js";import"./transButton.js";import"./index2.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./upperFirst.js";import"./download.js";import"./index6.js";import"./index7.js";import"./uniqBy.js";import"./base64Conver.js";import"./throttle.js";import"./merge.js";const g={key:0,style:{"text-align":"center"}},y=t({__name:"ThemeConfigForm",props:{model:Object,themeName:String,themeNames:Array,debugThemeName:String},emits:["update:model","update:debugThemeName"],setup(t,{emit:y}){const T=t,v=y,{createMessage:x}=c(),w=e=>e.debugTheme&&e.currentTheme,[F,{setFieldsValue:N,updateSchema:C,validate:S}]=r({schemas:[{field:"debugTheme",label:"调试皮肤",component:"Switch",bottomHelpMessage:"对已有皮肤进行实时调试（需要手动保存）"},{field:"currentTheme",label:"选择皮肤",component:"Select",show:({model:e})=>e.debugTheme,bottomHelpMessage:"若要新增或删除皮肤，请点击右上角的“皮肤”按钮。"},...j({show:({model:e})=>w(e)})],labelWidth:120,labelAlign:"right",labelCol:{xs:24,sm:5},wrapperCol:{xs:24,sm:19},showActionButtonGroup:!1,baseColProps:{span:24}}),A=o(!1);function B(t,r){return e(this,null,(function*(){F(t),yield function(){return e(this,null,(function*(){p((()=>T.themeNames),(t=>e(this,null,(function*(){Array.isArray(t)||(t=[]);let e=(t=t.filter((e=>"default"!==e))).map((e=>({label:e,value:e})));0===e.length&&(yield N({currentTheme:null})),yield C([{field:"currentTheme",componentProps:{options:e}}])}))),{deep:!0,immediate:!0})}))}(),yield function(t){return e(this,null,(function*(){yield N(T.model),p((()=>T.model),(()=>N(T.model)),{deep:!0}),p(t,(e=>{v("update:model",e),A.value=w(e);let t=A.value&&e.currentTheme||"";v("update:debugThemeName",t)}),{immediate:!0}),p((()=>t.debugTheme),((e,r)=>{!0!==e||r||(t.currentTheme=T.themeName||"")}),{immediate:!0})}))}(r)}))}function M(){return e(this,null,(function*(){let e=yield S(),t=b.omit(e,["debugTheme","currentTheme"]);yield f(e.currentTheme,t),x.success("保存成功~")}))}return(e,t)=>{const r=s("a-button");return i(),m("div",null,[a(n(h),{onRegister:B}),A.value?(i(),m("div",g,[a(r,{type:"primary",preIcon:"ant-design:save",onClick:M},{default:l((()=>[u("保存皮肤配置")])),_:1})])):d("",!0)])}}});export{y as default};
