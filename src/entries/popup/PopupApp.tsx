import { useState } from "react";
import "./popup.css";

import Home from "../../pages/Home";
import Chat from "../../pages/Chat";

import { getCurrentPageContent } from "../../services/page";
import { summarizePage } from "../../services/gemini";

function PopupApp() {
  const [page, setPage] = useState<"home" | "chat">("home");

  const handleSummarize = async () => {
    try {
      alert("📄 Reading current webpage...");

      const pageContent = await getCurrentPageContent();

      console.log("Page Length:", pageContent.length);

      if (!pageContent.trim()) {
        alert("❌ No readable text found on this page.");
        return;
      }

      alert("🤖 Nexora AI is generating summary...");

      const summary = await summarizePage(pageContent);

      alert(summary);
    } catch (error) {
      console.error("Summary Error:", error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(JSON.stringify(error));
      }
    }
  };

  return (
    <div className="popup">
      {page === "home" ? (
        <Home
          onOpenChat={() => setPage("chat")}
          onSummarize={handleSummarize}
        />
      ) : (
        <Chat onBack={() => setPage("home")} />
      )}
    </div>
  );
}

export default PopupApp;