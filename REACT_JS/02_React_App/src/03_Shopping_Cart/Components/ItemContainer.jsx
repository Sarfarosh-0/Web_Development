import Item from "./Item";

function ItemContainer() {
    return (
        <section className="mx-2 my-4 p-2 bg-white border border-gray-200 rounded-xl w-full max-w-3xl shadow-sm flex flex-col items-center">

            {/* Table Headers */}
            <div className="border-gray-200 text-sm font-bold text-black uppercase bg-gray-50 rounded-2xl border-b py-5 px-4 w-full grid grid-cols-8 gap-4 items-center">

                <span className="col-span-1">Item</span>
                <span className="col-span-2"></span>
                <span className="col-span-1">Price</span>
                <span className="col-span-2">Quantity</span>
                <span className="col-span-1">Total</span>
                <span className="col-span-1 text-right"></span>
            </div>

            {/* Scrollable Item List */}
            <div className="overflow-auto scrollbar-thin max-h-135 flex flex-col ">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

            {/* Footer Action */}
            <div className="pt-2">
                <button className="px-4 py-2.5 border border-violet-500 text-violet-600 bg-violet-50 hover:bg-violet-100  rounded-lg font-semibold flex items-center gap-2 text-sm active:scale-90 transition-all ease-in-out duration-300">
                    {/* Left Arrow SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                    Continue Shopping
                </button>
            </div>

        </section>
    );
}

export default ItemContainer;