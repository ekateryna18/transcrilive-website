import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#2E3148] mt-12 pt-8 text-gray-400 px-6 sm:px-0 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between text-sm">
    <div className="mb-6 sm:mb-0 space-y-2">
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4 text-[#7CA7F9]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M22 6L12 13 2 6" />
          </svg>
          <a
            href="mailto:contact@TranscriLive.com"
            className="hover:text-white"
          >
            contact@TranscriLive.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4 text-[#7CA7F9]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <a href="tel:+33686708605" className="hover:text-white">
            +33 6 86 70 86 05
          </a>
        </div>
        <div className="flex items-start space-x-2">
          <svg
            className="w-4 h-4 text-[#7CA7F9] mt-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 10v10H3V10" />
            <path d="M7 10V6a5 5 0 0 1 10 0v4M5 21h14" />
          </svg>
          <address className="not-italic text-gray-400 leading-snug">
            4/6 avenue Albert II, Zone F, <br />
            Entrée B, 7ème étage <br />
            98000 MONACO
          </address>
        </div>
      </div>

      <div className="text-gray-500 text-right text-xs sm:text-sm flex flex-col justify-center space-y-2">
        <p>© 2024 TranscriLive. All rights reserved.</p>
        <div className="font-medium text-gray-400">About TranscriLive</div>
        <p className="max-w-xs mt-1 text-gray-400 text-sm leading-relaxed">
          TranscriLive is an innovative solution for real-time transcription and
          translation, developed by Ambassadia in Monaco.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
