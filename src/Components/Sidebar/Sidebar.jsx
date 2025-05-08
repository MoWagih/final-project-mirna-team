import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import logo from "../../assets/Logo.png";
import { useLinks } from "../../Pages/Store/Zustand";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Sidebar({ user }) {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const { teacherLinks , studentLinks , commonLinks } = useLinks();
  const role = user?.User_Role;
  const roleLinks = role === "Teacher" ? teacherLinks : studentLinks;

  const sidebarLinks = [...roleLinks, ...commonLinks];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login"); // أو "/"
  };
  

  return (
    <div className="flex">
      <div className={`bg-gray-800 flex rounded-r-3xl flex-col items-center h-screen p-5 pt-8 duration-300 relative ${open ? "w-50" : "w-20"}`}>
        <IoMdArrowRoundBack
          className={`bg-amber-50 text-slate-950 text-3xl rounded-full absolute -right-3 top-9 cursor-pointer ${!open && "rotate-180 w-6 h-6"}`}
          onClick={() => setOpen(!open)} />
        <img className={`h-[130px] w-[130px] rounded-full duration-500 ${!open && "w-min h-min p-1 rotate-[360deg]"}`} src={logo} alt="Logo" />

        <div className="h-[70vh] w-full flex pt-10 flex-col items-center justify-center">
             
              {sidebarLinks.map((el, index) => {
              const Icon = el.icon;
              return (
                <Link to={el.path} key={index} className="p-3 w-full hover:bg-amber-500 rounded-md">
                  <div className="w-full flex gap-3 items-center">
                    <Icon className="text-amber-50 h-5 w-5" />
                    <p className={`text-amber-50 ${!open && "hidden"}`}>{el.name}</p>
                  </div>
                </Link>
              );
            })}
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800 mt-4">
              <RiLogoutCircleRLine size={20} /><span>Log Out</span></button>
        </div>
      </div>
    </div>
  );
}
