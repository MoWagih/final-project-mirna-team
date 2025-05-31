import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { FaUserAstronaut, FaLock } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  
  const navigate = useNavigate();
  const userEmail = useRef();
  const userPassword = useRef();

  const handleLogin = async (e)=> {
    e.preventDefault();
    try {
      const email = userEmail.current.value;
      const password = userPassword.current.value;  
  
      const res = await axios.post("http://82.112.241.233:1400/api/auth/local", {
        identifier: email,
        password: password,
      });
  
      const { jwt } = res.data;
      localStorage.setItem("token" , jwt);

      const meRes = await axios.get("http://82.112.241.233:1400/api/users/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const user = meRes.data;
      localStorage.setItem("user", JSON.stringify(user));

      const role = user?.User_Role;
      console.log("User role:", role);
      
      if (role === "Teacher") {
      navigate("/TeacherDashboard");
    } else if (role === "Student") {
      navigate("/StudentDashboard");
    } else {
      alert(`Role '${role}' not recognized`);
    }
      
    }
    catch (err) {
      console.error("Login failed:", err);
      alert("Email or password incorrect");
    }
  };
  
  
 
  return (
    <div className="coverL h-[100vh] w-full ">
      <div className="parentLogin h-[100vh]  flex flex-col items-center justify-center text-white">
        <div className="h-[390px] w-80 pt-10  bg-purple-950/90 shadow-lg shadow-purple-700 px-6 my-4 overflow-hidden rounded-lg">
          {/* ----login---- */}

          <div>
            <h2 className="text-3xl font-bold pb-6 text-center">Login</h2>
            
            <form className="flex flex-col items-center" onSubmit={handleLogin}>
              <div className="w-full relative">
                <input
                  className="w-full border  border-amber-100  rounded-full py-2 px-4 my-2 bg-transparent"
                  type="email"
                  placeholder="Email"
                  ref={userEmail}
                />
                <TbMailFilled className="text-purple-950 absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="w-full border  border-amber-100  rounded-full py-2 px-4 my-2 bg-transparent"
                  type="password"
                  placeholder="Password"
                  ref={userPassword}
                />
                <FaLock className="text-purple-950 absolute top-[35%] right-3" />
              </div>
              <button className="cursor-pointer border-2 hover:tracking-wider my-2 py-2 w-full rounded-full border-amber-50 bg-transparent text-amber-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
