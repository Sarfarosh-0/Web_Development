import { useState } from "react";

function Form() {

    const [name, setName] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-5">
            <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Single Controlled Input
                    </h1>

                    <p className="mt-2 text-sm md:text-base font-medium text-slate-500">
                        Type something in the input below to see the greeting
                        update in real time.
                    </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-slate-200"></div>

                {/* Input */}
                <form>
                    <label
                        htmlFor="userName"
                        className="block text-lg font-bold text-slate-700"
                    >
                        Your Name
                    </label>

                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setName(e.target.value);
                        }}

                        className="mt-3 w-full rounded-lg border border-slate-300 px-5 py-3 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    />
                </form>

                {/* Hello Message */}
                <div className="mt-6 flex items-center gap-4 rounded-xl bg-indigo-100 p-5">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-indigo-500 text-4xl">
                        😁
                    </span>

                    <h2 className="text-2xl font-bold text-slate-800 md:text-4xl">
                        Hello, <span className="text-indigo-500">{name || "Friend"}</span>!
                    </h2>
                </div>

                {/* Clear Button */}
                <div className="mt-6 flex justify-center">
                    <button
                        type="button"
                        onClick={() => {
                            setName("")
                        }}
                        className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-lg font-bold text-slate-700 transition hover:bg-slate-100"
                    >
                        <span>🗑️</span>
                        <span>Clear</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Form;