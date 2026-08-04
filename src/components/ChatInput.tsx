import { useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
};

function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message.trim());
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px",
        alignItems: "flex-end",
      }}
    >
      <textarea
        placeholder="Ask Nexora AI..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={1}
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "#1e293b",
          color: "#fff",
          outline: "none",
          fontSize: "14px",
          resize: "none",
          minHeight: "44px",
          maxHeight: "90px",
          overflowY: "auto",
          fontFamily: "inherit",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      <button
        className="feature-btn"
        onClick={handleSend}
        style={{
          width: "90px",
          marginBottom: 0,
          textAlign: "center",
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;