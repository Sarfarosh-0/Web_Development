import Navbar from "./Components/Navbar"
import Overview from "./Components/Overview"

function App() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <main className="flex justify-center items-center">
                <Overview />
            </main>
        </div>
    )

}

export default App