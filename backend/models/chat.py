from pydantic import BaseModel
from typing import List


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str
    suggestions: List[str]


class HealthResponse(BaseModel):
    status: str
    version: str
    model: str