function Item() {
    return (
        <div className="itemCard py-3 px-4 bg-white w-fit hover:bg-gray-50/80 transition-all ease-in-out duration-300 flex justify-center gap-10 items-center rounded-xl border border-gray-200 shadow-sm">

            {/* Product Image */}
            <img
                src="https://i.pinimg.com/736x/88/40/c3/8840c3a4db6fc894291dd9b578450244.jpg"
                alt="Hoodie"
                className="w-20 h-20 object-cover rounded-lg border border-gray-200"
            />

            {/* Product Name & Category */}
            <div className="itemsDetails flex flex-col gap-1 w-32">
                <h1 className="font-semibold text-gray-900 text-base">Hoodie</h1>
                <h2 className="text-sm text-gray-500">Clothing</h2>
            </div>

            {/* Product Price */}
            <h1 className="Price font-semibold text-gray-600 text-base">$39.99</h1>

            {/* Product Quantity */}
            <div className="quantity px-2 py-1 flex items-center gap-3 bg-gray-100/80 rounded-lg border border-gray-200 text-gray-800 font-medium">
                {/* Minus SVG Button */}
                <button
                    aria-label="Decrease quantity"
                    className="p-1 rounded text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>

                <span className="text-sm min-w-[1rem] text-center select-none font-semibold text-gray-900">1</span>

                {/* Plus SVG Button */}
                <button
                    aria-label="Increase quantity"
                    className="p-1 rounded text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>

            {/* Total */}
            <h1 className="Price font-bold text-gray-900 text-lg">$39.99</h1>

            {/* Delete Button */}
            <button
                aria-label="Remove item"
                className="removeItem p-2 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
            </button>

        </div>
    )
}

export default Item;