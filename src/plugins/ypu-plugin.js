import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import {Awareness} from 'y-protocols/awareness.js'
import { v4 as uuidv4 } from 'uuid';

let processTime = 1000


export default {
  install: (app, options) => {
    let store = options.store
    let doc = null, wsProvider= null, awareness = null, memory = null, registers = null
    let todos, pending, done

    app.config.globalProperties.$initWebSocketBus = async function(config){

      // try {
      doc = new Y.Doc()
      awareness = new Awareness(doc)
      store.commit('ypu/setClientID', awareness.clientID)

      wsProvider = new WebsocketProvider(config.server, config.room, doc)
      store.commit('ypu/setDoc', doc)
      store.commit('ypu/setWsProvider', wsProvider)
      wsProvider.on('status', event => {
        console.log(event.status) // logs "connected" or "disconnected"
        store.commit('ypu/setStatus', event.status)
      })

      memory = doc.getArray('memory')
      registers = doc.getArray('registers')
      todos = doc.getMap('todos')
      pending = doc.getMap('pending')
      done = doc.getMap('done')

      memory.observe(memoryEvent => {
        memoryEvent.target === memory // => true
        store.commit('ypu/setMemory', memory.toArray())
        // Find out what changed:
        // Log the Array-Delta Format to calculate the difference to the last observe-event
        console.log(memoryEvent.changes.delta)
      })

      // todos.observe(todosEvent => {
      //   todosEvent.target === todos // => true
      //   store.commit('ypu/setTodos', todos.toJSON())
      //
      //   app.config.globalProperties.$prepare()
      //   // Find out what changed:
      //   // Log the Array-Delta Format to calculate the difference to the last observe-event
      //   console.log(todosEvent.changes.delta)
      // })


      todos.observe(ymapEvent => {
        //  ymapEvent.target === ymap // => true
        store.commit('ypu/setTodos', todos.toJSON())
        // Find out what changed:
        // Option 1: A set of keys that changed
        //ymapEvent.keysChanged // => Set<strings>
        // Option 2: Compute the differences
        //ymapEvent.changes.keys // => Map<string, { action: 'add'|'update'|'delete', oldValue: any}>

        // sample code.
        ymapEvent.changes.keys.forEach((change, key) => {
          console.log(change, key)
          if (change.action === 'add') {
            app.config.globalProperties.$prepare(key)
            //console.log(`Property "${key}" was added. Initial value: "${ymap.get(key)}".`)
          }
          //  else if (change.action === 'update') {
          //   console.log(`Property "${key}" was updated. New value: "${ymap.get(key)}". Previous value: "${change.oldValue}".`)
          // } else if (change.action === 'delete') {
          //   console.log(`Property "${key}" was deleted. New value: undefined. Previous value: "${change.oldValue}".`)
          // }
        })
      })

      // ymap.set('key', 'value') // => Property "key" was added. Initial value: "value".
      // ymap.set('key', 'new') // => Property "key" was updated. New value: "new". Previous value: "value".
      // ymap.delete('key') // => Property "key" was deleted. New value: undefined. Previous Value: "new".
      //





      pending.observe(pendingEvent => {
        pendingEvent.target === pending // => true
        store.commit('ypu/setPending', pending.toJSON())
        // Find out what changed:
        // Log the Array-Delta Format to calculate the difference to the last observe-event
        console.log(pendingEvent.changes.delta)
      })

      done.observe(doneEvent => {
        doneEvent.target === done // => true
        store.commit('ypu/setDone', done.toJSON())
        // Find out what changed:
        // Log the Array-Delta Format to calculate the difference to the last observe-event
        console.log(doneEvent.changes.delta)
      })

      registers.observe(registersEvent => {
        registersEvent.target === registers // => true

        // Find out what changed:
        // Log the Array-Delta Format to calculate the difference to the last observe-event
        console.log(registersEvent.changes.delta)
      })

      awareness.on('change', changes => {
        console.log(changes)
        // let usersStates = {changes: changes, users: {}}
        this.awareness.getStates().forEach(state => {
          console.log(state)
          // if (state.user ) {
          //   //console.log('state.user', state.user)
          //   //  this.store.commit('actor/setUserByID', state.user)
          //   // usersStates.users[state.user.clientID] = state.user
          //   console.log(usersStates)
          // }
        })
        //console.log(usersStates)
        // this.store.commit('actor/updateUsersStates', usersStates)
      })




      // store.commit('ipfs/setOnline', ipfs.isOnline())
      // store.commit('ipfs/setIpfsNode',id)
      // } catch (err) {
      //   // Set error status text.
      //   console.log("error ", err)
      // }
    }

    //MFS, Mutable File System https://proto.school/mutable-file-system/02
    app.config.globalProperties.$pushToTodos = async function(operation){
      todos.set(uuidv4(), {operation: operation})
    }

    app.config.globalProperties.$cleanTodos = async function(){
      for (const key of todos.keys()) {
        todos.delete(key)
      }
    }

    app.config.globalProperties.$cleanPending = async function(){
      for (const key of pending.keys()) {
        pending.delete(key)
      }
    }

    app.config.globalProperties.$cleanDone = async function(){
      for (const key of done.keys()) {
        done.delete(key)
      }
    }


    app.config.globalProperties.$prepare = async function(key){
      if(store.state.ypu.actif == true && store.state.ypu.ready == true){

        if (key == undefined){
          key = Array.from(todos.keys())[0]
        }
        console.log(key)
        let current = todos.get(key)
        if (current != undefined){
          store.commit('ypu/setReady', false)

          let p = {key: key, data: current, owner: awareness.clientID, start: Date.now()}
          // console.log(p.data)
          // console.log(p.data.id, p)
          pending.set(key, p)
          todos.delete(key)
          app.config.globalProperties.$process(p)
        }else{
          console.log("bizarre not found ", key, current)
        }
      }
    }


    app.config.globalProperties.$process = async function(p){
      console.log("processing ", p)
      setTimeout(function(){
        console.log("Executed after 1 second");
        p.end = Date.now()
        p.result = "Wahou c'est ok"
        done.set(p.key, p)
        pending.delete(p.key)
        store.commit('ypu/setReady', true)
        app.config.globalProperties.$prepare()
      }, processTime);
    }

    // app.config.globalProperties.$addToMemory = async function(operation){
    //   console.log(operation)
    //   memory.insert(0, [operation])
    //
    //   memory.insert(0, [1, 2, 3]) // => [{ insert: [1, 2, 3] }]
    //   memory.delete(2, 1) // [{ retain: 2 }, { delete: 1 }]
    //
    //   console.log(memory.toArray()) // => [1, 2]
    //
    //   // The delta-format is very useful when multiple changes
    //   // are performed in a single transaction
    //   doc.transact(() => {
    //     memory.insert(1, ['a', 'b'])
    //     memory.delete(2, 2) // deletes 'b' and 2
    //   }) // => [{ retain: 1 }, { insert: ['a'] }, { delete: 1 }]
    //
    //   console.log(memory.toArray()) // => [1, 'a']
    //
    //
    // }
    // app.config.globalProperties.$get = async function(path= '/'){
    //   console.log(path)
    //   if (path.startsWith('/ipns/')){
    //     // let id = path.slice(6)
    //     path = await app.config.globalProperties.$resolve(path)
    //   }
    //   console.log(path)
    //   if (path == '/ipfs') path = '/'
    //   let current = await ipfs.files.stat(path)
    //   current._path = path
    //   console.log(current)
    //   store.commit('ipfs/setCurrent',current)
    //   await ls(current._path)
    // }
    //
    //
    //
    //
    //
    // app.config.globalProperties.$upload = async function(files){
    //   let folder = store.state.ipfs.current
    //   console.log(folder)
    //   let opts = {
    //     truncate: true,
    //     create: true,
    //     flush: true
    //   }
    //
    //   let actualPath = folder._path.endsWith('/') == true ? folder._path : folder._path+'/'
    //   // console.log(global)
    //   await Promise.all(Array.from(files).map(f => ipfs.files.write(actualPath + f.name, f, opts)))
    //
    //
    //   await ls(folder._path)
    //
    // }
    //
    // async function ls(path){
    //   let result = await all(ipfs.files.ls(path))
    //   console.log(result)
    //   store.commit('ipfs/setCurrentContent',result)
    //   return result
    // }



  }
}
