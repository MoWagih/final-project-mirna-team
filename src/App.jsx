import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import StudentExams from "./Pages/StudentExam.jsx/StudentExams";
import ProtectedRoute from "./Pages/ProtectedRoute/ProtectedRoute";
import StudentCourses from "./Pages/Courses/StudentCourses";
import TeacherStudents from "./Pages/TecaherStudents/TeacherStudents";

export default function App() {
  const { paths } = usePaths();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
  
    if (!userData) {
      localStorage.clear();
      navigate("/login");
      return;
    }
  
    const user = JSON.parse(userData);
    const role = user?.User_Role;
  
    console.log("Role:", role);
  
    if (role === "Teacher") {
      navigate("/Teacher");
    } else if (role === "Student") {
      navigate("/Student");
    } else {
      navigate("/login");
    }
  }, []);
  

  return (
    <div className="w-full h-full">
      <Routes>

      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
      <Route path="/login" element={<Login />} />

        {/* Routes for Student */}
        <Route
          path="/Student"
          element={
            <ProtectedRoute allowedRoles={["Student"]}>
              <Mainlayout />
              </ProtectedRoute> }>
                <Route index element={<Dashboard />} />
                <Route path="/Student/calender" element={<Calender />} />
                <Route path="/Student/library" element={<Library />} />
                <Route path="/Student/exams" element={<StudentExams />} />
                <Route path="/Student/classroom" element={<Classroom />} />
                <Route path="/Student/courses" element={<StudentCourses />} />
                <Route path="/Student/integration" element={<Integration />} />
                <Route path="/Student/assignments" element={<Assignments />} />
                {/* <Route path="/Student/attendance" element={<Attendance />} /> */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>

        {/* Routes for Teacher */}
        <Route path="/Teacher" element={<ProtectedRoute allowedRoles={["Teacher"]}>
              <TeacherLayout />
            </ProtectedRoute>}>
          <Route index element={<DashboardTeacher />} />
          <Route path="/Teacher/TeacherExams" element={<TeacherExams />} />
          <Route path="/Teacher/Students" element={<TeacherStudents />} />
          <Route path="/Teacher/calender" element={<Calender />} />
          <Route path="/Teacher/library" element={<TeacherBooks />} />
          <Route path="/Teacher/courses" element={<TeacherCourses />} />
          <Route path="/Teacher/TeacherClassroom" element={<TeacherClassroom />} />
          <Route path="/Teacher/integration" element={<Integration />} />
        </Route>

        {/* Shared Messages Route (for both Teacher and Student) */}
        {/* <Route
          path="messages"
          element={
            <ProtectedRoute allowedRoles={["Teacher", "Student"]}>
              <Messages />
            </ProtectedRoute>
          }
        >
          <Route index element={<Chats />} />
          {paths.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route> */}

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Catch-all for unmatched routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
