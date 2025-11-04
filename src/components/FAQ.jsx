import React, { useState } from "react";

const faqItems = [
  {
    question: "Which languages does TranscriLive support?",
    answer:
      "TranscriLive supports more than 50 languages for transcription and translation, including French, English, Spanish, German, and Chinese.",
  },
  {
    question: "How does TranscriLive manage data privacy?",
    answer:
      "We ensure top-level data protection with encrypted storage, GDPR compliance, and secure hosting options.",
  },
  {
    question: "Can I integrate TranscriLive with my existing tools?",
    answer:
      "Yes, we provide APIs and plugins to help you integrate TranscriLive into your current workflow seamlessly.",
  },
  {
    question: "What is the accuracy of TranscriLive’s transcription?",
    answer:
      "Our AI offers more than 99% accuracy in transcription, even in challenging acoustic environments.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#1F2233] rounded-full py-3 px-6 flex justify-between items-center text-[#7CA7F9] font-semibold focus:outline-none"
      >
        <span>{question}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-2 px-6 text-gray-300 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="w-full max-w-md mx-auto sm:mx-0">
      {faqItems.map(({ question, answer }, idx) => (
        <FAQItem key={idx} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default FAQ;