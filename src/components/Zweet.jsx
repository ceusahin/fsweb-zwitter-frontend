import React from "react";
import profilePic from "../photos/cv-pp.jpg";

const Zweet = () => {
  return (
    <div className="border-b border-gray-300 p-6">
      <div className="flex items-center">
        <img
          src={profilePic}
          alt=""
          className="w-12 h-12 rounded-full mr-3 cursor-pointer"
        />

        <div className="ml-2 flex gap-2">
          <h2 className="font-semibold cursor-pointer">hakan</h2>
          <p className="text-gray-500">@hakozin</p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          soluta corporis voluptatem hic qui doloremque deleniti mollitia omnis
          praesentium consequatur!
        </p>
      </div>
    </div>
  );
};

export default Zweet;
