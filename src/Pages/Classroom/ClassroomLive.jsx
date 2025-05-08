import { GoScreenFull } from "react-icons/go";
import { LuVideo } from "react-icons/lu";
import { RiMicLine } from "react-icons/ri";
import { TfiBlackboard } from "react-icons/tfi";
import { useModal } from "../Store/Zustand";

export default function ClassroomLive() {
    
  const { closeLiveClassRoom } = useModal();

    return (
      <div className="p-4 w-full overflow-hidden flex flex-col h-[100vh] absolute top-0 left-0 bg-black">
          {/* Head */}
          <div className="flex items-center justify-between">
          
            <h1 className="text-[28px] font-medium text-white">Classroom</h1>
            <p onClick={closeLiveClassRoom} className="text-white underline">Close Tab</p>
          </div>
  
          {/* Zoom Conatiner */}
          <div className="p-2 rounded shadow-md flex gap-2 h-[90vh]">
  
              {/* Video */}
              <div className="text-white flex flex-col justify-end bg-gray-900 h-full w-[70%] rounded-2xl">
          
                {/* Title and Actions */}
                <div className='bg-[#00000060] p-3 flex justify-between items-center rounded-2xl'>
                  <h2 className='text-[18px]'>Session Title</h2>
  
                  {/* Actions on Video */}
                  <div className='p-3 flex gap-8'>
                    <RiMicLine className='text-[20px]' />
                    <LuVideo className='text-[20px]' />
                    <TfiBlackboard className='text-[20px]' />
                    <GoScreenFull className='text-[20px]' />
                  </div>
                </div>
                </div>
  
              {/* Active Students */}
                <div className="bg-blue-950 p-4 grow rounded-2xl flex flex-col text-white gap-2">
                <p className='text-[12px]'>Host</p>
                {/* Teachers */}
                <div className="p-4 rounded-2xl flex items-center gap-3 justify-between">
                  <div className='flex items-center gap-2'>
                          {/* <img src={teacherImg} alt="TeacherImg" className='w-[35px] h-[35px] rounded-4xl' /> */}
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
        
                </div>
            </div>
          </div>
      </div>
    )
  }
  