import{a as e,b as t,eW as o,d0 as a,eS as s,eD as i,Q as n,r,G as l,cT as u,o as f,i as p,j as c,ae as h,k as d,U as b,f as g,m,R as _,s as v,x as C,e as F,cW as k,cX as x}from"./index.js";import{D as y,G as j,S as I}from"./siteSetting.js";import{a as S}from"./useContentViewHeight.js";import{G as w}from"./GithubFilled.js";import"./useWindowSizeFn.js";const G=t({name:"LayoutFooter",components:{Footer:o.Footer,GithubFilled:w},setup(){const{t:e}=v(),t=a(),{getShowFooter:o}=s(),{currentRoute:f}=i(),{prefixCls:p}=n("layout-footer"),c=r(null),{setFooterHeight:h}=S();return{getShowLayoutFooter:l((()=>{var e,t;if(C(o)){const t=null==(e=C(c))?void 0:e.$el;h((null==t?void 0:t.offsetHeight)||0)}else h(0);return C(o)&&!(null==(t=C(f).meta)?void 0:t.hiddenFooter)})),prefixCls:p,t:e,ICPNo:l((()=>{var e;return null!=(e=null==t?void 0:t.ICPNo)?e:""})),DOC_URL:y,GITHUB_URL:j,SITE_URL:I,openWindow:u,footerRef:c}}}),L=e=>(k("data-v-a63e5ebc"),e=e(),x(),e),R=L((()=>h("a",{href:"https://oicqjs.github.io/oicq/",target:"_blank"},"OICQ文档",-1))),z=L((()=>h("a",{href:"https://github.com/Le-niao/Yunzai-Bot",target:"_blank"},"Yunzai-Bot",-1))),U=[L((()=>h("span",null,"Copyright ©2022",-1))),L((()=>h("a",{href:"https://github.com/zolay-poi",target:"_blank"}," Zolay-poi ",-1))),L((()=>h("span",null," & ",-1))),L((()=>h("a",{href:"https://github.com/vbenjs/vue-vben-admin",target:"_blank"}," Vben Admin ",-1)))],W={href:"https://beian.miit.gov.cn/",target:"_blank"};var $=e(G,[["render",function(e,t,o,a,s,i){const n=F("GithubFilled"),r=F("Footer");return e.getShowLayoutFooter?(f(),p(r,{key:0,class:b(e.prefixCls),ref:"footerRef"},{default:c((()=>[h("div",{class:b(`${e.prefixCls}__links`)},[R,d(n,{class:b(`${e.prefixCls}__github`),onClick:t[0]||(t[0]=t=>e.openWindow("https://github.com/guoba-yunzai"))},null,8,["class"]),z],2),h("div",{class:b(`${e.prefixCls}__links`)},U,2),e.ICPNo?(f(),g("div",{key:0,class:b(`${e.prefixCls}__links`)},[h("a",W,m(e.ICPNo),1)],2)):_("",!0)])),_:1},8,["class"])):_("",!0)}],["__scopeId","data-v-a63e5ebc"]]);export{$ as default};
