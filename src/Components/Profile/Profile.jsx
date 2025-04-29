import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import logo from "../../assets/student.jpeg";
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`bg-gray-800 flex rounded-l-3xl flex-col items-center h-screen p-5 pt-8 duration-300  relative ${
          open ? "w-50" : "w-20"
        } `}
      >
        <IoMdArrowRoundForward
          className={`bg-amber-50 text-indigo-950 text-3xl rounded-full absolute -left-3 top-9 cursor-pointer ${
            !open && "rotate-180 w-6 h-6"
          }`}
          onClick={() => setOpen(!open)}
        />
        <h2 className={`text-2xl pb-3 text-amber-50 ${!open && "text-[15px]"}`}>
          Profile
        </h2>
        <img
          className={`h-[130px] bg-cover w-[130px] rounded-full duration-500 ${
            !open && "w-min h-min p-1 rotate-[360deg]"
          }`}
          src={logo}
          alt="Logo"
        />
        <h2
          className={`text-2xl flex items-center pt-3 text-amber-50 ${
            !open && "text-[10px] "
          }`}
        >
          Faried
        </h2>
      </div>
    </div>
  );
}
