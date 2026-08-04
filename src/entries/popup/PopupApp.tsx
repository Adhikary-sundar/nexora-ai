import { useState } from "react";
import "./popup.css";

import Home from "../../pages/Home";
import Chat from "../../pages/Chat";

function PopupApp() {
  const [page, setPage] = useState<"home" | "chat">("home");

  return (
    <div className="popup">
      {page === "home" ? (
        <Home onOpenChat={() => setPage("chat")} />
      ) : (
        <Chat onBack={() => setPage("home")} />
      )}
    </div>
  );
}

export default PopupApp;