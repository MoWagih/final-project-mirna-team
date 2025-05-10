import { GoPlus } from "react-icons/go";
import SingleChapter from "../../Components/SingleChapter/SingleChapter";
import { useModal } from "../Store/Zustand";
import AddNewChapter from "../../Components/Chapter/AddNewChapter";
import { useState } from "react";
import axios from "axios";

export default function CourseCreation() {
   
    const { closeCourseCreationModal , openNewChapterModal , addNewChapter } = useModal();

    const [courseTitle, setCourseTitle] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [coverImage, setCoverImage] = useState(null);

    const [chapters, setChapters] = useState([]);

    const handleAddChapter = (newChapter) => {
        setChapters((prev) => [...prev, newChapter]);
      };

      const handleEditChapter = (index) => {
        const updatedTitle = prompt("Enter new title:", chapters[index].title);
        const updatedLink = prompt("Enter new link:", chapters[index].link);
    
        if (updatedTitle && updatedLink) {
            const updatedChapters = [...chapters];
            updatedChapters[index] = {
                ...updatedChapters[index],
                title: updatedTitle,
                link: updatedLink
            };
            setChapters(updatedChapters);
        }
    };

    const handleDeleteChapter = (index) => {
        if (window.confirm("Are you sure you want to delete this chapter?")) {
            const updatedChapters = chapters.filter((_, i) => i !== index);
            setChapters(updatedChapters);
        }
    };

      const handleSubmit = async () => {
        if (!courseTitle || !courseDescription || !coverImage) {
            alert("Please fill in all fields");
            return;
        }
    
        const formData = new FormData();
        formData.append("files", coverImage);
    
        try {
            // 1. رفع صورة الغلاف
            const uploadRes = await axios.post("http://82.112.241.233:1400/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
    
            const coverImageId = uploadRes.data[0].id;
    
            // 2. إنشاء الكورس نفسه
            const courseData = {
                data: {
                    course_title: courseTitle,
                    course_description: courseDescription,
                    course_cover: coverImageId
                }
            };
    
            const courseRes = await axios.post("http://82.112.241.233:1400/api/courses", courseData);
            const courseId = courseRes.data.data.id;
    
            console.log("Course Created:", courseRes.data);
    
            // 3. إضافة الشباتر وربطها بالكورس
            for (const chapter of chapters) {
                console.log("Chapter Data:", chapter);
                const chapterData = {
                    data: {
                        chapter_title: chapter.title,
                        download_link: chapter.link,
                        course: courseId // هنا الربط مع الكورس
                    }
                };
    
                await axios.post("http://82.112.241.233:1400/api/chapters", chapterData);
            }
    
            alert("Course and Chapters created successfully!");
            closeCourseCreationModal(); // اقفل المودال لو عايز
        } catch (err) {
            console.error("Full error object:", err);
            // console.error("Error creating course:", err.response?.data || err.message);
            alert("Something went wrong while creating the course.");
        }
    };
    

    


  return (
    <div className="bg-blue-950 p-3 sm:h-[100vh] sm:overflow-hidden flex flex-col gap-3 absolute top-0 left-0 w-full">        
        {/* Exams Container */}
        <div className="bg-gray-900 p-4 rounded-2xl text-white h-full overflow-hidden">
            {/* Title and Actions */}
            <div className="p-2 flex justify-between">
                <h1 className="text-[26px]">Upload New Course</h1>
                <div className="flex items-center gap-3">
                    {/* <button className="ps-2 pe-2 p-1 bg-blue-800 rounded-2xl">New Question</button> */}
                    <button onClick={(e) => {e.preventDefault(); handleSubmit(); }}  className="ps-2 pe-2 p-1 bg-green-800 rounded-2xl">Publish Course</button>
                    <button onClick={closeCourseCreationModal} className="ps-2 pe-2 p-1 underline">Go Back</button>
                </div>
            </div>

            {/* Course */}
            <div className="p-2 rounded-2xl">
                <form className="p-2 flex flex-col gap- ">
                    {/* Title and Description */}
                    <div className="p-1 flex  gap-3">
                        {/* Titles and Cover Img */}
                        <div className="flex flex-col gap-2 w-[40%]">
                            <label htmlFor="examTitle">Course Title:</label>
                            {/* title input */}
                            <input  type="text" className="border rounded p-2 border-blue-600" placeholder="Enter Course Title" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)}  />


                            {/* description input */}
                            <label htmlFor="Description">Description</label>
                            <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} placeholder="Enter Description" className="resize-none border rounded border-blue-600 h-[20vh] p-2 overflow-auto"></textarea>




                            {/* img input */}
                            <label htmlFor="examTitle">Choose Cover Img:</label>
                            <input onChange={(e) => setCoverImage(e.target.files[0])} type="file" id="img" name="imgUpload" accept="image/*" className="border rounded p-2 border-blue-600"  />




                        </div>

                        {/* Chapters */}
                        <div className="p-2 grow overflow-hidden h-[50vh] flex flex-col gap-3">
                            {/* Title and Actions */}
                            <div className="flex items-center justify-between">
                                <h2>Course Content:</h2>
                                <div onClick={openNewChapterModal} className="flex items-center">
                                    <GoPlus />
                                    <p>Add New Chapter</p>
                                </div>
                            </div>

                            {addNewChapter && <AddNewChapter onAdd={handleAddChapter} />}



                            <div className="rounded-2xl p-4 h-[85%] flex flex-col gap-6 overflow-auto bg-blue-950">
                                {/* Single Chapter */}
                                {chapters.map((chapter, index) => ( <SingleChapter key={index}
                                 index={index}
                                  chapter={chapter}
                                  onEdit={handleEditChapter}
                                    onDelete={handleDeleteChapter}
         /> ))}
                            </div>
                        </div>
                     </div>
                </form>
            </div>
        </div>
    </div>
  )
}