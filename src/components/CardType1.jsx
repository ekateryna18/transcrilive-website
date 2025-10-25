import React from "react";

const CardType1 = ({ icon, text }) => {
  return (
    <div className="border-2 border-[#88B6FB] bg-gradient-to-r from-darkbg to-black rounded-xl h-48 w-60">
      <div className="px-4 flex justify-center flex-col h-full">
        <div className="p-2 flex justify-center">{icon}</div>
        <p className="text-center text-white text-sm">{text}</p>
      </div>
    </div>
  );
};

export default CardType1;
