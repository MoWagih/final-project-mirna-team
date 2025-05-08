import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import { GoPlus } from "react-icons/go";
import SingleCourse from "./SingleCourse";
import { useModal } from "../Store/Zustand";
import CourseDetails from "./CourseDetails";
import CourseCreation from "./CourseCreation";

export default function TeacherCourses() {

    const { courseDetails , courseCreation , openCourseCreationModal } = useModal();

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-amber-50 p-6 text-3xl">Courses</h1>
      <Navbar />
      <div className="h-full w-full bg-blue-950 flex rounded-2xl p-2 mb-2">
        {/* Subjects Container */}
        <div className="container flex flex-col w-full h-full rounded-2xl overflow-auto p-4 bg-blue-800 gap-2">
            <div className="flex items-center justify-between text-white">
                <h1>Current Subjects</h1>
                <div onClick={openCourseCreationModal} className="flex items-center gap-3">
                    <GoPlus />
                <p>Add New Course</p>
            </div>
            </div>
            {/* Single Course */}
            <SingleCourse />
        </div>
      </div>

      {
        courseDetails && <CourseDetails />
      }

      {
        courseCreation && <CourseCreation />
      }
    </div>
  );
}
