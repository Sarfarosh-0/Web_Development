function Item() {
    return (
        <div className="itemCard py-3 px-3 bg-white hover:bg-gray-300 transition-all ease-in-out duration-300 flex justify-evenly items-center">

            {/* Product Image */}
            <img src="https://i.pinimg.com/736x/88/40/c3/8840c3a4db6fc894291dd9b578450244.jpg" alt="Item" className="w-28  h-28 p-2 rounded-xl" />

            {/* Product Name & Category */}
            <div className="itemsDetails flex flex-col gap=2">
                <h1 className="font-bold">Hoodie</h1>
                <h2 className="text-slate-500">Clothing</h2>
            </div>

            {/* Product Price */}
            <h1 className="Price font-bold text-xl">$39.99</h1>

            {/* Product Quantity */}
            <div className="quantity px-5 py-2 flex gap-2 bg-gray-200 rounded-xl  border border-slate-400">
                <span>-</span>
                <span>1</span>
                <span>+</span>
            </div>

            {/* Total */}
            <h1 className="Price font-bold text-xl">$39.99</h1>

            {/* Delete Button */}
            <button className="removeItem">
                <img src="" alt="" />
            </button>


        </div>
    )
}

export default Item;