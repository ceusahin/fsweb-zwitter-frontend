import React from "react";
import profilePic from "../photos/cv-pp.jpg";

const ZweetCard = ({ fullname, username, zweet, timestamp }) => {
  return (
    <div className="border-b border-gray-300 p-6">
      <div className="flex items-center">
        <img
          src={profilePic}
          alt=""
          className="w-12 h-12 rounded-full mr-3 cursor-pointer"
        />

        <div className="flex gap-2">
          <h2 className="font-semibold cursor-pointer">{fullname}</h2>
          <p className="text-gray-500">@{username}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>{zweet}</p>
      </div>
      <div className="mt-6 text-end">
        <p>{new Date(timestamp).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ZweetCard;
