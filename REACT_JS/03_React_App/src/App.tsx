import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

function App() {
    return (
        <div className="flex">
            <Sidebar />
            <Main/>
        </div>
    )
}

export default App;