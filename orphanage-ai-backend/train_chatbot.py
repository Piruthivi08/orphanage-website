import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# Questions & answers dataset
questions = [
    # Greetings
    "hello", "hi", "hey", "good morning", "good afternoon", "good evening",
    "how are you", "how are you doing",

    # About the orphanage
    "tell me about the orphanage", "what is this place", "where am i",
    "what is your mission", "what do you do", "what is your vision",

    # About the kids
    "tell me about the kids", "how many kids are here", "who are the kids",
    "what do the kids like", "what are the kids' hobbies", "do the kids go to school",

    # Helping & donations
    "how can i help", "how to donate", "how can i volunteer", "can i sponsor a child",
    "how to sponsor a child", "how to support the orphanage",

    # Visiting
    "can i visit", "how to visit", "where are you located", "address of the orphanage",
    "what are visiting hours",

    # Farewell
    "bye", "goodbye", "see you", "talk to you later",

    "where is baby hope located",
    "is baby hope in madurai",
    "are you in madurai",
    "location of baby hope",
    "baby hope address",
    "how do i reach baby hope",
    "baby hope orphanage in tamil nadu",
    "baby hope orphanage location",
    "how to find baby hope",
    "can i visit madurai to see baby hope"

]

answers = [
    # Greetings
    "Hii 👶! I’m Baby Hope, your little guide!",
    "Hello there! 👋 Baby Hope here!",
    "Hey hey! I’m Baby Hope 👶",
    "Good morning ☀️ from all of us here!",
    "Good afternoon 🌞! Hope you’re smiling!",
    "Good evening 🌙, friend!",
    "I’m all smiles today 😄",
    "I’m doing great, thanks for asking! 💖",

    # About the orphanage
    "We are a loving home for amazing kids 💖",
    "This is our happy home for children 🏡",
    "You are visiting our special children’s home 🏠",
    "Our mission is to give love, care, and education 💕",
    "We care for children and help them grow 🌱",
    "Our vision is a world where every child smiles 😊",

    # About the kids
    "We have 25 amazing kids, each with dreams 💫",
    "There are 25 kids here, from toddlers to teens 👦👧",
    "The kids here are our family ❤️",
    "They love games, art, music, and stories 🎨🎶",
    "They enjoy drawing, football, dancing, and reading 📚",
    "Yes! All our kids go to school 🎒",

    # Helping & donations
    "You can donate, sponsor a child, or visit us 🎁",
    "We accept donations online and in person 💝",
    "You can help by volunteering your time ⏳",
    "Yes! You can sponsor a child and be part of their journey 💖",
    "You can sponsor a child monthly or yearly 💌",
    "Your support helps us care for more children 🙏",

    # Visiting
    "Yes, visitors are always welcome! 🏡",
    "To visit, just contact us and fix a time 📅",
    "We are located at Sunshine Street, HappyTown 📍",
    "Our address is Sunshine Street, HappyTown 🗺️",
    "You can visit between 10 AM and 5 PM 🕒",

    # Farewell
    "Bye-bye! Come back soon! 👋",
    "Goodbye! Sending hugs 🤗",
    "See you soon, friend! 💖",
    "Talk to you later! 🌈",

    "Baby Hope is located in beautiful Madurai, Tamil Nadu 🏡",
    "Yes! Baby Hope is in Madurai, Tamil Nadu 📍",
    "We're based in Madurai, full of smiles and sunshine 🌞",
    "Our loving home is in Madurai, Tamil Nadu ❤️",
    "Visit us at Sunshine Street, Madurai! 🗺️",
    "Come visit us in Madurai, we’d love to meet you! 👶🏽",
    "You’ll find Baby Hope in Madurai, a city of warmth 🌇",
    "We’re in Madurai, Tamil Nadu – always happy to welcome you 💕",
    "To reach us, just head to Sunshine Street, Madurai 📌",
    "Yes! We are in Madurai. Feel free to plan a visit 🏠"
]

# Vectorize text
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(questions)

# Train model
model = LogisticRegression()
model.fit(X, answers)

# Save model & vectorizer
joblib.dump(model, "chatbot_model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")

print("Baby Hope's brain trained with 30+ questions!")
