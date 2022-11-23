<template>
  <div class="websocket-bus">
    <input v-model="config.server" placeholder="config.server" />
    <input v-model="config.room" placeholder="config.room" />
    <button @click="connect">Connect</button>
    <br>
    Websocket Bus : {{ status }}
  </div>
</template>

<script>



export default {
  name: 'WebsocketBus',
  data(){
    return {
      config:{
        server: 'ws://localhost:1234',
        room: 'my-ypu'
      }
    }
  },
  created(){
    this.$initWebSocketBus(this.config)
  },
  methods:{
    connect(){
      this.$initWebSocketBus(this.config)
    }
  },
  computed:{
    status(){
      return this.$store.state.ypu.status
    }
  }


}
</script>

<style lang="css" scoped>
.websocket-bus {

}
</style>
