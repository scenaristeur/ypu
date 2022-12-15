<template>
  <div class="websocket-bus">
    <fieldset>
      <legend>Websocket</legend>

      Choose the <button @click="remote"><b>remote</b> '{{remote_url}}'</button> url (default).<br>

      <small><i>(or for developpement on your local machine, use the <button @click="local">local </button>)</i></small>
      <br>

      server :
      <input v-model="config.server" placeholder="config.server" />
      channel :
      <input v-model="config.room" placeholder="config.room" /><br>


      and <button @click="connect">Connect</button>
      <small><i>when using 'wss://ypu.glitch.me/', please wait eventualy 30 seconds for the server to be started,
        because if nobody is using it at the moment, it can be stopped.</i></small>
        <br>
        Here is the "Websocket Bus status" : <span :style="status == 'connected'? 'color:green' : 'color:red'">{{ status }}</span>
      </fieldset>
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
        //  this.$initWebSocketBus(this.config)
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
