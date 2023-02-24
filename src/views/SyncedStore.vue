<template>
  <div id="synced">
    <h1>Synced Store</h1>
    {{ status }}
    <button @click="connect">Connect</button> <button @click="disconnect()">Disconnect</button>
    <h1>Todo Vue</h1>
    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo"
      @keyup.enter="addTodo" />
    <ul class="todo-list">
      <li v-for="(todo, i) in store.todos" class="todo" :key="i">
        <div class="view">
          <label>
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            {{ todo.title }}
          </label>
          <button class="destroy" @click="removeTodo(todo)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import { store, connect, disconnect } from "./store.ts";
// import { ref } from "vue";
import * as Vue from "vue";
import { enableVueBindings } from "@syncedstore/core";

// make SyncedStore use Vuejs internally
enableVueBindings(Vue);


export default {
  name: "SyncedStore",
  data() {
    return {
      store, // Put the store on the data() of the component
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.store.todos.push({
        title: value,
        completed: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.store.todos.splice(this.store.todos.indexOf(todo), 1);
    },
    connect() {
      connect()
    },
    disconnect() {
      disconnect()
    }
  },
  computed: {
    status() {
      return this.$store.state.ypu.status
    }
  }
}
</script>

<style>
#synced {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  text-align: left;
}

li button {
  margin-left: 1em;
}
</style>