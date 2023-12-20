import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket/dist/src/y-websocket.js";
import { Awareness } from "y-protocols/awareness.js";
import WebSocket from 'ws';

let config = {
  server: "", //'wss://ypu.glitch.me/',//'ws://'+window.location.hostname+':1234',
  room: "my-ypu",
};
//let locale_url = "ws://" + window.location.hostname + ":1234";
let remote_url = "wss://ypu.glitch.me/";
config.server.url = remote_url

let doc = new Y.Doc();
let awareness = new Awareness(doc);
//store.commit('ypu/setClientID', awareness.clientID)
console.log("awareness", awareness.clientID);

// let wsProvider = new WebsocketProvider(config.server, config.room, doc);


const wsProvider = new WebsocketProvider(
  config.server.url, config.room,
  doc,
  { WebSocketPolyfill: WebSocket }
)
// store.commit("ypu/setDoc", doc);
// store.commit("ypu/setWsProvider", wsProvider);
console.log(doc, wsProvider)
wsProvider.on("status", (event) => {
  console.log(event.status); // logs "connected" or "disconnected"
 // store.commit("ypu/setStatus", event.status);
});

let memory = doc.getArray("memory");
let registers = doc.getArray("registers");
let todos = doc.getMap("todos");
let pending = doc.getMap("pending");
let done = doc.getMap("done");

memory.observe((memoryEvent) => {
  memoryEvent.target === memory; // => true
  //store.commit("ypu/setMemory", memory.toArray());
  console.log("ypu/setMemory", memory.toArray())
  // Find out what changed:
  // Log the Array-Delta Format to calculate the difference to the last observe-event
  console.log(memoryEvent.changes.delta);
});

// todos.observe(todosEvent => {
//   todosEvent.target === todos // => true
//   store.commit('ypu/setTodos', todos.toJSON())
//
//   app.config.globalProperties.$prepare()
//   // Find out what changed:
//   // Log the Array-Delta Format to calculate the difference to the last observe-event
//   console.log(todosEvent.changes.delta)
// })

todos.observe((ymapEvent) => {
  //  ymapEvent.target === ymap // => true
//   store.commit("ypu/setTodos", todos.toJSON());
console.log("ypu/setTodos", todos.toJSON());
  // Find out what changed:
  // Option 1: A set of keys that changed
  //ymapEvent.keysChanged // => Set<strings>
  // Option 2: Compute the differences
  //ymapEvent.changes.keys // => Map<string, { action: 'add'|'update'|'delete', oldValue: any}>

  // sample code.
  ymapEvent.changes.keys.forEach((change, key) => {
    //  console.log(change, key)
    if (change.action === "add") {
      //app.config.globalProperties.$prepare(key);
      console.log("prepare", key)
      //console.log(`Property "${key}" was added. Initial value: "${ymap.get(key)}".`)
    }
    //  else if (change.action === 'update') {
    //   console.log(`Property "${key}" was updated. New value: "${ymap.get(key)}". Previous value: "${change.oldValue}".`)
    // } else if (change.action === 'delete') {
    //   console.log(`Property "${key}" was deleted. New value: undefined. Previous value: "${change.oldValue}".`)
    // }
  });
});

// ymap.set('key', 'value') // => Property "key" was added. Initial value: "value".
// ymap.set('key', 'new') // => Property "key" was updated. New value: "new". Previous value: "value".
// ymap.delete('key') // => Property "key" was deleted. New value: undefined. Previous Value: "new".
//

pending.observe((pendingEvent) => {
  pendingEvent.target === pending; // => true
  //store.commit("ypu/setPending", pending.toJSON());
  console.log("pending", pending.toJSON())
  // Find out what changed:
  // Log the Array-Delta Format to calculate the difference to the last observe-event
  //  console.log(pendingEvent.changes.delta)
});

done.observe((doneEvent) => {
  doneEvent.target === done; // => true
 // store.commit("ypu/setDone", done.toJSON());
 console.log("done", done.toJSON())
  // Find out what changed:
  // Log the Array-Delta Format to calculate the difference to the last observe-event
  //  console.log(doneEvent.changes.delta)
});

registers.observe((registersEvent) => {
  registersEvent.target === registers; // => true

  // Find out what changed:
  // Log the Array-Delta Format to calculate the difference to the last observe-event
  console.log(registersEvent.changes.delta);
});

awareness.on("change", (changes) => {
  console.log(changes);
  // let usersStates = {changes: changes, users: {}}
  this.awareness.getStates().forEach((state) => {
    console.log(state);
    // if (state.user ) {
    //   //console.log('state.user', state.user)
    //   //  this.store.commit('actor/setUserByID', state.user)
    //   // usersStates.users[state.user.clientID] = state.user
    //   console.log(usersStates)
    // }
  });
  //console.log(usersStates)
  // this.store.commit('actor/updateUsersStates', usersStates)
});
