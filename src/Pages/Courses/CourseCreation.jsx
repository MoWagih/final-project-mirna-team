import { GoPlus } from "react-icons/go";
import SingleChapter from "../../Components/SingleChapter/SingleChapter";
import { useModal } from "../Store/Zustand";
import AddNewChapter from "../../Components/Chapter/AddNewChapter";

export default function CourseCreation() {
    const { closeCourseCreationModal , addNewChapter , openNewChapterModal } = useModal();
  return (
    <div className="bg-blue-950 p-3 sm:h-[100vh] sm:overflow-hidden flex flex-col gap-3 absolute top-0 left-0 w-full">        
        {/* Exams Container */}
        <div className="bg-gray-900 p-4 rounded-2xl text-white h-full overflow-hidden">
            {/* Title and Actions */}
            <div className="p-2 flex justify-between">
                <h1 className="text-[26px]">Upload New Course</h1>
                <div className="flex items-center gap-3">
                    {/* <button className="ps-2 pe-2 p-1 bg-blue-800 rounded-2xl">New Question</button> */}
                    <button className="ps-2 pe-2 p-1 bg-green-800 rounded-2xl">Publish Course</button>
                    <button onClick={closeCourseCreationModal} className="ps-2 pe-2 p-1 underline">Go Back</button>
                </div>
            </div>

            {/* Exam */}
            <div className="p-2 rounded-2xl">
                <form className="p-2 flex flex-col gap- ">
                    {/* Title and Description */}
                    <div className="p-1 flex  gap-3">
                        {/* Titles and Cover Img */}
                        <div className="flex flex-col gap-2 w-[40%]">
                            <label htmlFor="examTitle">Course Title:</label>
                            <input type="text" className="border rounded p-2 border-blue-600" placeholder="Enter Course Title" />
                            <label htmlFor="Description">Description</label>
                            <textarea placeholder="Enter Description" className="resize-none border rounded border-blue-600 h-[20vh] p-2 overflow-auto"></textarea>
                            <label htmlFor="examTitle">Choose Cover Img:</label>
                            <input type="file" id="img" name="imgUpload" accept="image/*" className="border rounded p-2 border-blue-600"  />
                        </div>

                        {/* Chapters */}
                        <div className="p-2 grow overflow-hidden h-[50vh] flex flex-col gap-3">
                            {/* Title and Actions */}
                            <div className="flex items-center justify-between">
                                <h2>Course Content:</h2>
                                <button onClick={openNewChapterModal} className="ps-2 pe-2 p-1 flex items-center gap-2"><GoPlus />Add Chapter</button>
                            </div>
                            <div className="rounded-2xl p-4 h-[85%] flex flex-col gap-6 overflow-auto bg-blue-950">
                                {/* Single Chapter */}
                               <SingleChapter />
                            </div>
                        </div>
                     </div>

                     {/* Dates */}
                     <div className="p-2 flex flex-col gap-3">
                        {/* Start Date */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="startDate">Start Date</label>
                            <input type="date" className="border rounded p-2 w-[40%] border-blue-600" />
                        </div>

                        {/* End Date */}
                        <div className="flex flex-col gap-3">
                            <label htmlFor="endDate">End Date</label>
                            <input type="date" className="border rounded p-2 w-[40%] border-blue-600" />
                        </div>
                     </div>

                     {
                        addNewChapter && <AddNewChapter />
                     }
                     
                </form>
            </div>
        </div>
    </div>
  )
}
