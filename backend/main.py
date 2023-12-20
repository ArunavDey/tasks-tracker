import uvicorn

if __name__ == "__main__":
    uvicorn.run("routers.router:app", reload=True, port=8000, host="0.0.0.0")
