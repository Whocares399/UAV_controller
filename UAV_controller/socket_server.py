#!/usr/bin/env python

import asyncio
#import datetime
#import random
import websockets
#import simplejson as json


async def time(websocket, path):
    
    x_0 = 6
    y_0 = 7

    x_1 = 10
    y_1 = 60
    
    x_2 = 100
    y_2 = 50
    
    while True:
        x_0 +=5
        y_0 +=5
        
        x_1 +=5
        y_1 +=5
        
        x_2 += 5
        y_2 += 5
        ##now = datetime.datetime.utcnow().isoformat() + 'Z'
        string = "{}:{};{}:{};{}:{}".format(x_0,y_0,x_1,y_1,x_2,y_2)
        await websocket.send(string)
        await asyncio.sleep(1)
        

start_server = websockets.serve(time, '0.0.0.0', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()