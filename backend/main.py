from fastapi import FastAPI
from backend.api.function import BookRoom as Call_BookRoom

app = FastAPI()


@app.get('/')
def read_root():
    return {'message': "Hello, FastAPI!"}


@app.get('/BookRoom')

def BookRoom():
    Firstn= 'null'
    Lastn = 'null'
    Email = 'null'
    Day = 3
    StartHour = 9
    StartMin = 00
    StartAP = 'pm'
    EndHour = 10
    EndMin = 00
    
    callreturn = Call_BookRoom(Firstn, Lastn, Email, Day, StartHour, StartMin, StartAP, EndHour, EndMin)
    return {'BookRoom': callreturn}
