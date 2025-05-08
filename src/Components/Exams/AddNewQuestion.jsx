import { useModal } from "../../Pages/Store/Zustand"

export default function AddNewQuestion() {
  
    const { closeModal } = useModal();


    return (
    <div onClick={closeModal} className="bg-[#00000084] flex items-center justify-center w-full h-[100vh] absolute top-0 left-0">
        {/* Frame */}
        <div className="bg-blue-950 w-[50%] rounded-2xl p-6">
            <form onClick={(e)=>e.stopPropagation} className="flex flex-col gap-3">
                {/* Question Title */}
                <div className="p-1 flex flex-col gap-2 w-full">
                    <label htmlFor="questionTitle">Question Title</label>
                    <input type="text" placeholder="Enter Question Title" className="border p-2 rounded" />
                </div>

                {/* Choices */}
                <div className="p-2 flex items-center justify-between">
                    {/* Single Choice */}
                    <div className="p-2 w-1/5 flex gap-2 items-center">
                        <label>A:</label>
                        <input type="text" placeholder="Choice A" className="w-full border p-1 rounded" />
                    </div>

                     {/* Single Choice */}
                     <div className="p-2 w-1/5 flex gap-2 items-center">
                        <label>B:</label>
                        <input type="text" placeholder="Choice B" className="w-full border p-1 rounded" />
                    </div>

                     {/* Single Choice */}
                     <div className="p-2 w-1/5 flex gap-2 items-center">
                        <label>C:</label>
                        <input type="text" placeholder="Choice C" className="w-full border p-1 rounded" />
                    </div>

                    {/* Single Choice */}
                    <div className="p-2 w-1/5 flex gap-2 items-center">
                        <label>D:</label>
                        <input type="text" placeholder="Choice D" className="w-full border p-1 rounded" />
                    </div>
                </div>

                {/* Correct Choice */}
                <div className="p-2 flex items-center gap-3">
                    <p>Correct Choice is:</p>
                    <select name="" id="" className=" w-1/4 text-center bg-blue-800 rounded-2xl">
                        <option value="A">Choice A</option>
                        <option value="B">Choice B</option>
                        <option value="C">Choice C</option>
                        <option value="D">Choice D</option>
                    </select>

                    <label htmlFor="points">Points:</label>
                    <input type="number" max={10} min={0.5} maxLength={2} className="border p-1 rounded"/>
                </div>
            </form>
        </div>
    </div>
  )
}
