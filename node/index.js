const ws = require('ws')

import 'ws';

import * as Y from 'yjs'
import  WebsocketProvider from 'y-websocket'

const doc = new Y.Doc()
// const wsProvider = new WebsocketProvider('ws://localhost:1234', 'my-roomname', doc)
const wsProvider = new WebsocketProvider(
    'ws://localhost:1234', 'my-roomname',
    doc,
    { WebSocketPolyfill: ws }
  )

wsProvider.on('status', event => {
  console.log(event.status) // logs "connected" or "disconnected"
})