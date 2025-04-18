import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login Page/Login";
import Fram1 from "./Pages/Fram1/Fram1";
import Mainlayout from "./Pages/Mainlayout/Mainlayout";
import Dashboard from "./Pages/Dashboard/Dashboard";

export default function App() {
  return (
    <div className="w-[100%] h-[100vh]">
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/">
          <Route path="/login" element={<Login />} />
          <Route path="/fram1" element={<Fram1 />} />
        </Route>
      </Routes>
    </div>
  );
}
