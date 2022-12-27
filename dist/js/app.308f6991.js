(function(){"use strict";var e={6227:function(e,t,o){var n=o(9242),s=o(3396);function i(e,t){const o=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",null,[(0,s.Wm)(o,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(o,{to:"/about"},{default:(0,s.w5)((()=>[(0,s.Uk)("About")])),_:1})]),(0,s.Wm)(n)],64)}var r=o(89);const a={},l=(0,r.Z)(a,[["render",i]]);var u=l,c=o(5431);(0,c.z)("/ypu/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("new update, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=o(2483);const p=e=>((0,s.dD)("data-v-2038f8f5"),e=e(),(0,s.Cn)(),e),h={class:"home"},f=(0,s.uE)('<h1 data-v-2038f8f5>A decentralized computer</h1><small data-v-2038f8f5><i data-v-2038f8f5>15/12/2022 - <a href="https://github.com/scenaristeur/ypu" target="_blank" data-v-2038f8f5>Questions &amp; code</a></i></small><p data-v-2038f8f5> Let&#39;s say we want to build a decentralized computer, for many reason : <ul data-v-2038f8f5><li data-v-2038f8f5>my computer is not very efficient and i want more resources</li><li data-v-2038f8f5>reducing the ecological impact of computers, by sharing under-used resources</li><li data-v-2038f8f5>accessing GPU for Machine Learning</li><li data-v-2038f8f5>use quantum computer for specific operations</li><li data-v-2038f8f5>...</li></ul></p><p data-v-2038f8f5>First, imagine you just have to open a webpage or connect your computer or phone to a service to instantly accessing many resources for free.</p><p data-v-2038f8f5>Next, shouldn&#39;t it be nice if every single task was a document that computers could share and interact with, without they know the real meaning of this task, just the operation to do with it. And imagine the document representing this task could be instantly shared all over the world. Any computer connected not busy at the moment when this task is created can (if it is capable) achieve the task and update the task document, updating it as &quot; ✅ Done&quot;.</p><h1 data-v-2038f8f5>Sharing a task document</h1><p data-v-2038f8f5>To share a document, we can, for example use <a href="https://docs.yjs.dev/" target="_blank" data-v-2038f8f5>YJS</a>, a javascript library that allow us to build complexes documents and sync them between many devices with the help of <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank" data-v-2038f8f5>websockets</a>. </p><p data-v-2038f8f5> A <a href="https://glitch.com/edit/#!/ypu" target="_blank" data-v-2038f8f5>websocket server</a> has just been prepared for sharing the task document that we need and can be used with the protocol+url <b data-v-2038f8f5>wss://ypu.glitch.me/</b>. This allow us to share documents on a channel like <b data-v-2038f8f5>my-ypu</b></p>',8),m=p((()=>(0,s._)("h1",null,"Adding some tasks",-1))),g=p((()=>(0,s._)("p",null," Let's now imagine something (someone, a computer, a robot...) adding some new tasks to the document shared through the channel of the websocket server. ",-1))),w=p((()=>(0,s._)("h1",null,"Todos View",-1))),b=p((()=>(0,s._)("h1",null,"Pending View",-1))),v=p((()=>(0,s._)("h1",null,"Done view",-1)));function y(e,t,o,n,i,r){const a=(0,s.up)("WebsocketBus"),l=(0,s.up)("TodosPush"),u=(0,s.up)("TodosView"),c=(0,s.up)("PendingView"),d=(0,s.up)("DoneView");return(0,s.wg)(),(0,s.iD)("div",h,[f,(0,s.Wm)(a),m,g,(0,s.Wm)(l),w,(0,s.Wm)(u),b,(0,s.Wm)(c),v,(0,s.Wm)(d)])}var k=o(7139);const _=e=>((0,s.dD)("data-v-00c5981a"),e=e(),(0,s.Cn)(),e),T={class:"websocket-bus"},D=_((()=>(0,s._)("legend",null,"Websocket",-1))),P=_((()=>(0,s._)("b",null,"remote",-1))),U=_((()=>(0,s._)("br",null,null,-1))),j=_((()=>(0,s._)("br",null,null,-1))),W=_((()=>(0,s._)("br",null,null,-1))),V=_((()=>(0,s._)("small",null,[(0,s._)("i",null,"when using 'wss://ypu.glitch.me/', please wait eventualy 30 seconds for the server to be started, because if nobody is using it at the moment, it can be stopped.")],-1))),C=_((()=>(0,s._)("br",null,null,-1)));function A(e,t,o,i,r,a){return(0,s.wg)(),(0,s.iD)("div",T,[(0,s._)("fieldset",null,[D,(0,s.Uk)(" Choose the "),(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>a.remote&&a.remote(...e))},[P,(0,s.Uk)(" '"+(0,k.zw)(r.remote_url)+"'",1)]),(0,s.Uk)(" url (default)."),U,(0,s._)("small",null,[(0,s._)("i",null,[(0,s.Uk)("(or for developpement on your local machine, use the "),(0,s._)("button",{onClick:t[1]||(t[1]=(...t)=>e.local&&e.local(...t))},"local "),(0,s.Uk)(")")])]),j,(0,s.Uk)(" server : "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.config.server=e),placeholder:"config.server"},null,512),[[n.nr,r.config.server]]),(0,s.Uk)(" channel : "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.config.room=e),placeholder:"config.room"},null,512),[[n.nr,r.config.room]]),W,(0,s.Uk)(" and "),(0,s._)("button",{onClick:t[4]||(t[4]=(...e)=>a.connect&&a.connect(...e))},"Connect"),V,C,(0,s.Uk)(' Here is the "Websocket Bus status" : '),(0,s._)("span",{style:(0,k.j5)("connected"==a.status?"color:green":"color:red")},(0,k.zw)(a.status),5)])])}var $={name:"WebsocketBus",data(){return{config:{server:"",room:"my-ypu"},locale_url:"ws://"+window.location.hostname+":1234",remote_url:"wss://ypu.glitch.me/"}},created(){"127.0.0.1"==window.location.hostname?this.locale():this.remote()},methods:{connect(){this.$initWebSocketBus(this.config)},locale(){this.config.server=this.locale_url},remote(){this.config.server=this.remote_url,this.$initWebSocketBus(this.config)}},computed:{status(){return this.$store.state.ypu.status}}};const I=(0,r.Z)($,[["render",A],["__scopeId","data-v-00c5981a"]]);var O=I;o(7658);const x=e=>((0,s.dD)("data-v-6fceeb93"),e=e(),(0,s.Cn)(),e),S={class:"todos-push"},z=x((()=>(0,s._)("legend",null,"Adding and executing tasks",-1))),E=x((()=>(0,s._)("b",null,"!! please don't add more than 300 todos now for not freezing your test and frustrating experience ;-) !!",-1))),L=x((()=>(0,s._)("br",null,null,-1))),M=x((()=>(0,s._)("br",null,null,-1))),N=x((()=>(0,s._)("br",null,null,-1))),B=x((()=>(0,s._)("br",null,null,-1))),H=x((()=>(0,s._)("br",null,null,-1))),Z=x((()=>(0,s._)("br",null,null,-1))),q=x((()=>(0,s._)("br",null,null,-1))),F=x((()=>(0,s._)("b",null,'If a computer is connected to the channel and set to "Active:true" :',-1))),J=x((()=>(0,s._)("ul",null,[(0,s._)("li",null,"it waits for new tasks"),(0,s._)("li",null,'if there are tasks in the "Todos View", it grabs one (generally the most older)'),(0,s._)("li",null,'it drag it from the "Todos View" to the "Pending View"'),(0,s._)("li",null,'and when the task is done, it push it to the "Done View"')],-1))),Y=x((()=>(0,s._)("br",null,null,-1))),R=x((()=>(0,s._)("b",null,"ME",-1))),G=x((()=>(0,s._)("hr",null,null,-1))),K=x((()=>(0,s._)("br",null,null,-1))),Q=x((()=>(0,s._)("br",null,null,-1)));function X(e,t,o,i,r,a){return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("fieldset",null,[z,(0,s._)("p",null,[E,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Uk)(" For example, let's say that someone add "),(0,s.wy)((0,s._)("input",{type:"number",min:"1",max:"1000","onUpdate:modelValue":t[0]||(t[0]=e=>r.numberOfTodos=e)},null,512),[[n.nr,r.numberOfTodos]]),(0,s.Uk)(" todos by clicking on the "),(0,s._)("button",{onClick:t[1]||(t[1]=(...e)=>a.pushH&&a.pushH(...e))},"Push many to todos"),(0,s.Uk)(" button."),L,(0,s.Uk)(' If you click on "Push many todos" button, you should see '+(0,k.zw)(r.numberOfTodos)+' added to the "Todos View", just below.',1),M]),(0,s._)("li",null,[(0,s.Uk)(' Then toggle your computer as "Active : true" to process the tasks '),(0,s._)("button",{onClick:t[2]||(t[2]=(...e)=>a.toggleActif&&a.toggleActif(...e)),style:(0,k.j5)(1==a.actif?"background-color:red":"background-color:green")},"Active: "+(0,k.zw)(a.actif),5),N,(0,s.Uk)(" Toggling it to false will stop your computer executing the tasks."),B])]),(0,s.Uk)(' To simulate the behavior of a computer we use here a "waitTime" of '),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.wt=e),placeholder:"waitTime in ms, default:100",type:"number",min:"0",onChange:t[4]||(t[4]=(...e)=>a.setWaitTime&&a.setWaitTime(...e))},null,544),[[n.nr,r.wt]]),(0,s.Uk)(" milliseconds."),H,(0,s.Uk)(" In case of problem or issue, you can use this "),(0,s._)("button",{onClick:t[5]||(t[5]=(...e)=>a.cleanTodos&&a.cleanTodos(...e)),style:{"background-color":"orange"}},"Debug: Clean todos"),(0,s.Uk)(' button to delete all todos from the "Todos view".'),Z,(0,s.Uk)(" The basic operation of the upper todos is to reverse operation, but the operation of a task can be specified too with everything you want "),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>r.operation=e),placeholder:"operation",onKeyup:t[7]||(t[7]=(0,n.D2)(((...e)=>a.push&&a.push(...e)),["enter"]))},null,544),[[n.nr,r.operation]]),(0,s._)("button",{onClick:t[8]||(t[8]=(...e)=>a.push&&a.push(...e))},"Push one operation to todos")]),q,F,J,(0,s.Uk)(' in each of those two view you can use "Debug : Clean xxx" buttons to remove the tasks. '),Y,(0,s.Uk)(' In the "Done View", tasks prefixed by "'),R,(0,s.Uk)('" are tasks that have been achieved by your computer, or more exactly, by the actual tab of the browser. (The worker of the task is equal to the clientId of the tab) '),G,(0,s.Uk)(" If you open one (or more) other browser tabs with "),(0,s._)("button",{onClick:t[9]||(t[9]=(...e)=>a.openWindows&&a.openWindows(...e))},"open 3 more windows"),(0,s.Uk)(', and "Connect" them to the same server, then toggle them in "Active : true", and in one of them click the "Push many todos" button to add 100 new todos, you should see every tab competting to achieve the tasks !!! '),K,(0,s.Uk)(" And the same thing happens if many computers / users are connected on the same page."),Q,(0,s.Uk)(' Play with the "waitTime" parameter of each "tab" to manage if it is able to process task or if it is occupied. ')])])}var ee={name:"TodosPush",data(){return{operation:"",numberOfTodos:100,wt:0}},created(){this.wt=this.$store.state.ypu.waitTime},methods:{toggleActif(){this.$store.commit("ypu/setActif",!this.actif),this.$prepare()},push(){this.$pushToTodos(this.operation),this.operation=""},pushH(){for(let e=0;e<this.numberOfTodos;e++){let t={ope:"reverse",data:e+"--"+Date.now()};this.$pushToTodos(t)}this.operation=""},cleanTodos(){this.$cleanTodos()},setWaitTime(){console.log("set waitTime ",this.wt),this.$store.commit("ypu/setWaitTime",this.wt)},openWindows(){console.log("width="+window.screenWidth/3+",height="+window.screenHeight);let e=window.screen.width/3,t=window.screen.height;for(let o=0;o<3;o++){let n="width="+e+",height="+t+",top=0,left="+o*e;console.log(n),window.open(window.location.href,"YPU "+o,n)}}},watch:{waitTime(){this.wt=this.waitTime}},computed:{actif(){return this.$store.state.ypu.actif},waitTime(){return this.$store.state.ypu.waitTime}}};const te=(0,r.Z)(ee,[["render",X],["__scopeId","data-v-6fceeb93"]]);var oe=te;const ne=e=>((0,s.dD)("data-v-65c56cf4"),e=e(),(0,s.Cn)(),e),se={class:"todos-view"},ie=ne((()=>(0,s._)("hr",null,null,-1)));function re(e,t,o,n,i,r){const a=(0,s.up)("ListView");return(0,s.wg)(),(0,s.iD)("div",se,[(0,s.Wm)(a,{object:r.todos},null,8,["object"]),ie])}const ae={class:"list-view"},le={key:0,style:{height:"200px","overflow-y":"scroll"}},ue={key:0},ce={key:1};function de(e,t,o,n,i,r){return(0,s.wg)(),(0,s.iD)("div",ae,[(0,s.Uk)(" your clientId : "+(0,k.zw)(r.clientID)+" / "+(0,k.zw)(i.items.length)+" items ",1),null!=o.object?((0,s.wg)(),(0,s.iD)("ul",le,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.items,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.key},[e.worker==r.clientID?((0,s.wg)(),(0,s.iD)("b",ue,"ME")):((0,s.wg)(),(0,s.iD)("span",ce,(0,k.zw)(e.worker),1)),(0,s.Uk)(" "+(0,k.zw)(e),1)])))),128))])):(0,s.kq)("",!0)])}var pe={name:"ListView",props:["object","reverse"],data(){return{items:[]}},watch:{object(){this.items="true"==this.reverse?Object.values(this.object).reverse():Object.values(this.object)}},computed:{clientID(){return this.$store.state.ypu.clientID}}};const he=(0,r.Z)(pe,[["render",de],["__scopeId","data-v-268975e0"]]);var fe=he,me={name:"TodosView",components:{ListView:fe},computed:{todos(){return this.$store.state.ypu.todos}}};const ge=(0,r.Z)(me,[["render",re],["__scopeId","data-v-65c56cf4"]]);var we=ge;const be=e=>((0,s.dD)("data-v-2333a823"),e=e(),(0,s.Cn)(),e),ve={class:"pending-view"},ye=be((()=>(0,s._)("hr",null,null,-1)));function ke(e,t,o,n,i,r){const a=(0,s.up)("ListView");return(0,s.wg)(),(0,s.iD)("div",ve,[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>r.cleanPending&&r.cleanPending(...e))},"Debug: Clean pending"),(0,s.Uk)(" PendingView : "),(0,s.Wm)(a,{object:r.pending},null,8,["object"]),ye])}var _e={name:"PendingView",components:{ListView:fe},methods:{cleanPending(){this.$cleanPending()}},computed:{pending(){return this.$store.state.ypu.pending}}};const Te=(0,r.Z)(_e,[["render",ke],["__scopeId","data-v-2333a823"]]);var De=Te;const Pe={class:"done-view"};function Ue(e,t,o,n,i,r){const a=(0,s.up)("ListView");return(0,s.wg)(),(0,s.iD)("div",Pe,[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>r.cleanDone&&r.cleanDone(...e))},"Debug: Clean done"),(0,s.Uk)(" DoneView : "),(0,s.Wm)(a,{object:r.done,reverse:"true"},null,8,["object"])])}var je={name:"DoneView",components:{ListView:fe},computed:{done(){return this.$store.state.ypu.done}},methods:{cleanDone(){this.$cleanDone()}}};const We=(0,r.Z)(je,[["render",Ue],["__scopeId","data-v-35c4fe37"]]);var Ve=We,Ce={name:"HomeView",components:{WebsocketBus:O,TodosPush:oe,TodosView:we,PendingView:De,DoneView:Ve}};const Ae=(0,r.Z)(Ce,[["render",y],["__scopeId","data-v-2038f8f5"]]);var $e=Ae;const Ie=[{path:"/",name:"home",component:$e},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,7381))}],Oe=(0,d.p7)({history:(0,d.PO)("/ypu/"),routes:Ie});var xe=Oe,Se=o(65);const ze=()=>({doc:null,wsProvider:null,status:"unknown",memory:null,todos:null,pending:null,done:null,ready:!1,actif:!1,clientID:null,waitTime:100}),Ee={setDoc(e,t){e.doc=t},setStatus(e,t){e.status=t},setWsProvider(e,t){e.wsProvider=t},setMemory(e,t){e.memory=t},setTodos(e,t){e.todos=t},setPending(e,t){e.pending=t},setDone(e,t){e.done=t},setReady(e,t){e.ready=t},setClientID(e,t){e.clientID=t},setWaitTime(e,t){e.waitTime=t},setActif(e,t){console.log(t),e.actif=t,1==e.actif&&0==e.ready&&(e.ready=!0)}},Le={};var Me={namespaced:!0,state:ze,actions:Le,mutations:Ee},Ne=(0,Se.MT)({state:{},getters:{},mutations:{},actions:{},modules:{ypu:Me}}),Be=o(2942),He=o(8340),Ze=o(114),qe=o(536),Fe={install:(e,t)=>{let o,n,s,i=t.store,r=null,a=null,l=null,u=null,c=null;e.config.globalProperties.$initWebSocketBus=async function(t){r=new Be.QW,l=new Ze.GL(r),i.commit("ypu/setClientID",l.clientID),a=new He.VU(t.server,t.room,r),i.commit("ypu/setDoc",r),i.commit("ypu/setWsProvider",a),a.on("status",(e=>{console.log(e.status),i.commit("ypu/setStatus",e.status)})),u=r.getArray("memory"),c=r.getArray("registers"),o=r.getMap("todos"),n=r.getMap("pending"),s=r.getMap("done"),u.observe((e=>{e.target,i.commit("ypu/setMemory",u.toArray()),console.log(e.changes.delta)})),o.observe((t=>{i.commit("ypu/setTodos",o.toJSON()),t.changes.keys.forEach(((t,o)=>{"add"===t.action&&e.config.globalProperties.$prepare(o)}))})),n.observe((e=>{e.target,i.commit("ypu/setPending",n.toJSON())})),s.observe((e=>{e.target,i.commit("ypu/setDone",s.toJSON())})),c.observe((e=>{e.target,console.log(e.changes.delta)})),l.on("change",(e=>{console.log(e),this.awareness.getStates().forEach((e=>{console.log(e)}))}))},e.config.globalProperties.$pushToTodos=async function(e){o.set((0,qe.Z)(),{operation:e,asker:l.clientID})},e.config.globalProperties.$cleanTodos=async function(){for(const e of o.keys())o.delete(e)},e.config.globalProperties.$cleanPending=async function(){for(const e of n.keys())n.delete(e)},e.config.globalProperties.$cleanDone=async function(){for(const e of s.keys())s.delete(e)},e.config.globalProperties.$prepare=async function(t){if(console.log("key",t),1==i.state.ypu.actif&&1==i.state.ypu.ready){void 0==t&&(t=Array.from(o.keys())[0]),console.log(t);let s=o.get(t);if(void 0!=s){i.commit("ypu/setReady",!1);let r={key:t,data:s,worker:l.clientID,start:Date.now()};n.set(t,r),o.delete(t),e.config.globalProperties.$process(r)}else console.log("bizarre not found ",t,s)}},e.config.globalProperties.$process=async function(t){console.log("processing ",t);let o=i.state.ypu.waitTime;setTimeout((function(){console.log("Executed after ms ",o),t.end=Date.now(),t.result="Wahou c'est ok",s.set(t.key,t),n.delete(t.key),i.commit("ypu/setReady",!0),e.config.globalProperties.$prepare()}),o)}}};(0,n.ri)(u).use(Ne).use(xe).use(Fe,{store:Ne}).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,i){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],i=e[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(a=!1,i<r&&(r=i));if(a){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,s,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.d36b28f9.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ypu:";o.l=function(n,s,i,r){if(e[n])e[n].push(s);else{var a,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[s];var p=function(t,o){a.onerror=a.onload=null,clearTimeout(h);var s=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/ypu/"}(),function(){var e={143:0};o.f.j=function(t,n){var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var i=new Promise((function(o,n){s=e[t]=[o,n]}));n.push(s[2]=i);var r=o.p+o.u(t),a=new Error,l=function(n){if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",a.name="ChunkLoadError",a.type=i,a.request=r,s[1](a)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,r=n[0],a=n[1],l=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var c=l(o)}for(t&&t(n);u<r.length;u++)i=r[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self["webpackChunkypu"]=self["webpackChunkypu"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6227)}));n=o.O(n)})();
//# sourceMappingURL=app.308f6991.js.map