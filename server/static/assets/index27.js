var e=(e,t,o)=>new Promise(((i,s)=>{var n=e=>{try{a(o.next(e))}catch(t){s(t)}},r=e=>{try{a(o.throw(e))}catch(t){s(t)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,r);a((o=o.apply(e,t)).next())}));import{B as t}from"./TableImg.js";import{T as o}from"./BasicForm.js";import{u as i}from"./useTable.js";import{P as s}from"./index14.js";import{a as n}from"./index2.js";import{columns as r}from"./plugins.data.js";import{u as a}from"./index26.js";import{G as l}from"./GPluginModal.js";import{a as d,b as m,c,e as u,o as p,i as j,j as g,l as f,k as h,V as b,fV as x,u as w,aL as P,d0 as y,d1 as T,v}from"./index.js";import"./PathSelect.js";import"./index3.js";import"./index5.js";import"./index6.js";import"./merge.js";import"./upperFirst.js";import"./_baseIteratee.js";import"./get.js";import"./useWindowSizeFn.js";import"./onMountedOrActivated.js";import"./sortable.esm.js";import"./RedoOutlined.js";import"./FullscreenOutlined.js";import"./scrollTo.js";import"./index21.js";import"./index22.js";import"./index4.js";import"./find.js";import"./useFormItem.js";import"./transButton.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";import"./index16.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./guoba.js";import"./index15.js";import"./MarkdownViewer.js";import"./common.js";const k=m({name:"Plugins",components:{BasicTable:t,PageWrapper:s,GPluginModal:l,TableAction:o},setup(){const t=a(),[o,{openModal:s}]=n(),l=c({}),[d,{reload:m,updateTableDataRecord:u}]=i({title:"插件列表",api:()=>t.getPlugins(),rowKey:"id",columns:r,showTableSetting:!0,bordered:!0,canResize:!1,pagination:!0,indexColumnProps:{title:"#"},actionColumn:{width:80,title:"操作",dataIndex:"action"}});return{registerTable:d,registerModal:o,handleEdit:function(e){s(!0,{plugin:e})},handleDelete:function(e){console.log(e)},handleSuccess:function({isUpdate:e,values:t}){if(e){const e=u(t.id,t);console.log(e)}else m()},handleView:function(e){s(!0,{plugin:e})},searchInfo:l,install:function(){return e(this,null,(function*(){const{createPrompt:t}=w(),{createMessage:o}=P();t({title:"安装自定义插件",required:!0,placeholder:"请输入插件 Git 地址",bottomHelpMessage:"仅支持安装 Plugin 插件，请自行验证插件是否安全",rules:[{required:!0,message:"请输入插件 Git 地址"},{type:"url",message:"请输入正确的 Git 地址"}],okText:"安装",onOk(t){return e(this,null,(function*(){let e=yield x.installPlugin(t);"success"===e.status?(o.success(e.message),setTimeout((()=>{}),3e3),window.location.reload()):o.error(e.message)}))}})}))}}}}),M=(e=>(y("data-v-62f73ef3"),e=e(),T(),e))((()=>v("a",{href:"https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index",target:"_blank"}," Yunzai-Bot插件索引 ",-1)));var I=d(k,[["render",function(e,t,o,i,s,n){const r=u("TableAction"),a=u("BasicTable"),l=u("GPluginModal"),d=u("a-button"),m=u("PageWrapper");return p(),j(m,{title:"插件管理"},{headerContent:g((()=>[f(" 插件列表来源： "),M])),default:g((()=>[h(a,{onRegister:e.registerTable,searchInfo:e.searchInfo},{bodyCell:g((({column:t,record:o})=>["action"===t.key?(p(),j(r,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"查看插件详情",onClick:e.handleView.bind(null,o)}]},null,8,["actions"])):b("",!0)])),_:1},8,["onRegister","searchInfo"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),h(d,{type:"primary",shape:"circle",icon:"+",class:"float-button",onClick:e.install},null,8,["onClick"])])),_:1})}],["__scopeId","data-v-62f73ef3"]]);export{I as default};
