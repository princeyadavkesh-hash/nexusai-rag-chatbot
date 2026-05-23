from pydantic import BaseModel, Field, field_validator
from typing import List, Optional
from enum import Enum


class Role(str, Enum):
    user = "user"
    assistant = "assistant"
    system = "system"


class Message(BaseModel):
    role: Role
    content: str = Field(..., min_length=1, max_length=8000)


class ChatRequest(BaseModel):
    messages: List[Message] = Field(..., min_length=1)
    system_prompt: Optional[str] = None
    stream: bool = False

    @field_validator("messages")
    @classmethod
    def last_message_must_be_user(cls, v):
        if v[-1].role != Role.user:
            raise ValueError("Last message must be from user")
        return v


class ChatResponse(BaseModel):
    reply: str
    model: str
    usage: dict


class SuggestionsResponse(BaseModel):
    suggestions: List[str]


class HealthResponse(BaseModel):
    status: str
    version: str
    model: str