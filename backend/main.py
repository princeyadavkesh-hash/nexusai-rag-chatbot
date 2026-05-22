"""
main.py — FastAPI application entry point
Initializes the app, registers middleware, and mounts all route modules.
"""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.settings import settings
from routes import chat, health


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup / shutdown lifecycle handler."""
    print(f"🚀 Starting {settings.APP_NAME} — {settings.ENV} mode")
    yield
    print("👋 Shutting down cleanly")


app = FastAPI(
    title=settings.APP_NAME,
    description="Production-grade AI chatbot backend powered by Groq + LLaMA 3",
    version="1.0.0",
    lifespan=lifespan,
)

# ── CORS ──────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routes ────────────────────────────────────────────────────────────────────
app.include_router(health.router, tags=["Health"])
app.include_router(chat.router, prefix="/api", tags=["Chat"])