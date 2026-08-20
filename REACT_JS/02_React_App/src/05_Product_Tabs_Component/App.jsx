import Navbar from "./Components/Navbar"
import Overview from "./Components/Overview"
import Specifications from "./Components/Specifications"

function App() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <main className="flex justify-center items-center">
                <Specifications />
            </main>
        </div>
    )

}

export default App