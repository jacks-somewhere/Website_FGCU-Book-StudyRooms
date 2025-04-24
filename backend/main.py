from fastapi import FastAPI
from backend.api.function import bookroom as call_bookroom

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}


@app.get('/bookroom')

def bookroom():
    firstn= 'null'
    lastn = 'null'
    email = 'null'
    day = 3
    starthour = 9
    startmin = 00
    startap = 'pm'
    endhour = 10
    endmin = 00
    
    callreturn = call_bookroom(firstn, lastn, email, day, starthour, startmin, startap, endhour, endmin)
    return {"bookroom": callreturn}
