import { LuVideo } from 'react-icons/lu'
import StudentImg from '../../assets/img/bohemian-man-with-his-arms-crossed.jpg'
import { RiMicLine } from 'react-icons/ri'


export default function () {
  return (
    <div className="bg-[#00000029] p-2 rounded-2xl flex items-center justify-between gap-3">
                <div className='flex items-center gap-2'>
                    <img src={StudentImg} alt="StudentImg" className='w-[35px] h-[35px] rounded-4xl' />
                    <p className='text-[13px]'>Student Name</p>
                </div>

                <div className='flex gap-4 p-1'>
                    <RiMicLine className='text-[18px]' />
                    <LuVideo className='text-[18px]' />
                </div>

            </div>
  )
}
