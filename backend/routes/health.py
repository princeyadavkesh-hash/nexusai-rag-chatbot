"""
routes/health.py — Lightweight health-check for Render / load balancers.
"""

from fastapi import APIRouter
from models.chat import HealthResponse
from config.settings import settings

router = APIRouter()


@router.get("/health", response_model=HealthResponse)
async def health():
    """Returns 200 OK when the service is up."""
    return HealthResponse(
        status="ok",
        version="1.0.0",
        model=settings.GROQ_MODEL,
    )
