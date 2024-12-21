import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Avatar } from "@mui/material";
// import Avatar from "react-avatar-edit";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-10"
            src="https://i.pinimg.com/736x/23/da/b9/23dab92cbddac8b9ae00db6dd345644d.jpg"
            alt="gmai-logo"
          ></img>
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-ful bg-transparent outline-none px-1"
          ></input>
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex  items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-300 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-300 cursor-pointer">
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-300 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className=" cursor-pointer">
            <Avatar
              src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
