import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login Page/Login";
import Fram1 from "./Pages/Fram1/Fram1";
import Mainlayout from "./Pages/Mainlayout/Mainlayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Assignments from "./Pages/Assignments/Assignments";
import Calender from "./Pages/Calender/Calender";
import Library from "./Pages/Library/Library";
import Classroom from "./Pages/Classroom/Classroom";
import Courses from "./Pages/Courses/Courses";
import Integration from "./Pages/Integration/Integration";
import Attendance from "./Pages/Attendance/Attendance";
import Messages from "./Pages/Messages/Messages";

export default function App() {
  return (
    <div className="w-[100%] h-[100vh]">
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calender" element={<Calender />} />
          <Route path="library" element={<Library />} />
          <Route path="classroom" element={<Classroom />} />
          <Route path="courses" element={<Courses />} />
          <Route path="integration" element={<Integration />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="messages" element={<Messages />} />
        </Route>

        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="fram1" element={<Fram1 />} />
        </Route>
      </Routes>
    </div>
  );
}
