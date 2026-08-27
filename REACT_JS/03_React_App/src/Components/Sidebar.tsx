import { LayoutDashboard, NotepadText, Star, Trash2 } from "lucide-react";

function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-white border-r border-slate-200 p-5 flex flex-col justify-between">

            <div className="flex flex-col gap-6">
                <header className="flex items-center gap-3">
                    <img src="https://cdn-icons-png.flaticon.com/128/3075/3075908.png" alt="Logo" className="w-10 h-10 object-contain aspect-square" draggable="false" />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-lg text-slate-900 leading-tight">My Notes</h1>
                        <p className="text-xs text-slate-500">Write. Save. Remember.</p>
                    </div>
                </header>

                <nav className="flex flex-col gap-1.5">

                    <a href="#dashboard"
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium bg-violet-50 text-violet-600 transition-colors" >
                        <LayoutDashboard />
                        <span>Dashboard</span>
                    </a>
                    <a href="#all-notes"
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" >
                        <NotepadText />
                        <span>All Notes</span>
                    </a>
                    <a href="#all-notes"
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" >
                        <Star />
                        <span>Favorites</span>
                    </a>
                    <a href="#all-notes"
                        className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" >
                        <Trash2 />
                        <span>Trash</span>
                    </a>
                </nav>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-xs">
                    SA
                </div>
                <div className="flex flex-col text-xs overflow-hidden">
                    <span className="font-semibold text-slate-800 truncate">Sarfarosh Alam</span>
                    <span className="text-slate-400 truncate">sarfaroshalam51@gmail.com</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;