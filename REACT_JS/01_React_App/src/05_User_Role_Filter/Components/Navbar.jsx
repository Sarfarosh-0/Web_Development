function Navbar() {
    return (
        <nav className="flex justify-start items-center gap-5 py-4 px-4 bg-slate-900 ">
            <button className="rounded-lg py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors">
                All
            </button>
            <button className="rounded-lg py-2 px-4 border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                🛡️ Admin
            </button>
            <button className="rounded-lg py-2 px-4 border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                🧑‍💻 Developer
            </button>
            <button className="rounded-lg py-2 px-4 border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                🖌️ Designer
            </button>
        </nav>
    );
}

export default Navbar;