var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__async=(__this,__arguments,generator)=>new Promise(((resolve,reject)=>{var fulfilled=value=>{try{step(generator.next(value))}catch(e){reject(e)}},rejected=value=>{try{step(generator.throw(value))}catch(e){reject(e)}},step=x=>x.done?resolve(x.value):Promise.resolve(x.value).then(fulfilled,rejected);step((generator=generator.apply(__this,__arguments)).next())}));import{u as useDrawerInner,B as BasicDrawer}from"./index35.js";import{d as defineComponent,g4 as getAppEnvConfig,K as useAttrs,E as useDesign,aB as usePermissionStore,r as ref,C as computed,y as unref,c as resolveComponent,o as openBlock,h as createBlock,i as withCtx,j as createVNode,v as createBaseVNode,k as createTextVNode,b5 as Dropdown,x as createCommentVNode,m as toDisplayString,a0 as normalizeProps,a1 as guardReactiveProps,A as useMessage,u as usePrompt}from"./index.js";import{a as useModal}from"./index19.js";/* empty css       *//* empty css                                                          */import{e as getThemeList,f as addThemeItem,p as putThemeItem,h as deleteThemeItem}from"./miao.api.js";import{_ as _sfc_main$1}from"./ThemeConfigModal.vue_vue_type_script_setup_true_lang.js";const _hoisted_1={style:{"margin-bottom":"8px"}},_hoisted_2={class:"theme-desc"},_hoisted_3=["src"],_sfc_main=defineComponent({__name:"ThemeDrawer",props:{themeNames:Array},emits:["register","reload","update:themeNames"],setup(__props,{emit:__emit}){const{VITE_PUBLIC_PATH:VITE_PUBLIC_PATH}=getAppEnvConfig(),props=__props,emit=__emit,attrs=useAttrs(),{prefixCls:prefixCls}=useDesign("miao-plugin-theme-drawer"),{createMessage:$message,createConfirm:createConfirm}=useMessage(),{createPrompt:createPrompt}=usePrompt(),permStore=usePermissionStore(),uploadBgRef=ref(),loading=ref(!1),themeList=ref([]),[registerDrawer,{closeDrawer:closeDrawer,setDrawerProps:setDrawerProps}]=useDrawerInner((function(){loadData()})),[registerConfigModal,configModal]=useModal(),getProps=computed((()=>{let drawerProps={width:document.body.clientWidth>=768?700:"100%",title:"喵喵帮助皮肤",confirmLoading:unref(loading)};var a;return a=__spreadValues(__spreadValues(__spreadValues({},unref(attrs)),drawerProps),props),__defProps(a,__getOwnPropDescs({onOk:close,onCancel:close,onRegister:registerDrawer}))}));let themePicVer={};function getThemeSrc(name,type="main"){let ver=themePicVer[name]||1;return`${VITE_PUBLIC_PATH}/api/plugin/miao/help/theme/$s?token=${permStore.liteToken}&themeName=${name}&_v=${ver}`.replace("$s",type)}function loadData(){return __async(this,null,(function*(){try{setLoading(!0),themeList.value=yield getThemeList();let themeNames=themeList.value.map((t=>t.name));emit("update:themeNames",themeNames)}finally{setLoading(!1)}}))}function close(){closeDrawer()}let onUploadBgChangeCallback=null;function openUploadBgFile(){return uploadBgRef.value.value="",uploadBgRef.value.click(),new Promise((resolveOrigin=>{let resolved=!1,onWindowFocus=()=>{setTimeout((()=>{resolved||resolveOrigin(null)}),500)},resolve=value=>{resolved||(resolved=!0,window.removeEventListener("focus",onWindowFocus),resolveOrigin(value))};window.addEventListener("focus",onWindowFocus),onUploadBgChangeCallback=function(event){return __async(this,null,(function*(){var _a;let files=null==(_a=null==event?void 0:event.target)?void 0:_a.files;files&&files.length<=0?resolve(null):resolve(files[0])}))}}))}function onAdd(){createPrompt({title:"新增皮肤",required:!0,placeholder:"请输入皮肤名称",okText:"确定并选择底图",onOk(value){return __async(this,null,(function*(){let file=yield openUploadBgFile();if(!file)return Promise.reject("未选择底图");yield addThemeItem(value,file),yield loadData()}))}})}function setLoading(flag){loading.value=flag,setDrawerProps({confirmLoading:flag})}function onUploadBgChange(event){"function"==typeof onUploadBgChangeCallback&&(onUploadBgChangeCallback(event),onUploadBgChangeCallback=null)}function getDropMenuList(item){return[{event:"change",text:"修改配置",icon:"ant-design:edit",onClick(){configModal.openModal(!0,item)}},{event:"changePic",text:"更改底图",icon:"akar-icons:image",onClick(){return __async(this,null,(function*(){try{setLoading(!0);let file=yield openUploadBgFile();if(file){yield putThemeItem(item.name,file);let ver=themePicVer[item.name]||1;themePicVer[item.name]=++ver}}finally{setLoading(!1)}}))}},{event:"delete",text:"删除皮肤",icon:"ant-design:delete",onClick(){createConfirm({title:"删除",iconType:"warning",content:`确定要删除“${item.name}”吗？删除后不可恢复！`,onOk:()=>function(item){return __async(this,null,(function*(){try{if("default"===item.name)return void $message.warn("默认皮肤不可删除");setLoading(!0),yield deleteThemeItem(item.name),yield loadData()}finally{setLoading(!1)}}))}(item)})}}]}return(_ctx,_cache)=>{const _component_a_button=resolveComponent("a-button"),_component_a_col=resolveComponent("a-col"),_component_a_row=resolveComponent("a-row"),_component_a_list_item_meta=resolveComponent("a-list-item-meta"),_component_a_list_item=resolveComponent("a-list-item"),_component_a_list=resolveComponent("a-list"),_component_a_spin=resolveComponent("a-spin");return openBlock(),createBlock(unref(BasicDrawer),normalizeProps(guardReactiveProps(getProps.value)),{default:withCtx((()=>[createVNode(_component_a_spin,{wrapperClassName:`${unref(prefixCls)} p-2`,spinning:loading.value},{default:withCtx((()=>[createBaseVNode("div",_hoisted_1,[createVNode(_component_a_button,{type:"primary",preIcon:"ant-design:plus",onClick:onAdd},{default:withCtx((()=>[createTextVNode("新增皮肤")])),_:1})]),createVNode(_component_a_list,{size:"large",bordered:"",dataSource:themeList.value},{renderItem:withCtx((({item:item})=>[createVNode(_component_a_list_item,null,{actions:withCtx((()=>["default"!==item.name?(openBlock(),createBlock(unref(Dropdown),{key:0,trigger:["click"],dropMenuList:getDropMenuList(item)},{default:withCtx((()=>[createVNode(_component_a_button,{type:"primary",shape:"circle",preIcon:"ant-design:setting"})])),_:2},1032,["dropMenuList"])):createCommentVNode("",!0)])),default:withCtx((()=>[createVNode(_component_a_list_item_meta,{title:item.name},{description:withCtx((()=>[createBaseVNode("div",_hoisted_2,[createVNode(_component_a_row,{type:"flex",gutter:8},{default:withCtx((()=>[createVNode(_component_a_col,{style:{width:"150px"}},{default:withCtx((()=>[createBaseVNode("img",{src:getThemeSrc(item.name),alt:"皮肤底图"},null,8,_hoisted_3)])),_:2},1024),createVNode(_component_a_col,{style:{flex:"1"}},{default:withCtx((()=>[createBaseVNode("pre",null,toDisplayString(JSON.stringify(item.style,null,2)),1)])),_:2},1024)])),_:2},1024)])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["dataSource"])])),_:1},8,["wrapperClassName","spinning"]),createVNode(_sfc_main$1,{onRegister:unref(registerConfigModal),onSuccess:loadData},null,8,["onRegister"]),createBaseVNode("input",{ref_key:"uploadBgRef",ref:uploadBgRef,type:"file",name:"upload-bg",accept:"image/bmp,image/jpeg,image/png",onChange:onUploadBgChange,style:{display:"none"}},null,544)])),_:1},16)}}});export{_sfc_main as _};