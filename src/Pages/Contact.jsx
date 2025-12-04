import React from "react";
import GoogleMap from "../components/contactComponents/GoogleMap";
import ContactForm from "../components/contactComponents/ContactForm";
import ContactInfoCards from "../components/contactComponents/ContactInfoCards";
import ContactHeader from "../components/contactComponents/ContactHeader";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <ContactHeader />
      <ContactInfoCards />
      <ContactForm />
      <GoogleMap />
    </div>
  );
};

export default Contact;
