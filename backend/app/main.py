from fastapi import FastAPI
from database import Base, engine
from routes import auth, healthcare, fintech, search

Base.metadata.create_all(bind=engine)

app = FastAPI(title="CyborgDB Secure Backend")

app.include_router(auth.router, prefix="/auth")
app.include_router(healthcare.router, prefix="/healthcare")
app.include_router(fintech.router, prefix="/fintech")
app.include_router(search.router, prefix="/search")
