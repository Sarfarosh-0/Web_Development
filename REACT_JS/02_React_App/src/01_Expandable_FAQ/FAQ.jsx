import { useState } from "react";

function FAQ({ question, answer }) {
    const [openClose, setOpenClose] = useState(false);

    return (
        <div className="w-1/2">
            <h1
                onClick={() => setOpenClose(!openClose)}
                className={`cursor-pointer text-2xl font-bold border-indigo-200 border bg-indigo-900 text-white p-5 flex justify-between items-center transition-all duration-300 ${
                    openClose ? "rounded-t-xl" : "rounded-xl shadow-md"
                }`}
            >
                <span>{question}</span>
                <svg 
                    xmlns="http://w3.org" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2.5} 
                    stroke="currentColor" 
                    className={`w-6 h-6 text-emerald-400 transition-transform duration-300 ${
                        openClose ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </h1>

            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden border-indigo-200 bg-emerald-50 rounded-b-xl ${
                    openClose 
                        ? "max-h-96 opacity-100 border-x border-b shadow-inner" 
                        : "max-h-0 opacity-0 border-x-0 border-b-0"
                }`}
            >
                <p className="text-xl text-indigo-950 font-medium p-5">
                    {answer}
                </p>
            </div>
        </div>
    );
}

export default FAQ;
