import{b as a,r as s,o as t,i as e,j as i,f as r,k as o,V as b,X as n,s as p,fB as l}from"./index.js";import u from"./VisitAnalysis.js";import m from"./VisitAnalysisBar.js";import"./useECharts.js";import"./props.js";const y={key:0},f={key:1},k=a({__name:"SiteAnalysis",setup(a){const k=s("tab1"),j=[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}];function v(a){k.value=a}return(a,s)=>(t(),e(p(l),n({"tab-list":j},a.$attrs,{"active-tab-key":k.value,onTabChange:v}),{default:i((()=>["tab1"===k.value?(t(),r("p",y,[o(u)])):b("",!0),"tab2"===k.value?(t(),r("p",f,[o(m)])):b("",!0)])),_:1},16,["active-tab-key"]))}});export{k as default};
