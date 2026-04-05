from datetime import datetime

from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="Chatbot Backend", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def build_reply(message: str) -> str:
    normalized = message.strip().lower()

    if not normalized:
        return "Ask me something and I will reply from the Python backend."
    if "hello" in normalized or "hi" in normalized:
        return "Hello. The backend is running and ready to chat."
    if "time" in normalized:
        return f"Server time is {datetime.now().strftime('%I:%M %p')}"
    if "date" in normalized:
        return f"Today is {datetime.now().strftime('%B %d, %Y')}"

    return (
        "You said: "
        f"{message}. This is a demo GET API response from FastAPI."
    )


@app.get("/")
def read_root() -> dict[str, str]:
    return {"message": "Chatbot backend is running."}


@app.get("/api/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/chat")
def chat(message: str = Query("", min_length=0, max_length=200)) -> dict[str, str]:
    return {
        "message": message,
        "reply": build_reply(message),
    }
