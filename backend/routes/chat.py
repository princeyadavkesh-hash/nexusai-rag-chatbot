from fastapi import APIRouter
from pydantic import BaseModel
from services.groq_service import GroqService

router = APIRouter()

svc = GroqService()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
async def chat(request: ChatRequest):

    result = svc.generate_response(request.message)

    return {
        "reply": result["response"],
        "suggestions": result["suggestions"]
    }