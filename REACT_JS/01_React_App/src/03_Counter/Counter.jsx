import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 10) {
            setCount((prev) => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="bg-white shadow-2xl rounded-3xl w-fit p-10 flex flex-col items-center gap-8">

            {/* Heading */}
            <div className="text-center">
                <h1 className="text-5xl font-bold text-slate-800">
                    Simple Counter
                </h1>
                <p className="text-slate-500 mt-2">
                    Count between 0 and 10
                </p>
            </div>

            {/* Counter */}
            <div className="w-52 h-52 rounded-full bg-blue-100 border border-blue-200 flex flex-col items-center justify-center shadow-inner">
                <h1 className="text-7xl font-bold text-blue-600">
                    {count}
                </h1>
                <p className="text-slate-500 font-medium mt-2">
                    Current Count
                </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">

                <button
                    onClick={decrement}
                    disabled={count === 0}
                    className={`px-6 py-3 rounded-xl font-semibold transition active:scale-95
                        ${count === 0
                            ? "bg-gray-400 cursor-not-allowed text-white"
                            : "bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                        }`}
                >
                    − Decrement
                </button>

                <button
                    onClick={reset}
                    className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition active:scale-95 cursor-pointer"
                >
                    Reset
                </button>

                <button
                    onClick={increment}
                    disabled={count === 10}
                    className={`px-6 py-3 rounded-xl font-semibold transition active:scale-95
                        ${count === 10
                            ? "bg-gray-400 cursor-not-allowed text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                        }`}
                >
                    + Increment
                </button>

            </div>

            {/* Limit Badge */}
            <div className="bg-slate-100 border border-slate-200 px-6 py-2 rounded-full text-slate-700 font-semibold">
                Min: <span className="text-red-500">0</span>
                <span className="mx-2">•</span>
                Max: <span className="text-green-600">10</span>
            </div>

            {/* Maximum Warning */}
            {count === 10 && (
                <div className="w-full bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4">
                    <div className="text-3xl">⚠️</div>
                    <div>
                        <h2 className="font-bold text-red-600">
                            Maximum limit reached!
                        </h2>
                        <p className="text-red-500 text-sm mt-1">
                            You can't increment beyond 10.
                        </p>
                    </div>
                </div>
            )}

            {/* Minimum Warning */}
            {count === 0 && (
                <div className="w-full bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex gap-4">
                    <div className="text-3xl">⚠️</div>
                    <div>
                        <h2 className="font-bold text-yellow-700">
                            Minimum limit reached!
                        </h2>
                        <p className="text-yellow-600 text-sm mt-1">
                            You can't decrement below 0.
                        </p>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Counter;