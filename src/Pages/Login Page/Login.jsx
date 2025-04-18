import React, { useState } from "react";
import "./Login.css";
import { FaUserAstronaut, FaLock } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
export default function Login() {
  const [Open, setOpen] = useState(false);

  return (
    <div className="coverL h-[100vh] w-full ">
      <div className="parentLogin h-[100vh]  flex flex-col items-center justify-center text-white">
        <div className="h-[390px] w-80 border bg-purple-800/20 border-purple-800/20 shadow-amber-50 px-6 my-4 overflow-hidden rounded-lg">
          {/* ----Register---- */}

          <div
            className={`${
              Open
                ? "translate-y-[25px] transition-all"
                : "translate-y-[400px] transition-all"
            }`}
          >
            <h2 className="text-3xl font-bold pb-6 text-center">Register</h2>
            <form className="flex flex-col items-center " action="">
              <div className="w-full relative">
                <input
                  className=" w-full border  border-amber-100  rounded-full py-2 px-4 my-2 bg-transparent"
                  type="text"
                  placeholder="Username"
                />
                <FaUserAstronaut className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="w-full border   border-amber-100 rounded-full py-2 px-4 my-2 bg-transparent"
                  type="email"
                  placeholder="Email"
                />
                <TbMailFilled className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="w-full border  border-amber-100  rounded-full py-2 px-4 my-2 bg-transparent"
                  type="password"
                  placeholder="Password"
                />
                <FaLock className="absolute top-[35%] right-3" />
              </div>
              <button className="cursor-pointer hover:tracking-wider my-2 py-2 w-full rounded-full border border-amber-100 bg-transparent text-amber-100">
                Register
              </button>
              <span className="text-[14px]">
                Already have an account?{" "}
                <span className="font-semibold" onClick={() => setOpen(!Open)}>
                  Login
                </span>
              </span>
            </form>
          </div>

          {/* ----login---- */}

          <div
            className={`${
              !Open
                ? "translate-y-[-250px] transition-all"
                : "translate-y-[400px] transition-all"
            }`}
          >
            <h2 className="text-3xl font-bold pb-6 text-center">Login</h2>
            <form className="flex flex-col items-center " action="">
              <div className="w-full relative">
                <input
                  className="w-full border  border-amber-100  rounded-full py-2 px-4 my-2 bg-transparent"
                  type="email"
                  placeholder="Email"
                />
                <TbMailFilled className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="w-full border  border-amber-100  rounded-full py-2 px-4 my-2 bg-transparent"
                  type="password"
                  placeholder="Password"
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
              <span className="text-[14px]">
                Don't have an account?{" "}
                <span className="font-semibold" onClick={() => setOpen(!Open)}>
                  Register
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
