from sqlalchemy import Column, Integer, String, Float, LargeBinary
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    password = Column(String)
    role = Column(String)  # doctor, patient, analyst

class PatientRecord(Base):
    __tablename__ = "patient_records"
    id = Column(Integer, primary_key=True)
    encrypted_embedding = Column(LargeBinary)
    diagnosis = Column(String)

class Transaction(Base):
    __tablename__ = "transactions"
    id = Column(Integer, primary_key=True)
    encrypted_embedding = Column(LargeBinary)
    amount = Column(Float)
    risk_score = Column(Float)
