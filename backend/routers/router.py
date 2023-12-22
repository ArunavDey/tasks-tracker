from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import board_router, task_router

app = FastAPI()

allowed_origins = ["*"]

app.add_middleware(CORSMiddleware, allow_origins=allowed_origins)


@app.get("/", tags=["Root"])
def root():
    return {"status": "success"}


app.include_router(board_router)
app.include_router(task_router)
