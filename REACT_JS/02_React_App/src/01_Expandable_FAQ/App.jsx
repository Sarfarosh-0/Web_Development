import FAQ from "./FAQ.jsx";
import "../../src/index.css";
import Data from "./Data";

function App() {
    return (
        <>
            {Data.map((item) => {
                return (
                    <FAQ
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                );
            })}
        </>
    );
}

export default App;