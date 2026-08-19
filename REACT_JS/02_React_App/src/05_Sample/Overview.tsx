function Overview() {
    return (
        <section id="overview" className="w-5xl mt-10 p-10 bg-white border border-slate-400 rounded-2xl shadow flex gap-10">

            {/* Image Container */}
            <div className="productImage w-100 shrink-0 rounded-2xl">
                <img
                    src="https://i.pinimg.com/736x/5e/47/60/5e47603354dfce75434eeb6728d6ee48.jpg"
                    alt="Product"
                    className=" object-contain rounded-2xl"
                    draggable="false"
                />
            </div>

            {/* Details Container */}
            <div className="productDetails flex flex-col gap-5 h-fit flex-1">
                <h1 className="font-bold text-2xl">
                    Premium Wireless Headphones
                </h1>

                <p className="text-base text-slate-400">
                    Experience high-fidelity sound with advanced noise cancellation and all-day comfort. Built for music lovers and professionals alike.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-5 pt-5">
                    {/* Feature 1 */}
                    <div className="content flex gap-3 items-center">
                        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-base text-black font-medium">Bluetooth 5.3</p>
                            <p className="text-sm text-slate-400">Stable Connection</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="content flex gap-3 items-center">
                        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 6H3a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2zM23 10v4" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10h6v4H5z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-base text-black font-medium">40h Battery</p>
                            <p className="text-sm text-slate-400">Fast Charging</p>
                        </div>
                    </div>

                </div>

                <div className="buttons flex justify-evenly items-center pt-4">
                    {/* Add to Cart Button */}
                    <button className="flex items-center gap-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-90 transition-all ease-in-out duration-300 h-fit px-5 py-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        <span>Add to Cart</span>
                    </button>

                    {/* Wishlist Button */}
                    <button className="flex items-center gap-2 text-black font-bold border border-gray-300 rounded-lg hover:bg-gray-100 active:scale-90 transition-all ease-in-out duration-300 h-fit px-5 py-2">
                        <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                        </svg>
                        <span>Add to Wishlist</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Overview;