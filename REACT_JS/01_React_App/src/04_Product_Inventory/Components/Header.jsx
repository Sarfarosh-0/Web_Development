function Header({ totalProduct }) {
    return (
        <header className="flex justify-between items-center border-b border-slate-300 w-full">
            <div>
                <h1 className="text-5xl font-bold">Product Inventory</h1>
                <p className="text-slate-500 mt-2">
                    Manage and view all available products in your inventory.
                </p>
            </div>

            <div className="bg-indigo-200 rounded-xl px-6 py-2 flex m-2 items-center gap-4">
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