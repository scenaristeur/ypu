<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <WebsocketBus />
    <MemoryAdd />
    <MemoryView />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import WebsocketBus from '@/views/WebsocketBus.vue'
import MemoryView from '@/views/MemoryView.vue'
import MemoryAdd from '@/views/MemoryAdd.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    WebsocketBus,
    MemoryView,
    MemoryAdd
    // 'WebsocketBus': ()=>import('@/views/WebsocketBus'),
    // 'DataCaching': ()=>import('@/views/experiments/DataCaching'),
    // 'LevelgraphJsonld': ()=>import('@/views/experiments/LevelgraphJsonld'),
  },
}
</script>
