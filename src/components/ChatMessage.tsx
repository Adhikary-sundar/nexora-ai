import "../styles/chat.css";

type ChatMessageProps = {
  sender: "user" | "ai";
  message: string;
};

function ChatMessage({ sender, message }: ChatMessageProps) {
  const isUser = sender === "user";

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className={`chat-row ${isUser ? "user" : "ai"}`}>
      {!isUser && <div className="avatar">🤖</div>}

      <div className="chat-bubble">
        <div className="chat-header">
          <span>{isUser ? "You" : "Nexora AI"}</span>

          {!isUser && (
            <button className="copy-btn" onClick={copyMessage}>
              📋
            </button>
          )}
        </div>

        <div className="chat-text">{message}</div>
      </div>

      {isUser && <div className="avatar">👤</div>}
    </div>
  );
}

export default ChatMessage;