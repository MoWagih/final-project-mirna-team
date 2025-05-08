import courseImg from '../../assets/img/bohemian-man-with-his-arms-crossed.jpg'

export default function UploadedCourses() {
  return (
        <div className='flex bg-slate-900/90 p-2 rounded-2xl items-center sm:w-[48%] md:w-[48%]'>
        <img src={courseImg} alt="CourseImg" className='rounded-md w-[30%] h-[30%] border-2 border-blue-600 sm:w-[30%] sm:h-[100%]' />
        {/* Course Titles */}
        <div className='grow flex flex-col gap-1 ps-2'>
            <h3 className='text-sm font-medium text-white sm:text-lg'>Course Title</h3>
            <p className='text-[12px] text-[#9c9c9c] sm:text-lg'>Continous Enrollement: <span>10</span></p>
        </div>
    </div>
  )
}
