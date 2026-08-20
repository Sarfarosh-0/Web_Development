import Navbar from "./Components/Navbar"
import Overview from "./Components/Overview"
import Review from "./Components/Review"
import Specifications from "./Components/Specifications"
import { useState } from "react";


function App() {
    const [selectedTab, setSelectedTab] = useState("overview");
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar selected={selectedTab} setSelected={setSelectedTab} />
            <main className="flex justify-center items-center transition-all duration-300 ease-in-out">
                {selectedTab === "overview" && <Overview />}
                {selectedTab === "specifications" && <Specifications />}
                {selectedTab === "reviews" && <Review />}
            </main>
        </div>
    )

}

export default App