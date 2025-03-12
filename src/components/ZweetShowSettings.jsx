import React from "react";

const ZweetShowSettings = () => {
  return (
    <div className="lg:flex lg:justify-around lg:text-center lg:w-full max-lg:flex max-lg:w-screen lg:text-xl">
      <div className="border-b border-gray-300 flex-1 pb-6 mb-6 lg:hover:bg-gray-300 lg:pt-6 lg:cursor-pointer">
        <button className="">For You</button>
      </div>
      <div className="border-b border-gray-300 flex-1 pb-6 mb-6 lg:hover:bg-gray-300 lg:pt-6 lg:cursor-pointer">
        <button className="">Following</button>
      </div>
    </div>
  );
};

export default ZweetShowSettings;
