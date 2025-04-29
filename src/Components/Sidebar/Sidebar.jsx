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
          <Link
            to="dashboard"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <MdDashboard className="h-5 w-5 text-amber-50 " />
              <p className={` text-amber-50 ${!open && "hidden"}`}>Dashboard</p>
            </div>
          </Link>
          <Link
            to="calender"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <SlCalender className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>Calender</p>
            </div>
          </Link>
          <Link
            to="library"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <IoLibrary className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>Library</p>
            </div>
          </Link>
          <Link
            to="classroom"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <SiGoogleclassroom className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>Classroom</p>
            </div>
          </Link>
          <Link
            to="courses"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <GoStarFill className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>Courses</p>
            </div>
          </Link>
          <Link
            to="integration"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <RiMastercardLine className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>
                Integration
              </p>
            </div>
          </Link>
          <Link
            to="assignments"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <MdOutlineAssignment className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>
                Assignments
              </p>
            </div>
          </Link>
          <Link
            to="attendance"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <FaUserCheck className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>
                Attendance
              </p>
            </div>
          </Link>
          <Link
            to="messages"
            className="p-3 w-full  hover:bg-white/10 rounded-md"
          >
            <div className="w-full flex gap-3">
              <BiMessageSquareDetail className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>Messages</p>
            </div>
          </Link>

          <Link to="login" className="p-3 w-full  hover:bg-white/10 rounded-md">
            <div className="w-full flex gap-3">
              <RiLogoutCircleRLine className="h-5 w-5 text-amber-50" />
              <p className={` text-amber-50 ${!open && "hidden"}`}>Log Out</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
