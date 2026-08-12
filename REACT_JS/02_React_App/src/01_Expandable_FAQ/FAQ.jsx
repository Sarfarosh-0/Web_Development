import { useState } from "react";

function FAQ({ question, answer }) {
    const [openClose, setOpenClose] = useState(false);

    return (
        <>
            <h1
                onClick={() => {
                    setOpenClose(!openClose);
                }}
            >
                {question}
            </h1>

            {openClose && (
                <p>{answer}</p>
            )}
        </>
    );
}

export default FAQ;