import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { FaUserAstronaut, FaLock } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const userEmail = useRef();
  const userPassword = useRef();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://82.112.241.233:1400/api/system-users/:id")
      .then((res) => {
        const user = res.data.data;
        // setData(user);
        console.log(user);
        // if (user.Role === "Teacher") {
        //   navigate("/dashboard2");
        // } else if (user.Role === "Student") {
        //   navigate("/");
        // } else {
        //   alert("User Not Found");
        // }
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, []);
  return (
    <div className="coverL h-[100vh] w-full ">
      <div className="parentLogin h-[100vh]  flex flex-col items-center justify-center text-white">
        <div className="h-[390px] w-80  bg-purple-950/90 shadow-lg shadow-purple-700 px-6 my-4 overflow-hidden rounded-lg">
          {/* ----login---- */}

          <div>
            <h2 className="text-3xl font-bold pb-6 text-center">Login</h2>
            <form className="flex flex-col items-center " action="">
              <div className="w-full relative">
                <input
                  className="w-full border  border-amber-100  rounded-full py-2 px-4 my-2 bg-transparent"
                  type="email"
                  placeholder="Email"
                  ref={userEmail}
                />
                <TbMailFilled className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="w-full border  border-amber-100  rounded-full py-2 px-4 my-2 bg-transparent"
                  type="password"
                  placeholder="Password"
                  ref={userPassword}
                />
                <FaLock className="absolute top-[35%] right-3" />
              </div>
              <div className="flex justify-between w-full">
                <div className="text-[14px] flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Remember Me</label>
                </div>
                <span className="text-[14px]">Forgot Password?</span>
              </div>
              <button className="cursor-pointer hover:tracking-wider my-2 py-2 w-full rounded-full border border-amber-100 bg-transparent text-amber-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
