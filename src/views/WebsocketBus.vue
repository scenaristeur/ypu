<template>
  <div class="websocket-bus">
    <input v-model="config.server" placeholder="config.server" />
    <input v-model="config.room" placeholder="config.room" />
    <button @click="connect">Connect</button>
    <button @click="local">Local</button>
    <button @click="remote">Remote</button>
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
        server: '',//'wss://ypu.glitch.me/',//'ws://'+window.location.hostname+':1234',
        room: 'my-ypu'
      },
      locale_url : 'ws://'+window.location.hostname+':1234',
      remote_url: 'wss://ypu.glitch.me/',
    }
  },
  created(){
    if(window.location.hostname == "127.0.0.1"){
      this.locale()
    }else{
      this.remote()
    }

  },
  methods:{
    connect(){
      this.$initWebSocketBus(this.config)
    },
    locale(){
      this.config.server = this.locale_url
      this.$initWebSocketBus(this.config)
    },
    remote(){
      this.config.server = this.remote_url
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
