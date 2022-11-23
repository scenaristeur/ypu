<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <WebsocketBus />
    <TodosPush />
    <TodosView />
    <PendingView />
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
