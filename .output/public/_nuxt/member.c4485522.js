import{r as f,x as _,D as b,a as v,f as g,b as x,e as n,t as u,E as w,B as S,o as h}from"./entry.c8ed32d1.js";import{u as k}from"./composables.1d9c340e.js";import{u as C}from"./fetch.7895281b.js";const D=decodeURIComponent,E=encodeURIComponent,T=/; */,p=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function A(t,i){if(typeof t!="string")throw new TypeError("argument str must be a string");let o={},e=i||{},l=t.split(T),a=e.decode||D;for(let s=0;s<l.length;s++){let d=l[s],m=d.indexOf("=");if(m<0)continue;let r=d.substr(0,m).trim(),c=d.substr(++m,d.length).trim();c[0]=='"'&&(c=c.slice(1,-1)),o[r]==null&&(o[r]=R(c,a))}return o}function y(t,i,o){let e=o||{},l=e.encode||E;if(typeof l!="function")throw new TypeError("option encode is invalid");if(!p.test(t))throw new TypeError("argument name is invalid");let a=l(i);if(a&&!p.test(a))throw new TypeError("argument val is invalid");let s=t+"="+a;if(e.maxAge!=null){let d=e.maxAge-0;if(isNaN(d)||!isFinite(d))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(d)}if(e.domain){if(!p.test(e.domain))throw new TypeError("option domain is invalid");s+="; Domain="+e.domain}if(e.path){if(!p.test(e.path))throw new TypeError("option path is invalid");s+="; Path="+e.path}if(e.expires){if(typeof e.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(s+="; HttpOnly"),e.secure&&(s+="; Secure"),e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function R(t,i){try{return i(t)}catch{return t}}const M={path:"/",watch:!0,decode:t=>b(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))};function N(t,i){var a;const o={...M,...i},e=U(o)||{},l=f(e[t]??((a=o.default)==null?void 0:a.call(o)));{const s=()=>{L(t,l.value,o)};o.watch?_(l,s,{deep:o.watch!=="shallow"}):s()}return l}function U(t={}){return A(document.cookie,t)}function I(t,i,o={}){return i==null?y(t,i,{...o,maxAge:-1}):y(t,i,o)}function L(t,i,o={}){document.cookie=I(t,i,o)}const B={setup(){let t=g("memberData");const i=f("");let o=0,e=g("apiCalled",()=>!1);return(async()=>{if(e.value)return;o=f(Math.round(Math.random()*1e3));const{data:a,pending:s,error:d,refresh:m}=await C("/api/memberApi","$9mlpF05ZZa");return e.value=!0,i.value=new Date,t.value=a.value,k({title:()=>{var r;return(r=a.value)==null?void 0:r.name},description:()=>{var r;return(r=a.value)==null?void 0:r.about},ogTitle:()=>{var r;return(r=a.value)==null?void 0:r.name},ogDescription:()=>{var r;return(r=a.value)==null?void 0:r.about}}),a.value})(),{memberData:t,getDataTime:i,count:o,logout:function(){const a=N("auth",{maxAge:60});a.value=null;const s=g("isLogin");s.value=!1,S().push("/home")}}}},F={class:"px-4 sm:px-0"},O=n("h3",{class:"text-base font-semibold leading-7 text-gray-900"}," Member Information ",-1),V=n("p",{class:"mt-1 max-w-2xl text-sm leading-6 text-gray-500"}," Personal details. ",-1),z={class:"mt-6 border-t border-gray-100"},P={key:0,class:"divide-y divide-gray-100"},Z={class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},j=n("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Full name",-1),q={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},H={class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},J=n("dt",{class:"text-sm font-medium leading-6 text-gray-900"}," Email address ",-1),G={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},K={class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},Q=n("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"Address",-1),W={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"},X={class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"},Y=n("dt",{class:"text-sm font-medium leading-6 text-gray-900"},"About",-1),$={class:"mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"};function ee(t,i,o,e,l,a){return h(),x("div",null,[n("div",F,[n("div",null,[n("button",{onClick:i[0]||(i[0]=(...s)=>e.logout&&e.logout(...s)),class:"float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}," Logout ")]),O,V]),n("div",z,[e.memberData?(h(),x("dl",P,[n("div",Z,[j,n("dd",q,u(e.memberData.name),1)]),n("div",H,[J,n("dd",G,u(e.memberData.email),1)]),n("div",K,[Q,n("dd",W,u(e.memberData.address),1)]),n("div",X,[Y,n("dd",$,u(e.memberData.about),1)])])):w("",!0)])])}const ie=v(B,[["render",ee]]);export{ie as default};
