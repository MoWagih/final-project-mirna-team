import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa"; // أيقونة رمزية للطالب

export default function TeacherStudents() {
  // الحالات الأساسية
  const [myStudents, setMyStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // دالة جلب بيانات الطلاب
  const fetchStudents = async () => {
    setIsLoading(true);
    setError(null); // إعادة تعيين الخطأ
    try {
      // التحقق من وجود التوكن
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to view students.");
        setIsLoading(false);
        return;
      }

      // جلب بيانات المعلم
      const userRes = await axios.get("http://82.112.241.233:1400/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const fetchedUserId = userRes.data.id;
      if (!fetchedUserId) {
        setError("User ID not found. Please log in again.");
        setIsLoading(false);
        return;
      }

      // جلب إدخال المعلم من TeacherStudents مع الطلاب
      const myStudentsRes = await axios.get(
        `http://82.112.241.233:1400/api/teacher-students?filters[teacher][id][$eq]=${fetchedUserId}&populate=students`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("My Students Raw Response:", myStudentsRes.data.data);

      // معالجة بيانات الطلاب
      let studentData = [];
      if (myStudentsRes.data.data.length > 0) {
        // نفترض إدخال واحد لكل معلم
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
      console.error("Error fetching students:", err.response?.data || err.message);
      if (err.response?.status === 401) {
        setError("Session expired. Please log in again.");
      } else {
        setError("Failed to load students. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // جلب البيانات عند تحميل الكومبوننت
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#1f032b] text-white">
      {/* العنوان الرئيسي */}
      <div className="flex items-center justify-between p-6">
        <h1 className="text-[#CCD6F6] text-3xl font-bold">My Students</h1>
      </div>

      {/* حالة التحميل */}
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-400 border-solid"></div>
          <p className="text-gray-400 mt-4">Loading students...</p>
        </div>
      ) : error ? (
        /* عرض رسالة الخطأ */
        <div className="p-4">
          <p className="text-red-400 text-center">{error}</p>
        </div>
      ) : (
        /* قائمة الطلاب */
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {myStudents.length > 0 ? (
              myStudents.map((student) => (
                <div
                  key={student?.id}
                  className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  {/* أيقونة رمزية للطالب */}
                  <div className="flex-shrink-0">
                    <FaUser className="text-[#CCD6F6] text-xl" />
                  </div>
                  {/* بيانات الطالب */}
                  <div className="flex-1">
                    <p className="text-white font-medium">
                      {student?.username || student?.email || `Student ${student?.id}` || "Unknown Student"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center">
                No students added yet.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}