<template>
  <div>
    <hr>
    <h1> Working with IA, LocalAi, Ollama for distributed llms</h1>
    <h2>{{ config.id }}</h2>
    <small>{{ config.version }}</small>


    <!-- v-for list over conifg.services-->
    <ul>
      <li v-for="s of config.services" :key="s.name">
        <h2>{{ s.name }}</h2>
        <small>{{ s.description }}</small><br>
        <small>url: {{ s.url }}</small><br>
        <small>active: {{ s.active }}</small><br>
        <ul>
          <li v-for="endpoint of s.endpoints" :key="endpoint.path">
            Name : {{ endpoint.name }}<br>
            Path: {{ endpoint.path }}   <a :href="[s.url,endpoint.path].join('/')" target="_blank">{{ [s.url,endpoint.path].join('/') }}</a><br>
            Test prompt: {{ endpoint.test_prompt }}<br>
            Method: {{ endpoint.method }}<br>
            Format: {{ endpoint.format }}<br>
            Response: {{ endpoint.response }}<br>
<br>
          </li>
        </ul>

        {{ s }}
        <br>
      </li>
    </ul>


    <hr>
    {{ config }}
  </div>
</template>

<script>
import CONFIG from '@/config/ypu_models_providers.json'

console.log("CONFIG", CONFIG)


export default {
  name: "ModelsProviders",
  data() {
    return {
      config: null
    }
  },
  created() {
    this.config = CONFIG
  },
  mounted() {

  }
}
</script>

<style scoped></style>