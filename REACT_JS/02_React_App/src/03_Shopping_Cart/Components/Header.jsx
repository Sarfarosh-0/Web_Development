function Header({ totalItems }) {
    return (
        <header className="flex justify-between items-center border border-slate-200 bg-white m-4 px-6 py-4 shadow-md sticky top-0 z-10 rounded-2xl">

            {/* Title */}
            <div className="flex gap-4 items-center">
                <div className="p-3 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center">

                    {/* Shopping Cart Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-slate-800">My Shopping Cart</h1>
                    <p className="text-slate-500 text-sm">
                        Review your items and totals
                    </p>
                </div>
            </div>

            {/* Item Count Badge */}
            <div className="bg-violet-100 text-violet-800 rounded-2xl px-4 py-2 flex items-center justify-center gap-2 border border-violet-200">

                {/* Lock Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>

                <h2 className="text-lg font-semibold">
                    {totalItems ?? 0} {totalItems === 1 ? "Item" : "Items"}
                </h2>
            </div>
        </header>
    );
}

export default Header;