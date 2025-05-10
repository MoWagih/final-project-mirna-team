import { useState } from "react";
import { useModal } from "../../Pages/Store/Zustand";

export default function AddNewChapter({ onAdd }) {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const { closeNewChapterModal } = useModal();

    const handleSave = () => {
        if (!title || !link) {
            alert("Please fill all fields");
            return;
        }

        const newChapter = { title, link };
        onAdd(newChapter);
        closeNewChapterModal();
    };

    return (
        <div className="bg-[#00000097] bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-blue-950 p-6 rounded-xl w-[400px] flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Add New Chapter</h2>
                <input
                    type="text"
                    placeholder="Chapter Title"
                    className="border p-2 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Video Link"
                    className="border p-2 rounded"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <div className="flex justify-end gap-4">
                    <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                    <button onClick={closeNewChapterModal} className="text-white underline">Cancel</button>
                </div>
            </div>
        </div>
    );
}
