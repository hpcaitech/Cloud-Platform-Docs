"use strict";(self.webpackChunkcloud_platform_documentation=self.webpackChunkcloud_platform_documentation||[]).push([[613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=l,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={slug:"\u5fae\u8c03llama2\u6a21\u578b",title:"\u5fae\u8c03llama2\u6a21\u578b",authors:{name:"Ziyuan Cui",title:"ColossalAI Platform Team"},tags:["llama2 ColossalChat"]},o="\u5fae\u8c03 llama2 \u6a21\u578b",i={permalink:"/blog/\u5fae\u8c03llama2\u6a21\u578b",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-07-28-finetune-llama2/index.md",source:"@site/blog/2023-07-28-finetune-llama2/index.md",title:"\u5fae\u8c03llama2\u6a21\u578b",description:"\u4ecb\u7ecd",date:"2023-07-28T00:00:00.000Z",formattedDate:"July 28, 2023",tags:[{label:"llama2 ColossalChat",permalink:"/blog/tags/llama-2-colossal-chat"}],readingTime:6.91,hasTruncateMarker:!1,authors:[{name:"Ziyuan Cui",title:"ColossalAI Platform Team"}],frontMatter:{slug:"\u5fae\u8c03llama2\u6a21\u578b",title:"\u5fae\u8c03llama2\u6a21\u578b",authors:{name:"Ziyuan Cui",title:"ColossalAI Platform Team"},tags:["llama2 ColossalChat"]}},p={authorsImageUrls:[void 0]},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6d41\u7a0b\u8be6\u89e3",id:"\u6d41\u7a0b\u8be6\u89e3",level:2},{value:"1. \u51c6\u5907\u548c\u521b\u5efa\u5bf9\u8bdd\u6570\u636e\u96c6",id:"1-\u51c6\u5907\u548c\u521b\u5efa\u5bf9\u8bdd\u6570\u636e\u96c6",level:3},{value:"2. \u4e0a\u4f20\u6570\u636e\u96c6",id:"2-\u4e0a\u4f20\u6570\u636e\u96c6",level:3},{value:"3. \u521b\u5efa\u8bad\u7ec3\u4efb\u52a1",id:"3-\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1",level:3},{value:"4. \u76d1\u63a7\u8bad\u7ec3\u4efb\u52a1",id:"4-\u76d1\u63a7\u8bad\u7ec3\u4efb\u52a1",level:3},{value:"5. \u5904\u7406\u8bad\u7ec3\u8f93\u51fa\u6587\u4ef6",id:"5-\u5904\u7406\u8bad\u7ec3\u8f93\u51fa\u6587\u4ef6",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"ColossalAI \u5e73\u53f0\u662f\u4e00\u4e2a\u5168\u6258\u7ba1\u7684\u673a\u5668\u5b66\u4e60\u5e73\u53f0\uff0c\u5b83\u65e0\u7f1d\u5730\u7ed3\u5408\u5f3a\u5927\u7684\u8ba1\u7b97\u80fd\u529b\u548c\u6700\u5148\u8fdb\u7684\u5927\u6a21\u578b\u52a0\u901f\u548c\u4f18\u5316\u6846\u67b6 ColossalAI\u3002\u5e73\u53f0\u63d0\u4f9b\u4e86\u591a\u4e2a\u5927\u6a21\u578b\u8bad\u7ec3\u6a21\u7248\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u4ee5\u65e0\u4ee3\u7801\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u53ea\u4e0a\u4f20\u6570\u636e\u96c6\uff0c\u6765\u5b8c\u6210\u5927\u6a21\u578b\u7684\u5fae\u8c03\u6216\u9884\u8bad\u7ec3\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u8bb2\u89e3\u5982\u4f55\u901a\u8fc7\u5e73\u53f0\u63d0\u4f9b\u7684 ColossalChat \u6a21\u7248\uff0c\u5728\u7528\u6237\u63d0\u4f9b\u7684\u6570\u636e\u4e0a\u5fae\u8c03\u4e00\u4e2a llama2 \u6a21\u578b\u3002"),(0,l.kt)("h2",{id:"\u6d41\u7a0b\u8be6\u89e3"},"\u6d41\u7a0b\u8be6\u89e3"),(0,l.kt)("h3",{id:"1-\u51c6\u5907\u548c\u521b\u5efa\u5bf9\u8bdd\u6570\u636e\u96c6"},"1. \u51c6\u5907\u548c\u521b\u5efa\u5bf9\u8bdd\u6570\u636e\u96c6"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u540d\uff0c\u6253\u5f00\u6587\u4ef6\u5939\u4e4b\u540e\uff0c\u5728\u91cc\u9762\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"data.json"),"\u7684\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u60a8\u7684\u5bf9\u8bdd\u6570\u636e\u96c6\u3002"),(0,l.kt)("p",null,"\u8bf7\u53c2\u7167\u4ee5\u4e0b json \u683c\u5f0f\u6765\u6784\u5efa\u60a8\u7684\u5bf9\u8bdd\u6570\u636e\u96c6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "instruction": "Give three tips for staying healthy.",\n    "input": "",\n    "output": "1.Eat a balanced diet and make sure to include plenty of fruits and vegetables. \\n2. Exercise regularly to keep your body active and strong. \\n3. Get enough sleep and maintain a consistent sleep schedule."\n  },\n  {\n    "instruction": "What are the three primary colors?",\n    "input": "",\n    "output": "The three primary colors are red, blue, and yellow."\n  }\n]\n')),(0,l.kt)("h3",{id:"2-\u4e0a\u4f20\u6570\u636e\u96c6"},"2. \u4e0a\u4f20\u6570\u636e\u96c6"),(0,l.kt)("p",null,"\u51c6\u5907\u597d\u672c\u5730\u7684\u6570\u636e\u96c6",(0,l.kt)("inlineCode",{parentName:"p"},"data.json"),"\u4e4b\u540e\u3002\u70b9\u51fb\u5de6\u8fb9\u7684",(0,l.kt)("strong",{parentName:"p"},"\u6570\u636e"),"\u680f\uff0c\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u6570\u636e\u96c6"),"\u3002\n",(0,l.kt)("img",{src:a(9665).Z,width:"2668",height:"1330"})),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u4e0a\u4f20\u6570\u636e\u96c6"),"\u754c\u9762\uff0c\u586b\u5199\u6570\u636e\u96c6\u540d\u79f0\u3001\u6570\u636e\u96c6\u63cf\u8ff0\uff0c\u5728",(0,l.kt)("strong",{parentName:"p"},"\u4e0a\u4f20\u60a8\u7684\u6570\u636e\u96c6"),"\u533a\u57df\uff0c\u9009\u62e9\u4e0a\u4f20\u60a8\u672c\u5730\u7684\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"data.json"),"\u7684\u6587\u4ef6\u5939\uff0c\u6700\u540e\u70b9\u51fb\u4e0a\u4f20\u6309\u94ae\u3002\n",(0,l.kt)("img",{src:a(6744).Z,width:"2654",height:"1382"})),(0,l.kt)("p",null,"\u4e0a\u4f20\u6210\u529f\u540e\uff0c\u60a8\u5c06\u4f1a\u5728\u6570\u636e\u96c6\u8be6\u60c5\u754c\u9762\u770b\u5230\u60a8\u5df2\u7ecf\u4e0a\u4f20\u5b8c\u6210\u7684\u6570\u636e\u6587\u4ef6\u3002\u60a8\u53ef\u4ee5\u5bf9\u8fd9\u4e2a\u6570\u636e\u96c6\u7684\u6587\u4ef6\u8fdb\u884c\u7ba1\u7406\uff0c\u4f8b\u5982\u6dfb\u52a0\u6587\u4ef6\uff0c\u4e0b\u8f7d\u6587\u4ef6\uff0c\u5220\u9664\u6587\u4ef6\u7b49\u7b49\u3002\n",(0,l.kt)("img",{src:a(5156).Z,width:"2660",height:"1140"})),(0,l.kt)("h3",{id:"3-\u521b\u5efa\u8bad\u7ec3\u4efb\u52a1"},"3. \u521b\u5efa\u8bad\u7ec3\u4efb\u52a1"),(0,l.kt)("p",null,"\u70b9\u51fb\u5de6\u8fb9\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u52a1"),"\u8fb9\u680f\uff0c\u5e76\u5728\u53f3\u4e0a\u89d2\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u5efa\u4efb\u52a1"),"\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u52a1"),"\u754c\u9762\uff0c\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u6a21\u7248"),"\u521b\u5efa\u4efb\u52a1\u7684\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u8bad\u7ec3\u8bbe\u7f6e"),"\u754c\u9762\uff0c\u586b\u5199\u4efb\u52a1\u540d\u79f0\u3001\u4efb\u52a1\u63cf\u8ff0\uff0c\u5728\u6a21\u7248\u9009\u9879\u91cc\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"p"},"colossalai/ColossalChat"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6240\u6709\u524d\u7f00\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"colossalai/"),"\u7684\u6a21\u578b\u90fd\u662f ColossalAI \u5b98\u65b9\u63d0\u4f9b\u7684\u6a21\u578b")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(60).Z,width:"2634",height:"1152"})),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u8d85\u53c2\u6570"),"\u754c\u9762\uff0c\u9009\u62e9\u60a8\u9700\u8981\u7684\u8d85\u53c2\u6570\u914d\u7f6e\uff0c\u4f8b\u5982\u6a21\u578b\u7c7b\u578b\u9009\u62e9\u3001\u8bad\u7ec3\u7b56\u7565\u9009\u62e9\u3001epoch \u6570\u76ee\u7b49\u7b49\u3002\u5982\u65e0\u7279\u6b8a\u9700\u6c42\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u3002\n",(0,l.kt)("img",{src:a(6239).Z,width:"2630",height:"1328"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pretrain_model_path\uff1a\uff08\u9009\u586b\uff09\u5982\u679c\u60a8\u6ca1\u6709\u5728",(0,l.kt)("strong",{parentName:"li"},"\u8bad\u7ec3\u8bbe\u7f6e"),"\u4e2d\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"},"\u6a21\u578b"),"\uff0c\u4fbf\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e2a\u9009\u9879\u3002\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4fdd\u6301\u9ed8\u8ba4\u8bbe\u7f6e\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u60f3\u8981\u4ece\u81ea\u5b9a\u4e49\u9884\u8bad\u7ec3\u6a21\u578b\u5f00\u59cb\u8bad\u7ec3\uff0c\u9700\u8981\u5148\u5728",(0,l.kt)("strong",{parentName:"li"},"\u6a21\u578b"),"\u754c\u9762\u4e0a\u4f20\u6216\u8005\u5728\u8bad\u7ec3\u540e\u6ce8\u518c\u60a8\u7684\u9884\u8bad\u7ec3\u6a21\u578b\uff0c\u5e76\u5728\u5728\u8fd9\u91cc\u586b\u5199\u60a8\u7684\u9884\u8bad\u7ec3\u6a21\u578b\u7684\u8def\u5f84\u3002\u8def\u5f84\u683c\u5f0f\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"$(MODEL_DIR)/[\u6a21\u578b\u76f8\u5bf9\u8def\u5f84]"),"\u3002\u9884\u8bad\u7ec3\u6a21\u578b\u7684\u76f8\u5bf9\u8def\u5f84\u4e3a\u60a8\u5728",(0,l.kt)("strong",{parentName:"li"},"\u6a21\u578b"),"\u754c\u9762\u4e0a\u4e0a\u4f20\u7684\u6a21\u578b\u7684\u5728\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"/root/"),"\u4e4b\u540e\u7684\uff09\u76f8\u5bf9\u8def\u5f84\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u6a21\u578b\u6587\u4ef6\u5728",(0,l.kt)("strong",{parentName:"li"},"\u6a21\u578b\u8be6\u60c5"),"\u754c\u9762\u7684\u8def\u5f84\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"root/pretrain/"),",\u8fd9\u91cc\u60a8\u9700\u8981\u586b\u5199",(0,l.kt)("inlineCode",{parentName:"li"},"$(MODEL_DIR)/pretrain"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5e73\u53f0\u63d0\u4f9b\u7684\u955c\u50cf\u5185\u7f6e\u4e86\u4ece HuggingFace \u4e0b\u8f7d\u7684\u9884\u8bad\u7ec3\u6a21\u578b\uff0c\u5982\u679c\u60a8\u9009\u62e9\u7528\u955c\u50cf\u5185\u7f6e\u7684\u6a21\u578b\uff0c\u8bf7\u4fdd\u6301\u9ed8\u8ba4\u914d\u7f6e\u3002"))),(0,l.kt)("li",{parentName:"ul"},"dataset_path\uff1a\u8fd9\u91cc\u586b\u5199\u60a8\u7684\u6570\u636e\u96c6\u7684\u8def\u5f84\u3002\u8def\u5f84\u683c\u5f0f\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"$(DATASET_DIR)/[\u6a21\u578b\u76f8\u5bf9\u8def\u5f84]"),"\u3002\u6570\u636e\u96c6\u6a21\u578b\u7684\u76f8\u5bf9\u8def\u5f84\u4e3a\u60a8\u5728",(0,l.kt)("strong",{parentName:"li"},"\u6570\u636e\u96c6"),"\u754c\u9762\u4e0a\u4e0a\u4f20\u7684\u6570\u636e\u7684\u5728\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"/root/"),"\u4e4b\u540e\u7684\uff09\u76f8\u5bf9\u8def\u5f84\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u6570\u636e\u96c6\u6587\u4ef6\u5728",(0,l.kt)("strong",{parentName:"li"},"\u6570\u636e\u96c6\u8be6\u60c5"),"\u754c\u9762\u7684\u8def\u5f84\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"root/data.json"),",\u8fd9\u91cc\u60a8\u9700\u8981\u586b\u5199",(0,l.kt)("inlineCode",{parentName:"li"},"$(DATASET_DIR)/data.json"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"model_type\uff1a\u5927\u8bed\u8a00\u6a21\u578b\u7c7b\u578b\uff0c\u8fd9\u91cc\u6211\u4eec\u5728\u63d0\u4f9b\u4e86 bloom-350m\u3001opt\u3001gpt2 \u548c llama2 \u56db\u79cd\u6a21\u578b\u3002\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u8bf7\u9009\u62e9 llama\u3002"),(0,l.kt)("li",{parentName:"ul"},"strategy\uff1aColossalAI \u4f18\u5316\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},"log_interval\uff1a\u65e5\u5fd7\u6253\u5370\u7684\u9891\u7387"),(0,l.kt)("li",{parentName:"ul"},"batch_size\uff1a\u6279\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"max_len\uff1a\u6700\u5927\u957f\u5ea6\u5e8f\u5217"),(0,l.kt)("li",{parentName:"ul"},"lora_rank"),(0,l.kt)("li",{parentName:"ul"},"accumulation_steps\uff1a\u7d2f\u8ba1\u68af\u5ea6\u7684\u6b65\u6570"),(0,l.kt)("li",{parentName:"ul"},"lr\uff1a\u5b66\u4e60\u7387"),(0,l.kt)("li",{parentName:"ul"},"max_dataset_size\uff1a\u6700\u5927\u6570\u636e\u96c6\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"max_epochs\uff1a\u8bad\u7ec3\u8f6e\u6570")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u6570\u636e\u96c6"),"\u9009\u9879\uff0c\u8bf7\u9009\u62e9\u60a8\u4e4b\u524d\u521b\u5efa\u597d\u7684\u6570\u636e\u96c6\u3002\n",(0,l.kt)("strong",{parentName:"p"},"\u6a21\u578b"),"\u4e3a\u53ef\u9009\u9009\u9879\uff0c\u5982\u679c\u60a8\u5728\u5e73\u53f0\u5185\u5df2\u7ecf\u6ce8\u518c\u8fc7\uff0c\u6216\u8005\u4e0a\u4f20\u6a21\u578b\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u7684\u9009\u62e9\u60a8\u4ee5\u62e5\u6709\u7684\u6a21\u578b\u6587\u4ef6\u3002\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4e0d\u9009\u62e9\u4efb\u4f55\u6a21\u578b\u3002\n",(0,l.kt)("img",{src:a(8770).Z,width:"2640",height:"1170"}),"\n\u5728",(0,l.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u8bbe\u7f6e"),"\uff0c\u9009\u62e9\u60a8\u6240\u9700\u8981\u7684\u673a\u5668\u7c7b\u578b\uff0c\u548c\u673a\u5668\u6570\u91cf\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u7684\u673a\u5668\u7684 GPU \u5361\u95f4\u4f1a\u5229\u7528 Nvlink \u8fdb\u884c\u52a0\u901f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u9009\u62e9\u4e86\u591a\u53f0\u673a\u5668\uff0c\u673a\u5668\u4e4b\u524d\u5c06\u901a\u8fc7 RDMA \u8fdb\u884c\u8bad\u7ec3\u52a0\u901f\u3002")),(0,l.kt)("p",null,"\u5f53\u60a8\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u8bf7\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u542f\u52a8\u4efb\u52a1"),"\u6309\u94ae\u3002"),(0,l.kt)("h3",{id:"4-\u76d1\u63a7\u8bad\u7ec3\u4efb\u52a1"},"4. \u76d1\u63a7\u8bad\u7ec3\u4efb\u52a1"),(0,l.kt)("p",null,"\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u65e5\u5fd7"),"\u7684\u9009\u9879\uff0c\u6765\u67e5\u770b\u5f53\u524d\u7684\u65e5\u5fd7\u8fdb\u5ea6\u3002\n",(0,l.kt)("img",{src:a(370).Z,width:"3798",height:"1676"})),(0,l.kt)("p",null,"\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u6307\u6807"),"\u7684\u9009\u9879\uff0c\n",(0,l.kt)("img",{src:a(1499).Z,width:"1280",height:"548"})),(0,l.kt)("h3",{id:"5-\u5904\u7406\u8bad\u7ec3\u8f93\u51fa\u6587\u4ef6"},"5. \u5904\u7406\u8bad\u7ec3\u8f93\u51fa\u6587\u4ef6"),(0,l.kt)("p",null,"\u8bad\u7ec3\u7ed3\u675f\u540e\uff0c\u60a8\u53ef\u4ee5\u5728",(0,l.kt)("strong",{parentName:"p"},"\u4efb\u52a1\u8be6\u60c5"),"\u754c\u9762\u7684",(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\u6587\u4ef6"),"\u9009\u9879\u5361\u4e2d\u770b\u5230\u8bad\u7ec3\u7684\u8f93\u51fa\u6587\u4ef6\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u4e0b\u8f7d\u8fd9\u4e9b\u6587\u4ef6\uff0c\u6216\u8005\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u518c\u6a21\u578b"),"\u6765\u6ce8\u518c\u60a8\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint/"),"\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\uff0c\u6ce8\u518c\u540e\u7684\u6a21\u578b\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("strong",{parentName:"p"},"\u6a21\u578b"),"\u754c\u9762\u770b\u5230\u6ce8\u518c\u540e\u7684\u6a21\u578b\u6587\u4ef6\u76ee\u5f55\u3002"),(0,l.kt)("p",null,"\u8f93\u51fa\u6587\u4ef6\u5c06\u5305\u62ec\u4e00\u4e0b\u51e0\u79cd\u6587\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checkpoint/pretrain"),"\uff1a\u8bad\u7ec3\u540e\u7684\u4ea7\u751f\u7684\u6a21\u578b\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checkpoint/optm_ckpt"),": \u4f18\u5316\u5668\u7684 checkpoint \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tensorboard/"),"\uff1a\u8bad\u7ec3\u4ea7\u751f\u7684 tensoborad \u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"master-0.txt"),"\uff1amaster \u8282\u70b9\u4ea7\u751f\u7684\u65e5\u5fd7\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"worker-1.txt"),"\uff1a\u7b2c\u4e00\u4e2a worker \u8282\u70b9\u4ea7\u751f\u7684\u65e5\u5fd7\u6587\u4ef6")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(4919).Z,width:"3810",height:"1112"})),(0,l.kt)("p",null,"\u6a21\u578b\u6ce8\u518c\u4e4b\u540e\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("strong",{parentName:"p"},"\u6a21\u578b"),"\u754c\u9762\uff0c\u7ba1\u7406\u5f53\u524d\u6a21\u578b\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u3002\n",(0,l.kt)("img",{src:a(5040).Z,width:"2666",height:"772"})))}u.isMDXComponent=!0},6744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-dataset-7d885d1d00a46d7dd747f20b1fa0e91c.png"},9665:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-panel-bc525360e01fe68666734b859c330da8.png"},5156:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataset-upload-success-4cf16c0649612fdb0a7749f7b20fd2b2.png"},6239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hyperparameters-3dce7bcf89e46f71e8971641588c2de2.png"},60:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/llama2-create-job-1-457580c35be60a4b8519403544266783.png"},8770:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/llama2-create-job-2-705f7b2e9f59308d8f3fa08b50642c78.png"},370:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/log-stream-a826d651853f6f642f4018333b6a419e.png"},5040:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/model-info-28acfcc02e0913287ddedc0f78eb06be.png"},4919:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/register-model-4d6a7e28c1cdc43141013c3539b89182.png"},1499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tensorboard-cac46708c6490dc9820fa63eab61739f.png"}}]);