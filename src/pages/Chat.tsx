import { useEffect, useRef, useState } from "react";
import { askGemini } from "../services/gemini";

import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Loader from "../components/Loader";

type ChatProps = {
  onBack: () => void;
};

type Message = {
  sender: "user" | "ai";
  message: string;
};

function Chat({ onBack }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      message: "👋 Hello! I'm Nexora AI. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Auto Scroll
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: text,
      },
    ]);

    setLoading(true);

    try {
      const reply = await askGemini(text);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          message: "❌ Failed to get response from Gemini.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className="feature-btn" onClick={onBack}>
        ← Back
      </button>

      <h2 className="logo" style={{ marginTop: "18px" }}>
        🤖 AI Chat
      </h2>

      <p className="tagline">Chat with Nexora AI</p>

      <div
        style={{
          marginTop: "20px",
          minHeight: "250px",
          maxHeight: "250px",
          overflowY: "auto",
        }}
      >
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

        {loading && <Loader />}

        {/* Auto Scroll Target */}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSend={handleSend} />
    </>
  );
}

export default Chat;