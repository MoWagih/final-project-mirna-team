import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useModal } from "../Store/Zustand";
import SingleCourse from "./SingleCourse";
import CourseDetails from "./CourseDetails";
import CourseCreation from "./CourseCreation";
import axios from "axios";
import { motion } from "framer-motion";

export default function TeacherCourses() {
  const { courseDetails, courseCreation, openCourseDetails, openCourseCreationModal } = useModal();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to view your courses.");
        setIsLoading(false);
        return;
      }

      // Get current user
      const userRes = await axios.get("http://82.112.241.233:1400/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userId = userRes.data.id;
      if (!userId) {
        setError("User ID not found. Please log in again.");
        setIsLoading(false);
        return;
      }

      // Fetch courses for the current user
      const coursesRes = await axios.get(
        `http://82.112.241.233:1400/api/courses?filters[users_permissions_user][id][$eq]=${userId}&populate=*`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCourses(coursesRes.data.data);
    } catch (err) {
      console.error("Error fetching courses:", JSON.stringify(err.response?.data, null, 2), err.message);
      if (err.response?.status === 401) {
        setError("Session expired. Please log in again.");
      } else {
        setError("Failed to load courses. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-[#1f032b]">
      {/* Titles */}
      <div className="flex items-center justify-between p-6">
        <h1 className="text-[#CCD6F6] text-3xl font-bold">Courses</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={fetchCourses}
            className="p-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition-colors"
          >
            Refresh Courses
          </button>
          <div
            onClick={openCourseCreationModal}
            className="flex items-center gap-3 text-[#e3e7f6] bg-[#5d1c9f] p-2 rounded-3xl cursor-pointer hover:bg-[#6e2db0] transition-colors"
          >
            <GoPlus className="bg-[#9857D3] text-[28px] p-1 rounded-2xl" />
            <p>New Course</p>
          </div>
        </div>
      </div>

      {/* Subjects Container */}
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-400 border-solid"></div>
          <p className="text-gray-400 mt-4">Loading courses...</p>
        </div>
      ) : error ? (
        <div className="p-4">
          <p className="text-red-400 text-center">{error}</p>
        </div>
      ) : courses.length === 0 ? (
        <p className="text-gray-400 p-4">No courses found. Create a new course to get started!</p>
      ) : (
        <div className="bg-[#1f032b] grow gap-4 p-4 rounded flex flex-wrap overflow-auto">
          {courses.map((el, index) => (
            <motion.div
              key={el.id} // استخدام معرّف الكورس كـ key
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SingleCourse
                course_title={el.course_title}
                course_cover={`http://82.112.241.233:1400${el.course_cover?.formats?.medium?.url}`}
                onClick={() => {
                  setSelectedCourse(el);
                  openCourseDetails();
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {courseDetails && selectedCourse && <CourseDetails course={selectedCourse} />}
      {courseCreation && <CourseCreation refreshCourses={fetchCourses} />}
    </div>
  );
}