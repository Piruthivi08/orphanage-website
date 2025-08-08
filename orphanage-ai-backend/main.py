from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib

# Initialize FastAPI app
app = FastAPI()

# Allow React frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change "*" to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained ML model & vectorizer
model = joblib.load("chatbot_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

# Request body structure
class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat_endpoint(req: ChatRequest):
    user_message = req.message.strip().lower()
    
    # Transform user input into vector form
    X_new = vectorizer.transform([user_message])
    # Predict reply
    reply = model.predict(X_new)[0]

    return {"reply": reply}
