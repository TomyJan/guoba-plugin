var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,s=(e,t,o)=>new Promise(((l,a)=>{var n=e=>{try{s(o.next(e))}catch(t){a(t)}},i=e=>{try{s(o.throw(e))}catch(t){a(t)}},s=e=>e.done?l(e.value):Promise.resolve(e.value).then(n,i);s((o=o.apply(e,t)).next())}));import r from"./EditBodyModal.js";import{b as p,g3 as c,g4 as d,eW as m,U as u,r as h,w as g,e as b,o as f,f as v,v as y,k as j,j as B,O as C,m as x,F as $,h as w,i as k,s as L,V as O,l as D,W as I,aK as M,aL as S}from"./index.js";import{a as P}from"./index2.js";import{c as F}from"./common.js";import{HelpTable as N}from"./HelpComps.js";import U from"./UploadIconHelpModal.js";import{b as W,a as _}from"./miao.api.js";import{l as E}from"./lodash.default.js";import"./index5.js";import"./SelectIconModal.js";import"./IconUploader.js";import"./esm.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";import"./21ae6624.js";import"./base64Conver.js";import"./upperFirst.js";import"./throttle.js";import"./merge.js";import"./uniqBy.js";const z={class:"container"},A={class:"setting-box"},H=y("input",{type:"file",id:"upload-bg",style:{display:"none"},name:"icon",accept:"image/bmp,image/jpeg,image/png"},null,-1),R=y("input",{type:"file",id:"upload-icon",style:{display:"none"},name:"icon",accept:"image/png"},null,-1),T={class:"info-box"},V={class:"head-box type"},q={class:"title"},K={class:"label"},Y=["onClick"],G={class:"copyright"},J={class:"version"},Q={class:"version"},X=p({__name:"HelpPanel",props:{helpCfg:Object,helpList:Object,bgB64:String,mainB64:String,cacheVer:Number,themeName:String,themeNames:Array,iconB64List:Array,modelData:Object,themeStyle:Object,versions:Object},emits:["update:themeStyle","update:modelData","update:mainB64","update:iconB64List","open-setting"],setup(e,{emit:p}){const{VITE_PUBLIC_PATH:X}=c(),Z=e,ee=p,te=d(),oe=m(),{prefixCls:le}=u("miao-plugin-help-panel"),{createMessage:ae}=S(),[ne,ie]=P(),se=h(1),re=h(3),pe=h(850),ce=()=>{let e=function(){let{helpCfg:e}=Z;if(!e)return{style:"",colCount:3};let t=Math.min(5,Math.max(parseInt(null==e?void 0:e.colCount)||3,2)),o=Math.min(500,Math.max(100,parseInt(null==e?void 0:e.colWidth)||265)),l=Math.min(2500,Math.max(800,t*o+30)),a=[];a.push(`.${le} { width:${l}px; }`),a.push(`.${le} .help-table .td,.help-table .th{width:${100/t}%}`);let n=`${X}/api/plugin/miao/help/theme/$s?token=${oe.liteToken}&themeName=${Z.themeName}&_v=${Z.cacheVer}`,i=n.replace("$s","bg"),s=n.replace("$s","main");Z.mainB64&&(s=Z.mainB64);let r=`background: url(${s}) top left/100% auto no-repeat,url(${i})`;a.push(`.${le} .container { width:${l}px; ${r}; }`);let p=function(e,t,o,l,n){let i=function(...e){for(let t of e)if(!E.isUndefined(t))return t}(Z.themeStyle[o],l);n&&(i=n(i)),a.push(`.${le} ${e}{${t}:${i}}`)};return p(".help-title,.help-group","color","fontColor","#ceb78b"),p(".help-title,.help-group","text-shadow","fontShadow","none"),p(".help-desc","color","descColor","#eee"),p(".cont-box","background","contBgColor","rgba(43, 52, 61, 0.8)"),p(".cont-box","backdrop-filter","contBgBlur",3,(t=>!1===(null==e?void 0:e.bgBlur)?"none":`blur(${t}px)`)),p(".help-group","background","headerBgColor","rgba(34, 41, 51, .4)"),p(".help-table .tr:nth-child(odd)","background","rowBgColor1","rgba(34, 41, 51, .2)"),p(".help-table .tr:nth-child(even)","background","rowBgColor2","rgba(34, 41, 51, .4)"),{style:`${a.join("\n")}`,width:l,colCount:t}}();e.style&&F(e.style,le),pe.value=e.width||850,re.value=e.colCount},de=M(ce,300);g([()=>Z.helpCfg,()=>Z.themeName],de,{immediate:!0,deep:!0}),g((()=>Z.themeStyle),ce,{immediate:!0,deep:!0}),g(pe,(e=>{document.body.clientWidth>=e?se.value=1:se.value=parseFloat((document.body.clientWidth/e).toFixed(4))}),{immediate:!0}),h([{event:"changeBackground",text:"更换背景",icon:"akar-icons:image",onClick(){ue("upload-bg",(e=>{ee("update:mainB64",e)}))}},{event:"uploadIcon",text:"上传图标",icon:"fontisto:nav-icon-grid",onClick(){let e=()=>{ue("upload-icon",(e=>s(this,null,(function*(){let t=yield _(e);ee("update:iconB64List",t),ae.success("上传成功")}))))};!0===te.get("hide-upload-icon-help-modal",!1)?e():ie.openModal(!0,e)}}]),g((()=>Z.themeName),(e=>s(this,null,(function*(){ee("update:themeStyle",yield W(e))}))),{immediate:!0});const me={};function ue(e,t){let o=document.getElementById(e);me[e]||(me[e]=!0,o.addEventListener("change",(e=>{let l=e.target.files;if(0!==l.length){let e=l[0],a=new FileReader;a.readAsDataURL(e),a.onload=()=>{t(a.result),o.value=null}}}))),o.click()}const he=(e,t,o,l)=>{var a,n;let i=!0;(null==(a=Z.modelData)?void 0:a.show)&&e&&e===(null==(n=Z.modelData)?void 0:n.cell)&&(i=!1),ee("update:modelData",{show:i,cell:e,cellIndex:t,group:o,groupIndex:l})};function ge(){var e;ee("open-setting"),ee("update:modelData",(e=((e,t)=>{for(var o in t||(t={}))a.call(t,o)&&i(e,o,t[o]);if(l)for(var o of l(t))n.call(t,o)&&i(e,o,t[o]);return e})({},Z.modelData),t(e,o({show:!1}))))}return(t,o)=>{const l=b("Icon"),a=b("a-button");return f(),v("div",{class:I([L(le)]),style:C(`transform: scale(${se.value});transform-origin: center top;`)},[y("div",z,[y("div",A,[H,R,j(a,{style:C(`transform: scale(${1/se.value});transform-origin: right top;`),type:"primary",shape:"circle",size:"large",onClick:ge},{default:B((()=>[j(l,{icon:"ion:settings-outline"})])),_:1},8,["style"])]),y("div",T,[y("div",V,[y("div",q,x(e.helpCfg.title),1),y("div",K,x(e.helpCfg.subTitle),1)])]),(f(!0),v($,null,w(e.helpList,((t,o)=>{var l;return f(),v("div",{class:"cont-box",key:o},[y("div",{class:"help-group",onClick:e=>he(null,null,t,o)},[y("span",null,x(t.group),1)],8,Y),(null==(l=t.list)?void 0:l.length)?(f(),k(L(N),{key:0,list:t.list,colCount:re.value,iconB64List:e.iconB64List,modelData:e.modelData,onOpen:(e,l)=>he(e,l,t,o)},null,8,["list","colCount","iconB64List","modelData","onOpen"])):O("",!0)])})),128)),y("div",G,[D(" Created By Yunzai-Bot "),y("span",J,x(e.versions.yunzai),1),D(" & Miao-Plugin "),y("span",Q,x(e.versions.miao),1)])]),j(r,{panelCls:L(le),helpList:e.helpList,modelData:e.modelData,iconB64List:e.iconB64List,"onUpdate:modelData":o[0]||(o[0]=e=>ee("update:modelData",e))},null,8,["panelCls","helpList","modelData","iconB64List"]),j(U,{onRegister:L(ne)},null,8,["onRegister"])],6)}}});export{X as default};
