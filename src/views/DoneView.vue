<template>
  <div class="done-view">
    <button @click="cleanDone">Debug: Clean done</button>
    <!--  {{done}} -->
    DoneView :
    <ListView :object="done" />
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue'

export default {
  name: 'DoneView',
  components: {
    ListView,
  },
  computed:{
    done(){
      return this.$store.state.ypu.done
    }
  },
  methods:{
    cleanDone(){
      this.$cleanDone()
    }
  }


}
</script>

<style lang="css" scoped>
.done-view {

}
</style>
