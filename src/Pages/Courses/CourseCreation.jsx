import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoPlus } from "react-icons/go";
import { useModal } from "../Store/Zustand";
import SingleChapter from "../../Components/SingleChapter/SingleChapter";
import AddNewChapter from "../../Components/Chapter/AddNewChapter";

export default function CourseCreation() {
  // الحالات الأساسية
  const { closeCourseCreationModal, openNewChapterModal, addNewChapter } = useModal();
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [myStudents, setMyStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // التحقق من صحة الرابط
  const isValidUrl = (url) => {
    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    return pattern.test(url);
  };

  // جلب طلاب المعلم
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to view students.");
        return;
      }

      const userRes = await axios.get("http://82.112.241.233:1400/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const fetchedUserId = userRes.data.id;
      if (!fetchedUserId) {
        setError("User ID not found. Please log in again.");
        return;
      }

      const myStudentsRes = await axios.get(
        `http://82.112.241.233:1400/api/teacher-students?filters[teacher][id][$eq]=${fetchedUserId}&populate=students`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("My Students Raw Response:", myStudentsRes.data.data);

      let studentData = [];
      if (myStudentsRes.data.data.length > 0) {
        const teacherEntry = myStudentsRes.data.data[0];
        if (teacherEntry.students && teacherEntry.students.length > 0) {
          studentData = teacherEntry.students.filter(student => student && student.id);
          console.log("Processed My Students:", studentData);
        } else {
          console.warn("No students found in teacher entry:", teacherEntry);
        }
      } else {
        console.warn("No teacher entry found for user:", fetchedUserId);
      }
      setMyStudents(studentData);
    } catch (err) {
      console.error("Error fetching students:", JSON.stringify(err.response?.data, null, 2), err.message);
      setError("Failed to load students. Please try again later.");
    }
  };

  // جلب الطلاب عند تحميل الكومبوننت
  useEffect(() => {
    fetchStudents();
  }, []);

  // إضافة شابتر جديد
  const handleAddChapter = (newChapter) => {
    if (!isValidUrl(newChapter.link)) {
      setError("Please enter a valid URL for the chapter link.");
      return;
    }
    setChapters((prev) => [...prev, newChapter]);
    setError(null);
  };

  // تعديل شابتر موجود
  const handleEditChapter = (index) => {
    const updatedTitle = prompt("Enter new title:", chapters[index].title);
    const updatedLink = prompt("Enter new link:", chapters[index].link);

    if (updatedTitle && updatedLink && isValidUrl(updatedLink)) {
      const updatedChapters = [...chapters];
      updatedChapters[index] = { ...updatedChapters[index], title: updatedTitle, link: updatedLink };
      setChapters(updatedChapters);
      setError(null);
    } else {
      setError("Invalid URL or empty fields.");
    }
  };

  // حذف شابتر
  const handleDeleteChapter = (index) => {
    if (window.confirm("Are you sure you want to delete this chapter?")) {
      setChapters(chapters.filter((_, i) => i !== index));
      setError(null);
    }
  };

  // التحقق من صورة الغلاف
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setError("Please upload a valid image (JPEG or PNG).");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should not exceed 5MB.");
        return;
      }
      setCoverImage(file);
      setError(null);
    }
  };

  // التعامل مع اختيار الطلاب
  const handleStudentSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setSelectedStudents(selectedOptions);
  };

  // إنشاء الكورس
  const handleSubmit = async () => {
    if (!courseTitle || !courseDescription || !coverImage || selectedStudents.length === 0) {
      setError("Please fill in all fields and select at least one student.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      const userRes = await axios.get("http://82.112.241.233:1400/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userId = userRes.data.id;

      // رفع صورة الغلاف
      const formData = new FormData();
      formData.append("files", coverImage);
      const uploadRes = await axios.post("http://82.112.241.233:1400/api/upload", formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });
      const coverImageId = uploadRes.data[0].id;

      // إنشاء الكورس
      const courseData = {
        data: {
          course_title: courseTitle,
          course_description: courseDescription,
          course_cover: coverImageId,
          users_permissions_user: userId,
          students: selectedStudents, // ربط الطلاب المختارين
        },
      };
      const courseRes = await axios.post("http://82.112.241.233:1400/api/courses", courseData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const courseId = courseRes.data.data.id;

      // إنشاء الشابترات
      for (const chapter of chapters) {
        const chapterData = {
          data: {
            chapter_title: chapter.title,
            download_link: chapter.link,
            course: courseId,
          },
        };
        await axios.post("http://82.112.241.233:1400/api/chapters", chapterData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      alert("Course and Chapters created successfully!");
      closeCourseCreationModal();
    } catch (err) {
      console.error("Error creating course:", JSON.stringify(err.response?.data, null, 2), err.message);
      if (err.response?.status === 401) {
        setError("Unauthorized: Please log in again.");
      } else if (err.response?.status === 400) {
        setError("Invalid data provided. Please check your inputs.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-blue-950 p-3 sm:h-[100vh] sm:overflow-hidden flex flex-col gap-3 absolute top-0 left-0 w-full">
      {/* حالة التحميل */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-solid"></div>
        </div>
      )}
      <div className="bg-gray-900 p-4 rounded-2xl text-white h-full overflow-hidden">
        {/* العنوان والأزرار */}
        <div className="p-2 flex justify-between">
          <h1 className="text-[26px] font-bold">Upload New Course</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 rounded-2xl hover:bg-green-700 transition-colors"
              disabled={isLoading}
            >
              Publish Course
            </button>
            <button
              onClick={closeCourseCreationModal}
              className="px-4 py-2 underline hover:text-gray-300 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
        {/* رسالة الخطأ */}
        {error && (
          <div className="p-2">
            <p className="text-red-400 text-center">{error}</p>
          </div>
        )}
        {/* نموذج إنشاء الكورس */}
        <div className="p-2 rounded-2xl">
          <form className="p-2 flex flex-col gap-4">
            <div className="p-1 flex gap-3">
              <div className="flex flex-col gap-2 w-[40%]">
                <label htmlFor="courseTitle" className="font-medium">
                  Course Title:
                </label>
                <input
                  type="text"
                  id="courseTitle"
                  className="border rounded p-2 border-blue-600 bg-gray-800 text-white"
                  placeholder="Enter Course Title"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                />
                <label htmlFor="description" className="font-medium">
                  Description:
                </label>
                <textarea
                  id="description"
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                  placeholder="Enter Description"
                  className="resize-none border rounded border-blue-600 bg-gray-800 text-white h-[20vh] p-2 overflow-auto"
                ></textarea>
                <label htmlFor="imgUpload" className="font-medium">
                  Choose Cover Image:
                </label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  id="imgUpload"
                  name="imgUpload"
                  accept="image/jpeg,image/png"
                  className="border rounded p-2 border-blue-600 bg-gray-800 text-white"
                />
                <label htmlFor="students" className="font-medium">
                  Select Students:
                </label>
                <select
                  id="students"
                  multiple
                  value={selectedStudents}
                  onChange={handleStudentSelection}
                  className="border rounded p-2 border-blue-600 bg-gray-800 text-white h-[15vh]"
                >
                  {myStudents.length > 0 ? (
                    myStudents.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.username || student.email || `Student ${student.id}`}
                      </option>
                    ))
                  ) : (
                    <option disabled>No students available</option>
                  )}
                </select>
              </div>
              <div className="p-2 grow overflow-hidden h-[50vh] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">Course Content:</h2>
                  <div
                    onClick={openNewChapterModal}
                    className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors"
                  >
                    <GoPlus />
                    <p>Add New Chapter</p>
                  </div>
                </div>
                {addNewChapter && <AddNewChapter onAdd={handleAddChapter} />}
                <div className="rounded-2xl p-4 h-[85%] flex flex-col gap-6 overflow-auto bg-blue-950">
                  {chapters.length === 0 ? (
                    <p className="text-gray-400">No chapters added yet. Click "Add New Chapter" to start.</p>
                  ) : (
                    chapters.map((chapter, index) => (
                      <SingleChapter
                        key={index}
                        index={index}
                        chapter={chapter}
                        onEdit={handleEditChapter}
                        onDelete={handleDeleteChapter}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}