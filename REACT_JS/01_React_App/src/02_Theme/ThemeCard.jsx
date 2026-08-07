import { useState } from "react";

function ThemeCard() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div
            className={`flex flex-col max-w-md w-full gap-6 rounded-2xl m-3 p-6 transition-colors duration-500 shadow-xl ${isDarkMode ? "bg-slate-950 border border-slate-800" : "bg-gray-100 border border-gray-200"
                }`}
        >
            {/* Icon Heading */}
            <div
                className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto transition-all duration-500 ${isDarkMode ? "bg-slate-800" : "bg-yellow-100"
                    }`}
            >
                {isDarkMode ? "🌙" : "☀️"}
            </div>

            {/* Mode Name */}
            <h1
                className={`text-2xl font-bold text-center transition-colors duration-500 ${isDarkMode ? "text-white" : "text-gray-900"
                    }`}
            >
                {isDarkMode ? "Dark Mode" : "Light Mode"}
            </h1>

            {/* Description */}
            <p
                className={`text-center transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-gray-600"
                    }`}
            >
                This is a simple example of toggling between Light and Dark Mode using
                React state and Tailwind CSS.
            </p>

            {/* Features Box */}
            <div
                className={`p-4 flex flex-col gap-4 border rounded-2xl transition-colors duration-500 ${isDarkMode
                        ? "bg-slate-900/60 border-slate-800"
                        : "bg-white border-gray-200"
                    }`}
            >
                <div className="flex items-center gap-4">
                    <span className="text-3xl">⚡</span>
                    <div>
                        <h2
                            className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Fast & Simple
                        </h2>
                        <p className={isDarkMode ? "text-slate-400" : "text-gray-500"}>
                            Toggle themes instantly
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-3xl">🎨</span>
                    <div>
                        <h2
                            className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Pure State
                        </h2>
                        <p className={isDarkMode ? "text-slate-400" : "text-gray-500"}>
                            Managed with React useState
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-3xl">💨</span>
                    <div>
                        <h2
                            className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Tailwind CSS
                        </h2>
                        <p className={isDarkMode ? "text-slate-400" : "text-gray-500"}>
                            Dynamic utility classes
                        </p>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-full rounded-2xl py-3 font-bold text-white transition-all cursor-pointer ${isDarkMode
                        ? "bg-violet-700 hover:bg-violet-600"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
            >
                {isDarkMode ? "☀️ Switch to Light Mode" : "🌑 Switch to Dark Mode"}
            </button>
        </div>
    );
}

export default ThemeCard;