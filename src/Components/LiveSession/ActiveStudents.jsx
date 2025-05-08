import { RiMicLine } from 'react-icons/ri'
import teacherImg from '../../assets/img/bohemian-man-with-his-arms-crossed.jpg'
import Student from './Student'
import { LuVideo } from 'react-icons/lu'

export default function ActiveStudents() {
  return (
        <div className="bg-blue-950 p-4 grow rounded-2xl flex flex-col text-white gap-2">
            <p className='text-[12px]'>Host</p>
            {/* Teachers */}
            <div className="p-4 rounded-2xl flex items-center gap-3 justify-between">
              <div className='flex items-center gap-2'>
                      <img src={teacherImg} alt="TeacherImg" className='w-[35px] h-[35px] rounded-4xl' />
                      <p className='text-[13px]'>Teacher Name</p>
                  </div>

                <div className='flex gap-4 p-1'>
                    <RiMicLine className='text-[18px]' />
                    <LuVideo className='text-[18px]' />
                </div>
            </div>

            {/* Active Students */}
            <p className='text-[12px]'>Active Students</p>
            <div className='p-2 overflow-auto flex-col flex gap-3'>
              <Student />
              <Student />
              <Student />
              <Student />
              <Student />
              <Student />
              <Student />
              <Student />
              <Student />
            </div>
        </div>
  )
}
