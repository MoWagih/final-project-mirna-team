import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Profile from "../../Components/Profile/Profile";
import Navbar from "../../Components/Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

export default function Mainlayout() {
  return (
    <div className="h-[100vh] w-full bg-amber-50 flex gap-[20px]">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Dashboard />
      </div>
      <Profile />
    </div>
  );
}
