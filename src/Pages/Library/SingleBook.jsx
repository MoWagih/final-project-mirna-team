import { IoMdDownload } from "react-icons/io";

export default function SingleBook({ title , courseImg , bookLink }) {
  return (
    <div className="w-[25%] h-[65%] rounded-2xl p-3 cursor-pointer bg-slate-900  shadow-lg">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={courseImg} />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">{title}</p>
              <a
                href={bookLink} target="_blank" rel="noopener noreferrer">
                <button>
                  <IoMdDownload className="text-amber-500" />
                </button>
              </a>
            </div>
          </div>

  )
}
