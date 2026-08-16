import Item from "./Item";

function ItemContainer() {
    return (
        <section className="m-5 p-2 bg-white border border-gray-200 rounded-xl w-full max-w-4xl shadow-sm flex flex-col">

            {/* Table Headers */}
            <div className="border-gray-200 text-sm font-bold text-black uppercase bg-gray-50 border-b grid grid-cols-6 items-center gap-4 py-3 px-6 ">
                <span className="col-span-1">Item</span>
                <span className="col-span-3"></span>
                <span className="col-span-2 text-center">Price</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-center">Total</span>
                <span className="col-span-1 text-right"></span>
            </div>

            {/* Scrollable Item List */}
            <div className="overflow-auto scrollbar-thin max-h-[550px] flex flex-col gap-3 pr-1">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

            {/* Footer Action */}
            <div className="pt-2">
                <button className="px-4 py-2.5 border border-violet-500 text-violet-600 bg-violet-50 hover:bg-violet-100 transition-colors rounded-lg font-semibold flex items-center gap-2 text-sm">
                    {/* Left Arrow SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Continue Shopping
                </button>
            </div>

        </section>
    );
}

export default ItemContainer;