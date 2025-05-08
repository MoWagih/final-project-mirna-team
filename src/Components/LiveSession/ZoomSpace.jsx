import React from 'react'
import { GoScreenFull } from 'react-icons/go'
import { LuVideo } from 'react-icons/lu'
import { RiMicLine } from 'react-icons/ri'
import { TfiBlackboard } from 'react-icons/tfi'

export default function ZoomSpace() {
  return (
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
  )
}
