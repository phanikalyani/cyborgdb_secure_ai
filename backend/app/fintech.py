from fastapi import APIRouter
from app.cyborgdb_client import encrypted_search

router = APIRouter()

@router.get("/healthcare/search")
def search_healthcare(q: str):
    return encrypted_search(q)
