import React from 'react'
import courseImg from '../../assets/img/image 15.png'
import teacherImg from '../../assets/img/bohemian-man-with-his-arms-crossed.jpg'
import SingleChapter from '../../Components/Chapter/SingleChapter'
import { useModal } from '../Store/Zustand'
import { GoEyeClosed } from 'react-icons/go'
import { IoClose } from 'react-icons/io5'


export default function CourseDetails() {

    const { closeCourseDetails } = useModal();

  return (
    <div className="p-3 sm:h-[100vh] sm:overflow-hidden flex items-center justify-center gap-3 absolute top-0 left-0 bg-[#0000008d]">
        
        {/* Course Brief */}
        <div className="bg-gray-800 p-2 rounded-2xl h-full overflow-hidden w-[75%]">
            {/* Heading Title */}
            <div className="flex items-center justify-between p-2">
                <h1 className="font-medium text-[26px] text-white">Course Details</h1>
                <IoClose onClick={closeCourseDetails} className=' bg-red-700 text-white text-[22px] rounded-2xl' />
            </div>

            {/* Course Brief and Sessions */}
            <div className='p-2 flex items-center gap-2'>
                <img src={courseImg} className='w-[20%] rounded-2xl' />
                {/* Brief */}
                <div className='p-3 text-white bg-gray-950 rounded-2xl flex flex-col justify-between'>
                    <h1 className='text-[24px]'>Chemistry</h1>
                    <p>Matter is one of the very important topic in Chemistry.  Matter is anything that takes up space and can be weighed. In other words, matter has volume and mass. There are many different substances, or types of matter, in the universe.</p>

                    {/* Teacher */}
                    <div className='flex items-center gap-2 self-end'>
                      <img src={teacherImg} alt="TeacherImg" className='w-[35px] h-[35px] rounded-4xl' />
                      <p className='text-[13px]'>Teacher Name</p>
                  </div>
                </div>
            </div>  

           
             {/* Sessions  */}
             <div className='p-2 text-white flex flex-col gap-4 h-[60%] overflow-auto'>
                <h3 className='font-medium pt-2 pb-2'>Content</h3>
                {/* Chapters and Download Link */}
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
                <SingleChapter />
             </div>

        </div>   
    </div>
)
}
