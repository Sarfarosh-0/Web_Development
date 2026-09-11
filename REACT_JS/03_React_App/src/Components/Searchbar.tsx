import { Search } from "lucide-react";

interface SearchbarProps {
    searchTerm: string;
    setSearch: (value: string) => void;
}

function Searchbar({ searchTerm, setSearch }: SearchbarProps) {
    return (
        <div className="input flex items-center bg-transparent">
            <div className="relative w-full">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#9E8C83]" />
                <input
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search notes..."
                    className="w-full rounded-xl font-medium border border-[#F3E1D5] bg-linear-to-b from-[#FFFBF8] to-[#FAF2ED] pl-11 pr-5 py-3 outline-none transition focus:border-[#F16B27] focus:ring-2 focus:ring-[#FBE3D5] text-[#2D1E18] placeholder:text-[#9E8C83] shadow-xs"
                />
            </div>
        </div>
    );
}

export default Searchbar;