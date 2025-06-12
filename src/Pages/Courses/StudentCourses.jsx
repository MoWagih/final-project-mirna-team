import React, { useEffect, useState } from "react";
import { useModal } from "../Store/Zustand";
import SingleCourse from "./SingleCourse";
import CourseDetails from "./CourseDetails";
import axios from "axios";
import { motion } from "framer-motion";

export default function StudentCourses() {
  const { courseDetails, openCourseDetails } = useModal();
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

      // جلب بيانات الطالب
      const userRes = await axios.get("http://82.112.241.233:1400/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const studentId = userRes.data.id;
      if (!studentId) {
        setError("User ID not found. Please log in again.");
        setIsLoading(false);
        return;
      }

      // جلب الكورسات الخاصة بالطالب
      const coursesRes = await axios.get(
        `http://82.112.241.233:1400/api/courses?filters[students][id][$eq]=${studentId}&populate=*`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // معالجة الكورسات وإزالة التكرار
      const uniqueCourses = [];
      const courseIds = new Set();
      coursesRes.data.data.forEach((course) => {
        if (!courseIds.has(course.id)) {
          courseIds.add(course.id);
          uniqueCourses.push(course);
        }
      });
      setCourses(uniqueCourses);
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
      {/* العنوان الرئيسي */}
      <div className="flex items-center justify-between p-6">
        <h1 className="text-[#CCD6F6] text-3xl font-bold">My Courses</h1>
      </div>

      {/* حالة التحميل */}
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
        <p className="text-gray-400 p-4">No courses found. Please contact your teacher to enroll.</p>
      ) : (
        /* قائمة الكورسات */
        <div className="bg-[#1f032b] grow gap-4 p-4 rounded flex flex-wrap overflow-auto">
          {courses.map((el, index) => (
            <motion.div
              key={el.id} // استخدام معرّف الكورس كـ key لتجنب مشاكل التكرار
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
    </div>
  );
}