import{c as a,cA as e,z as s,I as u,a7 as l,q as n,a6 as t,s as v,a0 as o}from"./index.js";function c(c,i="value",r="change",m){const d=o(),f=null==d?void 0:d.emit,g=a({value:c[i]}),p=e(g);s((()=>{g.value=c[i]}));return[u({get:()=>g.value,set(a){l(a,p.value)||(g.value=a,n((()=>{null==f||f(r,a,...t(v(m))||[])})))}}),a=>{g.value=a},p]}export{c as u};
