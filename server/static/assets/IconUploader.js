import{d as e,p as a}from"./esm.js";import{a as t,b as l,r as s,e as o,o as i,i as n,j as d,v as c,s as r,f as u,O as p,k as v,l as f,V as m,M as g,d0 as b,d1 as y}from"./index.js";const w=e=>(b("data-v-6c02f74e"),e=e(),y(),e),h={class:"frame"},k={key:1},x={class:"wrap"},L=w((()=>c("div",null,"替换",-1))),_={class:"wrap"},I=w((()=>c("input",{type:"file",id:"upload1",style:{display:"none"},name:"icon",accept:"image/bmp,image/jpeg,image/png"},null,-1))),R={key:0},j=w((()=>c("div",{class:"tip"},"请使图片尽量填满取景框",-1)));var B=t(l({__name:"IconUploader",props:{uploader:Object,iconB64List:Array},setup(t){const l=t,b=s(null),y=()=>{let e=document.getElementById("upload1");void 0===e.bind&&(e.bind=!0,e.addEventListener("change",(e=>{let a=e.target.files;if(0!==a.size){let e=a[0],t=new FileReader;t.readAsDataURL(e),t.onload=()=>{b.value=t.result}}}))),e.click()},w=()=>{let e=l.uploader.selected;a.getFile().then((a=>{let t=document.createElement("canvas");t.width=100,t.height=100;let s=new FileReader;s.onload=function(){let a=t.getContext("2d"),o=new Image;o.src=s.result,o.onload=function(){a.textAlign="center",a.font="bold 14px sans-serif",a.drawImage(o,0,0,80,80),a.fillText(e,40,95),l.iconB64List[e]=t.toDataURL(),b.value=null}},s.readAsDataURL(a)}))};return document.getElementById("upload1"),(a,l)=>{const s=o("a-button");return i(),n(r(g),{visible:t.uploader.show,"onUpdate:visible":l[0]||(l[0]=e=>t.uploader.show=e),width:"420px",closable:!1,footer:null},{default:d((()=>[c("div",h,[b.value?(i(),n(r(e),{key:0,boxStyle:{height:"300px",width:"100%",backgroundColor:"#f8f8f8"},img:b.value,options:{viewMode:1,dragMode:"move",aspectRatio:1}},null,8,["img"])):(i(),u("div",k,[c("div",x,[L,c("div",{class:"icon",style:p(`background: url(${t.iconB64List[t.uploader.selected]}) 0 0 no-repeat`)},null,4)])])),c("div",_,[I,v(s,{block:"",type:"info",onClick:y},{default:d((()=>[f("选择图片")])),_:1}),b.value?(i(),u("div",R,[v(s,{block:"",type:"success",onClick:w},{default:d((()=>[f("确定")])),_:1}),j])):m("",!0)])])])),_:1},8,["visible"])}}}),[["__scopeId","data-v-6c02f74e"]]);export{B as default};
