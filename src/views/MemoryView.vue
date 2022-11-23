<template>
  <div class="memory-view">
    MemoryView : {{memory}}
  </div>
</template>

<script>
export default {
  name: 'MemoryView',
  computed:{
    memory(){
      return this.$store.state.ypu.memory
    }
  }


}
</script>

<style lang="css" scoped>
.memory-view {

}
</style>
