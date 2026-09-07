import { Search } from "lucide-react";

function Searchbar() {
    return (
        <div className="input flex items-center bg-transparent">
            <div className="relative w-full">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                <input
                    id="search"
                    type="text"
                    placeholder="Search notes..."
                    className="w-full rounded-xl font-medium border border-rose-200/80 bg-linear-to-b from-rose-50 to-purple-50 pl-11 pr-5 py-3 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100 text-slate-800 placeholder:text-slate-400 shadow-xs"
                />
            </div>
        </div>
    );
}

export default Searchbar;