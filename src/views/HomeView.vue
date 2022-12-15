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

    <p>Imagine you just have to open a webpage or connect to a service to instantly accessing many resources for free.</p>
    <p>First, let's imagine every single task as a document that computer could share and interact, without they know the meaning of this task.
      And imagine the document representing this task could be instantly shared all over the world. Any computer connected free of charge at the moment
      when this task is created can (if it is capable) do the task and update the task document, updating it as done.</p>

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
    </div>
  </template>

  <script>
  // @ is an alias to /src

  import WebsocketBus from '@/views/WebsocketBus.vue'
  import TodosPush from '@/views/TodosPush.vue'
  import TodosView from '@/views/TodosView.vue'
  import PendingView from '@/views/PendingView.vue'
  import DoneView from '@/views/DoneView.vue'

  export default {
    name: 'HomeView',
    components: {
      WebsocketBus,
      TodosPush,
      TodosView,
      PendingView,
      DoneView,
    },
  }
  </script>

  <style lang="css" scoped>
  .home {
    text-align: left;
  }
  </style>
