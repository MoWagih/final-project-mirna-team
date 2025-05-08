import React from 'react'

export default function AnnouncementWidget() {
  return (
    <div className="Announcement h-[30%] bg-gray-800 rounded-2xl p-2">
                <h3 className="text-2xl text-amber-50 pl-2 pb-1">Announcement</h3>
                    <div className="w-full p-2 h-[60%] bg-slate-900/90 rounded-2xl flex flex-row justify-between items-center">
                    <p className=" text-amber-50">
                        Hello Faried ! your live session is about to start !
                    </p>
                    <button className="cursor-pointer hover:tracking-wider p-2 rounded-full border-2 border-amber-50 bg-transparent text-amber-50">
                        Add Announcement
                    </button>
                    </div>
          </div>
      )
}
