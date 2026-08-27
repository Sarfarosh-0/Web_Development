import { Plus } from 'lucide-react';

function Header() {
    return (
        <header className="w-full px-5 py-4 bg-white border border-slate-300 rounded-lg flex justify-between items-center shadow-sm">
            <div>
                <h1 className="font-bold text-lg text-slate-900">All Notes</h1>
                <p className="text-sm text-slate-500">Your thoughts organized</p>
            </div>

            <button className="bg-violet-600 hover:bg-violet-700 active:scale-95 transition-all duration-150 rounded-lg px-4 py-2 font-medium text-white flex items-center gap-2 shadow-sm">
                <Plus />
                <span>Add Note</span>
            </button>
        </header>
    );
}

export default Header;