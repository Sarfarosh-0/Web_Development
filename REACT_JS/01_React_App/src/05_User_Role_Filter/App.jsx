import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import UserGrid from "./Components/UserGrid";

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 ">
            <Header totalProduct={8} />
            <Navbar />
            <UserGrid />
        </div>
    );
}

export default App;