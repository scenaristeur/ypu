<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>A decentralized computer</h1>
    <small><i>15/12/2022 - <a href="https://github.com/scenaristeur/ypu" target="_blank">Questions & code</a></i></small>
    <p>
      Let's say we want to build a decentralized computer, for many reason :
      <ul>
        <li>my computer is not very efficient and i want more resources</li>
        <li>reducing the ecological impact of computers, by sharing under-used resources</li>
        <li>accessing GPU for Machine Learning</li>
        <li>use quantum computer for specific operations</li>
        <li>...</li>
      </ul>
    </p>

    <p>First, imagine you just have to open a webpage or connect your computer or phone to a service to instantly accessing many resources for free.</p>
    <p>Next, shouldn't it be nice if every single task was a document that computers could share and interact with,
      without they know the real meaning of this task, just the operation to do with it.
      And imagine the document representing this task could be instantly shared all over the world.
      Any computer connected not busy at the moment
      when this task is created can (if it is capable) achieve the task and update the task document, updating it as " &#x2705; Done".</p>

      <h1>Sharing a task document</h1>

      <p>To share a document, we can, for example use <a href="https://docs.yjs.dev/" target="_blank" >YJS</a>, a javascript library that allow us to build complexes
        documents and sync them between many devices with the help of
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank">websockets</a>.
      </p>

      <p>
        A <a href="https://glitch.com/edit/#!/ypu" target="_blank">websocket server</a> has just been prepared
        for sharing the task document that we need and can be used with the protocol+url <b>wss://ypu.glitch.me/</b>. This allow us to share documents on a channel like <b>my-ypu</b>
      </p>

      <WebsocketBus />

      <h1>Adding some tasks</h1>

      <p>
        Let's now imagine something (someone, a computer, a robot...) adding some new tasks to the document shared through the channel of the websocket server.
      </p>


      <TodosPush />

      <h1>Todos View</h1>
      <TodosView />

      <h1>Pending View</h1>
      <PendingView />
      <h1>Done view</h1>
      <DoneView />

<DistributedIaTest />
<ModelsProviders />



      <hr>
      <!-- <IpfsNode /> -->

    </div>
  </template>

  <script>
  // @ is an alias to /src

  import WebsocketBus from '@/views/WebsocketBus.vue'
  import TodosPush from '@/views/TodosPush.vue'
  import TodosView from '@/views/TodosView.vue'
  import PendingView from '@/views/PendingView.vue'
  import DoneView from '@/views/DoneView.vue'
  // import IpfsNode from '@/views/IpfsNode.vue'
  import ModelsProviders from '@/views/ModelsProviders.vue'
  import DistributedIaTest from '@/views/DistributedIaTest.vue'

  export default {
    name: 'HomeView',
    components: {
      WebsocketBus,
      TodosPush,
      TodosView,
      PendingView,
      DoneView,
      // IpfsNode,
      ModelsProviders,
      DistributedIaTest
    },
  }
  </script>

  <style lang="css" scoped>
  .home {
    text-align: left;
  }
  </style>
