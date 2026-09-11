import { NotepadText, DatabaseX, Trash2, X } from "lucide-react";

export type TabType = "all-notes" | "trash";

interface SidebarProps {
    allnotes: number;
    deletedNotesCount: number;
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
    clearAllData?: () => void;
    isSidebarOpen: boolean;
    onClose: () => void;
}

function Sidebar({ allnotes, deletedNotesCount, activeTab, setActiveTab, clearAllData, isSidebarOpen, onClose }: SidebarProps) {
    const NAV_ITEMS: { id: TabType; label: string; icon: typeof NotepadText; count: number }[] = [
        { id: "all-notes", label: "All Notes", icon: NotepadText, count: allnotes },
        { id: "trash", label: "Trash", icon: Trash2, count: deletedNotesCount },
    ];

    return (
        <aside className={`
            fixed z-50 top-0 left-0 h-full w-64
            bg-[#F6ECE6]
            border-r border-[#F3E1D5] p-5
            flex flex-col justify-between select-none
            transition-transform duration-300
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0 md:h-screen md:shrink-0
        `}>
            <div className="flex flex-col gap-4">

                <header className="flex items-center gap-3 border-b border-[#F3E1D5] pb-4">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/3075/3075908.png"
                        alt="Logo"
                        className="w-9 h-9 object-contain"
                        draggable="false"
                    />
                    <div className="flex flex-col flex-1">
                        <h1 className="font-bold text-base text-[#2D1E18] leading-tight">
                            My Notes
                        </h1>
                        <p className="text-xs text-[#5C4D46]">Write. Save. Remember.</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="md:hidden text-[#9E8C83] hover:text-[#F16B27] p-1 rounded-lg hover:bg-[#F6E3D8] transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
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
                                    ? "bg-[#F6E3D8] text-[#2D1E18]"
                                    : "text-[#5C4D46] hover:bg-[#FAF2ED] hover:text-[#2D1E18]"
                                    }`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <Icon
                                        className={`w-4 h-4 ${isActive ? "text-[#F16B27]" : "text-[#9E8C83]"
                                            }`}
                                    />
                                    <span>{item.label}</span>
                                </div>
                                <span
                                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${isActive
                                        ? "bg-[#F16B27] text-white"
                                        : "bg-[#FBE3D5] text-[#D95213]"
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
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-[#FF8038] bg-[#FFFBF8] hover:bg-[#F16B27] hover:text-white border border-[#F6D3BE] active:scale-95 transition-all duration-150 shadow-xs cursor-pointer group"
                >
                    <DatabaseX className="w-4 h-4 text-[#FF8038] group-hover:text-white transition-colors" />
                    <span>Clear All Notes</span>
                </button>

                <div className="pt-3 border-t border-[#F3E1D5] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FBE3D5] text-[#D95213] flex items-center justify-center font-bold text-xs shrink-0">
                        SA
                    </div>
                    <div className="flex flex-col text-xs overflow-hidden">
                        <span className="font-semibold text-[#2D1E18] truncate">
                            Sarfarosh Alam
                        </span>
                        <span className="text-[#9E8C83] truncate">
                            sarfaroshalam51@gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;