<template>
  <div class="todos-push">
    <input v-model="operation" placeholder="operation" v-on:keyup.enter="push"/>
    <button @click="push">Push to todos</button>

    <button @click="cleanTodos">Debug: Clean todos</button>
  </div>
</template>

<script>
export default {
  name: 'TodosPush',
  data(){
    return {
      operation: ""
    }

  },
  methods:{
    push(){
      this.$pushToTodos(this.operation)
      this.operation = ""
    },
    cleanTodos(){
      this.$cleanTodos()
    }
  }


}
</script>

<style lang="css" scoped>
.todos-push {

}
</style>
