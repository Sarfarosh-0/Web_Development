function Header({ totalProduct }) {
    return (
        <header className="flex justify-between items-center border-b border-slate-300 w-full px-4 py-2 shadow-xl">
            <div className="flex gap-4 items-center">
                <span className="text-4xl">👜</span>
                <div>
                    <h1 className="text-2xl font-bold">Product Inventory</h1>
                    <p className="text-slate-500 ">
                        Manage and view all available products in your inventory.
                    </p>
                </div>
            </div>

            <div className="bg-indigo-200 rounded-xl px-6 py-2 flex items-center gap-4">
                <span className="text-5xl">📦</span>
                <div>
                    <p className="text-slate-500 text-sm font-semibold">Total Products</p>
                    <h2 className="text-3xl font-bold text-center text-blue-600">{totalProduct}</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;