import { X } from "lucide-react";

function AddNote() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">

            <div className="w-full max-w-xl h-135 bg-white rounded-xl shadow-xl border border-slate-100 flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl text-slate-900">Add New Note</h1>
                    <button className="text-slate-400 hover:text-red-600 hover:bg-red-100 p-1.5 active:scale-95 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="noteTitle" className="text-sm font-semibold text-slate-700">Title</label>
                        <input type="text" id="noteTitle" className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400" placeholder="Enter note title..." />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="noteContent" className="text-sm font-semibold text-slate-700">Content</label>
                        <textarea id="noteContent" rows={10} className="w-full px-3.5 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400 resize-none" placeholder="Write your note here..." />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="noteColor" className="text-sm font-semibold text-slate-700">Choose a color</label>
                        <div className="flex gap-2">
                            <div className="h-7 w-7 rounded-full bg-yellow-200"></div>
                            <div className="h-7 w-7 rounded-full bg-pink-200"></div>
                            <div className="h-7 w-7 rounded-full bg-violet-200"></div>
                            <div className="h-7 w-7 rounded-full bg-sky-200"></div>
                            <div className="h-7 w-7 rounded-full bg-green-200"></div>
                            <div className="h-7 w-7 rounded-full bg-orange-200"></div>
                        </div>
                    </div>



                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-colors"
                        >
                            Save Note
                        </button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default AddNote;