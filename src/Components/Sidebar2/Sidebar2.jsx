import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { usePaths } from "../../Pages/Store/Zustand";
export default function Sidebar2() {
  const { paths } = usePaths();
  const Location = useLocation();
  const [activeLink, setActiveLink] = useState();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="bg-gray-800 flex flex-col items-center h-full w-20 px-2 py-4">
      <img
        className="h-16 w-15 rounded-full duration-500 "
        src={logo}
        alt="Logo"
      />

      <div className="h-[70vh]  w-[full] flex pt-10 flex-col items-center justify-center ">
        {paths.map((el, index) => {
          return (
            <Link
              key={index}
              to={el.path}
              className={`p-3 w-full  hover:bg-amber-500 rounded-md `}
            >
              {el.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <Link
          to="profile2"
          className="p-3 w-full  hover:bg-white/10 rounded-md"
        >
          <div className="w-full flex gap-3">
            <CgProfile className="h-8 w-8 text-amber-50 " />
          </div>
        </Link> */
}
