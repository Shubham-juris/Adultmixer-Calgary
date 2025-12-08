import React from "react";

const Matches = () => {
  const matches = [
    {
      name: "Aisha, 23",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "Michael, 26",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      name: "Lara, 25",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "Kevin, 28",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 pt-28 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-6">
        Your Matches ❤️
      </h1>

      <p className="text-center text-gray-600 mb-10">
        People who liked you back — start chatting now!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {matches.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={item.img}
              className="w-full h-48 object-cover"
              alt={item.name}
            />
            <div className="p-3 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <button className="mt-2 w-full py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700">
                Say Hi 👋
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
