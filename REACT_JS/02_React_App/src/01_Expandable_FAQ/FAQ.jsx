import { useState } from "react";

function FAQ({ question, answer }) {
    const [openClose, setOpenClose] = useState(false);

    return (
        <>
            <h1
                onClick={() => {
                    setOpenClose(!openClose);
                }}
                className="cursor-pointer text-3xl font-bold border-slate-400 border bg-gray-400 p-5 rounded-lg w-1/2 flex justify-between items-center"
            >
                <span>{question}</span>
                <span
                    className={`inline-block transition-transform duration-300 ${openClose ? 'rotate-180' : 'rotate-0'}`}
                >
                    ⬇️
                </span>

            </h1>

            {openClose && (
                <p className="mt-2 p-3 text-xl w-1/2">{answer}</p>
            )}
        </>
    );
}

export default FAQ;
