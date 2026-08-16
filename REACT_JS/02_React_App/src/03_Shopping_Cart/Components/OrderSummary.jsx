function OrderSummary() {
    return (
        <section className="OrderSummary border border-slate-200 bg-white shadow-sm rounded-2xl p-5 my-4 mx-3 flex flex-col gap-2 flex-1">
            <div className="Header flex gap-3 items-center justify-center mb-3">
                <div className="bg-violet-100 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-violet-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </div>
                <h1 className="text-xl font-bold text-black">Order Summary</h1>
            </div>

            <div className="bill flex flex-col gap-2">
                <p className="flex justify-between p-1">
                    <span className="font-semibold text-slate-500">• Subtotal (4 items)</span>
                    <span className="font-bold">$269.95</span>
                </p>
                <p className="flex justify-between p-1">
                    <span className="font-semibold text-slate-500">• Tax (18 %)</span>
                    <span className="font-bold">$21.60</span>
                </p>
                <p className="flex justify-between border-b border-slate-300 p-1 pb-5">
                    <span className="font-semibold text-slate-500 ">• Delivery Charges</span>
                    <span className="font-bold">$10.00</span>
                </p>

                <p className="flex justify-between p-2">
                    <span className="font-bold text-xl text-slate-700">Grand Total</span>
                    <span className="font-bold text-2xl text-violet-600">$301.55</span>
                </p>
            </div>

            <div className="bg-emerald-100 border-emerald-400 border rounded-xl w-full py-3 my-2 flex items-center justify-center gap-2 text-emerald-700">
                <svg className="w-5 h-5 text-emerald-700 shrink-0 hover:scale-110 transition-all duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.659A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <p className="font-semibold">You're saving <span className="font-bold">$15.15</span>!</p>
            </div>

            <button className="bg-violet-500 hover:bg-violet-600 rounded-xl w-full py-4 mb-3 flex items-center justify-center gap-2 text-white font-bold text-xl transition-all ease-in-out duration-200 active:scale-95 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Proceed to Checkout</span>
            </button>

            <div className="flex flex-col gap-2 m-auto ">

                <div className="flex gap-2.5 items-center font-semibold text-sm text-slate-500">
                    <svg className="w-5 h-5 text-violet-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714Z" />
                    </svg>
                    <p>100% Secure Checkout</p>
                </div>

                <div className="flex gap-2.5 items-center font-semibold text-sm text-slate-500">
                    <svg className="w-5 h-5 text-violet-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <p>30-Day Returns Available</p>
                </div>

                <div className="flex gap-2.5 items-center font-semibold text-sm text-slate-500">
                    <svg className="w-5 h-5 text-violet-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 18.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5h2.808c.553 0 1.026.386 1.139.927l.794 3.797M7.5 15h11.218c.504 0 .942-.338 1.061-.828l1.35-5.625A1.125 1.125 0 0 0 20.016 7.25H6.208" />
                    </svg>
                    <p>Free Shipping</p>
                </div>
            </div>
        </section>
    );
}

export default OrderSummary;