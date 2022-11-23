// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';

const state = () => ({
  doc: null,
  wsProvider: null,
  status: null,
  memory: null,
  todos: null,
  pending: null,
  done: null,
  ready: false,
  actif: false,
  clientID: null
  // id: "",
  // agentVersion: "",

})

const mutations = {
  setDoc(state, d){
    state.doc = d
  },
  setStatus(state, s){
    state.status = s
  },
  setWsProvider(state, wsp){
    state.wsProvider = wsp
  },
  setMemory(state, m){
    state.memory = m
  },
  setTodos(state, t){
    state.todos = t
  },
  setPending(state, p){
    state.pending = p
  },
  setDone(state, d){
    state.done = d
  },
  setReady(state, b){
    state.ready = b
  },
  setClientID(state, c){
    state.clientID = c
  },
  setActif(state, b){
    console.log(b)
    state.actif = b
    if(state.actif == true && state.ready == false){
      state.ready = true
    }
  },
}

const actions = {
  // async newDoc(context){
  //   let doc = Automerge.init()
  //   context.commit('setDoc', doc)
  // },
  // addItem(context, text) {
  //   console.log(context.state.doc)
  //   let newDoc = Automerge.change(context.state.doc, doc => {
  //     if (!doc.items) doc.items = []
  //     doc.items.push({ text, done: false })
  //   })
  //   context.commit('updateDoc', newDoc)
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
