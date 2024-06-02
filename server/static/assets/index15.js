import{b as a,aG as r,aT as e,ak as t,k as n,_ as s,ag as o,bR as u,bS as c,aQ as l,aN as i,ao as p,aF as m,af as f,bQ as d,ap as v}from"./index.js";var b=["class","style"],y=a({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:{prefixCls:String,href:String,separator:o.any,overlay:o.any,onClick:Function},slots:["separator","overlay"],setup:function(a,o){var l=o.slots,i=o.attrs,p=r("breadcrumb",a).prefixCls;return function(){var r,o,m,f,d,v=null!==(r=e(l,a,"separator"))&&void 0!==r?r:"/",y=e(l,a),h=i.class,R=i.style,A=t(i,b);return o=void 0!==a.href?n("a",s({class:"".concat(p.value,"-link"),onClick:a.onClick},A),[y]):n("span",s({class:"".concat(p.value,"-link"),onClick:a.onClick},A),[y]),m=o,f=p.value,o=(d=e(l,a,"overlay"))?n(c,{overlay:d,placement:"bottom"},{default:function(){return[n("span",{class:"".concat(f,"-overlay-link")},[m,n(u,null,null)])]}}):m,y?n("span",{class:h,style:R},[o,v&&n("span",{class:"".concat(p.value,"-separator")},[v])]):null}}});function h(a){var r=a.route,e=a.params,t=a.routes,s=a.paths,o=t.indexOf(r)===t.length-1,u=function(a,r){if(!a.breadcrumbName)return null;var e=Object.keys(r).join("|");return a.breadcrumbName.replace(new RegExp(":(".concat(e,")"),"g"),(function(a,e){return r[e]||a}))}(r,e);return o?n("span",null,[u]):n("a",{href:"#/".concat(s.join("/"))},[u])}var R=a({compatConfig:{MODE:3},name:"ABreadcrumb",props:{prefixCls:String,routes:{type:Array},params:o.any,separator:o.any,itemRender:{type:Function}},slots:["separator","itemRender"],setup:function(a,t){var s=t.slots,o=r("breadcrumb",a),u=o.prefixCls,c=o.direction,b=function(a,r){return a=(a||"").replace(/^\//,""),Object.keys(r).forEach((function(e){a=a.replace(":".concat(e),r[e])})),a},R=function(a,r,e){var t=v(a),n=b(r||"",e);return n&&t.push(n),t};return function(){var r,t,o,v=a.routes,A=a.params,C=void 0===A?{}:A,_=l(e(s,a)),g=null!==(r=e(s,a,"separator"))&&void 0!==r?r:"/",k=a.itemRender||s.itemRender||h;v&&v.length>0?o=function(a){var r=a.routes,e=void 0===r?[]:r,t=a.params,s=void 0===t?{}:t,o=a.separator,u=a.itemRender,c=void 0===u?h:u,l=[];return e.map((function(a){var r=b(a.path,s);r&&l.push(r);var t=[].concat(l),u=null;return a.children&&a.children.length&&(u=n(d,null,{default:function(){return[a.children.map((function(a){return n(d.Item,{key:a.path||a.breadcrumbName},{default:function(){return[c({route:a,params:s,routes:e,paths:R(t,a.path,s)})]}})}))]}})),n(y,{overlay:u,separator:o,key:r||a.breadcrumbName},{default:function(){return[c({route:a,params:s,routes:e,paths:t})]}})}))}({routes:v,params:C,separator:g,itemRender:k}):_.length&&(o=_.map((function(a,r){return i("object"===p(a.type)&&(a.type.__ANT_BREADCRUMB_ITEM||a.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),m(a,{separator:g,key:r})})));var B=(f(t={},u.value,!0),f(t,"".concat(u.value,"-rtl"),"rtl"===c.value),t);return n("div",{class:B},[o])}}}),A=["separator","class"],C=a({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:{prefixCls:String},setup:function(a,e){var o=e.slots,u=e.attrs,c=r("breadcrumb",a).prefixCls;return function(){var a;u.separator;var r=u.class,e=t(u,A),i=l(null===(a=o.default)||void 0===a?void 0:a.call(o));return n("span",s({class:["".concat(c.value,"-separator"),r]},e),[i.length>0?i:"/"])}}});R.Item=y,R.Separator=C,R.install=function(a){return a.component(R.name,R),a.component(y.name,y),a.component(C.name,C),a};export{R as B};
