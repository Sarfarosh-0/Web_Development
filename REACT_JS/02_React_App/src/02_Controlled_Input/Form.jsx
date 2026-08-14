function Form() {
    return (
        <>
            <div className="rounded-xl w-1/2 h-100 flex flex-col justify-center p-10 m-5 border border-slate-400 bg-white shadow-2xl">
                <h1 className="text-4xl font-bold text-center">Single Controlled Input</h1>
                <h2 className="text-base font-semibold text-slate-500 mt-2 text-center">Type something in the input below to see the greeting update in real time.</h2>

                <div className="divider w-full h-px bg-slate-300 my-3"></div>


                <form>
                    <label htmlFor="UserName" className="text-lg font-bold text-start">Your Name</label>
                    <input type="text" name="userName" id="userName" placeholder="Enter your name..." className="border border-slate-300 rounded-lg px-5 py-2 w-full my-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none" />
                </form>

                <div className="flex gap-10 p-5 bg-indigo-300 rounded-xl w-full">
                    <span className="text-5xl p-2 bg-indigo-500 rounded-xl">😁</span>
                    <h1 className="text-black  text-5xl">
                        Hello, <span className="text-indigo-500">Friend</span> !
                    </h1>
                </div>

                <button className="py-2 px-4 border flex gap-3 w-fit rounded-xl text-xl font-bold my-3">
                    <span>🗑️</span>
                    <span>Clear</span>
                </button>
            </div>


        </>

    )

}

export default Form;