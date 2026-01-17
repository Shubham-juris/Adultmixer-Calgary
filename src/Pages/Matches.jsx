import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profiles from "../data/profiles";

const Matches = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = profiles.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-28 px-4 bg-gradient-to-b from-pink-50 to-white">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">
        Your Matches ❤️
      </h1>

      <input
        className="block mx-auto mb-10 px-5 py-3 rounded-full border w-full max-w-md"
        placeholder="Search matches..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {filtered.map(user => (
          <div key={user.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={user.img} className="h-48 w-full object-cover" />

            <div className="p-4 text-center">
              <h2 className="font-bold text-lg">
                {user.name}, {user.age}
              </h2>

              <span className={`text-xs px-3 py-1 rounded-full ${
                user.status === "Online" ? "bg-green-500 text-white" : "bg-gray-400 text-white"
              }`}>
                {user.status}
              </span>

              <button
                onClick={() => navigate(`/chat/${user.id}`)}
                className="mt-3 w-full py-2 bg-pink-600 text-white rounded-xl"
              >
                Message 💬
              </button>

              <button
                onClick={() => navigate(`/profile/${user.id}`)}
                className="mt-2 w-full py-2 border rounded-xl"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
