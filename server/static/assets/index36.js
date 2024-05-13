import{a as e,b as o,bT as t,bR as s,c_ as r,c$ as a,p as n,U as i,d9 as l,I as c,e as d,o as p,f as u,k as m,j as f,i as g,V as k,v as h,W as x,m as j,F as _,y,cZ as w,g3 as v,aL as C}from"./index.js";import{D as I}from"./siteSetting.js";import{u as D}from"./index10.js";import{a as L}from"./index2.js";import{h as b}from"./header.js";import{a as M}from"./common.js";import"./PluginIcon.js";import"./FullscreenOutlined.js";import"./index12.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./uniqBy.js";import"./_baseIteratee.js";import"./get.js";import"./index11.js";import"./RedoOutlined.js";import"./lock.js";var U=e(o({name:"UserDropdown",components:{Dropdown:t,Menu:s,MenuItem:r((()=>a((()=>import("./DropMenuItem.js")),["assets/DropMenuItem.js","assets/index.js","assets/index22.css"]))),MenuDivider:s.Divider,LockAction:r((()=>a((()=>import("./LockModal.js")),["assets/LockModal.js","assets/LockModal.css","assets/index.js","assets/index22.css","assets/index2.js","assets/index15.css","assets/useWindowSizeFn.js","assets/FullscreenOutlined.js","assets/BasicForm.js","assets/BasicForm.css","assets/index4.js","assets/index25.css","assets/find.js","assets/_baseIteratee.js","assets/get.js","assets/index5.js","assets/index20.css","assets/index6.js","assets/index2.css","assets/useFormItem.js","assets/index3.js","assets/index10.css","assets/transButton.js","assets/upperFirst.js","assets/download.js","assets/index7.js","assets/index8.css","assets/index8.js","assets/index4.css","assets/uniqBy.js","assets/lock.js","assets/header.js"])))},props:{theme:n.oneOf(["dark","light"])},setup(){const{prefixCls:e}=i("header-user-dropdown"),{t:o}=y(),{getShowDoc:t,getUseLockPage:s}=D(),r=l(),a=c((()=>{const{realName:e="",avatar:o,desc:t,userId:s}=r.getUserInfo||{};return{realName:e,avatar:o||b,desc:t,userId:s}})),[n,{openModal:d}]=L();const{createConfirm:p}=C();function u(){p({title:"重启",iconType:"warning",content:"确定要立即重启Bot吗？",onOk(){return e=this,o=null,t=function*(){yield v.doRestart(),yield M(5e3),window.location.reload()},new Promise(((s,r)=>{var a=e=>{try{i(t.next(e))}catch(o){r(o)}},n=e=>{try{i(t.throw(e))}catch(o){r(o)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(a,n);i((t=t.apply(e,o)).next())}));var e,o,t}})}return{prefixCls:e,t:o,getUserInfo:a,handleMenuClick:function(e){switch(e.key){case"logout":r.confirmLoginOut();break;case"doc":w(I);break;case"lock":d(!0);break;case"restart-bot":u()}},getShowDoc:t,register:n,getUseLockPage:s}}}),[["render",function(e,o,t,s,r,a){const n=d("GAvatar"),i=d("MenuDivider"),l=d("MenuItem"),c=d("Menu"),y=d("Dropdown"),w=d("LockAction");return p(),u(_,null,[m(y,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:f((()=>[m(c,{onClick:e.handleMenuClick},{default:f((()=>[e.getShowDoc?(p(),g(i,{key:0})):k("",!0),e.getUseLockPage?(p(),g(l,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):k("",!0),m(l,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"]),m(i),m(l,{key:"restart-bot",text:"重启Bot",icon:"solar:restart-bold"})])),_:1},8,["onClick"])])),default:f((()=>[h("span",{class:x([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[m(n,{class:x(`${e.prefixCls}__header`),id:e.getUserInfo.userId,qs:100,size:24},null,8,["class","id"]),h("span",{class:x(`${e.prefixCls}__info hidden md:block`)},[h("span",{class:x([`${e.prefixCls}__name  `,"truncate"])},j(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),m(w,{onRegister:e.register},null,8,["onRegister"])],64)}]]);export{U as default};
