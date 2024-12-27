var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,l=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))a.call(t,n)&&o(e,n,t[n]);return e},s=(e,t,n)=>new Promise(((i,r)=>{var a=e=>{try{l(n.next(e))}catch(t){r(t)}},o=e=>{try{l(n.throw(e))}catch(t){r(t)}},l=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,o);l((n=n.apply(e,t)).next())}));import{a as u,B as m}from"./index31.js";import{b as p,g4 as c,B as d,U as f,eX as y,r as g,I as j,s as v,e as h,o as w,i as x,j as b,k,v as O,l as _,c8 as P,V as C,m as L,a4 as I,a5 as T,aL as $,u as B}from"./index.js";import"./PathSelect.js";import{c as N,d as S,p as D,e as F}from"./miao.api.js";import M from"./ThemeConfigModal.js";import{a as E}from"./index2.js";import"./index10.js";import"./ArrowLeftOutlined.js";import"./index3.js";import"./base64Conver.js";import"./BasicForm.js";import"./index4.js";import"./index5.js";import"./useFormItem.js";import"./DeleteOutlined.js";import"./transButton.js";import"./upperFirst.js";import"./download.js";import"./index6.js";import"./index7.js";import"./uniqBy.js";import"./miao.data.js";import"./lodash.default.js";import"./throttle.js";import"./merge.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";const R={style:{"margin-bottom":"8px"}},A={class:"theme-desc"},q=["src"],z=p({__name:"ThemeDrawer",props:{themeNames:Array},emits:["register","reload","update:themeNames"],setup(e,{emit:i}){const{VITE_PUBLIC_PATH:r}=c(),a=e,o=i,p=d(),{prefixCls:z}=f("miao-plugin-theme-drawer"),{createMessage:U,createConfirm:V}=$(),{createPrompt:W}=B(),H=y(),J=g(),X=g(!1),G=g([]),[K,{closeDrawer:Q,setDrawerProps:Y}]=u((function(){re()})),[Z,ee]=E(),te=j((()=>{let e={width:document.body.clientWidth>=768?700:"100%",title:"喵喵帮助皮肤",confirmLoading:v(X)};var i;return i=l(l(l({},v(p)),e),a),t(i,n({onOk:ae,onCancel:ae,onRegister:K}))}));let ne={};function ie(e,t="main"){let n=ne[e]||1;return`${r}/api/plugin/miao/help/theme/$s?token=${H.liteToken}&themeName=${e}&_v=${n}`.replace("$s",t)}function re(){return s(this,null,(function*(){try{ue(!0),G.value=yield N();let e=G.value.map((e=>e.name));o("update:themeNames",e)}finally{ue(!1)}}))}function ae(){Q()}let oe=null;function le(){return J.value.value="",J.value.click(),new Promise((e=>{let t=!1,n=()=>{setTimeout((()=>{t||e(null)}),500)},i=i=>{t||(t=!0,window.removeEventListener("focus",n),e(i))};window.addEventListener("focus",n),oe=function(e){return s(this,null,(function*(){var t;let n=null==(t=null==e?void 0:e.target)?void 0:t.files;n&&n.length<=0?i(null):i(n[0])}))}}))}function se(){W({title:"新增皮肤",required:!0,placeholder:"请输入皮肤名称",okText:"确定并选择底图",onOk(e){return s(this,null,(function*(){let t=yield le();if(!t)return Promise.reject("未选择底图");yield S(e,t),yield re()}))}})}function ue(e){X.value=e,Y({confirmLoading:e})}function me(e){"function"==typeof oe&&(oe(e),oe=null)}function pe(e){return[{event:"change",text:"修改配置",icon:"ant-design:edit",onClick(){ee.openModal(!0,e)}},{event:"changePic",text:"更改底图",icon:"akar-icons:image",onClick(){return s(this,null,(function*(){try{ue(!0);let t=yield le();if(t){yield D(e.name,t);let n=ne[e.name]||1;ne[e.name]=++n}}finally{ue(!1)}}))}},{event:"delete",text:"删除皮肤",icon:"ant-design:delete",onClick(){V({title:"删除",iconType:"warning",content:`确定要删除“${e.name}”吗？删除后不可恢复！`,onOk:()=>function(e){return s(this,null,(function*(){try{if("default"===e.name)return void U.warn("默认皮肤不可删除");ue(!0),yield F(e.name),yield re()}finally{ue(!1)}}))}(e)})}}]}return(e,t)=>{const n=h("a-button"),i=h("a-col"),r=h("a-row"),a=h("a-list-item-meta"),o=h("a-list-item"),l=h("a-list"),s=h("a-spin");return w(),x(v(m),I(T(te.value)),{default:b((()=>[k(s,{wrapperClassName:`${v(z)} p-2`,spinning:X.value},{default:b((()=>[O("div",R,[k(n,{type:"primary",preIcon:"ant-design:plus",onClick:se},{default:b((()=>[_("新增皮肤")])),_:1})]),k(l,{size:"large",bordered:"",dataSource:G.value},{renderItem:b((({item:e})=>[k(o,null,{actions:b((()=>["default"!==e.name?(w(),x(v(P),{key:0,trigger:["click"],dropMenuList:pe(e)},{default:b((()=>[k(n,{type:"primary",shape:"circle",preIcon:"ant-design:setting"})])),_:2},1032,["dropMenuList"])):C("",!0)])),default:b((()=>[k(a,{title:e.name},{description:b((()=>[O("div",A,[k(r,{type:"flex",gutter:8},{default:b((()=>[k(i,{style:{width:"150px"}},{default:b((()=>[O("img",{src:ie(e.name),alt:"皮肤底图"},null,8,q)])),_:2},1024),k(i,{style:{flex:"1"}},{default:b((()=>[O("pre",null,L(JSON.stringify(e.style,null,2)),1)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["dataSource"])])),_:1},8,["wrapperClassName","spinning"]),k(M,{onRegister:v(Z),onSuccess:re},null,8,["onRegister"]),O("input",{ref_key:"uploadBgRef",ref:J,type:"file",name:"upload-bg",accept:"image/bmp,image/jpeg,image/png",onChange:me,style:{display:"none"}},null,544)])),_:1},16)}}});export{z as default};
