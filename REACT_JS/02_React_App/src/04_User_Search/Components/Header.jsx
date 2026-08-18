function Header({ totalContacts }) {
    return (
        <header className="flex justify-between items-center border border-slate-200 bg-white mt-4 mx-32 px-6 py-4 shadow-md sticky top-0 z-10 rounded-t-2xl">

            {/* Title */}
            <div className="flex gap-4 items-center">
                <div className="p-3 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center">

                    {/* Contacts Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-slate-800">User Search</h1>
                    <p className="text-slate-500 text-sm">
                        Search contacts by name or email in real time
                    </p>
                </div>
            </div>

            {/* Contact Count Badge */}
            <div className="bg-violet-100 text-violet-800 rounded-2xl px-4 py-2 flex items-center justify-center gap-2 border border-violet-200">

                <h2 className="text-lg font-semibold">
                    {totalContacts ?? 0} {totalContacts === 1 ? "Item" : "Items"}
                </h2>
            </div>
        </header>
    );
}

export default Header;