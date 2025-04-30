from fastapi import FastAPI
from backend.api.function import BookRoom as call_bookroom # type: ignore
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:3000"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

#MODEL
class UserInput(BaseModel):
    Firstn: str
    Lastn: str
    Email: str
    Day: int
    StartHour: int
    StartMin: str
    StartAP: str
    EndHour: int
    EndMin: str
    EndAP: str


@app.get("/")
def homepage():
    return {"message": "Hello, FastAPI!"}


@app.post('/bookroom')

def bookroom(data: UserInput):
    
    callreturn = call_bookroom(
        data.Firstn,
        data.Lastn,
        data.Email,
        data.Day,
        data.StartHour,
        data.StartMin,
        data.StartAP,
        data.EndHour,
        data.EndMin, 
        data.EndAP 
    )
    return {'bookroom': callreturn}
