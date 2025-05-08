import UploadedCourses from "../../Pages/Courses/UploadedCourses";
import AttendanceWidget from "../AttendanceWidget/AttendanceWidget";
import AnnouncementWidget from "../TeacherAnnouncement/AnnouncementWidget";


export default function DashboardTeacher() {
  return (
    <div className="bg-blue-950 p-3 sm:h-[100vh] sm:overflow-hidden flex flex-col gap-3">
        
        
        {/* Announcement */}
        <AnnouncementWidget />



        {/* Published Courses */}
        <div className="bg-gray-800 p-2 rounded-2xl">
            {/* Heading Title */}
            <div className="flex items-center justify-between p-2">
                <h1 className="font-medium text-lg text-white">Published Courses</h1>
                {/* Upload New Course */}
                <div>
                    <p className="text-[12px] text-white">See All</p>
                </div>
            </div>

            {/* Uploaded Courses */}
            <div className="overflow-auto flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:gap-6">
               <UploadedCourses />
               <UploadedCourses />
            </div>
        </div>

        {/* Attendance */}
       {/* <AttendanceWidget /> */}
       <AttendanceWidget />

        
    </div>
  )
}
