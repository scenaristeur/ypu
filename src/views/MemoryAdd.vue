<template>
  <div class="memory-add">
    <input v-model="operation" placeholder="operation" />
    <button @click="add">Add to memory</button>
  </div>
</template>

<script>
export default {
  name: 'MemoryAdd',
  data(){
  //  operation: null
  },
  methods:{
    add(){
      this.$addToMemory(this.operation)
    }
  }


}
</script>

<style lang="css" scoped>
.memory-add {

}
</style>
