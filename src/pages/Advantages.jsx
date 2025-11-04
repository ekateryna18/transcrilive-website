import React from 'react';

const cards = [
  {
    title: (
      <>
        Unmatched <span className="font-semibold">Precision</span>
      </>
    ),
    description:
      "Our advanced AI offers transcription accuracy of over 99%, even in complex sound environments.",
  },
  {
    title: (
      <>
        Exceptional <span className="font-semibold">Speed</span>
      </>
    ),
    description:
      "Get real-time transcriptions, with no delay, enabling immediate decision-making and effective collaboration.",
  },
  {
    title: (
      <>
        First Line <span className="font-semibold">Security</span>
      </>
    ),
    description:
      "Protect your sensitive data with our secure infrastructure and on-site hosting options.",
  },
  {
    title: (
      <>
        Professional <span className="font-semibold">Adaptability</span>
      </>
    ),
    description:
      "Customize TranscriLive to meet the specific needs of your industry and organization.",
  },
  {
    title: (
      <>
        Multilingual <span className="font-semibold">Translation</span>
      </>
    ),
    description:
      "Break down language barriers with our real-time translation feature, enabling smooth communication in international meetings.",
  },
  {
    title: (
      <>
        Intelligent <span className="font-semibold">Analysis</span>
      </>
    ),
    description:
      "Leverage the power of AI to automatically generate summaries, key points, and sentiment analysis from your transcripts.",
  },
];

const Advantages = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen flex flex-col justify-center items-center px-6 py-20 text-gray-300">
      <h1 className="heading-style pb-12">
        Why Choose TranscriLive?
      </h1>
      <div className="max-w-5xl w-full border border-[#7CA7F9]/40 rounded-xl p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">

        {cards.map(({ title, description }, idx) => (
          <div key={idx} className="flex flex-col space-y-3">
            <h3 className="text-white text-lg md:text-xl font-semibold">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed md:text-base">
              {description}
            </p>
          </div>
        ))}

      </div>

      <button
        type="button"
        className="mt-12 px-6 py-3 bg-[#2050FF] rounded-md text-white font-semibold text-base hover:bg-[#497bff] transition-colors duration-300"
      >
        Discover TranscriLive &gt;&gt;
      </button>
    </div>
  );
};

export default Advantages;
