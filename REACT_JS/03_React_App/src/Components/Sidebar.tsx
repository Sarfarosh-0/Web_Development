import { NotepadText, DatabaseX, Trash2 } from "lucide-react";

export type TabType = "all-notes" | "trash";

interface SidebarProps {
    allnotes: number;
    deletedNotesCount: number;
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
    clearAllData?: () => void;
}

function Sidebar({ allnotes, deletedNotesCount, activeTab, setActiveTab, clearAllData }: SidebarProps) {
    const NAV_ITEMS: { id: TabType; label: string; icon: typeof NotepadText; count: number }[] = [
        { id: "all-notes", label: "All Notes", icon: NotepadText, count: allnotes },
        { id: "trash", label: "Trash", icon: Trash2, count: deletedNotesCount },
    ];

    return (
        <aside className="w-64 h-150 bg-linear-to-b from-rose-50 to-purple-50 border-r border-rose-200/80 p-5 flex flex-col justify-between select-none">
            <div className="flex flex-col gap-4">

                <header className="flex items-center gap-3 border-b border-rose-200/60 pb-4">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3075/3075908.png"
                        alt="Logo"
                        className="w-9 h-9 object-contain"
                        draggable="false"
                    />
                    <div className="flex flex-col">
                        <h1 className="font-bold text-base text-slate-900 leading-tight">
                            My Notes
                        </h1>
                        <p className="text-xs text-slate-600">Write. Save. Remember.</p>
                    </div>
                </header>

                <nav className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;

                        return (
                            <button
                                type="button"
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full ${isActive
                                        ? "bg-rose-100/70 text-slate-900"
                                        : "text-slate-600 hover:bg-rose-100/40 hover:text-slate-900"
                                    }`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <Icon
                                        className={`w-4 h-4 ${isActive ? "text-rose-500" : "text-slate-500"
                                            }`}
                                    />
                                    <span>{item.label}</span>
                                </div>
                                <span
                                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${isActive
                                            ? "bg-rose-500 text-white"
                                            : "bg-rose-100/60 text-slate-600"
                                        }`}
                                >
                                    {item.count}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            <div className="flex flex-col gap-3">
                <button
                    type="button"
                    onClick={clearAllData}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-rose-600 bg-rose-100/50 hover:bg-rose-500 hover:text-white border border-rose-200/80 active:scale-95 transition-all duration-150 shadow-xs cursor-pointer group"
                >
                    <DatabaseX className="w-4 h-4 text-rose-500 group-hover:text-white transition-colors" />
                    <span>Clear All Data</span>
                </button>

                <div className="pt-3 border-t border-rose-200/60 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0">
                        SA
                    </div>
                    <div className="flex flex-col text-xs overflow-hidden">
                        <span className="font-semibold text-slate-800 truncate">
                            Sarfarosh Alam
                        </span>
                        <span className="text-slate-500 truncate">
                            sarfaroshalam51@gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;