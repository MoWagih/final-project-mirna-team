import { useModal } from "../Store/Zustand"
import course1 from "../../assets/img/course1.png"
import teacher from "../../assets/img/teacher.png"


export default function SingleCourse({ course_title , course_cover , onClick }) {
  return (
    <div onClick={onClick} className="w-[35%] rounded-2xl bg-blue-950 flex flex-col gap-3 items-center justify-between p-4">
              <div className="relative w-full h-full">
                <img className="w-full h-40 rounded-2xl" src={course_cover} alt="" />
              </div>
              <div className="courseName flex w-full pl-1">
                <p className="text-amber-50">{course_title}</p>
              </div>
            </div>
  )
}
