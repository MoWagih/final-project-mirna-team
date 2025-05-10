import React, { useEffect, useState } from 'react'
import SingleChapter from '../../Components/Chapter/SingleChapter'
import { useModal } from '../Store/Zustand'
import { IoClose } from 'react-icons/io5'
import axios from 'axios'


export default function CourseDetails({ course }) {

const { closeCourseDetails } = useModal();
const [chapters, setChapters] = useState([]);

useEffect(() => {
    // نجيب الشابترز الخاصة بالكورس بناءً على الـ ID
    axios.get(`http://82.112.241.233:1400/api/courses/${course.documentId}?populate=chapters`).then((res) => {
    setChapters(res.data.data.chapters)
    });
  }, [course.id]);


return (
    <div className="p-6 w-full sm:h-[100vh] sm:overflow-hidden flex items-center justify-center gap-3 absolute top-0 left-0 bg-[#0000008d]">
        
        {/* Course Brief */}
        <div className="bg-gray-800 p-2 rounded-2xl h-full overflow-hidden w-[75%]">
            {/* Heading Title */}
            <div className="flex items-center justify-between p-2">
                <h1 className="font-medium text-[26px] text-white">Course Details</h1>
                <IoClose onClick={closeCourseDetails} className=' bg-red-700 text-white text-[22px] rounded-2xl' />
            </div>

            {/* Course Brief and Sessions */}
            <div className='p-2 flex items-center gap-2'>
                <img src={`http://82.112.241.233:1400${course.course_cover?.formats?.medium?.url}`} className='w-[20%] rounded-2xl' />
                {/* Brief */}
                <div className='p-3 text-white bg-gray-950 rounded-2xl flex flex-col justify-between'>
                    <h1 className='text-[24px]'>{course.course_title}</h1>
                    <p>{course.course_description}</p>
                </div>
            </div>  

           
             {/* Sessions  */}
             <div className='p-2 text-white flex flex-col gap-4 h-[60%] overflow-auto'>
                <h3 className='font-medium pt-2 pb-2'>Content</h3>
                {/* Chapters and Download Link */}
                {chapters.length > 0 ? (
            chapters.map((chapter) => (
              <SingleChapter key={chapter.documentId} chapter={chapter} />
            ))
          ) : (
            <p>No chapters available</p>
          )}
             </div>

        </div>   
    </div>
)
}
