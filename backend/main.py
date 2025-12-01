from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/calculate")
def calculate(a: float, b: float, op: str):
    if op == "add":
        return {"result": a + b}
    elif op == "sub":
        return {"result": a - b}
    elif op == "mul":
        return {"result": a * b}
    elif op == "div":
        if b != 0:
            return {"result": a / b}
        else:
            return {"error": "Cannot divide by zero"}
    else:
        return {"error": "Invalid operation"}
