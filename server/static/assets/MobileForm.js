import{b as e,ci as s,r as l,c as a,I as o,o as t,f as n,k as r,j as i,s as m,bM as u,bs as c,l as d,m as f,F as g,V as p,y as v}from"./index.js";import{C as b}from"./index7.js";import{u as y,a as x,_ as h,L as k,b as _}from"./LoginFormTitle.js";import"./useFormItem.js";const F=e({__name:"MobileForm",setup(e){const F=s.Item,{t:j}=v(),{handleBackLogin:C,getLoginState:I}=y(),{getFormRules:L}=x(),z=l(),B=l(!1),M=a({mobile:"",sms:""}),{validForm:w}=_(z),P=o((()=>m(I)===k.MOBILE));function R(){return e=this,s=null,l=function*(){const e=yield w();e&&console.log(e)},new Promise(((a,o)=>{var t=e=>{try{r(l.next(e))}catch(s){o(s)}},n=e=>{try{r(l.throw(e))}catch(s){o(s)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(t,n);r((l=l.apply(e,s)).next())}));var e,s,l}return(e,l)=>P.value?(t(),n(g,{key:0},[r(h,{class:"enter-x"}),r(m(s),{class:"p-4 enter-x",model:M,rules:m(L),ref_key:"formRef",ref:z},{default:i((()=>[r(m(F),{name:"mobile",class:"enter-x"},{default:i((()=>[r(m(u),{size:"large",value:M.mobile,"onUpdate:value":l[0]||(l[0]=e=>M.mobile=e),placeholder:m(j)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])])),_:1}),r(m(F),{name:"sms",class:"enter-x"},{default:i((()=>[r(m(b),{size:"large",class:"fix-auto-fill",value:M.sms,"onUpdate:value":l[1]||(l[1]=e=>M.sms=e),placeholder:m(j)("sys.login.smsCode")},null,8,["value","placeholder"])])),_:1}),r(m(F),{class:"enter-x"},{default:i((()=>[r(m(c),{type:"primary",size:"large",block:"",onClick:R,loading:B.value},{default:i((()=>[d(f(m(j)("sys.login.loginButton")),1)])),_:1},8,["loading"]),r(m(c),{size:"large",block:"",class:"mt-4",onClick:m(C)},{default:i((()=>[d(f(m(j)("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])],64)):p("",!0)}});export{F as default};
