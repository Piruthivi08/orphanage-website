import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import babyAnimation from "../assets/Little Girl Jumping.json";

const quotes = [
  "Hi! I'm your little guide 👶",
  "Want to meet my friends?",
  "Every child deserves love ❤️",
  "You can help change a life 🌟",
];

export default function BabyAssistant() {
  const [isLoading, setIsLoading] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Change quotes every 4 seconds when chat is closed
  useEffect(() => {
    if (!isChatOpen) {
      const interval = setInterval(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isChatOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setIsLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "Oops! No reply." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error talking to Baby Hope 🍼" },
      ]);
    }

    setIsLoading(false);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-2 z-50">
      {/* Chat window */}
      {isChatOpen && (
        <div className="bg-white shadow-lg rounded-2xl w-72 h-96 flex flex-col border border-pink-200">
          <div className="bg-pink-200 p-3 rounded-t-2xl font-bold text-pink-800">
            Baby Hope Chat 💬
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`px-3 py-1 rounded-2xl max-w-[80%] break-words ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-pink-100 text-pink-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="text-pink-500 italic text-xs">
                Baby Hope is thinking... 🤔
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* Input */}
          <div className="p-2 border-t border-pink-200 flex gap-2">
            <input
              className="flex-1 border border-pink-300 rounded-full px-3 text-sm focus:outline-none"
              placeholder="Type here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-pink-400 text-white rounded-full px-3 text-sm"
              onClick={handleSend}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating quote */}
      {!isChatOpen && (
        <div className="relative mr-6 -mb-6">
          <div className="bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200 shadow-md rounded-2xl px-4 py-2 text-sm text-gray-800 border border-pink-300 animate-bounce-slow">
            {quotes[quoteIndex]}
          </div>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-pink-200 rotate-45 border-b border-r border-pink-300"></div>
        </div>
      )}

      {/* Baby Animation - clickable */}
      <div
        className="w-32 h-32 cursor-pointer"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <Lottie animationData={babyAnimation} loop={true} />
      </div>
    </div>
  );
}
