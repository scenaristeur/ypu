<template>
  <div class="todos-view">
    TodosView :
    <!-- {{todos}} -->
        <ListView :object="todos" />
    <hr>
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue'

export default {
  name: 'TodosView',
  components: {
    ListView,
  },
  computed:{
    todos(){
      return this.$store.state.ypu.todos
    }
  }


}
</script>

<style lang="css" scoped>
.todos-view {

}
</style>
