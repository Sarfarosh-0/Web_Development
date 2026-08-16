function OrderSummary() {
    return (
        <section className="OrderSummary w-1/3 border border-slate-300 bg-white p-4 rounded-2xl flex flex-col gap-2 shadow-sm">
            <div className="Header flex gap-3 items-center justify-start">
                <div className="bg-violet-100 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-violet-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </div>
                <h1 className="text-xl font-bold text-black">Order Summary</h1>
            </div>

            <div className="bill flex flex-col gap-3">
                <p className="flex justify-between p-1">
                    <span className="font-semibold text-slate-500">Subtotal (4 items)</span>
                    <span className="font-bold">$269.95</span>
                </p>
                <p className="flex justify-between p-1">
                    <span className="font-semibold text-slate-500">Tax (18 %)</span>
                    <span className="font-bold">$21.60</span>
                </p>
                <p className="flex justify-between p-1 border-b border-slate-400 pb-4">
                    <span className="font-semibold text-slate-500">Delivery Charges</span>
                    <span className="font-bold">$10.00</span>
                </p>

                <p className="flex justify-between p-1">
                    <span className="font-bold text-xl text-slate-700">Grand Total</span>
                    <span className="font-bold text-2xl text-violet-600">$301.55</span>
                </p>
            </div>

            <div className="bg-emerald-100 rounded-xl w-full py-3 my-3 flex items-center justify-center gap-2 text-emerald-700">
                <svg className="w-5 h-5 text-emerald-600 shrink-0 hover:scale-110 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.659A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <p className="font-semibold">You're saving <span className="font-bold">$15.15</span>!</p>
            </div>

        </section>
    );
}

export default OrderSummary;