// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';
import { HordeClient } from '@/api/horde_client.js'

const state = () => ({
  config: null,
  hordeClient: new HordeClient(),
  reading: null,
  hordeApi: localStorage.getItem('hordeApi') || '0000000000'
});

const mutations = {
  setConfig(state, c) {
    state.config = c;
  },
};

const actions = {
  async getCompletion(context, data) {
    let story = data.story
    let callback = data.callback
    story.hordeApiKey = context.state.hordeApi
    console.log(context.state, story)
    let completion = await context.state.hordeClient.getCompletion(story, callback)
    console.log('completion', completion)
  }
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
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
