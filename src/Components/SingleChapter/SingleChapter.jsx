
export default function SingleChapter() {
  return (
    <div className="bg-blue-900 p-4 rounded-2xl flex items-center gap-3 justify-between">
         {/* Chapter Title */}
            <div className="flex items-center gap-3">
                <p>no.</p>
                <p>Chapter Title</p>
            </div>
                           
        {/* Chapter Actions */}
        <div className="flex gap-5">
            <button className="bg-blue-700 ps-2 pe-2 p-1 rounded-2xl">Edit</button>
            <button className="bg-blue-700 ps-2 pe-2 p-1 rounded-2xl">Delete</button>
        </div>
    </div>
  )
}
