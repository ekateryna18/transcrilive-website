import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";

const ContactPage = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen flex flex-col justify-between text-[#7CA7F9] px-6 sm:px-12 py-16 w-full mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-white">Contact <span className="text-[#4181FF]">us</span></h2>
          <ContactForm />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-white">FAQ</h2>
          <FAQ />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;