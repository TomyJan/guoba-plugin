import{b as e,eN as t,s as r,o as a,f as s}from"./index.js";const p=e({__name:"index",setup(e){const{currentRoute:p,replace:n}=t(),{params:o,query:c}=r(p),{path:i,_redirect_type:y="path"}=o;Reflect.deleteProperty(o,"_redirect_type"),Reflect.deleteProperty(o,"path");const d=Array.isArray(i)?i.join("/"):i;return n("name"===y?{name:d,query:c,params:o}:{path:d.startsWith("/")?d:"/"+d,query:c}),(e,t)=>(a(),s("div"))}});export{p as default};
