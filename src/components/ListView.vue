<template>
  <div class="list-view">
    <ul v-if="object != null">
      <li v-for="v, k of Object.values(object)" :key="k">{{k}}: {{v}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props:["object"]
}
</script>

<style lang="css" scoped>
.list-view {

}
</style>
