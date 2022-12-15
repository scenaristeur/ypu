<template>
  <div class="todos-push">
    <fieldset>
      <legend>Adding and executing tasks</legend>
      <p>
        <b>!! please don't add more than 300 todos now for not freezing your test and frustrating experience ;-) !!</b>
        <ul>
          <li>
            For example, let's say that someone add     <input type="number" min="1" max="1000" v-model="numberOfTodos" > todos by clicking on the
            <button @click="pushH">Push many to todos</button> button.<br>
            If you click on "Push many todos" button, you should see {{numberOfTodos}} added to the "Todos View", just below.<br>
          </li>
          <li>
            Then toggle your computer as "Active : true" to process the tasks
            <button @click="toggleActif" :style="actif == true ? 'background-color:red' : 'background-color:green'">Active: {{ actif }}</button>
            <br>
            Toggling it to false will stop your computer executing the tasks.<br>
          </li>

        </ul>
        To simulate the behavior of a computer we use here a "waitTime" of
        <input v-model="wt" placeholder="waitTime in ms, default:100" type="number" min="0" @change="setWaitTime"/> milliseconds.<br>
        In case of problem or issue, you can use this <button @click="cleanTodos" style="background-color:orange">Debug: Clean todos</button> button
        to delete all todos from the "Todos view".<br>
        The basic operation of the upper todos is to reverse operation, but the operation of a task can be specified too with everything you want
        <input v-model="operation" placeholder="operation" v-on:keyup.enter="push"/>
        <button @click="push">Push to todos</button>

      </p>

      <br>
      <b>If a computer is connected to the channel and set to "Active:true" :</b>
      <ul>

        <li>it waits for new tasks</li>
        <li>if there are tasks in the "Todos View", it grabs one (generally the most older)</li>
        <li>it drag it from the "Todos View" to the "Pending View"</li>
        <li>and when the task is done, it push it to the "Done View"</li>
      </ul>
      in each of those two view you can use "Debug : Clean xxx" buttons to remove the tasks.
      <br>
      In the "Done View", tasks prefixed by "<b>ME</b>" are tasks that have been achieved by your computer, or more exactly, by the actual tab of the browser.
      (The worker of the task is equal to the clientId of the tab)
      <hr>
      If you open one (or more) other browser tabs with <button @click="openWindows">Open 2 other windows</button>,
      and "Connect" them to the same server, then toggle them in "Active : true",
      and in one of them click the "Push many todos" button to add 100 new todos,
      you should see every tab competting to achieve the tasks !!! <br>
      And the same thing happens if many computers / users are connected on the same page.<br>
      Play with the "waitTime" parameter of each "tab" to manage if it is able to process task or if it is occupied.
    </fieldset>

  </div>
</template>

<script>
export default {
  name: 'TodosPush',
  data(){
    return {
      operation: "",
      numberOfTodos: 100,
      wt: 0,
    }

  },
  created(){
    this.wt = this.$store.state.ypu.waitTime
  },
  methods:{
    toggleActif(){
      this.$store.commit('ypu/setActif', !this.actif)
      this.$prepare()
    },
    push(){
      this.$pushToTodos(this.operation)
      this.operation = ""
    },
    pushH(){
      for(let i = 0; i < this.numberOfTodos; i++){
        let ope = {"ope" : "reverse", data: i+"--"+Date.now() }
        this.$pushToTodos(ope)
      }
      this.operation = ""
    },
    cleanTodos(){
      this.$cleanTodos()
    },
    setWaitTime(){
      console.log("set waitTime ", this.wt)
      this.$store.commit("ypu/setWaitTime", this.wt)
    },
    openWindows(){
      window.open(window.location.href, "Window 1", "width=200,height=100");
      window.open(window.location.href, "Window 2", "width=200,height=100");
    }
  },
  watch:{
    waitTime(){
      this.wt = this.waitTime
    }
  },
  computed:{
    actif(){
      return this.$store.state.ypu.actif
    },
    waitTime(){
      return this.$store.state.ypu.waitTime
    }
  }


}
</script>

<style lang="css" scoped>
.todos-push {

}
</style>
