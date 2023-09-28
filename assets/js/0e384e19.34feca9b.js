"use strict";(self.webpackChunkcloud_platform_documentation=self.webpackChunkcloud_platform_documentation||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},c="\u7b80\u4ecb",i={unversionedId:"intro",id:"intro",title:"\u7b80\u4ecb",description:"Colossal-AI\u4e91\u5e73\u53f0\u662f\u4e00\u4e2aML Ops\u5e73\u53f0\uff0c\u81f4\u529b\u4e8e\u4e3a\u7528\u6237\u63d0\u4f9b\u89c4\u8303\u3001\u9ad8\u6548\u7684\u6a21\u578b\u8bad\u7ec3\u4ee5\u53ca\u90e8\u7f72\u4f53\u9a8c\u3002",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"\u6570\u636e\u96c6\u7ba1\u7406",permalink:"/docs/basics/datasets"}},l={},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"Colossal-AI\u4e91\u5e73\u53f0\u662f\u4e00\u4e2aML Ops\u5e73\u53f0\uff0c\u81f4\u529b\u4e8e\u4e3a\u7528\u6237\u63d0\u4f9b\u89c4\u8303\u3001\u9ad8\u6548\u7684\u6a21\u578b\u8bad\u7ec3\u4ee5\u53ca\u90e8\u7f72\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u5c06\u5e26\u60a8\u4f53\u9a8c\u4e91\u5e73\u53f0\u4e0a\u7684\u5404\u4e2a\u529f\u80fd\u3002\u76ee\u524d\u4e91\u5e73\u53f0\u4ecd\u5904\u5728\u5f00\u53d1\u9636\u6bb5\u4e2d\uff0c\u6211\u4eec\u4ecd\u5728\u4e0d\u65ad\u6253\u78e8\u529f\u80fd\uff0c\u5982\u679c\u60a8\u6709\u53d1\u73b0\u4efb\u4f55\u95ee\u9898\u6216\u8005\u6709\u4efb\u4f55\u5efa\u8bae\uff0c\u6b22\u8fce\u5728\u6211\u4eec\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hpcaitech/ColossalAI-Platform-CLI"},"CLI\u4ed3\u5e93"),"\u4e0b\u63d0\u51fa\u60a8\u7684issue\u6216\u8005feature request\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u5904\u7406\uff0c\u8c22\u8c22\uff01"))}f.isMDXComponent=!0}}]);