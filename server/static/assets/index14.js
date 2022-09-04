import{b as r,G as e,U as a,k as t,N as n,T as o,bo as s,bp as l,O as c,bn as u,E as p,K as i,b0 as m,H as f,ag as b}from"./index.js";var d=globalThis&&globalThis.__rest||function(r,e){var a={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(r);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(a[t[n]]=r[t[n]])}return a},v=r({name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:{prefixCls:String,href:String,separator:o.any,overlay:o.any,onClick:Function},slots:["separator","overlay"],setup:function(r,o){var c=o.slots,u=o.attrs,p=e("breadcrumb",r).prefixCls;return function(){var e,o,i,m,f,b=null!==(e=a(c,r,"separator"))&&void 0!==e?e:"/",v=a(c,r),y=u.class,h=u.style,O=d(u,["class","style"]);return o=void 0!==r.href?t("a",n({class:"".concat(p.value,"-link"),onClick:r.onClick},O),[v]):t("span",n({class:"".concat(p.value,"-link"),onClick:r.onClick},O),[v]),i=o,m=p.value,o=(f=a(c,r,"overlay"))?t(l,{overlay:f,placement:"bottom"},{default:function(){return[t("span",{class:"".concat(m,"-overlay-link")},[i,t(s,null,null)])]}}):i,v?t("span",{class:y,style:h},[o,b&&t("span",{class:"".concat(p.value,"-separator")},[b])]):null}}});function y(r){var e=r.route,a=r.params,n=r.routes,o=r.paths,s=n.indexOf(e)===n.length-1,l=function(r,e){if(!r.breadcrumbName)return null;var a=Object.keys(e).join("|");return r.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(r,a){return e[a]||r}))}(e,a);return s?t("span",null,[l]):t("a",{href:"#/".concat(o.join("/"))},[l])}var h=r({name:"ABreadcrumb",props:{prefixCls:String,routes:{type:Array},params:o.any,separator:o.any,itemRender:{type:Function}},slots:["separator","itemRender"],setup:function(r,n){var o=n.slots,s=e("breadcrumb",r),l=s.prefixCls,d=s.direction,h=function(r,e){return r=(r||"").replace(/^\//,""),Object.keys(e).forEach((function(a){r=r.replace(":".concat(a),e[a])})),r},O=function(r,e,a){var t=b(r),n=h(e||"",a);return n&&t.push(n),t};return function(){var e,n,s,b=r.routes,g=r.params,_=void 0===g?{}:g,R=c(a(o,r)),A=null!==(n=a(o,r,"separator"))&&void 0!==n?n:"/",B=r.itemRender||o.itemRender||y;b&&b.length>0?s=function(r){var e=r.routes,a=void 0===e?[]:e,n=r.params,o=void 0===n?{}:n,s=r.separator,l=r.itemRender,c=void 0===l?y:l,p=[];return a.map((function(r){var e=h(r.path,o);e&&p.push(e);var n=[].concat(p),l=null;return r.children&&r.children.length&&(l=t(u,null,{default:function(){return[r.children.map((function(r){return t(u.Item,{key:r.path||r.breadcrumbName},{default:function(){return[c({route:r,params:o,routes:a,paths:O(n,r.path,o)})]}})}))]}})),t(v,{overlay:l,separator:s,key:e||r.breadcrumbName},{default:function(){return[c({route:r,params:o,routes:a,paths:n})]}})}))}({routes:b,params:_,separator:A,itemRender:B}):R.length&&(s=R.map((function(r,e){return p("object"===i(r.type)&&(r.type.__ANT_BREADCRUMB_ITEM||r.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),m(r,{separator:A,key:e})})));var C=(f(e={},l.value,!0),f(e,"".concat(l.value,"-rtl"),"rtl"===d.value),e);return t("div",{class:C},[s])}}}),O=globalThis&&globalThis.__rest||function(r,e){var a={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(r);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(a[t[n]]=r[t[n]])}return a},g=r({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:{prefixCls:String},setup:function(r,a){var o=a.slots,s=a.attrs,l=e("breadcrumb",r).prefixCls;return function(){var r;s.separator;var e=s.class,a=O(s,["separator","class"]),u=c(null===(r=o.default)||void 0===r?void 0:r.call(o));return t("span",n({class:["".concat(l.value,"-separator"),e]},a),[u.length>0?u:"/"])}}});h.Item=v,h.Separator=g,h.install=function(r){return r.component(h.name,h),r.component(v.name,v),r.component(g.name,g),r};export{h as B};
