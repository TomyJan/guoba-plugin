import{c as a,cH as e,am as s,v as u,cs as l,q as v,bi as n,x as t,aB as c}from"./index.js";function i(i,o="value",r="change",m){const x=c(),d=null==x?void 0:x.emit,f=a({value:i[o]}),g=e(f);s((()=>{f.value=i[o]}));return[u({get:()=>f.value,set(a){l(a,g.value)||(f.value=a,v((()=>{null==d||d(r,a,...n(t(m))||[])})))}}),a=>{f.value=a},g]}export{i as u};
