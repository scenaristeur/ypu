if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const t=e=>r(e,o),l={module:{uri:o},exports:u,require:t};s[o]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(n(...e),u)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ypu"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/ypu/css/app.e2473a80.css",revision:null},{url:"/ypu/index.html",revision:"647164e24f8c408d35d5e7f699f4c0bb"},{url:"/ypu/js/about.3167c641.js",revision:null},{url:"/ypu/js/app.88dab912.js",revision:null},{url:"/ypu/js/chunk-vendors.97e2b1cb.js",revision:null},{url:"/ypu/manifest.json",revision:"8d6b95568920771ebe6e3a6c9c58398e"},{url:"/ypu/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
