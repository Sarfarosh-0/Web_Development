import React from 'react';

function Input({ searchTerm, setSearchTerm }) {
    return (
        <div className="input border-t border-slate-300 px-6 py-4 flex items-center">
            <div className="relative w-full">
                {/* Search Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="#6B7280"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                        clipRule="evenodd"
                    />
                </svg>

                <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name or email..."
                    className="w-full rounded-lg font-semibold border-2 border-violet-300 pl-11 pr-5 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-slate-700"
                />
            </div>
        </div>
    );
}

export default Input;