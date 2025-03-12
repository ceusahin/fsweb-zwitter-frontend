import React from "react";
import profilePic from "../photos/cv-pp.jpg";
import { GrGallery } from "react-icons/gr";
import { PiGifBold } from "react-icons/pi";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

const PostSection = () => {
  return (
    <div className="pl-6 pr-10 pt-4 pb-8 flex flex-col gap-4 border-b border-gray-300">
      <div className="flex items-start text-xl gap-2">
        <img src={profilePic} alt="" className="w-12 h-12 rounded-full mr-3" />
        <textarea
          placeholder="What is happening?!"
          rows="3"
          className="w-full resize-none p-2 border rounded-xl border-gray-400 text-lg"
        ></textarea>
      </div>
      <div className="flex justify-between items-center pl-17">
        <ul className="flex gap-4 text-xl">
          <li>
            <GrGallery className="cursor-pointer" />
          </li>
          <li>
            <PiGifBold className="cursor-pointer" />
          </li>
          <li>
            <BiPoll className="cursor-pointer" />
          </li>
          <li>
            <BsEmojiSmileUpsideDown className="cursor-pointer" />
          </li>
          <li>
            <RiCalendarScheduleLine className="cursor-pointer" />
          </li>
          <li>
            <IoLocationSharp className="cursor-pointer" />
          </li>
        </ul>
        <div className="border bg-black text-white rounded-2xl px-10 py-1 cursor-pointer">
          Post
        </div>
      </div>
    </div>
  );
};

export default PostSection;
