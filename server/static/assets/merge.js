import{cS as n,cF as t,dh as r,dz as a,dq as o,ds as i,dk as s,dm as e,cG as f,dV as d,dW as u,dE as c,dc as v,ez as p,eA as l,dp as g,dX as m,dL as h,eB as _,eC as b}from"./index.js";import{g as j}from"./upperFirst.js";function y(n){for(var t=-1,r=null==n?0:n.length,a={};++t<r;){var o=n[t];a[o[0]]=o[1]}return a}function x(o,i,s){if(!n(s))return!1;var e=typeof i;return!!("number"==e?t(s)&&r(i,s.length):"string"==e&&i in s)&&a(s[i],o)}function z(n){return o((function(t,r){var a=-1,o=r.length,i=o>1?r[o-1]:void 0,s=o>2?r[2]:void 0;for(i=n.length>3&&"function"==typeof i?(o--,i):void 0,s&&x(r[0],r[1],s)&&(i=o<3?void 0:i,o=1),t=Object(t);++a<o;){var e=r[a];e&&n(t,e,a,i)}return t}))}function F(n,t,r){(void 0!==r&&!a(n[t],r)||void 0===r&&!(t in n))&&i(n,t,r)}function k(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function q(n){return s(n,e(n))}function w(t,r,a,o,i){t!==r&&j(r,(function(s,e){if(i||(i=new b),n(s))!function(t,r,a,o,i,s,e){var b=k(t,a),j=k(r,a),y=e.get(j);if(y)F(t,a,y);else{var x=s?s(b,j,a+"",t,r,e):void 0,z=void 0===x;if(z){var w=f(j),A=!w&&d(j),B=!w&&!A&&u(j);x=j,w||A||B?f(b)?x=b:c(b)?x=v(b):A?(z=!1,x=p(j,!0)):B?(z=!1,x=l(j,!0)):x=[]:g(j)||m(j)?(x=b,m(b)?x=q(b):n(b)&&!h(b)||(x=_(j))):z=!1}z&&(e.set(j,x),i(x,j,o,s,e),e.delete(j)),F(t,a,x)}}(t,r,e,a,w,o,i);else{var j=o?o(k(t,e),s,e+"",t,r,i):void 0;void 0===j&&(j=s),F(t,e,j)}}),e)}var A=z((function(n,t,r){w(n,t,r)}));export{w as b,z as c,y as f,x as i,A as m,q as t};
