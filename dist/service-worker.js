if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let u={};const t=e=>r(e,o),l={module:{uri:o},exports:u,require:t};s[o]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(n(...e),u)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ypu"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/ypu/css/app.cb778704.css",revision:null},{url:"/ypu/index.html",revision:"a28b3732d0828ed6f724ab085916e626"},{url:"/ypu/js/about.d36b28f9.js",revision:null},{url:"/ypu/js/app.308f6991.js",revision:null},{url:"/ypu/js/chunk-vendors.2eaac8ca.js",revision:null},{url:"/ypu/manifest.json",revision:"8d6b95568920771ebe6e3a6c9c58398e"},{url:"/ypu/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map