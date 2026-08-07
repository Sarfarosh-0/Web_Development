function Counter() {
    return (
        <>
            <div className="w-fit rounded-lg border shadow-2xl bg-slate-100 flex flex-col gap-5 p-10
             justify-center  items-center">
                <div>
                    <h1 className="Header text-2xl font-bold text-center">Simple Counter</h1>
                    <p className=" text-slate-500 font-semibold"> Count between 0 to 10</p>
                </div>

                {/* counter */}
                <div className="rounded-full bg-blue-100 h-32  p-20 border border-slate-200 border-sa flex flex-col justify-center items-center">
                    <h1 className="text-5xl text-blue-600 font-bold ">0</h1>
                    <p className=" font-semibold text-slate-500">Current Count</p>
                </div>

                {/* Buttons */}
                <div className="buttons flex gap-5 items-center">
                    <button className=" border border-white rounded-lg text-white bg-indigo-500 py-2 px-4 active:scale-90">
                        - Decremnet
                    </button>
                    <button className=" border border-white rounded-lg text-white bg-indigo-500 py-2 px-4 active:scale-90">
                        Reset
                    </button>
                    <button className=" border border-white rounded-lg text-white bg-indigo-500 py-2 px-4 active:scale-90">
                        + Increment
                    </button>
                </div>

                {/* Limit */}

                <div className="bg-slate-300 text-black font-semibold text-lg  px-5 py-2 rounded-2xl">Min: 0 💠 Max:10</div>

            </div>

        </>
    )
}

export default Counter;