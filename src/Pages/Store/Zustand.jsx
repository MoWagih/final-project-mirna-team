// Global State
import { create } from "zustand";
import Profile2 from "../../Components/Profile2/Profile2";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiContactsFill, RiMastercardLine } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Chats from "../../Components/Chats/Chats";
import Groups from "../../Components/Groups/Groups";
import Contacts from "../../Components/Contacts/Contacts";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login Page/Login";
import { MdDashboard, MdOutlineAssignment } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserCheck } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";
import { IoLibrary } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { PiStudent } from "react-icons/pi";



export const useModal = create((set) => ({
  modalStatus: false,
  openModal: () => set({ modalStatus: true }),
  closeModal: () => set({ modalStatus: false }),

  newExam: false,
  openNewExam: () => set({ newExam: true }),
  closeNewExam: () => set({ newExam: false }),

  classRoomLive: false,
  openLiveClassRoom: () => set({ classRoomLive: true }),
  closeLiveClassRoom: () => set({ classRoomLive: false }),

  newSessionModal: false,
  openNewSessionModal: () => set({ newSessionModal: true }),
  closeNewSessionModal: () => set({ newSessionModal: false }),

  courseDetails: false,
  openCourseDetails: () => set({ courseDetails: true }),
  closeCourseDetails: ()=> set({ courseDetails: false }), 

  courseCreation: false,
  openCourseCreationModal: () => set({ courseCreation: true }),
  closeCourseCreationModal: () => set({ courseCreation: false }),

  addNewChapter: false,
  openNewChapterModal: ()=> set({addNewChapter: true}),
  closeNewChapterModal: ()=> set({addNewChapter: false}), 

  addBook: false,
  openBookModal: ()=> set({ addBook: true }),
  closeBookModal: ()=> set({ addBook: false }),

  studentExamModal: false,
  openStudentExam: ()=>set({ studentExamModal: true }),
  closeStudentExam: ()=>set({ studentExamModal: false }),


}));

export const usePaths = create(() => ({
  paths: [
    { path: "profile2", icon: <CgProfile className="h-8 w-8 text-amber-50 " />, element: <Profile2 />},
    { path: "chats", icon: <PiChatTeardropTextFill className="h-8 w-8 text-amber-50 " />, element: <Chats />},
    { path: "groups", icon: <HiMiniUserGroup className="h-8 w-8 text-amber-50 " />, element: <Groups /> },
    { path: "contacts", icon: <RiContactsFill className="h-8 w-8 text-amber-50 " />, element: <Contacts /> },
    { path: "/", icon: <RiArrowGoBackFill className="h-8 w-8 text-amber-50 " />, element: <Dashboard />, },
    { path: "/login", icon: <RiLogoutCircleRLine className="h-8 w-8 text-amber-50 " />, element: <Login />,},
  ],
}))

export const useLinks = create(() => ({
  teacherLinks: [
    { name: "Dashboard", icon: MdDashboard, path: "/Teacher" },
    { name: "Courses", icon: GoStarFill, path: "/Teacher/courses" },
    { name: "Students", icon: PiStudent , path: "/Teacher/Students" },
    { name: "Calender", icon: SlCalender, path: "/Teacher/Calender" },
    { name: "Exams", icon: SiGoogleclassroom, path: "/Teacher/TeacherExams" },
    { name: "library", icon: IoLibrary, path: "/Teacher/library" },
    { name: "Classrooms", icon: SiGoogleclassroom, path: "/Teacher/TeacherClassroom" },
    { name: "integration", icon: RiMastercardLine, path: "/Teacher/integration" },

  ],

  studentLinks: [
    { name: "dashboard", icon: MdDashboard, path: "/Student" },
    { name: "courses", icon: GoStarFill, path: "/Student/courses" },
    { name: "Exams", icon: GoStarFill, path: "/Student/Exams" },
    { name: "library", icon: IoLibrary, path: "/Student/library" },
    { name: "calender", icon: SlCalender, path: "/Student/calender" },
    { name: "integration", icon: RiMastercardLine, path: "/Student/integration" },
  ],
  
}));