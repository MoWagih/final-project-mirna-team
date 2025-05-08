import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login Page/Login";
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
import TeacherLayout from "./Pages/TeacherLayout/TeacherLayout";
import DashboardTeacher from "./Components/TeacherDashboard/DashboardTeacher";
import TeacherExams from "./Pages/TeacherExams/TeacherExams";
import TeacherClassroom from "./Pages/Classroom/TeacherClassroom";
import TeacherCourses from "./Pages/Courses/TeacherCourses";
import TeacherBooks from "./Pages/Library/TeacherBooks";


export default function App() {
  const { paths } = usePaths();
  const [role, setRole] = useState(null);

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) setRole(user.User_Role);
}, []);

  return (
    <div className="w-full h-full">
      <Routes>
      {role === "Student" && (
        // Student Routes
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Dashboard />} />
          <Route path="StudentDashboard" element={<Dashboard />} />
              <Route path="calender" element={<Calender />} />
              <Route path="library" element={<Library />} />
              <Route path="classroom" element={<Classroom />} />
              <Route path="courses" element={<Courses />} />
              <Route path="integration" element={<Integration />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} /></Route>
        )}

        {role === "Teacher" && (
          // Teacher Routs
          <Route path="/" element={<TeacherLayout />}>
            <Route index element={<DashboardTeacher />} />
            <Route path="TeacherDashboard" element={<DashboardTeacher />} />
            <Route path="TeacherExams" element={<TeacherExams />} />
            <Route path="calender" element={<Calender />} />
            <Route path="library" element={<TeacherBooks />} />
            <Route path="courses" element={<TeacherCourses />} />
            <Route path="TeacherClassroom" element={<TeacherClassroom />} />
            <Route path="integration" element={<Integration />} />
          </Route>
        )}

        {/* Chatapp is a mutual between two users Teachers and Students */}
        <Route path="messages" element={<Messages />}>
          <Route index element={<Chats />} />
          {paths.map((route, index) => {
            <Route key={index} path={route.path} element={route.element} />;
          })}
        </Route>

        {/* Login, Main Login  */}
        <Route path="/">
        <Route path="/login" element={<Login />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
