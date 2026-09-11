import { Plus, Menu } from 'lucide-react';

interface HeaderProps {
    openModal: () => void;
    onOpenSidebar: () => void;
}

function Header({ openModal, onOpenSidebar }: HeaderProps) {
    return (
        <header className="w-full sticky top-0 z-10 right-0 px-5 py-2.5 border border-[#F3E1D5] bg-linear-to-b from-[#FFFBF8] to-[#FAF2ED] rounded-xl flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onOpenSidebar}
                    className="md:hidden text-[#5C4D46] hover:text-[#F16B27] hover:bg-[#F6E3D8] p-1.5 rounded-lg transition-colors"
                >
                    <Menu className="w-5 h-5" />
                </button>

                <div className="flex flex-col gap-px">
                    <h1 className="font-bold text-lg text-[#2D1E18]">All Notes</h1>
                    <p className="text-sm text-[#5C4D46]">Your thoughts organized</p>
                </div>
            </div>

            <button
                id="addNoteBtn"
                onClick={openModal}
                className="bg-[#F16B27] hover:bg-[#D95213] active:scale-95 transition-all duration-150 rounded-lg px-4 py-2 font-medium text-white flex items-center gap-2 shadow-sm"
            >
                <Plus />
                <span className="hidden sm:inline">Add Note</span>
            </button>
        </header>
    );
}

export default Header;