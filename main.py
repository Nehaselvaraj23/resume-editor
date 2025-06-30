from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Any, Dict
import json

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify: ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RESUME_FILE = "saved_resume.json"

class EnhanceRequest(BaseModel):
    section: str
    content: str

class SaveResumeRequest(BaseModel):
    resume: Dict[str, Any]

@app.post("/ai-enhance")
def ai_enhance(req: EnhanceRequest):
    enhanced_text = f"✨ Enhanced: {req.content}"
    return {"enhanced": enhanced_text}

@app.post("/save-resume")
def save_resume(req: SaveResumeRequest):
    with open(RESUME_FILE, "w", encoding="utf-8") as f:
        json.dump(req.resume, f, indent=2)
    return {"status": "saved"}
