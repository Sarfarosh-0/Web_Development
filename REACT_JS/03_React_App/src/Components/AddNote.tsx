import { X } from "lucide-react";

interface AddNoteProps {
    onClose: () => void;
    onSave: () => void;
    noteTitle: string;
    noteDetails: string;
    date: string;
    setNoteTitle: (value: string) => void;
    setNoteDetails: (value: string) => void;
}

function AddNote({ onClose, onSave, noteTitle, noteDetails, setNoteTitle, setNoteDetails }: AddNoteProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D1E18]/40 backdrop-blur-sm p-4">
            <div className="w-full max-w-xl bg-[#FAF2ED] rounded-xl shadow-xl border border-[#F3E1D5] flex flex-col p-6">

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F3E1D5]">
                    <h1 className="font-bold text-xl text-[#2D1E18]">Add New Note</h1>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-[#9E8C83] hover:text-[#F16B27] hover:bg-[#F6E3D8] p-1.5 active:scale-95 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Body */}
                <div className="flex flex-col gap-4 pt-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="noteTitle" className="text-sm font-semibold text-[#5C4D46]">
                            Title
                        </label>
                        <input
                            type="text"
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                            id="noteTitle"
                            className="w-full px-3.5 py-2 border bg-[#FFFBF8] border-[#F3E1D5] rounded-lg text-sm text-[#2D1E18] focus:outline-none focus:border-[#F16B27] focus:ring-2 focus:ring-[#FBE3D5] transition-all placeholder:text-[#9E8C83]"
                            placeholder="Enter note title..."
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="noteContent" className="text-sm font-semibold text-[#5C4D46]">
                            Content
                        </label>
                        <textarea
                            value={noteDetails}
                            onChange={(e) => setNoteDetails(e.target.value)}
                            id="noteContent"
                            rows={8}
                            className="w-full px-3.5 py-2 border bg-[#FFFBF8] border-[#F3E1D5] rounded-lg text-sm text-[#2D1E18] focus:outline-none focus:border-[#F16B27] focus:ring-2 focus:ring-[#FBE3D5] transition-all placeholder:text-[#9E8C83] resize-none"
                            placeholder="Write your note here..."
                            required
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-[#F3E1D5] mt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-[#5C4D46] hover:bg-[#F6E3D8] transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onSave();
                            }}
                            type="submit"
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-[#F16B27] text-white hover:bg-[#D95213] shadow-sm transition-colors"
                        >
                            Save Note
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AddNote;