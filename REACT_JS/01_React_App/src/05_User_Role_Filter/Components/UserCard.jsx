function UserCard({ image, name, status, role }) {
    return (
        <div className="bg-slate-900 p-5 w-56 rounded-xl shadow-xl border border-slate-800 flex flex-col items-center gap-3 relative">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-28 h-28 rounded-full border-2 border-slate-700 object-cover"
                />
                <span
                    className={`absolute bottom-1 right-1 w-4 h-4 border-2 border-slate-900 rounded-full ${status ? "bg-emerald-500" : "bg-rose-500"
                        }`}
                ></span>
            </div>

            <div className="text-center">
                <h2 className="text-xl font-bold text-white">{name}</h2>
                <p className="text-indigo-400 text-sm font-semibold mt-0.5">{role}</p>
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