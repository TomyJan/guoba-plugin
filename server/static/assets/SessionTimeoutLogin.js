import{b as o,U as s,cX as e,eW as r,f2 as a,r as i,J as t,au as m,o as n,i as d,j as l,v as u,k as p,W as g,s as j,ax as f,a as c,g2 as v}from"./index.js";import F from"./Login.js";import"./GuobaLoginForm.js";import"./common.js";import"./ForgetPasswordForm.js";import"./LoginFormTitle.js";import"./index7.js";import"./useFormItem.js";import"./RegisterForm.js";import"./index6.js";import"./MobileForm.js";import"./QrCodeForm.js";import"./download.js";var I=c(o({__name:"SessionTimeoutLogin",setup(o){const{prefixCls:c}=s("st-login"),I=e(),x=r(),L=a(),_=i(0);return t((()=>{var o;_.value=null==(o=I.getUserInfo)?void 0:o.userId,console.log("Mounted",I.getUserInfo)})),m((()=>{(_.value&&_.value!==I.getUserInfo.userId||L.getProjectConfig.permissionMode===v.BACK&&0===x.getLastBuildMenuTime)&&document.location.reload()})),(o,s)=>(n(),d(f,null,{default:l((()=>[u("div",{class:g(j(c))},[p(F,{sessionTimeout:""})],2)])),_:1}))}}),[["__scopeId","data-v-6fac6116"]]);export{I as default};
