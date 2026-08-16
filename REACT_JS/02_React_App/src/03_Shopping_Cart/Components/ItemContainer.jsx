import Item from "./Item";

function ItemContainer() {
    return (
        <section className="mx-3 my-4 p-4 py-6 bg-white border border-slate-200 rounded-2xl w-full max-w-3xl shadow-xs flex flex-col gap-4">

            {/* Table Headers */}
            <div className="text-xs font-bold text-black uppercase tracking-wider bg-slate-50/80 border border-slate-200 rounded-xl py-3 px-4 w-full grid grid-cols-8 gap-4 items-center">
                <span className="col-span-3">Item</span>
                <span className="col-span-1">Price</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-1 text-right">Total</span>
                <span className="col-span-1"></span>
            </div>

            {/* Scrollable Item List */}
            <div className="overflow-y-auto max-h-90 flex flex-col gap-2 pr-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

            {/* Footer Action */}
            <div className="pt-2 flex justify-start border-t border-slate-100">
                <button 
                    type="button"
                    className="px-4 py-2.5 border border-violet-200 text-violet-700 bg-violet-50 hover:bg-violet-100 rounded-xl font-medium flex items-center gap-2 text-sm active:scale-95 transition-all cursor-pointer"
                >
                    {/* Left Arrow SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                    Continue Shopping
                </button>
            </div>

        </section>
    );
}

export default ItemContainer;