<template>
  <div class="pending-view">


    <button @click="cleanPending">Debug: Clean pending</button>
    PendingView :
    <!-- {{pending}} -->
    <ListView :object="pending" />
    <hr>
  </div>
</template>

<script>
import ListView from '@/components/ListView.vue'

export default {
  name: 'PendingView',
  components: {
    ListView,
  },
  methods:{
    cleanPending(){
      this.$cleanPending()
    }
  },
  computed:{
    pending(){
      return this.$store.state.ypu.pending
    }
  }


}
</script>

<style lang="css" scoped>
.pending-view {

}
</style>
