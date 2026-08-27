import { NotepadText, Star, Trash2 } from "lucide-react";

function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-slate-50 border-r border-slate-200 p-5 flex flex-col justify-between">

            <div className="flex flex-col">
                <header className="flex items-center gap-3 border-b border-slate-200 pt-2 pb-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/3075/3075908.png" alt="Logo" className="w-10 h-10 object-contain aspect-square" draggable="false" />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-lg text-slate-900 leading-tight">My Notes</h1>
                        <p className="text-xs text-slate-500">Write. Save. Remember.</p>
                    </div>
                    
                </header>

                <nav className="flex flex-col gap-1.5 py-4 border-b border-slate-200">

                    <a href="#all-notes"
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors" >
                        <div className="flex items-center gap-2">
                            <NotepadText className="w-4 h-4 text-slate-500" />
                            <span>All Notes</span>
                        </div>
                        <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full text-xs font-semibold">5</span>
                    </a>
                    <a href="#favorites"
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors" >
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-slate-500" />
                            <span>Favorites</span>
                        </div>
                        <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full text-xs font-semibold">2</span>
                    </a>
                    <a href="#trash"
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 transition-colors" >
                        <div className="flex items-center gap-2">
                            <Trash2 className="w-4 h-4 text-slate-500" />
                            <span>Trash</span>
                        </div>
                        <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full text-xs font-semibold">0</span>
                    </a>
                </nav>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                    SA
                </div>
                <div className="flex flex-col text-xs overflow-hidden">
                    <span className="font-semibold text-slate-800 truncate">Sarfarosh Alam</span>
                    <span className="text-slate-500 truncate">sarfaroshalam51@gmail.com</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;