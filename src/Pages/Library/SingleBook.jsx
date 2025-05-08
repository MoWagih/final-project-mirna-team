import { IoMdDownload } from "react-icons/io";
import book1 from "../../assets/img/book1.png"

export default function SingleBook() {
  return (
    <div className="w-[25%] h-[65%] rounded-2xl p-3 cursor-pointer bg-slate-900  shadow-lg">
            <div className="bookImg w-full h-[86%] flex justify-center">
              <img className="w-70 h-full rounded-2xl" src={book1} />
            </div>
            <div className="bookDiscription w-full h-[15%] flex justify-between items-center">
              <p className="text-amber-500 font-bold">Chemistry</p>
              <a
                href="https://drive.google.com/uc?export=download&id=1IkqC34l4cBHxM5ECe1bMPtO6sDIH7ByZ" target="_blank" rel="noopener noreferrer">
                <button>
                  <IoMdDownload className="text-amber-500" />
                </button>
              </a>
            </div>
          </div>

  )
}
