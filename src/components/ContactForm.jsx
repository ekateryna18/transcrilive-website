import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-[#0D101B] rounded-xl p-8 w-full max-w-md mx-auto sm:mx-0">
      <input
        type="text"
        placeholder="Name"
        className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-[#2E3148] text-[#7CA7F9] placeholder-[#7CA7F9] focus:outline-none focus:border-[#4181FF]"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-[#2E3148] text-[#7CA7F9] placeholder-[#7CA7F9] focus:outline-none focus:border-[#4181FF]"
      />
      <select
        className="w-full mb-4 px-4 py-2 rounded-md bg-transparent border border-[#2E3148] text-[#7CA7F9] placeholder-[#7CA7F9] focus:outline-none focus:border-[#4181FF]"
        defaultValue=""
      >
        <option value="" disabled>
          Choose a topic
        </option>
        <option>General Inquiry</option>
        <option>Technical Support</option>
        <option>Sales</option>
      </select>
      <textarea
        placeholder="Message"
        rows={4}
        className="w-full px-4 py-2 rounded-md bg-transparent border border-[#2E3148] text-[#7CA7F9] placeholder-[#7CA7F9] resize-none focus:outline-none focus:border-[#4181FF]"
      />
      <button
        type="submit"
        className="mt-4 w-full py-2 bg-[#4181FF] hover:bg-[#2050FF] transition-colors rounded-md font-semibold text-white"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
