import React, { useState } from "react";
import { useParams } from "react-router-dom";
import profiles from "../data/profiles";

const Chat = () => {
  const { id } = useParams();
  const user = profiles.find(p => p.id === Number(id));

  const [messages, setMessages] = useState([
    { from: "them" },
  ]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text) return;
    setMessages([...messages, { from: "me", text }]);
    setText("");
  };

  return (
    <div className="min-h-screen flex flex-col pt-20 bg-gray-100">
      <div className="bg-pink-600 text-white p-4 text-center font-bold">
        Chat with {user.name}
      </div>

      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs px-4 py-2 rounded-xl ${
              msg.from === "me"
                ? "ml-auto bg-pink-600 text-white"
                : "bg-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded-xl border"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="px-6 py-2 bg-pink-600 text-white rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
