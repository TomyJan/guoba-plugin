var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,i=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))a.call(t,n)&&s(e,n,t[n]);return e},r=(e,l)=>t(e,n(l));import{bD as u,b as E,bQ as _,v as d,a as c,e as g,o as O,f as S,F as T,bJ as p,i as A,j as C,l as D,m as N,bG as f,bU as M,bT as R,ca as y,cA as I,p as m,z as b,k as H,cx as h,r as v,bC as L,w as B,ci as w,x as U,bi as P,b$ as x,q as F,bF as G,cz as k,bI as W,Z as $,h as X,A as j,B as V,aB as K,c as Y,cB as Q,ck as Z,cs as z,u as q,bY as J,cT as ee,eY as te,eZ as ne,e_ as le,d8 as oe,d9 as ae,e$ as se,dG as ie,dx as re,f0 as ue,f1 as Ee,dv as _e,f2 as de,f3 as ce,f4 as ge,f5 as Oe,dE as Se,db as Te,bO as pe,f6 as Ae,f7 as Ce,f8 as De,f9 as Ne,bM as fe}from"./index.js";import{D as Me,u as Re,a as ye}from"./index9.js";import{A as Ie}from"./ArrowLeftOutlined.js";import{c as me}from"./createAsyncComponent.js";const{t:be}=u(),He={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:be("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:be("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},he=i({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},He);var ve=c(E({name:"BasicDrawerFooter",props:r(i({},He),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:n}=_("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:n,handleClose:function(){t("close")},getStyle:d((()=>{const t=`${e.height}`;return{height:t,lineHeight:`calc(${t} - 1px)`}}))}}}),[["render",function(e,t,n,l,o,a){const s=g("a-button");return e.showFooter||e.$slots.footer?(O(),S("div",{key:0,class:R(e.prefixCls),style:y(e.getStyle)},[e.$slots.footer?p(e.$slots,"footer",{key:1}):(O(),S(T,{key:0},[p(e.$slots,"insertFooter"),e.showCancelBtn?(O(),A(s,f({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:C((()=>[D(N(e.cancelText),1)])),_:1},16,["onClick"])):M("",!0),p(e.$slots,"centerFooter"),e.showOkBtn?(O(),A(s,f({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:C((()=>[D(N(e.okText),1)])),_:1},16,["type","onClick","loading"])):M("",!0),p(e.$slots,"appendFooter")],64))],6)):M("",!0)}]]);const Le=E({name:"BasicDrawerHeader",components:{BasicTitle:I,ArrowLeftOutlined:Ie},props:{isDetail:m.bool,showDetailBack:m.bool,title:m.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:n}=_("basic-drawer-header");return{prefixCls:n,handleClose:function(){t("close")}}}}),Be={key:1};var we=c(E({components:{Drawer:Me,ScrollContainer:h,DrawerFooter:ve,DrawerHeader:c(Le,[["render",function(e,t,n,l,o,a){const s=g("BasicTitle"),i=g("ArrowLeftOutlined");return e.isDetail?(O(),S("div",{key:1,class:R([e.prefixCls,`${e.prefixCls}--detail`])},[b("span",{class:R(`${e.prefixCls}__twrap`)},[e.showDetailBack?(O(),S("span",{key:0,onClick:t[0]||(t[0]=(...t)=>e.handleClose&&e.handleClose(...t))},[H(i,{class:R(`${e.prefixCls}__back`)},null,8,["class"])])):M("",!0),e.title?(O(),S("span",Be,N(e.title),1)):M("",!0)],2),b("span",{class:R(`${e.prefixCls}__toolbar`)},[p(e.$slots,"titleToolbar")],2)],2)):(O(),A(s,{key:0,class:R(e.prefixCls)},{default:C((()=>[p(e.$slots,"title"),D(" "+N(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))}]])},inheritAttrs:!1,props:he,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const n=v(!1),l=L(),o=v(null),{t:a}=u(),{prefixVar:s,prefixCls:E}=_("basic-drawer"),c={setDrawerProps:function(e){o.value=w(U(o)||{},e),Reflect.has(e,"visible")&&(n.value=!!e.visible)},emitVisible:void 0},g=K();g&&t("register",c,g.uid);const O=d((()=>w(P(e),U(o)))),S=d((()=>{const e=r(i(i({placement:"right"},U(l)),U(O)),{visible:U(n)});e.title=void 0;const{isDetail:t,width:o,wrapClassName:a,getContainer:u}=e;if(t){o||(e.width="100%");const t=`${E}__detail`;e.class=a?`${a} ${t}`:t,u||(e.getContainer=`.${s}-layout-content`)}return e})),T=d((()=>i(i({},l),U(S)))),p=d((()=>{const{footerHeight:e,showFooter:t}=U(S);return t&&e?x(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),A=d((()=>({position:"relative",height:`calc(100% - ${U(p)})`}))),C=d((()=>{var e;return!!(null==(e=U(S))?void 0:e.loading)}));return B((()=>e.visible),((e,t)=>{e!==t&&(n.value=e)}),{deep:!0}),B((()=>n.value),(e=>{F((()=>{var n;t("visible-change",e),g&&(null==(n=c.emitVisible)||n.call(c,e,g.uid))}))})),{onClose:function(e){return l=this,o=null,a=function*(){const{closeFunc:l}=U(S);if(t("close",e),l&&G(l)){const e=yield l();n.value=!e}else n.value=!1},new Promise(((t,n)=>{var s=t=>{try{r(a.next(t))}catch(e){n(e)}},i=t=>{try{r(a.throw(t))}catch(e){n(e)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,i);r((a=a.apply(l,o)).next())}));var l,o,a},t:a,prefixCls:E,getMergeProps:O,getScrollContentStyle:A,getProps:S,getLoading:C,getBindValues:T,getFooterHeight:p,handleOk:function(){t("ok")}}}}),[["render",function(e,t,n,l,o,a){const s=g("DrawerHeader"),i=g("ScrollContainer"),r=g("DrawerFooter"),u=g("Drawer"),E=k("loading");return O(),A(u,f({class:e.prefixCls,onClose:e.onClose},e.getBindValues),W({default:C((()=>[$((O(),A(i,{style:y(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:C((()=>[p(e.$slots,"default")])),_:3},8,["style","loading-tip"])),[[E,e.getLoading]]),H(r,f(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),W({_:2},[X(Object.keys(e.$slots),(t=>({name:t,fn:C((n=>[p(e.$slots,t,j(V(n||{})))]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?{name:"title",fn:C((()=>[p(e.$slots,"title")]))}:{name:"title",fn:C((()=>[H(s,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:C((()=>[p(e.$slots,"titleToolbar")])),_:3},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])}]]);const Ue=Y({}),Pe=Y({});const xe=J(we),Fe=me((()=>ee((()=>import("./TypePicker.js")),["assets/TypePicker.js","assets/TypePicker.css","assets/index.js","assets/index13.css"]))),Ge=me((()=>ee((()=>import("./ThemeColorPicker.js")),["assets/ThemeColorPicker.js","assets/ThemeColorPicker.css","assets/index.js","assets/index13.css","assets/index9.js","assets/index18.css","assets/createAsyncComponent.js","assets/FullscreenOutlined.js","assets/index10.js","assets/index8.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js","assets/ArrowLeftOutlined.js"]))),ke=me((()=>ee((()=>import("./SettingFooter.js")),["assets/SettingFooter.js","assets/SettingFooter.css","assets/index.js","assets/index13.css","assets/CopyOutlined.js","assets/RedoOutlined.js"]))),We=me((()=>ee((()=>import("./SwitchItem.js")),["assets/SwitchItem.js","assets/SwitchItem.css","assets/index.js","assets/index13.css","assets/index6.js","assets/index5.css","assets/index9.js","assets/index18.css","assets/createAsyncComponent.js","assets/FullscreenOutlined.js","assets/index10.js","assets/index8.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js","assets/ArrowLeftOutlined.js"]))),$e=me((()=>ee((()=>import("./SelectItem.js")),["assets/SelectItem.js","assets/SelectItem.css","assets/index.js","assets/index13.css","assets/index9.js","assets/index18.css","assets/createAsyncComponent.js","assets/FullscreenOutlined.js","assets/index10.js","assets/index8.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js","assets/ArrowLeftOutlined.js"]))),Xe=me((()=>ee((()=>import("./InputNumberItem.js")),["assets/InputNumberItem.js","assets/InputNumberItem.css","assets/index.js","assets/index13.css","assets/index5.js","assets/index14.css","assets/index9.js","assets/index18.css","assets/createAsyncComponent.js","assets/FullscreenOutlined.js","assets/index10.js","assets/index8.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js","assets/ArrowLeftOutlined.js"]))),{t:je}=u();var Ve=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.LOCK_TIME=25]="LOCK_TIME",e[e.FULL_CONTENT=26]="FULL_CONTENT",e[e.CONTENT_MODE=27]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=30]="GRAY_MODE",e[e.COLOR_WEAK=31]="COLOR_WEAK",e[e.SHOW_LOGO=32]="SHOW_LOGO",e[e.SHOW_FOOTER=33]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=35]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION",e))(Ve||{});const Ke=[{value:te.FULL,label:je("layout.setting.contentModeFull")},{value:te.FIXED,label:je("layout.setting.contentModeFixed")}],Ye=[{value:ne.CENTER,label:je("layout.setting.topMenuAlignRight")},{value:ne.START,label:je("layout.setting.topMenuAlignLeft")},{value:ne.END,label:je("layout.setting.topMenuAlignCenter")}],Qe=[le.ZOOM_FADE,le.FADE,le.ZOOM_OUT,le.FADE_SIDE,le.FADE_BOTTOM,le.FADE_SCALE].map((e=>({label:e,value:e}))),Ze=[{title:je("layout.setting.menuTypeSidebar"),mode:oe.INLINE,type:ae.SIDEBAR},{title:je("layout.setting.menuTypeMix"),mode:oe.INLINE,type:ae.MIX},{title:je("layout.setting.menuTypeTopMenu"),mode:oe.HORIZONTAL,type:ae.TOP_MENU},{title:je("layout.setting.menuTypeMixSidebar"),mode:oe.INLINE,type:ae.MIX_SIDEBAR}],ze=[{value:se.HOVER,label:je("layout.setting.triggerHover")},{value:se.CLICK,label:je("layout.setting.triggerClick")}];function qe(e,t){const n=re(),l=function(e,t){const n=re(),{getThemeColor:l,getDarkMode:o}=_e();switch(e){case Ve.CHANGE_LAYOUT:const{mode:e,type:a,split:s}=t;return{menuSetting:i({mode:e,type:a,collapsed:!1,show:!0,hidden:!1},void 0===s?{split:s}:{})};case Ve.CHANGE_THEME_COLOR:return l.value===t?{}:(Oe(t),{themeColor:t});case Ve.CHANGE_THEME:return o.value===t||ge(t),{};case Ve.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case Ve.MENU_ACCORDION:return{menuSetting:{accordion:t}};case Ve.MENU_TRIGGER:return{menuSetting:{trigger:t}};case Ve.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case Ve.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case Ve.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case Ve.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case Ve.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case Ve.MENU_THEME:return Ee(t),{menuSetting:{bgColor:t}};case Ve.MENU_SPLIT:return{menuSetting:{split:t}};case Ve.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case Ve.MENU_FIXED:return{menuSetting:{fixed:t}};case Ve.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case Ve.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case Ve.OPEN_PAGE_LOADING:return n.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case Ve.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case Ve.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case Ve.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case Ve.LOCK_TIME:return{lockTime:t};case Ve.FULL_CONTENT:return{fullContent:t};case Ve.CONTENT_MODE:return{contentMode:t};case Ve.SHOW_BREADCRUMB:return{showBreadCrumb:t};case Ve.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case Ve.GRAY_MODE:return ce(t),{grayMode:t};case Ve.SHOW_FOOTER:return{showFooter:t};case Ve.COLOR_WEAK:return de(t),{colorWeak:t};case Ve.SHOW_LOGO:return{showLogo:t};case Ve.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case Ve.TABS_SHOW:return{multiTabsSetting:{show:t}};case Ve.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case Ve.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case Ve.HEADER_THEME:return ue(t),{headerSetting:{bgColor:t}};case Ve.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case Ve.HEADER_FIXED:return{headerSetting:{fixed:t}};case Ve.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);n.setProjectConfig(l),e===Ve.CHANGE_THEME&&(ue(),Ee())}const{t:Je}=u();var et=E({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:l,getShowBreadCrumb:o,getShowBreadCrumbIcon:a,getShowLogo:s,getFullContent:i,getColorWeak:r,getGrayMode:u,getLockTime:E,getShowDarkModeToggle:_,getThemeColor:c}=_e(),{getOpenPageLoading:g,getBasicTransition:O,getEnableTransition:S,getOpenNProgress:p}=Se(),{getIsHorizontal:A,getShowMenu:C,getMenuType:D,getTrigger:N,getCollapsedShowTitle:M,getMenuFixed:R,getCollapsed:y,getCanDrag:I,getTopMenuAlign:m,getAccordion:b,getMenuWidth:h,getMenuBgColor:v,getIsTopMenu:L,getSplit:B,getIsMixSidebar:w,getCloseMixSidebarOnChange:P,getMixSideTrigger:x,getMixSideFixed:F}=Te(),{getShowHeader:G,getFixed:k,getHeaderBgColor:W,getShowSearch:$}=Re(),{getShowMultipleTab:X,getShowQuick:j,getShowRedo:V,getShowFold:K}=ye(),Y=d((()=>U(C)&&!U(A)));function Q(){let e=U(N);const t=(l=U(B),[{value:ie.NONE,label:je("layout.setting.menuTriggerNone")},{value:ie.FOOTER,label:je("layout.setting.menuTriggerBottom")},...l?[]:[{value:ie.HEADER,label:je("layout.setting.menuTriggerTop")}]]);var l;return t.some((t=>t.value===e))||(e=ie.FOOTER),H(T,null,[H(We,{title:Je("layout.setting.splitMenu"),event:Ve.MENU_SPLIT,def:U(B),disabled:!U(Y)||U(D)!==ae.MIX},null),H(We,{title:Je("layout.setting.mixSidebarFixed"),event:Ve.MENU_FIXED_MIX_SIDEBAR,def:U(F),disabled:!U(w)},null),H(We,{title:Je("layout.setting.closeMixSidebarOnChange"),event:Ve.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:U(P),disabled:!U(w)},null),H(We,{title:Je("layout.setting.menuCollapse"),event:Ve.MENU_COLLAPSED,def:U(y),disabled:!U(Y)},null),H(We,{title:Je("layout.setting.menuDrag"),event:Ve.MENU_HAS_DRAG,def:U(I),disabled:!U(Y)},null),H(We,{title:Je("layout.setting.menuSearch"),event:Ve.HEADER_SEARCH,def:U($),disabled:!U(G)},null),H(We,{title:Je("layout.setting.menuAccordion"),event:Ve.MENU_ACCORDION,def:U(b),disabled:!U(Y)},null),H(We,{title:Je("layout.setting.collapseMenuDisplayName"),event:Ve.MENU_COLLAPSED_SHOW_TITLE,def:U(M),disabled:!U(Y)||!U(y)||U(w)},null),H(We,{title:Je("layout.setting.fixedHeader"),event:Ve.HEADER_FIXED,def:U(k),disabled:!U(G)},null),H(We,{title:Je("layout.setting.fixedSideBar"),event:Ve.MENU_FIXED,def:U(R),disabled:!U(Y)||U(w)},null),H($e,{title:Je("layout.setting.mixSidebarTrigger"),event:Ve.MENU_TRIGGER_MIX_SIDEBAR,def:U(x),options:ze,disabled:!U(w)},null),H($e,{title:Je("layout.setting.topMenuLayout"),event:Ve.MENU_TOP_ALIGN,def:U(m),options:Ye,disabled:!U(G)||U(B)||!U(L)&&!U(B)||U(w)},null),H($e,{title:Je("layout.setting.menuCollapseButton"),event:Ve.MENU_TRIGGER,def:e,options:t,disabled:!U(Y)||U(w)},null),H($e,{title:Je("layout.setting.contentMode"),event:Ve.CONTENT_MODE,def:U(n),options:Ke},null),H(Xe,{title:Je("layout.setting.autoScreenLock"),min:0,event:Ve.LOCK_TIME,defaultValue:U(E),formatter:e=>0===parseInt(e)?`0(${Je("layout.setting.notAutoScreenLock")})`:`${e}${Je("layout.setting.minute")}`},null),H(Xe,{title:Je("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:Ve.MENU_WIDTH,disabled:!U(Y),defaultValue:U(h),formatter:e=>`${parseInt(e)}px`},null)])}return()=>H(xe,f(t,{title:Je("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[U(_)&&H(pe,null,{default:()=>Je("layout.setting.darkMode")}),U(_)&&H(Ae,{class:"mx-auto"},null),H(pe,null,{default:()=>Je("layout.setting.navMode")}),H(T,null,[H(Fe,{menuTypeList:Ze,handler:e=>{qe(Ve.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!U(A)&&void 0})},def:U(D)},null)]),H(pe,null,{default:()=>Je("layout.setting.sysTheme")}),H(Ge,{colorList:Ce,def:U(c),event:Ve.CHANGE_THEME_COLOR},null),H(pe,null,{default:()=>Je("layout.setting.headerTheme")}),H(Ge,{colorList:De,def:U(W),event:Ve.HEADER_THEME},null),H(pe,null,{default:()=>Je("layout.setting.sidebarTheme")}),H(Ge,{colorList:Ne,def:U(v),event:Ve.MENU_THEME},null),H(pe,null,{default:()=>Je("layout.setting.interfaceFunction")}),Q(),H(pe,null,{default:()=>Je("layout.setting.interfaceDisplay")}),H(T,null,[H(We,{title:Je("layout.setting.breadcrumb"),event:Ve.SHOW_BREADCRUMB,def:U(o),disabled:!U(G)},null),H(We,{title:Je("layout.setting.breadcrumbIcon"),event:Ve.SHOW_BREADCRUMB_ICON,def:U(a),disabled:!U(G)},null),H(We,{title:Je("layout.setting.tabs"),event:Ve.TABS_SHOW,def:U(X)},null),H(We,{title:Je("layout.setting.tabsRedoBtn"),event:Ve.TABS_SHOW_REDO,def:U(V),disabled:!U(X)},null),H(We,{title:Je("layout.setting.tabsQuickBtn"),event:Ve.TABS_SHOW_QUICK,def:U(j),disabled:!U(X)},null),H(We,{title:Je("layout.setting.tabsFoldBtn"),event:Ve.TABS_SHOW_FOLD,def:U(K),disabled:!U(X)},null),H(We,{title:Je("layout.setting.sidebar"),event:Ve.MENU_SHOW_SIDEBAR,def:U(C),disabled:U(A)},null),H(We,{title:Je("layout.setting.header"),event:Ve.HEADER_SHOW,def:U(G)},null),H(We,{title:"Logo",event:Ve.SHOW_LOGO,def:U(s),disabled:U(w)},null),H(We,{title:Je("layout.setting.footer"),event:Ve.SHOW_FOOTER,def:U(l)},null),H(We,{title:Je("layout.setting.fullContent"),event:Ve.FULL_CONTENT,def:U(i)},null),H(We,{title:Je("layout.setting.grayMode"),event:Ve.GRAY_MODE,def:U(u)},null),H(We,{title:Je("layout.setting.colorWeak"),event:Ve.COLOR_WEAK,def:U(r)},null)]),H(pe,null,{default:()=>Je("layout.setting.animation")}),H(T,null,[H(We,{title:Je("layout.setting.progress"),event:Ve.OPEN_PROGRESS,def:U(p)},null),H(We,{title:Je("layout.setting.switchLoading"),event:Ve.OPEN_PAGE_LOADING,def:U(g)},null),H(We,{title:Je("layout.setting.switchAnimation"),event:Ve.OPEN_ROUTE_TRANSITION,def:U(S)},null),H($e,{title:Je("layout.setting.animationType"),event:Ve.ROUTER_TRANSITION,def:U(O),options:Qe,disabled:!U(S)},null)]),H(pe,null,null),H(ke,null,null)]})}});var tt=c(E({name:"SettingButton",components:{SettingDrawer:et,Icon:fe},setup(){const[e,{openDrawer:t}]=function(){if(!K())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=v(null),t=v(!1),n=v(""),l=()=>{const t=U(e);return t||q("useDrawer instance is undefined!"),t};return[function(l,o){Q((()=>{e.value=null,t.value=null,Ue[U(n)]=null})),U(t)&&Z()&&l===U(e)||(n.value=o,e.value=l,t.value=!0,l.emitVisible=(e,t)=>{Pe[t]=e})},{setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)},getVisible:d((()=>Pe[~~U(n)])),openDrawer:(e=!0,t,o=!0)=>{var a;if(null==(a=l())||a.setDrawerProps({visible:e}),t)return o?(Ue[U(n)]=null,void(Ue[U(n)]=P(t))):void(z(P(Ue[U(n)]),P(t))||(Ue[U(n)]=P(t)))},closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})}}]}();return{register:e,openDrawer:t}}}),[["render",function(e,t,n,l,o,a){const s=g("Icon"),i=g("SettingDrawer");return O(),S("div",{onClick:t[0]||(t[0]=t=>e.openDrawer(!0))},[H(s,{icon:"ion:settings-outline"}),H(i,{onRegister:e.register},null,8,["onRegister"])])}]]),nt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{qe as b,nt as i};
