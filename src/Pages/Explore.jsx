import React from "react";

const Explore = () => {
  const profiles = [
    {
      name: "Sophia, 24",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      bio: "Love traveling, music & late-night conversations ❤️",
    },
    {
      name: "Daniel, 27",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      bio: "Gym lover • Foodie • Looking for real connections",
    },
    {
      name: "Emily, 22",
      img: "https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg",
      bio: "Artist 🎨 | Introvert | Coffee always!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-28 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-8">
        Explore Profiles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {profiles.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform"
          >
            <img
              src={user.img}
              className="w-full h-64 object-cover"
              alt={user.name}
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 mt-1">{user.bio}</p>

              <div className="mt-4 flex space-x-4">
                <button className="flex-1 py-2 rounded-xl border border-gray-300 hover:bg-gray-100">
                  Skip
                </button>
                <button className="flex-1 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700">
                  Like ❤️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
