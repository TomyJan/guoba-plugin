import{a as e,b as l,g3 as a,g4 as t,eW as i,r as s,I as n,e as o,o as c,f as r,v as d,k as p,j as u,O as m,s as v,c8 as g,m as h,F as f,h as b,W as y,ax as k,V as j,l as B,M as L,cN as C,cO as x,aL as I}from"./index.js";import $ from"./EditBodyModal2.js";import{a as _}from"./miao.api.js";import{a as M}from"./index2.js";import w from"./UploadIconHelpModal2.js";import"./index5.js";import"./SelectIconModal2.js";import"./IconUploader2.js";import"./esm.js";import"./base64Conver.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./21ae6624.js";const D=e=>(C("data-v-67c5eafa"),e=e(),x(),e),O={class:"change-background"},U=D((()=>d("input",{type:"file",id:"upload-bg",style:{display:"none"},name:"icon",accept:"image/bmp,image/jpeg,image/png"},null,-1))),P=D((()=>d("input",{type:"file",id:"upload-icon",style:{display:"none"},name:"icon",accept:"image/png"},null,-1))),T={class:"title"},W={class:"label"},z=["onClick"],E={key:0,class:"help-table"},F=["onClick"],R={class:"help-title"},S={class:"help-desc"},V={class:"copyright"},A={class:"version"},H={class:"version"},N={class:"p-4"},Y={class:"row"},q=D((()=>d("div",null,"主标题",-1))),G={class:"flex-1"},J={class:"row"},K=D((()=>d("div",null,"副标题",-1))),Q={class:"flex-1"};var X=e(l({__name:"HelpPanel",props:{helpCfg:Object,helpList:Object,bgB64:String,mainB64:String,cacheVer:Number,iconB64List:Array,modelData:Object,versions:Object},emits:["update:modelData","update:mainB64","update:iconB64List"],setup(e,{emit:l}){const{VITE_PUBLIC_PATH:C}=a(),x=t(),D=i(),[X,Z]=M(),ee=e,le=l,{createMessage:ae}=I(),te=s(!1),ie=s([{event:"changeBackground",text:"更换背景",icon:"akar-icons:image",onClick(){oe("upload-bg",(e=>{le("update:mainB64",e)}))}},{event:"uploadIcon",text:"上传图标",icon:"fontisto:nav-icon-grid",onClick(){let e=()=>{oe("upload-icon",(e=>{return l=this,a=null,t=function*(){let l=yield _(e);le("update:iconB64List",l),ae.success("上传成功")},new Promise(((e,i)=>{var s=e=>{try{o(t.next(e))}catch(l){i(l)}},n=e=>{try{o(t.throw(e))}catch(l){i(l)}},o=l=>l.done?e(l.value):Promise.resolve(l.value).then(s,n);o((t=t.apply(l,a)).next())}));var l,a,t}))};!0===x.get("hide-upload-icon-help-modal",!1)?e():Z.openModal(!0,e)}}]),se={},ne=n((()=>{let e={},l=`${C}/api/plugin/miao/help/theme/$s?token=${D.liteToken}&_v=${ee.cacheVer}`,a=l.replace("$s","bg"),t=l.replace("$s","main");return ee.mainB64&&(t=ee.mainB64),e.background=`url(${t}) top left/100% auto no-repeat,url(${a})`,e}));function oe(e,l){let a=document.getElementById(e);se[e]||(se[e]=!0,a.addEventListener("change",(e=>{let t=e.target.files;if(0!==t.length){let e=t[0],i=new FileReader;i.readAsDataURL(e),i.onload=()=>{l(i.result),a.value=null}}}))),a.click()}const ce=()=>{te.value=!0},re=(e,l,a,t)=>{le("update:modelData",{show:!0,cell:e,cellIndex:l,group:a,groupIndex:t})},de=e=>{let l=[];for(let a=0;a<e.length;a+=3)l.push(e.slice(a,a+3));return l},pe=n((()=>document.body.clientWidth>850?1:document.body.clientWidth/850));return(l,a)=>{const t=o("Icon"),i=o("a-button"),s=o("a-input");return c(),r("div",{style:m(`transform: scale(${pe.value});transform-origin: center top;`)},[d("div",{class:"wrap",style:m(ne.value)},[d("div",O,[U,P,p(v(g),{trigger:["click"],dropMenuList:ie.value},{default:u((()=>[p(i,{style:m(`transform: scale(${1/pe.value});transform-origin: right top;`),type:"primary",shape:"circle",size:"large"},{default:u((()=>[p(t,{icon:"akar-icons:image"})])),_:1},8,["style"])])),_:1},8,["dropMenuList"])]),d("div",{class:"head-box",onClick:ce},[d("div",T,h(e.helpCfg.title),1),d("div",W,h(e.helpCfg.subTitle),1)]),(c(!0),r(f,null,b(e.helpList,((l,a)=>(c(),r("div",{class:"cont-box",key:a},[d("div",{class:"help-group",onClick:e=>re(null,null,l,a)},h(l.group),9,z),l.list&&l.list.length>0?(c(),r("div",E,[(c(!0),r(f,null,b(de(l.list),((t,i)=>(c(),r("div",{class:"tr",key:i},[(c(!0),r(f,null,b(t,((t,s)=>(c(),r("div",{class:y(["td",t===e.modelData.cell?"active":"inactive"]),key:s,onClick:e=>re(t,3*i+s,l,a)},[p(k,{name:"fade-transition"},{default:u((()=>[d("div",null,[d("div",{class:"help-icon",style:m(`background: url(${e.iconB64List[t.icon]}) 0 0 no-repeat`)},null,4),d("div",R,h(t.title),1),d("div",S,h(t.desc),1)])])),_:2},1024)],10,F)))),128))])))),128))])):j("",!0)])))),128)),d("div",V,[B(" Created By Yunzai-Bot "),d("span",A,h(e.versions.yunzai),1),B(" & Miao-Plugin "),d("span",H,h(e.versions.miao),1)])],4),p(v(L),{visible:te.value,"onUpdate:visible":a[2]||(a[2]=e=>te.value=e),title:"编辑标题",closable:!1,footer:null},{default:u((()=>[d("div",N,[d("div",Y,[q,d("div",G,[p(s,{value:e.helpCfg.title,"onUpdate:value":a[0]||(a[0]=l=>e.helpCfg.title=l),placeholder:"主标题"},null,8,["value"])])]),d("div",J,[K,d("div",Q,[p(s,{value:e.helpCfg.subTitle,"onUpdate:value":a[1]||(a[1]=l=>e.helpCfg.subTitle=l),placeholder:"附标题"},null,8,["value"])])])])])),_:1},8,["visible"]),p($,{helpList:e.helpList,modelData:e.modelData,iconB64List:e.iconB64List},null,8,["helpList","modelData","iconB64List"]),p(w,{onRegister:v(X)},null,8,["onRegister"])],4)}}}),[["__scopeId","data-v-67c5eafa"]]);export{X as default};
