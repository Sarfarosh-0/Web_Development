import { Search } from "lucide-react";

function Searchbar() {
    return (
        <div className="input flex items-center bg-white">
            <div className="relative w-full">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"/>
                <input
                    id="search"
                    type="text"
                    placeholder="Search notes..."
                    className="w-full rounded-lg font-semibold border-2  border-indigo-200 pl-11 pr-5 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-slate-700"
                />
            </div>
        </div>
    )
}

export default Searchbar;