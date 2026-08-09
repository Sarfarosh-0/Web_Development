function Navbar({ category, setCategory }) {
    return (
        <nav className="flex justify-start items-center gap-5 py-4 px-4 bg-slate-900">

            <button
                className={`rounded-lg py-2 px-4 font-medium border border-slate-700 transition-colors ${category === "All"
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                onClick={() => setCategory("All")}
            >
                All
            </button>

            <button
                className={`rounded-lg py-2 px-4 font-medium border border-slate-700 transition-colors ${category === "Admin"
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                onClick={() => setCategory("Admin")}
            >
                🛡️ Admin
            </button>

            <button
                className={`rounded-lg py-2 px-4 font-medium border border-slate-700 transition-colors ${category === "Developer"
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                onClick={() => setCategory("Developer")}
            >
                🧑‍💻 Developer
            </button>

            <button
                className={`rounded-lg py-2 px-4 font-medium border border-slate-700 transition-colors ${category === "Designer"
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                onClick={() => setCategory("Designer")}
            >
                🖌️ Designer
            </button>

        </nav>
    );
}

export default Navbar;