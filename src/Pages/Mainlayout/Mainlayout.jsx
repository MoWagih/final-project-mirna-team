import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Profile from "../../Components/Profile/Profile";

import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export default function Mainlayout() {
  return (
    <div className="h-[100vh] w-full bg-slate-950 flex gap-[20px]">
      <Sidebar />
      <Outlet />
      <Profile />
    </div>
  );
}
