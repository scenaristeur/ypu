<template>
  <div class="todos-push">
    <input v-model="wt" placeholder="waitTime in ms, default:100" type="number" min="0" @change="setWaitTime"/>
    <button @click="toggleActif">Actif: {{ actif }}</button>
    <input v-model="operation" placeholder="operation" v-on:keyup.enter="push"/>
    <button @click="push">Push to todos</button>


    <button @click="cleanTodos">Debug: Clean todos</button>
    <input type="number" v-model="numberOfTodos" >
    <button @click="pushH">Push many to todos</button>
  </div>
</template>

<script>
export default {
  name: 'TodosPush',
  data(){
    return {
      operation: "",
      numberOfTodos: 100,
      wt: 0,
    }

  },
  created(){
    this.wt = this.$store.state.ypu.waitTime
  },
  methods:{
    toggleActif(){
      this.$store.commit('ypu/setActif', !this.actif)
      this.$prepare()
    },
    push(){
      this.$pushToTodos(this.operation)
      this.operation = ""
    },
    pushH(){
      for(let i = 0; i < this.numberOfTodos; i++){
        let ope = {"ope" : "reverse", data: i+"--"+Date.now() }
        this.$pushToTodos(ope)
      }
      this.operation = ""
    },
    cleanTodos(){
      this.$cleanTodos()
    },
    setWaitTime(){
      console.log("set waitTime ", this.wt)
      this.$store.commit("ypu/setWaitTime", this.wt)
    }
  },
  watch:{
    waitTime(){
      this.wt = this.waitTime
    }
  },
  computed:{
    actif(){
      return this.$store.state.ypu.actif
    },
    waitTime(){
      return this.$store.state.ypu.waitTime
    }
  }


}
</script>

<style lang="css" scoped>
.todos-push {

}
</style>
