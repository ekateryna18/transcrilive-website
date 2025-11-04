import React from "react";

const useCasesData = [
  {
    title: "Public Administration",
    description:
      "Facilitate the transparency and accessibility of municipal meetings and regional councils with accurate transcriptions and real-time translations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#7CA7F9"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10l9-7 9 7v7a2 2 0 0 1-2 2h-2m-2 0h-2m-6 0H5a2 2 0 0 1-2-2v-7z"
        />
      </svg>
    ),
    side: "left",
  },
  {
    title: "Education",
    description:
      "Enhance the learning experience for hearing-impaired or non-French-speaking students with live course transcriptions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#7CA7F9"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zM12 14v7m0 0l-3-3m3 3l3-3"
        />
      </svg>
    ),
    side: "right",
  },
  {
    title: "Legal Sector",
    description:
      "Optimize depositions and client consultations with accurate transcriptions and instant translations for international clients.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#7CA7F9"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6a4 4 0 0 1 8 0v6M12 21h6m-6-4h6"
        />
      </svg>
    ),
    side: "left",
  },
  {
    title: "Health",
    description:
      "Improve patient–doctor communication and facilitate the maintenance of accurate medical records with automatic transcriptions of consultations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#7CA7F9"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6M5 21h14M7 21V7h10v14"
        />
      </svg>
    ),
    side: "right",
  },
  {
    title: "Companies",
    description:
      "Boost team meeting and conference call productivity with instant transcriptions and automatic summaries.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#7CA7F9"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12v9H3v-9M16 3h-1a3 3 0 0 0-6 0H8a4 4 0 0 0-4 4v5h16V7a4 4 0 0 0-4-4z"
        />
      </svg>
    ),
    side: "left",
  },
  {
    title: "Event Management",
    description:
      "Make conferences and events more inclusive with real-time subtitles and multilingual translations for all participants.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#7CA7F9"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7v6M16 7v6M12 7v6M3 20h18"
        />
      </svg>
    ),
    side: "right",
  },
  {
    title: "Welcome and Tourism",
    description:
      "Enhance the travel experience for travelers with subtitles in their native language.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#7CA7F9"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    side: "left",
  },
];

const UseCaseItem = ({ title, description, icon, isLeftSide }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      {isLeftSide ? (
        <>
          <div className="sm:w-1/2 text-white px-4 sm:text-left text-center mb-6 sm:mb-0">
            <h3 className="font-semibold underline decoration-lightblue underline-offset-4 mb-2 text-lg sm:text-base">
              {title}
            </h3>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
          <div className="flex justify-center items-center sm:w-auto">{icon}</div>
          <div className="sm:w-1/2" />
        </>
      ) : (
        <>
          <div className="sm:w-1/2" />
          <div className="flex justify-center items-center sm:w-auto">{icon}</div>
          <div className="sm:w-1/2 text-white px-4 sm:text-left text-center mt-6 sm:mt-0">
            <h3 className="font-semibold underline decoration-lightblue underline-offset-4 mb-2 text-lg sm:text-base">
              {title}
            </h3>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

const UseCases = () => {
  return (
    <div className="bg-gradient-to-b from-black to-darkbg min-h-screen px-6 py-16 w-full mx-auto">
      <h1 className="text-white text-4xl sm:text-5xl font-semibold mb-16">
        Use{" "}
        <span className="text-lightblue">
          Cases
        </span>
      </h1>

      <div className="grid gap-y-12">
        {useCasesData.map((item, idx) => (
          <UseCaseItem
            key={idx}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isLeftSide={item.side === "left"}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCases;
