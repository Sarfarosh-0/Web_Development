function ProductCard({ name, price, inStock }) {
    return (
        <div className="bg-white p-3 w-fit rounded-lg shadow-md border border-slate-200 hover:scale-105 transition-all duration-500 ease-in-out">
            <img src="https://placehold.co/250x150" alt="Product" className="object-cover rounded-lg" />

            <div>
                <h2 className="text-xl font-bold text-slate-800 mt-2"> {name}</h2>
                <p className="text-blue-600 text-lg font-semibold mt-1"> $ {price}</p>

                <span className={`inline-block mt-3 px-4 py-2 rounded-full text-sm font-semibold" ${inStock? "bg-green-100 text-green-700" : "bg-rose-100 text-rose-700"}`}>
                    {inStock ? "🟢 In Stock" : "🔴 Out of Stock"}
                </span>
            </div>
        </div >
    );
}

export default ProductCard;