(function(){"use strict";var e={957:function(e,o,t){var n=t(9242),r=t(3396);function i(e,o){const t=(0,r.up)("router-link"),n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(t,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r.Wm)(n)],64)}var s=t(89);const u={},a=(0,s.Z)(u,[["render",i]]);var c=a,l=t(5431);(0,l.z)("/ypu/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("new update, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=t(2483);const f={class:"home"};function m(e,o,t,n,i,s){const u=(0,r.up)("WebsocketBus"),a=(0,r.up)("MemoryAdd"),c=(0,r.up)("MemoryView");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(u),(0,r.Wm)(a),(0,r.Wm)(c)])}var p=t(7139);const v=e=>((0,r.dD)("data-v-a0e76a42"),e=e(),(0,r.Cn)(),e),g={class:"websocket-bus"},y=v((()=>(0,r._)("br",null,null,-1)));function b(e,o,t,i,s,u){return(0,r.wg)(),(0,r.iD)("div",g,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>s.config.server=e),placeholder:"config.server"},null,512),[[n.nr,s.config.server]]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>s.config.room=e),placeholder:"config.room"},null,512),[[n.nr,s.config.room]]),(0,r._)("button",{onClick:o[2]||(o[2]=(...e)=>u.connect&&u.connect(...e))},"Connect"),y,(0,r.Uk)(" Websocket Bus : "+(0,p.zw)(u.status),1)])}var h={name:"WebsocketBus",data(){return{config:{server:"ws://localhost:1234",room:"my-ypu"}}},created(){this.$initWebSocketBus(this.config)},methods:{connect(){this.$initWebSocketBus(this.config)}},computed:{status(){return this.$store.state.ypu.status}}};const w=(0,s.Z)(h,[["render",b],["__scopeId","data-v-a0e76a42"]]);var k=w;const _={class:"memory-view"};function A(e,o,t,n,i,s){return(0,r.wg)(),(0,r.iD)("div",_," MemoryView : "+(0,p.zw)(s.memory),1)}var W={name:"MemoryView",computed:{memory(){return this.$store.state.ypu.memory}}};const M=(0,s.Z)(W,[["render",A],["__scopeId","data-v-4a1df678"]]);var O=M;const j={class:"memory-add"};function P(e,o,t,i,s,u){return(0,r.wg)(),(0,r.iD)("div",j,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[0]||(o[0]=o=>e.operation=o),placeholder:"operation"},null,512),[[n.nr,e.operation]]),(0,r._)("button",{onClick:o[1]||(o[1]=(...e)=>u.add&&u.add(...e))},"Add to memory")])}var C={name:"MemoryAdd",data(){},methods:{add(){this.$addToMemory(this.operation)}}};const S=(0,s.Z)(C,[["render",P],["__scopeId","data-v-0d02b536"]]);var T=S,B={name:"HomeView",components:{WebsocketBus:k,MemoryView:O,MemoryAdd:T}};const V=(0,s.Z)(B,[["render",m]]);var D=V;const U=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))}],E=(0,d.p7)({history:(0,d.PO)("/ypu/"),routes:U});var $=E,N=t(65);const Z=()=>({doc:null,wsProvider:null,status:null,memory:null}),x={setDoc(e,o){e.doc=o},setStatus(e,o){e.status=o},setWsProvider(e,o){e.wsProvider=o},setMemory(e,o){e.memory=o}},F={};var z={namespaced:!0,state:Z,actions:F,mutations:x},H=(0,N.MT)({state:{},getters:{},mutations:{},actions:{},modules:{ypu:z}}),I=t(2942),q=t(4087),L={install:(e,o)=>{let t=o.store,n=null,r=null,i=null,s=null;e.config.globalProperties.$initWebSocketBus=async function(e){n=new I.QW,r=new q.VU(e.server,e.room,n),t.commit("ypu/setDoc",n),t.commit("ypu/setWsProvider",r),r.on("status",(e=>{console.log(e.status),t.commit("ypu/setStatus",e.status)})),i=n.getArray("memory"),s=n.getArray("registers"),i.observe((e=>{e.target,t.commit("ypu/setMemory",i.toArray()),console.log(e.changes.delta)})),s.observe((e=>{e.target,console.log(e.changes.delta)}))},e.config.globalProperties.$addToMemory=async function(e){console.log(e),i.insert(0,[e]),i.insert(0,[1,2,3]),i.delete(2,1),console.log(i.toArray()),n.transact((()=>{i.insert(1,["a","b"]),i.delete(2,2)})),console.log(i.toArray())}}};(0,n.ri)(c).use(H).use($).use(L,{store:H}).mount("#app")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,i){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,a=0;a<n.length;a++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[a])}))?n.splice(a--,1):(u=!1,i<s&&(s=i));if(u){e.splice(l--,1);var c=r();void 0!==c&&(o=c)}}return o}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,n){return t.f[n](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/about.1ea91347.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="ypu:";t.l=function(n,r,i,s){if(e[n])e[n].push(r);else{var u,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==o+i){u=d;break}}u||(a=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",o+i),u.src=n),e[n]=[r];var f=function(o,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),o)return o(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),a&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/ypu/"}(),function(){var e={143:0};t.f.j=function(o,n){var r=t.o(e,o)?e[o]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(t,n){r=e[o]=[t,n]}));n.push(r[2]=i);var s=t.p+t.u(o),u=new Error,a=function(n){if(t.o(e,o)&&(r=e[o],0!==r&&(e[o]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;u.message="Loading chunk "+o+" failed.\n("+i+": "+s+")",u.name="ChunkLoadError",u.type=i,u.request=s,r[1](u)}};t.l(s,a,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,i,s=n[0],u=n[1],a=n[2],c=0;if(s.some((function(o){return 0!==e[o]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var l=a(t)}for(o&&o(n);c<s.length;c++)i=s[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},n=self["webpackChunkypu"]=self["webpackChunkypu"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(957)}));n=t.O(n)})();
//# sourceMappingURL=app.e2331589.js.map