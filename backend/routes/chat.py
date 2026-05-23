from fastapi import APIRouter
from models.chat import ChatRequest
from services.groq_service import GroqService

router = APIRouter()

svc = GroqService()


@router.post("/chat")
async def chat(request: ChatRequest):

    user_message = request.messages[-1].content

    result = svc.generate_response(user_message)

    return {
        "reply": result["response"],
        "suggestions": result["suggestions"]
    }