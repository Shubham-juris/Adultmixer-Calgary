import React from "react";

const ContactForm = () => {
  return (
    <>
      {/* Contact Form */}
      <section className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-xl px-6 mb-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Send Us a Message
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              rows="6"
              placeholder="Write your message..."
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button className="px-10 py-3 bg-pink-600 text-white text-lg font-bold rounded-xl hover:bg-pink-700 transition shadow-md">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
