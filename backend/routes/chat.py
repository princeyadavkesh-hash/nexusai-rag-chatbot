from fastapi import APIRouter
from models.chat import ChatRequest
from services.groq_service import GroqService

router = APIRouter()

svc = GroqService()


@router.post("/chat")
async def chat(request: ChatRequest):

    result = svc.generate_response(request.message)

    return {
        "reply": result["response"],
        "suggestions": result["suggestions"]
    }