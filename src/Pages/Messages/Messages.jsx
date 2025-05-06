import { Outlet, Routes, Route } from "react-router-dom";
import Sidebar2 from "../../Components/Sidebar2/Sidebar2";
import Chats from "../../Components/Chats/Chats";
export default function Messages() {
  return (
    <div className="h-[100vh] w-full bg-slate-950 flex gap-[20px]">
      <Sidebar2 />
      <Outlet />
      <p>messages</p>
    </div>
  );
}
