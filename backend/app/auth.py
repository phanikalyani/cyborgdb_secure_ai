from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
def login(username: str, password: str):
    return {"token": "demo-jwt-token"}

@router.post("/signup")
def signup(username: str, password: str):
    return {"status": "user created"}
