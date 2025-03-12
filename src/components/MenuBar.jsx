import React from "react";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaListAlt,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profilePic from "../photos/cv-pp.jpg";
import { TbSquareRoundedLetterZ, TbLetterZ } from "react-icons/tb";

const MenuBar = () => {
  return (
    <div className="lg:h-screen lg:py-6 lg:flex lg:flex-col lg:items-center lg:justify-between lg:bg-gray-50 lg:shadow-lg">
      <section className="">
        <ul className="lg:flex lg:flex-col lg:text-xl">
          <li className="lg:flex lg:items-center lg:mb-4">
            <TbLetterZ className="lg:text-5xl cursor-pointer" />
          </li>
          <li className="lg:flex lg:items-center mt-4 cursor-pointer">
            <FaHome className="lg:mr-6" />
            <p className="max-lg:hidden">Home</p>
          </li>
          <li className="lg:flex lg:items-center mt-6 cursor-pointer">
            <FaHashtag className="lg:mr-6" />
            <p className="max-lg:hidden">Explore</p>
          </li>
          <li className="lg:flex lg:items-center mt-6 cursor-pointer">
            <FaBell className="lg:mr-6" />
            <p className="max-lg:hidden">Notifications</p>
          </li>
          <li className="lg:flex lg:items-center mt-6 cursor-pointer">
            <FaEnvelope className="lg:mr-6" />
            <p className="max-lg:hidden">Messages</p>
          </li>
          <li className="lg:flex lg:items-center mt-6 cursor-pointer">
            <FaBookmark className="lg:mr-6" />
            <p className="max-lg:hidden">Bookmarks</p>
          </li>
          <li className="lg:flex lg:items-center mt-6 cursor-pointer">
            <FaListAlt className="lg:mr-6" />
            <p className="max-lg:hidden">Lists</p>
          </li>
          <li className="lg:flex lg:items-center mt-6 cursor-pointer">
            <FaUser className="lg:mr-6" />
            <p className="max-lg:hidden">Profile</p>
          </li>
          <li className="lg:flex lg:items-center mt-6 mb-3 cursor-pointer">
            <FaEllipsisH className="lg:mr-6" />
            <p className="max-lg:hidden">More</p>
          </li>
          <li className="lg:flex lg:items-center mt-6 cursor-pointer">
            <button className="lg:cursor-pointer lg:bg-black lg:text-white lg:rounded-full lg:py-2 lg:px-8 lg:w-[12rem]">
              Post
            </button>
          </li>
        </ul>
      </section>
      <section className="lg:flex lg:items-center hover:bg-gray-200 rounded-full lg:p-3 lg:w-[12vw] mb-8">
        <img
          src={profilePic}
          alt=""
          className="w-12 h-12 rounded-full mr-3 cursor-pointer"
        />
        <div className="cursor-pointer">
          <p className="lg:font-semibold">hakan</p>
          <p className="lg:text-gray-500">@hakozin</p>
        </div>
        <button className="lg:ml-auto lg:text-gray-500 cursor-pointer">
          ⋯
        </button>
      </section>
    </div>
  );
};

export default MenuBar;
