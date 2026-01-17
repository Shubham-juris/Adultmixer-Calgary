import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* ================= HEADER ================= */}
      <section className="bg-gradient-to-r text-pink-600 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact AdultMixer Calgary
          </h1>
          <p className="mt-6 text-lg text-gray-800 max-w-2xl mx-auto">
            We’re here to help. Whether you have questions, feedback, or safety
            concerns, our support team is available 24/7.
          </p>
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 -mt-16 mb-20">
        <InfoCard
          icon={<Mail size={40} />}
          title="Email Us"
          text="support@adultmixercalgary.com"
        />
        <InfoCard
          icon={<Phone size={40} />}
          title="Call Us"
          text="+1 (587) 123-4567"
        />
        <InfoCard
          icon={<MapPin size={40} />}
          title="Location"
          text="Calgary, Alberta, Canada"
        />
      </section>

      {/* ================= FORM + TEXT ================= */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 mb-24">
        {/* FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-pink-500 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition"
            >
              Submit Secure Message
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Your information is private and will never be shared.
            </p>
          </form>
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Safe. Private. Confidential.
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            AdultMixer Calgary is a trusted adult dating platform focused on
            privacy, safety, and real connections. Our support team is trained
            to handle all inquiries discreetly and professionally.
          </p>

          <p className="text-gray-600 leading-relaxed">
            If you have concerns regarding account security, abuse reports, or
            privacy issues, please contact us immediately. Your safety matters
            to us.
          </p>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Find Us in Calgary
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://maps.google.com/maps?q=calgary&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AdultMixer Calgary Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

/* ================= SMALL COMPONENT ================= */

const InfoCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-1 transition">
      <div className="text-pink-600 mx-auto mb-3 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
};

export default Contact;
