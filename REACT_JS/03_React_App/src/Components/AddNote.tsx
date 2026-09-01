import { X } from "lucide-react";

interface AddNoteProps {
    onClose: () => void;
    onSave: () => void;
    noteTitle: string;
    noteDetails: string;
    date: string;
    setNoteTitle: any;
    setNoteDetails: any;
}

function AddNote({ onClose, onSave, noteTitle, noteDetails, setNoteTitle, setNoteDetails }: AddNoteProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-xl bg-white rounded-xl shadow-xl border border-slate-100 flex flex-col p-6">

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <h1 className="font-bold text-xl text-slate-900">Add New Note</h1>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-slate-400 hover:text-red-600 hover:bg-red-50 p-1.5 active:scale-95 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Body */}
                <div className="flex flex-col gap-4 pt-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="noteTitle" className="text-sm font-semibold text-slate-700">
                            Title
                        </label>
                        <input
                            type="text"
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                            id="noteTitle"
                            className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400"
                            placeholder="Enter note title..."
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="noteContent" className="text-sm font-semibold text-slate-700">
                            Content
                        </label>
                        <textarea
                            value={noteDetails}
                            onChange={(e) => setNoteDetails(e.target.value)}
                            id="noteContent"
                            rows={8}
                            className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400 resize-none"
                            placeholder="Write your note here..."
                            required
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 mt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onSave();
                            }}
                            type="submit"
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-colors"
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
