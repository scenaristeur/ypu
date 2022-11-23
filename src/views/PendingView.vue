<template>
  <div class="pending-view">

    <button @click="toggleActif">Actif: {{ actif }}</button>
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
    toggleActif(){
      this.$store.commit('ypu/setActif', !this.actif)
      this.$prepare()
    },
    cleanPending(){
      this.$cleanPending()
    }
  },
  computed:{
    pending(){
      return this.$store.state.ypu.pending
    },
    actif(){
      return this.$store.state.ypu.actif
    }
  }


}
</script>

<style lang="css" scoped>
.pending-view {

}
</style>
