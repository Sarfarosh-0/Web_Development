import { useState } from "react";

function ThemeCard() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <>
            <div className={`flex-col w-105 gap-10 rounded-2xl m-3 px-5 py-10 justify-center transition-all duration-500 ${isDarkMode ? "bg-slate-950" : "bg-gray-100"}`}>

                {/* Heading */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto transition-all duration-500 ${isDarkMode ? "bg-slate-800" : "bg-yellow-100"}`}>
                    {isDarkMode ? "🌙" : "☀️"}
                </div>


                {/* Mode Name */}
                <h1 className={`text-2xl font-bold text-center pt-5 ${isDarkMode ? "text-white" : "text-black"}`}>
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                </h1>

                {/* Description */}
                <p className={`mt-5  text-center transition-all duration-500 ${isDarkMode ? "text-slate-300" : "text-gray-600"}`}>
                    This is a simple example of toggling between Light and Dark Mode
                    using React state and Tailwind CSS.
                </p>

                {/* Features */}
                <div className={` p-2 flex flex-col gap-5 border rounded-2xl m-3 ${isDarkMode ? " bg-slate-800" : "bg-gray-100"}`}>
                    <div className="flex items-center gap-4">
                        <span className="text-3xl">⚡</span>
                        <div>
                            <h2 className="font-semibold text-lg">Fast & Simple</h2>
                            <p
                                className={
                                    isDarkMode ? "text-slate-400" : "text-gray-500"
                                }
                            >
                                Toggle themes instantly
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-3xl">🎨</span>
                        <div>
                            <h2 className="font-semibold text-lg">Pure State</h2>
                            <p
                                className={
                                    isDarkMode ? "text-slate-400" : "text-gray-500"
                                }
                            >
                                Managed with React useState
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-3xl">💨</span>
                        <div>
                            <h2 className="font-semibold text-lg">Tailwind CSS</h2>
                            <p
                                className={
                                    isDarkMode ? "text-slate-400" : "text-gray-500"
                                }
                            >
                                Dynamic utility classes
                            </p>
                        </div>
                    </div>
                </div>

                {/* Button */}

                <button  onClick={() => setIsDarkMode(!isDarkMode)} className={` w-full rounded-2xl py-2 font-bold text-white ${isDarkMode ? "bg-violet-700" : "bg-indigo-600 "} `}>
                                {isDarkMode ? "☀️ Switch to Light Mode" : "🌑 Switch to Dark Mode"}

                </button>


            </div >
        </>
    )


}

export default ThemeCard;