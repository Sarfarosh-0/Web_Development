import { Plus } from 'lucide-react';

function Header() {
    return (
        <header className="w-full sticky top-0 right-0  px-5 py-2.5 border border-slate-300 rounded-lg flex justify-between items-center ">
            <div className='flex flex-col gap-px'>
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