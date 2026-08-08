function Header({ totalProduct }) {
    return (
        <header className="flex justify-between items-center border-b bg-slate-900 border-slate-800 text-slate-100 w-full px-4 py-2 shadow-xl sticky top-0 z-10">
            <div className="flex gap-4 items-center">
                <span className="text-4xl">🫂</span>
                <div>
                    <h1 className="text-2xl font-bold text-white">Team Roster</h1>
                    <p className="text-slate-400">
                        Browse and filter team members by role.
                    </p>
                </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-1 flex items-center gap-4">
                <span className="text-5xl">👥</span>
                <div>
                    <h2 className="text-3xl font-bold text-indigo-400">{totalProduct}</h2>
                    <p className="text-slate-400 text-sm font-semibold">Total Members</p>
                </div>
            </div>
        </header>
    );
}

export default Header;