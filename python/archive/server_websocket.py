import asyncio
from websockets import serve
from ypy_websocket import WebsocketServer

async def server():
    async with (
        WebsocketServer() as websocket_server,
        serve(websocket_server.serve, "localhost", 1234),
    ):
        
        # async for message in websocket_server:
        #     print("message",message)

        #await websocket_server.send("hello")

        await asyncio.Future()  # run forever

asyncio.run(server())