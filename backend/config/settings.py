"""
config/settings.py — Centralised configuration via environment variables.
All secrets are loaded here and NEVER hard-coded elsewhere.
"""

from pydantic_settings import BaseSettings
from typing import List
import os


class Settings(BaseSettings):
    # ── App meta ──────────────────────────────────────────────────────────────
    APP_NAME: str = "NexusAI Chatbot API"
    ENV: str = "development"

    # ── Groq AI ───────────────────────────────────────────────────────────────
    GROQ_API_KEY: str = ""
    GROQ_MODEL: str = "llama3-70b-8192"
    GROQ_MAX_TOKENS: int = 1024
    GROQ_TEMPERATURE: float = 0.7

    # ── CORS ──────────────────────────────────────────────────────────────────
    # Comma-separated list of allowed origins; split into a Python list below.
    ALLOWED_ORIGINS_STR: str = "http://localhost:5173,http://localhost:3000"

    @property
    def ALLOWED_ORIGINS(self) -> List[str]:
        return [o.strip() for o in self.ALLOWED_ORIGINS_STR.split(",")]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        extra = "ignore"


settings = Settings()
