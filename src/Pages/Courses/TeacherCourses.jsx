import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useModal } from "../Store/Zustand";
import SingleCourse from "./SingleCourse";
import CourseDetails from "./CourseDetails";
import CourseCreation from "./CourseCreation";
import axios from "axios";
import { motion } from "framer-motion";


export default function TeacherCourses() {

    const { courseDetails , courseCreation , openCourseDetails , openCourseCreationModal } = useModal();
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [ courses , setCourses ] = useState([]);

    useEffect(()=>{
      axios.get("http://82.112.241.233:1400/api/courses?populate=*").then((res)=>{
        console.log(res.data.data)
        setCourses(res.data.data)
      })
    },[])

  return (
    <div className="w-full h-full flex flex-col">
        {/* Titles */}
          <div className="flex items-center justify-between">
            <h1 className="text-[#CCD6F6] p-6 text-3xl">Courses</h1>
            <div onClick={openCourseCreationModal} className="flex items-center gap-3 text-[#e3e7f6] bg-[#5d1c9f] p-2 rounded-3xl">
                <GoPlus className="bg-[#9857D3] text-[28px] p-1 rounded-2xl" />
                <p>New Course</p>
            </div>
        </div>


        {/* Subjects Container */}
        <div className="bg-[#1f032b] grow p-4 rounded flex-wrap">
        
        {/* Single Course */}
           <div className="flex gap-2">
           {
            
            courses.map((el, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>        
                
                  <SingleCourse
                    key={index}
                    course_title={el.course_title}
                    course_cover={`http://82.112.241.233:1400${el.course_cover?.formats?.medium?.url}`}
                    onClick={() => { setSelectedCourse(el); openCourseDetails(); }} />

              </motion.div>
                ))
            
            }
           </div>
        
      </div>

      {
        courseDetails && selectedCourse && <CourseDetails course={selectedCourse} />
      }

      {
        courseCreation && <CourseCreation />
      }
    </div>
  );
}
