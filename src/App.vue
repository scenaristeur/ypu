<template>
  <div>


    <nav>
      <router-link to="/">{{ $t("home") }}</router-link> |
      <router-link to="/about">{{ $t("about") }}</router-link> |     <LocaleSwitcher />
    </nav>
    <router-view/>
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
export default {
  name: "App",
  components: { LocaleSwitcher },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}
</style>
