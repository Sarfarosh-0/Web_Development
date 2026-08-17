import { useState } from "react";

function Item({ id, image, name, category, quantity, price }) {
    const [quant, setquant] = useState(quantity);

    const handleDecrease = () => {
        setquant((prev) => Math.max(1, prev - 1));
    };

    const handleIncrease = () => {
        setquant((prev) => prev + 1);
    };

    return (
        <div className="hover:bg-slate-50/80 bg-white border-b border-slate-300 py-3 px-4 w-full grid grid-cols-8 gap-4 items-center shadow-xs transition-colors">
            {/* Product Image */}
            <img
                src={image}
                alt={name}
                draggable="false"
                className="w-16 h-16 object-cover rounded-lg border border-slate-200 col-span-1 shrink-0"
            />

            {/* Product Name & Category */}
            <div className="flex flex-col col-span-2 min-w-0">
                <span className="font-semibold text-slate-900 text-base truncate">{name}</span>
                <span className="mt-1 w-fit text-xs font-medium text-violet-700 bg-violet-100/70 px-2 py-0.5 rounded-full border border-violet-200/50">
                    {category}
                </span>
            </div>

            {/* Product Price */}
            <span className="font-medium text-slate-600 col-span-1 text-sm">${price}</span>

            {/* Product Quantity */}
            <div className="col-span-2 justify-self-center inline-flex items-center gap-3 px-2 py-1 bg-slate-100/80 rounded-lg border border-slate-200 text-slate-800 font-medium">
                <button
                    onClick={handleDecrease}
                    type="button"
                    aria-label="Decrease quantity"
                    className="p-1 rounded text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>

                <span className="text-sm min-w-4 text-center select-none font-semibold text-slate-900">{quant}</span>

                <button
                    onClick={handleIncrease}
                    type="button"
                    aria-label="Increase quantity"
                    className="p-1 rounded text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>

            {/* Total */}
            <span className="col-span-1 font-bold text-slate-900 text-base justify-self-end">
                ${(price * quant).toFixed(2)}
            </span>

            {/* Delete Button */}
            <button onClick={() => {
                setquant(0)
            }}
                type="button"
                aria-label="Remove item"
                className="col-span-1 justify-self-end p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors active:scale-95"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </div>
    );
}

export default Item;