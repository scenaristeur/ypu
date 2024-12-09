import asyncio
# import y_py as Y
import pycrdt 
from websockets import connect
from pycrdt_websocket import WebsocketProvider

async def client():
    # ydoc = Doc()
    ydoc = pycrdt.Doc()
    async with (
        connect("wss://ypu.glitch.me/my-ypu-python") as websocket,
        WebsocketProvider(ydoc, websocket),
    ):
        
        def handle_changes(event):
            print(event.target['env'])

  
        ydoc['workspace'] = ws = pycrdt.Map()
        ws['env'] = 'unset'
        ws.observe(handle_changes)
        ws['env'] = 'good'
        # Changes to remote ydoc are applied to local ydoc.
        # Changes to local ydoc are sent over the WebSocket and
        # broadcast to all clients.
        # ymap = ydoc.get_map("map")
        # with ydoc.begin_transaction() as t:
        #     ymap.set(t, "key", "value")
        # text0 = Text("Hello")
        # array0 = Array([0, "foo"])
        # map0 = Map({"key0": "value0"})


        # def handle_changes(event: TextEvent):
        #     print("event", event)
        #     # process the event

        # text0_subscription_id = text0.observe(handle_changes)


        # doc["text0"] = text0
        # doc["array0"] = array0
        # doc["map0"] = map0

        # text0 += ", World!"
        # array0.append("bar")
        # map0["key1"] = "value1"

        # map1 = Map({"baz": 1})
        # array1 = Array([5, 6, 7])

        # array0.append(map1)
        # map0["key2"] = array1

        # await asyncio.Future()  # run forever

asyncio.run(client())