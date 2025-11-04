import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="border-b-2 border-lightblue bg-gradient-to-r from-darkbg to-black rounded-xl p-5 w-52 flex flex-col justify-between">
      <div className="flex items-center space-x-3 mb-3">
        <div className="stroke-lightblue text-lightblue w-6 h-6">{icon}</div>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
      </div>
      <p className="text-white text-xs leading-snug">{description}</p>
    </div>
  );
};

function Features() {
  const icons = {
    transcription: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h1m4 0h1m4 0h1m4 0h1M3 14h1m4 0h1m4 0h1m4 0h1M7 6v12M12 6v12M17 6v12"
        />
      </svg>
    ),
    translation: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6m0 0l4-4m-4 4l-4-4m10 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
        />
      </svg>
    ),
    analysis: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16h1m4-8h1m4 8h1m4-4h1m-9 0h1m-5 0h.01m5 0h.01"
        />
      </svg>
    ),
  };

  const features = [
    {
      icon: icons.transcription,
      title: "Real-Time Transcription",
      description:
        "Get accurate transcriptions instantly, even in noisy environments or with multiple speakers.",
    },
    {
      icon: icons.translation,
      title: "Simultaneous Translation",
      description:
        "Automatically translate transcripts into more than 50 languages, facilitating international communication.",
    },
    {
      icon: icons.analysis,
      title: "Discourse Analysis",
      description:
        "Generate automatic insights, keyword clouds, and summaries for a quick understanding of the content.",
    },
    {
      icon: icons.translation,
      title: "Simultaneous Translation",
      description:
        "Automatically translate transcripts into more than 50 languages, facilitating international communication.",
    },
    {
      icon: icons.translation,
      title: "Simultaneous Translation",
      description:
        "Automatically translate transcripts into more than 50 languages, facilitating international communication.",
    },
    {
      icon: icons.translation,
      title: "Simultaneous Translation",
      description:
        "Automatically translate transcripts into more than 50 languages, facilitating international communication.",
    },
    {
      icon: icons.translation,
      title: "Simultaneous Translation",
      description:
        "Automatically translate transcripts into more than 50 languages, facilitating international communication.",
    },
    {
      icon: icons.translation,
      title: "Simultaneous Translation",
      description:
        "Automatically translate transcripts into more than 50 languages, facilitating international communication.",
    },
  ];

  return (
    <div
      id="features-page"
      className="bg-gradient-to-b from-darkbg via-darkbg to-black min-h-screen w-full flex justify-center items-start py-20 px-6"
    >
      <div className="max-w-7xl w-full flex flex-col">
        <h1 className="sm:text-6xl heading-style pb-12">
          Advanced Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {features.map(({ icon, title, description }, index) => (
            <FeatureCard
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
