import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Profile from "../../Components/Profile/Profile";

import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <div className="flex bg-blue-950 overflow-hidden h-[100vh]">
    {/* sidebar هنا */}
    <Sidebar />

    {/* هنا بيظهر المحتوى حسب الراوت */}
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
  );
}
