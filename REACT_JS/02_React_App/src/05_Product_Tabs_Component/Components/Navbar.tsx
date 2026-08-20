import { useState } from "react";

const navItems = [
    {
        id: "overview",
        label: "Overview",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
        ),
    },
    {
        id: "specifications",
        label: "Specifications",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: "reviews",
        label: "Reviews",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
    },
];

interface NavbarProps {
    selected: string;
    setSelected: (id: string) => void;
}

function Navbar({ selected, setSelected }: NavbarProps) {

    return (
        <nav className="flex justify-evenly items-center gap-8 p-5 mt-10 w-full max-w-5xl bg-white border-b border-gray-200 rounded-t-2xl">
            {navItems.map((item) => {
                const isActive = selected === item.id;

                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setSelected(item.id)}
                        className={`flex items-center gap-2 transition-colors cursor-pointer border-b-2 pb-1 -mb-5 ${isActive
                            ? "border-blue-600 text-blue-600 font-bold"
                            : "border-transparent text-gray-500 hover:text-blue-600"
                            }`}
                    >
                        <span className={isActive ? "text-blue-600" : "text-gray-500"}>
                            {item.icon}
                        </span>
                        <span className="text-lg">{item.label}</span>
                    </a>
                );
            })}
        </nav>
    );
}

export default Navbar;