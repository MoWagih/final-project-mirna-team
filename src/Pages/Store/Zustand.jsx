// Global State
import { create } from "zustand";
import Profile2 from "../../Components/Profile2/Profile2";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiContactsFill } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Chats from "../../Components/Chats/Chats";
import Groups from "../../Components/Groups/Groups";
import Contacts from "../../Components/Contacts/Contacts";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login Page/Login";
export const usePaths = create(() => ({
  paths: [
    {
      path: "profile2",
      icon: <CgProfile className="h-8 w-8 text-amber-50 " />,
      element: <Profile2 />,
    },
    {
      path: "chats",
      icon: <PiChatTeardropTextFill className="h-8 w-8 text-amber-50 " />,
      element: <Chats />,
    },
    {
      path: "groups",
      icon: <HiMiniUserGroup className="h-8 w-8 text-amber-50 " />,
      element: <Groups />,
    },
    {
      path: "contacts",
      icon: <RiContactsFill className="h-8 w-8 text-amber-50 " />,
      element: <Contacts />,
    },
    {
      path: "/",
      icon: <RiArrowGoBackFill className="h-8 w-8 text-amber-50 " />,
      element: <Dashboard />,
    },
    {
      path: "/login",
      icon: <RiLogoutCircleRLine className="h-8 w-8 text-amber-50 " />,
      element: <Login />,
    },
  ],
}));
