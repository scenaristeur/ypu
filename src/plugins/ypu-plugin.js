import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'


export default {
  install: (app, options) => {
    let store = options.store
    let doc = null, wsProvider= null, memory = null, registers = null

    app.config.globalProperties.$initWebSocketBus = async function(config){

      // try {
      doc = new Y.Doc()
      wsProvider = new WebsocketProvider(config.server, config.room, doc)
      store.commit('ypu/setDoc', doc)
      store.commit('ypu/setWsProvider', wsProvider)
      wsProvider.on('status', event => {
        console.log(event.status) // logs "connected" or "disconnected"
        store.commit('ypu/setStatus', event.status)
      })

      memory = doc.getArray('memory')
      registers = doc.getArray('registers')

      memory.observe(memoryEvent => {
        memoryEvent.target === memory // => true
        store.commit('ypu/setMemory', memory.toArray())
        // Find out what changed:
        // Log the Array-Delta Format to calculate the difference to the last observe-event
        console.log(memoryEvent.changes.delta)
      })

      registers.observe(registersEvent => {
        registersEvent.target === registers // => true

        // Find out what changed:
        // Log the Array-Delta Format to calculate the difference to the last observe-event
        console.log(registersEvent.changes.delta)
      })




      // store.commit('ipfs/setOnline', ipfs.isOnline())
      // store.commit('ipfs/setIpfsNode',id)
      // } catch (err) {
      //   // Set error status text.
      //   console.log("error ", err)
      // }
    }

    //MFS, Mutable File System https://proto.school/mutable-file-system/02


    app.config.globalProperties.$addToMemory = async function(operation){
      console.log(operation)
      memory.insert(0, [operation])

      memory.insert(0, [1, 2, 3]) // => [{ insert: [1, 2, 3] }]
      memory.delete(2, 1) // [{ retain: 2 }, { delete: 1 }]

      console.log(memory.toArray()) // => [1, 2]

      // The delta-format is very useful when multiple changes
      // are performed in a single transaction
      doc.transact(() => {
        memory.insert(1, ['a', 'b'])
        memory.delete(2, 2) // deletes 'b' and 2
      }) // => [{ retain: 1 }, { insert: ['a'] }, { delete: 1 }]

      console.log(memory.toArray()) // => [1, 'a']


    }
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
