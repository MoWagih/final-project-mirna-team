import React from "react";
import { MdSavedSearch } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbMailSpark } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className="navContainer w-full h-[40px]  flex justify-end pr-3 items-center">
      <MdOutlineNotificationsActive className="text-3xl p-1 text-amber-50  hover:bg-cyan-950/10 rounded-4xl cursor-pointer " />
      <TbMailSpark className="text-3xl p-1 text-amber-50  hover:bg-cyan-950/10 rounded-4xl cursor-pointer " />
    </div>
  );
}
