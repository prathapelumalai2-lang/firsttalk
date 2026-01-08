from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uuid

app = FastAPI()

# session_id -> list of messages
sessions: dict[str, list[str]] = {}

class SessionIn(BaseModel):
    session_id: str

class MessageIn(SessionIn):
    message: str


@app.post("/dialogue/start")
async def start_dialogue():
    session_id = "s" + uuid.uuid4().hex[:6]

    # initialize empty message list
    sessions[session_id] = []

    return {"session_id": session_id, "status": "started"}


@app.post("/dialogue/message")
async def dialogue_message(data: MessageIn):
    if data.session_id not in sessions:
        raise HTTPException(status_code=404, detail="Invalid session_id")

    sessions[data.session_id].append(data.message)

    return {
        "reply": f"Message received ({len(sessions[data.session_id])})",
        "messages": sessions[data.session_id]
    }


@app.post("/dialogue/end")
async def end_dialogue(data: SessionIn):
    if data.session_id not in sessions:
        raise HTTPException(status_code=404, detail="Invalid session_id")

    del sessions[data.session_id]

    return {"status": "ended"}
