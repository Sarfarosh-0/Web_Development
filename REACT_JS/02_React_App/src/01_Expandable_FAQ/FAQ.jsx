import { useState } from "react";

function FAQ({ question, answer }) {

    const [openClose, setOpenClose] = useState(false);

    return (
        <>
            <h1 onClick={() => {
                setOpenClose(true)
            }}>
                {question}
            </h1>
            <p>{answer}</p>
        </>
    )
}

export default FAQ;