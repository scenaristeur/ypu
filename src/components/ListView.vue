<template>
  <div class="list-view">
    {{clientID}} / {{items.length }}
    <ul v-if="object != null" style="height:200px;overflow-y: scroll;">
      <li v-for="v of items" :key="v.key">
        <b v-if="v.owner == clientID">ME</b>
        <span v-else>{{v.owner}}</span>
        {{v}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props:["object", "reverse"],
  data(){
    return {
      items : []
    }
  },
  watch:{
    object(){
      this.items = this.reverse == "true" ? Object.values(this.object).reverse() : Object.values(this.object)

    }
  },
  computed:{
    clientID(){
      return this.$store.state.ypu.clientID
    }
  }
}
</script>

<style lang="css" scoped>
.list-view {

}
</style>
