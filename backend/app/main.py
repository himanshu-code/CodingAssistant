from fastapi import FastAPI
from app.api.routes import chat,health

app = FastAPI(title="Dev Assistant AI")

app.include_router(chat.router,prefix="/api/chat")
app.include_router(health.router,prefix="/api/health")