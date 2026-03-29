from fastapi import FastAPI
from app.api.routes import chat,health
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Dev Assistant AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router,prefix="/api/chat")
app.include_router(health.router,prefix="/api/health")