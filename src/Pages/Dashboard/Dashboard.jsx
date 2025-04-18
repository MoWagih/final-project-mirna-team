import React from "react";

export default function Dashboard() {
  const courses = [
    {
      cname: "math",
      duration: "chaper1",
      loder: "p",
    },
  ];
  return (
    <div className="h-full w-full bg-indigo-950 flex   rounded-2xl p-2 mb-2">
      <div className="w-full h-full  flex flex-col gap-2">
        <div className="Announcement w-full h-[20%] bg-amber-50 rounded-2xl p-2">
          <h3 className="text-2xl text-indigo-950 p-0.5m pl-0.5">
            Announcement
          </h3>
          <div className="w-full p-2 h-[70%] bg-indigo-950/80 rounded-2xl flex flex-row justify-between items-center">
            <p className=" text-amber-50">
              Hello Mirna ! your live session is about to start !
            </p>
            <button className="cursor-pointer hover:tracking-wider my-2 py-2 w-30 rounded-full border border-amber-100 bg-transparent text-amber-100">
              Join
            </button>
          </div>
        </div>
        <div className="Courses-Progress w-full h-[50%] bg-indigo-950  rounded-2xl ">
          <div className="Courses-header  w-full h-full bg-amber-50 rounded-2xl p-3 flex justify-between">
            <h3 className="text-indigo-950 text-2xl">Courses Progress</h3>
            <select className="w-25 h-10 bg-indigo-950  text-amber-50 border-2 border-b-indigo-950 rounded-2xl p-2">
              <option className="text-amber-50" value="math">
                Math
              </option>
              <option className="text-amber-50" value="science">
                Sciencs
              </option>
              <option className="text-amber-50" value="english">
                English
              </option>
              <option className="text-amber-50" value="arabic">
                Arabic
              </option>
            </select>
          </div>
          <div className="courses-body flex flex-col gap[15px]">
            {courses.map((courses) => (
              <div className="list flex justify-between items-center transition-transform pr-[10px]">
                <h4>{courses.cname}</h4>
                <span>{courses.duration}</span>
                <span>{courses.loder}</span>
                <span className="">:</span>
              </div>
            ))}
          </div>
        </div>
        <div className="Assignments w-full h-[30%] bg-amber-50 rounded-2xl p-3">
          <h3 className="text-indigo-950 text-2xl">Assignment</h3>
        </div>
      </div>
    </div>
  );
}
