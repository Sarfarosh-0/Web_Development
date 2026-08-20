import Navbar from "./Components/Navbar"
import Overview from "./Components/Overview"
import Review from "./Components/Review"
import Specifications from "./Components/Specifications"

function App() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <main className="flex justify-center items-center">
                <Review />
            </main>
        </div>
    )

}

export default App