import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import profiles from "../data/profiles";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = profiles.find((p) => p.id === Number(id));

  const [liked, setLiked] = useState(false);

  // Load like status
  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem("likes")) || [];
    setLiked(likes.includes(Number(id)));
  }, [id]);

  // Like / Unlike
  const handleLike = () => {
    let likes = JSON.parse(localStorage.getItem("likes")) || [];
    if (likes.includes(Number(id))) {
      likes = likes.filter((l) => l !== Number(id));
      setLiked(false);
    } else {
      likes.push(Number(id));
      setLiked(true);
    }
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  // Safety check
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Profile not found 😕
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 bg-pink-50">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 text-center relative">

        {/* Status Badge */}
        <span
          className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full ${
            user.status === "Online"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {user.status}
        </span>

        {/* Profile Image */}
        <img
          src={user.img}
          alt={user.name}
          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-pink-200"
        />

        {/* Name & Age */}
        <h1 className="text-3xl font-bold mt-4">
        <span className="text-pink-600">Name-</span>  {user.name} <br/> <span className="text-pink-600">Age-</span> {user.age}
        </h1>

     

        {/* Bio */}
        <p className="text-pink-600 mt-4">{user.bio}</p>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => navigate(`/chat/${user.id}`)}
            className="w-full py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition"
          >
            Message 💬
          </button>

          <button
            onClick={handleLike}
            className={`w-full py-3 rounded-xl font-semibold border transition ${
              liked
                ? "bg-red-100 text-red-600 border-red-300"
                : "bg-white text-gray-700"
            }`}
          >
            {liked ? "❤️ Liked" : "🤍 Like Profile"}
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full py-3 border rounded-xl text-gray-600 hover:bg-gray-50"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
