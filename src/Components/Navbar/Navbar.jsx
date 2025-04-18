import React from "react";
import { MdSavedSearch } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbMailSpark } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="h-[15%] w-full p-5 pl-[1rem] ">
      <h1 className="text-indigo-950 p-1 text-3xl">Dashboard</h1>
      <div className="header-content flex justify-between  items-center">
        <div className="search-box flex items-center border-2 w-60  border-indigo-950/80 rounded-md">
          <MdSavedSearch className="cursor-pointer  text-3xl p-1 text-indigo-950" />
          <input
            className="text-indigo-950 outline-0"
            type="text"
            placeholder="Search here..."
          />
        </div>

        <div className="notify flex">
          <MdOutlineNotificationsActive className="text-3xl p-1 text-indigo-950  hover:bg-indigo-950/10 rounded-4xl cursor-pointer " />
          <TbMailSpark className="text-3xl p-1 text-indigo-950  hover:bg-indigo-950/10 rounded-4xl cursor-pointer " />
        </div>
      </div>
    </div>
  );
}
