<template>
  <div class="todos-push">
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
      numberOfTodos: 100
    }

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
    }
  },
  computed:{
    actif(){
      return this.$store.state.ypu.actif
    }
  }


}
</script>

<style lang="css" scoped>
.todos-push {

}
</style>
