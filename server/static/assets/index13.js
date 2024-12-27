var t=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(e,o,n)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,s=(t,e)=>{for(var o in e||(e={}))a.call(e,o)&&r(t,o,e[o]);if(n)for(var o of n(e))l.call(e,o)&&r(t,o,e[o]);return t};import{k as i,aC as c,aR as u,b as d,aG as f,r as v,fp as g,I as p,aQ as h,am as b,af as m,fq as y,ag as C,fr as x,aq as w,fs as H,bO as O,U as k,eM as j,a as F,o as P,f as S,v as $,Q as R,W as B,O as T,w as I,q as L,s as _,ft as A,fu as E,c2 as W,cf as M,p as z,ac as D,$ as q,e as N,i as Q,a3 as V,h as G,j as U,a4 as X,a5 as J,F as K,l as Y,m as Z,X as tt,V as et,ab as ot}from"./index.js";import{B as nt}from"./index15.js";import{o as at}from"./onMountedOrActivated.js";import{u as lt}from"./useWindowSizeFn.js";import{a as rt}from"./useContentViewHeight.js";import{A as st}from"./ArrowLeftOutlined.js";import{T as it}from"./transButton.js";var ct={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};function ut(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){dt(t,e,o[e])}))}return t}function dt(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var ft=function(t,e){var o=ut({},t,e.attrs);return i(c,ut({},o,{icon:ct}),null)};ft.displayName="ArrowRightOutlined",ft.inheritAttrs=!1;var vt=ft,gt=u(d({compatConfig:{MODE:3},name:"APageHeader",props:{backIcon:C.any,prefixCls:String,title:C.any,subTitle:C.any,breadcrumb:C.object,tags:C.any,footer:C.any,extra:C.any,avatar:C.object,ghost:{type:Boolean,default:void 0},onBack:Function},slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(t,e){var o=e.emit,n=e.slots,a=f("page-header",t),l=a.prefixCls,r=a.direction,s=a.pageHeader,c=v(!1),u=g(),d=function(t){var e=t.width;u.value||(c.value=e<768)},C=p((function(){var e,o,n;return null===(e=null!==(o=t.ghost)&&void 0!==o?o:null===(n=s.value)||void 0===n?void 0:n.ghost)||void 0===e||e})),k=function(){var e,a,s,c,u,d,f,v,g,p=t.avatar,h=null!==(e=t.title)&&void 0!==e?e:null===(a=n.title)||void 0===a?void 0:a.call(n),b=null!==(s=t.subTitle)&&void 0!==s?s:null===(c=n.subTitle)||void 0===c?void 0:c.call(n),m=null!==(u=t.tags)&&void 0!==u?u:null===(d=n.tags)||void 0===d?void 0:d.call(n),y=null!==(f=t.extra)&&void 0!==f?f:null===(v=n.extra)||void 0===v?void 0:v.call(n),C="".concat(l.value,"-heading"),w=h||b||m||y;if(!w)return null;var H,k,j,F=function(e){return e&&t.onBack?i(O,{componentName:"PageHeader",children:function(t){var n=t.back;return i("div",{class:"".concat(l.value,"-back")},[i(it,{onClick:function(t){o("back",t)},class:"".concat(l.value,"-back-button"),"aria-label":n},{default:function(){return[e]}})])}},null):null}(null!==(H=null!==(k=t.backIcon)&&void 0!==k?k:null===(j=n.backIcon)||void 0===j?void 0:j.call(n))&&void 0!==H?H:"rtl"===r.value?i(vt,null,null):i(st,null,null));return i("div",{class:C},[(F||p||w)&&i("div",{class:"".concat(C,"-left")},[F,p?i(x,p,null):null===(g=n.avatar)||void 0===g?void 0:g.call(n),h&&i("span",{class:"".concat(C,"-title"),title:"string"==typeof h?h:void 0},[h]),b&&i("span",{class:"".concat(C,"-sub-title"),title:"string"==typeof b?b:void 0},[b]),m&&i("span",{class:"".concat(C,"-tags")},[m])]),y&&i("span",{class:"".concat(C,"-extra")},[y])])},j=function(t){return i("div",{class:"".concat(l.value,"-content")},[t])};return function(){var e,o,a,s=(null===(e=t.breadcrumb)||void 0===e?void 0:e.routes)||n.breadcrumb,u=t.footer||n.footer,f=h(null===(o=n.default)||void 0===o?void 0:o.call(n)),v=b(l.value,(m(a={"has-breadcrumb":s,"has-footer":u},"".concat(l.value,"-ghost"),C.value),m(a,"".concat(l.value,"-rtl"),"rtl"===r.value),m(a,"".concat(l.value,"-compact"),c.value),a));return i(y,{onResize:d},{default:function(){return[i("div",{class:v},[t.breadcrumb?i(nt,t.breadcrumb,null):null===(r=n.breadcrumb)||void 0===r?void 0:r.call(n),k(),f.length?j(f):null,(a=null!==(e=t.footer)&&void 0!==e?e:w(null===(o=n.footer)||void 0===o?void 0:o.call(n)),H(a)?null:i("div",{class:"".concat(l.value,"-footer")},[a]))])];var e,o,a,r}})}}}));var pt=F(d({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:t}=k("page-footer"),{getCalcContentWidth:e}=j();return{prefixCls:t,getCalcContentWidth:e}}}),[["render",function(t,e,o,n,a,l){return P(),S("div",{class:B(t.prefixCls),style:T({width:t.getCalcContentWidth})},[$("div",{class:B(`${t.prefixCls}__left`)},[R(t.$slots,"left",{},void 0,!0)],2),R(t.$slots,"default",{},void 0,!0),$("div",{class:B(`${t.prefixCls}__right`)},[R(t.$slots,"right",{},void 0,!0)],2)],6)}],["__scopeId","data-v-4340a8ce"]]);function ht(t,e,o,n,a=0,l=v(0)){const r=v(null),{footerHeightRef:s}=rt();let i={useLayoutFooter:!0};function c(t,e="all"){var o,n,a,l;function r(t){return Number(t.replace(/[^\d]/g,""))}let s=0;const i="0px";if(t){const c=getComputedStyle(t),u=r(null!=(o=null==c?void 0:c.marginTop)?o:i),d=r(null!=(n=null==c?void 0:c.marginBottom)?n:i),f=r(null!=(a=null==c?void 0:c.paddingTop)?a:i),v=r(null!=(l=null==c?void 0:c.paddingBottom)?l:i);"all"===e?(s+=u,s+=d,s+=f,s+=v):"top"===e?(s+=u,s+=f):(s+=d,s+=v)}return s}function u(t){return null==t?null:t instanceof HTMLDivElement?t:t.$el}function d(){return d=this,f=null,v=function*(){var d;if(!t.value)return;yield L();const f=u(_(e));if(!f)return;const{bottomIncludeBody:v}=A(f);let g=0;o.forEach((t=>{var e,o;g+=null!=(o=null==(e=u(_(t)))?void 0:e.offsetHeight)?o:0}));let p=null!=(d=c(f))?d:0;n.forEach((t=>{p+=c(u(_(t)))}));let h=0;function b(t,e){if(t&&e){const o=t.parentElement;o&&(W(e)?o.classList.contains(e)?h+=c(o,"bottom"):(h+=c(o,"bottom"),b(o,e)):M(e)&&e>0&&(h+=c(o,"bottom"),b(o,--e)))}}E(a)?b(f,_(a)):b(f,a);let m=v-_(s)-_(l)-g-p-h;const y=()=>{var t;null==(t=i.elements)||t.forEach((t=>{var e,o;m+=null!=(o=null==(e=u(_(t)))?void 0:e.offsetHeight)?o:0}))};i.useLayoutFooter&&_(s),y(),r.value=m},new Promise(((t,e)=>{var o=t=>{try{a(v.next(t))}catch(o){e(o)}},n=t=>{try{a(v.throw(t))}catch(o){e(o)}},a=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,n);a((v=v.apply(d,f)).next())}));var d,f,v}return at((()=>{L((()=>{d()}))})),lt((()=>{d()}),50,{immediate:!0}),I((()=>[s.value]),(()=>{d()}),{flush:"post",immediate:!0}),{redoHeight:function(){L((()=>{d()}))},setCompensation:t=>{i=t},contentHeight:r}}var bt=F(d({name:"PageWrapper",components:{PageFooter:pt,PageHeader:gt},inheritAttrs:!1,props:{title:z.string,dense:z.bool,ghost:z.bool,content:z.string,contentStyle:{type:Object},contentBackground:z.bool,contentFullHeight:z.bool,contentClass:z.string,fixedHeight:z.bool,upwardSpace:z.oneOfType([z.number,z.string]).def(0),loading:z.bool,sticky:z.bool,stickyTop:z.string},setup(t,{slots:n,attrs:a}){const l=v(null),r=v(null),i=v(null),c=v(null),{prefixCls:u}=k("page-wrapper");D(yt,p((()=>t.fixedHeight)));const d=p((()=>t.contentFullHeight)),f=p((()=>t.upwardSpace)),{redoHeight:g,setCompensation:h,contentHeight:b}=ht(d,l,[r,c],[i],f);h({useLayoutFooter:!0,elements:[c]});const m=p((()=>{var e;return[u,{[`${u}--dense`]:t.dense},null!=(e=a.class)?e:{}]})),y=p((()=>t.content||(null==n?void 0:n.headerContent)||t.title||w.value.length)),C=p((()=>{var e;let o={};return t.sticky&&(o.position="sticky",o.zIndex=1,o.top=null!=(e=t.stickyTop)?e:"-60px",o.boxShadow="0 0 5px -2px"),o})),x=p((()=>(null==n?void 0:n.leftFooter)||(null==n?void 0:n.rightFooter))),w=p((()=>Object.keys(q(n,"default","leftFooter","rightFooter","headerContent")))),H=p((()=>{const{contentFullHeight:n,contentStyle:a,fixedHeight:l}=t;if(!n)return s({},a);const r=`${_(b)}px`;return s((i=s({},a),e(i,o({minHeight:r}))),l?{height:r}:{});var i})),O=p((()=>{const{contentBackground:e,contentClass:o}=t;return[`${u}-content`,o,{[`${u}-content-bg`]:e}]}));return I((()=>[x.value]),(()=>{g()}),{flush:"post",immediate:!0}),{getContentStyle:H,wrapperRef:l,headerRef:r,contentRef:i,footerRef:c,getClass:m,getHeaderSlots:w,prefixCls:u,getShowHeader:y,getHeaderStyle:C,getShowFooter:x,omit:q,getContentClass:O}}}),[["render",function(t,e,o,n,a,l){const r=N("PageHeader"),s=N("a-spin"),c=N("PageFooter");return P(),S("div",{class:B(t.getClass),ref:"wrapperRef"},[t.getShowHeader?(P(),Q(r,tt({key:0,ghost:t.ghost,title:t.title},t.omit(t.$attrs,"class"),{ref:"headerRef",style:t.getHeaderStyle}),V({default:U((()=>[t.content?(P(),S(K,{key:0},[Y(Z(t.content),1)],64)):R(t.$slots,"headerContent",{key:1})])),_:2},[G(t.getHeaderSlots,(e=>({name:e,fn:U((o=>[R(t.$slots,e,X(J(o||{})))]))})))]),1040,["ghost","title","style"])):et("",!0),$("div",{class:B(["overflow-hidden",t.getContentClass]),style:T(t.getContentStyle),ref:"contentRef"},[i(s,{spinning:t.loading},{default:U((()=>[R(t.$slots,"default")])),_:3},8,["spinning"])],6),t.getShowFooter?(P(),Q(c,{key:1,ref:"footerRef"},{left:U((()=>[R(t.$slots,"leftFooter")])),right:U((()=>[R(t.$slots,"rightFooter")])),_:3},512)):et("",!0)],2)}]]);ot(pt);const mt=ot(bt),yt="PageWrapperFixedHeight";export{mt as P,yt as a};
