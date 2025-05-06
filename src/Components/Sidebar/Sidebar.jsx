import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import logo from "../../assets/Logo.png";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoLibrary } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { GoStarFill } from "react-icons/go";
import { RiMastercardLine } from "react-icons/ri";
import { MdOutlineAssignment } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [Links] = useState([
    {
      name: "dashboard",
      icon: <MdDashboard className="h-5 w-5 text-amber-50 " />,
      path: "/dashboard",
    },
    {
      name: "calender",
      icon: <SlCalender className="h-5 w-5 text-amber-50 " />,
      path: "/calender",
    },
    {
      name: "library",
      icon: <IoLibrary className="h-5 w-5 text-amber-50 " />,
      path: "/library",
    },
    {
      name: "classroom",
      icon: <SiGoogleclassroom className="h-5 w-5 text-amber-50 " />,
      path: "/classroom",
    },
    {
      name: "courses",
      icon: <GoStarFill className="h-5 w-5 text-amber-50 " />,
      path: "/courses",
    },
    {
      name: "integration",
      icon: <RiMastercardLine className="h-5 w-5 text-amber-50 " />,
      path: "/integration",
    },
    {
      name: "assignments",
      icon: <MdOutlineAssignment className="h-5 w-5 text-amber-50 " />,
      path: "/assignments",
    },
    {
      name: "attendance",
      icon: <FaUserCheck className="h-5 w-5 text-amber-50 " />,
      path: "/attendance",
    },
    {
      name: "messages",
      icon: <BiMessageSquareDetail className="h-5 w-5 text-amber-50 " />,
      path: "/messages",
    },
    {
      name: "login",
      icon: <RiLogoutCircleRLine className="h-5 w-5 text-amber-50 " />,
      path: "/login",
    },
  ]);

  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-gray-800 flex rounded-r-3xl flex-col items-center h-screen p-5 pt-8 duration-300  relative ${
          open ? "w-50" : "w-20"
        } `}
      >
        <IoMdArrowRoundBack
          className={`bg-amber-50 text-slate-950 text-3xl rounded-full absolute -right-3 top-9 cursor-pointer ${
            !open && "rotate-180 w-6 h-6"
          }`}
          onClick={() => setOpen(!open)}
        />

        <img
          className={`h-[130px] w-[130px] rounded-full duration-500 ${
            !open && "w-min h-min p-1 rotate-[360deg]"
          }`}
          src={logo}
          alt="Logo"
        />

        <div
          className={`h-[70vh] w-[full] flex pt-10 flex-col items-center justify-center  ${
            !open && "w-full h-full"
          }`}
        >
          {Links.map((el, index) => {
            return (
              <Link
                to={el.path}
                key={index}
                className="p-3 w-full  hover:bg-amber-500 rounded-md"
              >
                <div className="w-full flex gap-3">
                  {el.icon}
                  <p className={` text-amber-50 ${!open && "hidden"}`}>
                    {el.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
