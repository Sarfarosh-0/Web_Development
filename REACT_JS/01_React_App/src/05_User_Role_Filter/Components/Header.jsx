function Header({ totalProduct }) {
    return (
        <header className="flex justify-between items-center border-b bg-white border-slate-300 w-full px-4 py-2 shadow-xl sticky top-0 z-10">
            <div className="flex gap-4 items-center">
                <span className="text-4xl">🫂</span>
                <div>
                    <h1 className="text-2xl font-bold">Team Roster</h1>
                    <p className="text-slate-500 ">
                        Browse and filter team members by role.
                    </p>
                </div>
            </div>

            <div className="bg-indigo-200 rounded-xl px-4 py-1 flex items-center gap-4">
                <span className="text-5xl">👥</span>
                <div>
                    <h2 className="text-3xl font-bold text-center text-blue-600">{totalProduct}</h2>
                    <p className="text-slate-500 text-sm font-semibold">Total Members</p>
                </div>
            </div>
        </header>
    );
}

export default Header;