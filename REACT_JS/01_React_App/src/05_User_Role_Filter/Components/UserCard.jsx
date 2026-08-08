function UserCard() {
    return (

        <div className="bg-slate-900 p-5 w-56 rounded-xl shadow-xl border border-slate-800 flex flex-col items-center gap-3 relative">

            <div className="relative">
                <span className="absolute top-1 left-32 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>

                <img
                    src="https://placehold.co/150x150"
                    alt="Sarah Johnson"
                    className="w-28 h-28 object-cover rounded-full border-2 border-slate-700"
                    />
            </div>

            <div className="text-center">
                <h2 className="text-xl font-bold text-white">Sarah Johnson</h2>
                <p className="text-indigo-400 text-sm font-semibold mt-0.5">Admin</p>
            </div>

            <div className="socials flex justify-center gap-4 mt-1">
                <button className="text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="Profile">
                    💠
                </button>
                <button className="text-2xl p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="Email">
                    📧
                </button>
            </div>
        </div>
    );
}

export default UserCard;