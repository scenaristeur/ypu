import asyncio
import y_py as Y
from websockets import connect
from ypy_websocket import WebsocketProvider

async def client():
    ydoc = Y.YDoc()
    async with (
        connect("wss://ypu.glitch.me/my-ypu") as websocket,
        WebsocketProvider(ydoc, websocket),
    ):
        
        # async for message in websocket:
        #     print("message",message)
        # Changes to remote ydoc are applied to local ydoc.
        # Changes to local ydoc are sent over the WebSocket and
        # broadcast to all clients.
            
        # await websocket.send("hello")
            
        ymap = ydoc.get_map("todos")
        print("todos",ymap)
        # with ydoc.begin_transaction() as t:
        #     ymap.set(t, "key", "value")

        await asyncio.Future()  # run forever

asyncio.run(client())