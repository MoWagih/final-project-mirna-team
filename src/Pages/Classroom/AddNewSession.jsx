import { useModal } from "../Store/Zustand"

export default function AddNewSession() {
  
    const { closeNewSessionModal } = useModal();
    
    return (
    <div onClick={closeNewSessionModal} className="bg-[#00000084] flex items-center justify-center w-full h-[100vh] absolute top-0 left-0">
        {/* Frame */}
        <div className="bg-blue-950 w-[50%] rounded-2xl p-6 text-white">
            <form onClick={(e)=>e.stopPropagation} className="flex flex-col gap-3">
                {/* Question Title */}
                <div className="p-1 flex flex-col gap-2 w-full">
                    <label htmlFor="questionTitle">Question Title</label>
                    <input type="text" placeholder="Enter Question Title" className="border p-2 rounded" />
                </div>

                <div className="p-1 flex flex-col gap-2 w-full">
                    <label htmlFor="questionTitle">Date</label>
                    <input type="date" className="border p-2 rounded" />
                </div>

                <div className="p-1 flex flex-col gap-2 w-full">
                    <label htmlFor="questionTitle">Session Link</label>
                    <input type="text" placeholder="Enter Session Link" className="border p-2 rounded" />
                </div>
            </form>
        </div>
    </div>
  )
}
