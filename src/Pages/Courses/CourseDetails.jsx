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
    <div className="p-6 w-full h-[100vh] overflow-hidden flex items-center justify-center gap-3 absolute top-0 left-0 bg-[#0000008d]">
        
        {/* Course Brief */}
        <div className="bg-[#3a0345] h-[95%] p-2 overflow-hidden w-[75%] text-[#CCD6F6] rounded">
            {/* Heading Title */}
            <div className="flex items-center justify-between p-2">
                <h1 className="font-medium text-[26px] text-white">{course.course_title}</h1>
                <IoClose onClick={closeCourseDetails} className=' bg-red-700 text-white text-[22px] rounded-2xl' />
            </div>

            {/* Course Brief and Sessions */}
            <div className='w-full h-[30vh] p-2 flex items-center gap-2'>
                {/* Course Cover */}
                <div className='w-[20%] h-full items-center justify-center flex overflow-hidden'>
                  <img src={`http://82.112.241.233:1400${course.course_cover?.formats?.medium?.url}`} className='w-full h-full rounded object-cover' />
                </div>



                {/* Brief */}
                <div className='p-3 text-white h-full w-[80%] rounded-2xl flex flex-col overflow-auto'>
                    <h1 className='text-[24px]'></h1>
                    <p className='text-justify'>{course.course_description}</p>
                </div>
            </div>  

           
             {/* Sessions  */}
             <div className='bg-[#180017] p-2 text-white flex flex-col gap-3 h-[55%] overflow-auto rounded shadow-2xl'>
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
