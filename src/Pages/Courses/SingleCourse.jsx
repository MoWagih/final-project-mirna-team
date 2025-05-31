


export default function SingleCourse({ course_title , course_cover , onClick }) {
  return (
    <div onClick={onClick} style={{ backgroundImage: `url(${course_cover})`}}  className="w-[200px] h-[260px] relative rounded bg-[#5d1c9f]  flex  p-2 shadow-lg bg-cover">

      <div className="absolute bg-[#15041a76] w-full h-full top-0 left-0 flex items-center justify-center">
          <p className="text-amber-50 text-[24px]">{course_title}</p>
      </div>
               
    </div>
  )
}
