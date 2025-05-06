import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import Chats from "./Components/Chats/Chats";
import { usePaths } from "./Pages/Store/Zustand";
import TeacherDashboard from "./Components/Teacherdash/TeacherDashboard";

export default function App() {
  const { paths } = usePaths();
  return (
    <div className="w-[100%] h-[100vh]">
      {/* Student mood */}
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calender" element={<Calender />} />
          <Route path="library" element={<Library />} />
          <Route path="classroom" element={<Classroom />} />
          <Route path="courses" element={<Courses />} />
          <Route path="integration" element={<Integration />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>

        {/* Teacher mood */}
        <Route path="/" element={<TeacherDashboard />}>
          <Route index element={<h1>HeLLO THERE!</h1>} />
          <Route path="dashboard2" element={<h1>Hello</h1>} />
        </Route>

        {/* Chatapp */}
        <Route path="messages" element={<Messages />}>
          <Route index element={<Chats />} />
          {paths.map((route, index) => {
            <Route key={index} path={route.path} element={route.element} />;
          })}
        </Route>

        {/* Login,Fram */}
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="fram1" element={<Fram1 />} />
        </Route>
      </Routes>
    </div>
  );
}
