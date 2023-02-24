import { syncedStore, getYjsDoc } from "@syncedstore/core";
// import { WebrtcProvider } from "y-webrtc";
import { WebsocketProvider } from "y-websocket";

// (optional, define types for TypeScript)
//type Todo = { completed: boolean, title: string };

// Create your SyncedStore store
// export const store = syncedStore({ todos: [] as Todo[], fragment: "xml" });
export const store = syncedStore({ todos: [], fragment: "xml" });

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsDoc(store);
// export const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc);

// export const disconnect = () => webrtcProvider.disconnect();
// export const connect = () => webrtcProvider.connect();

const wsProvider = new WebsocketProvider("wss://ypu.glitch.me/", "syncedstore-ypu", doc);
export const disconnect = () => wsProvider.disconnect();
export const connect = () => wsProvider.connect();

