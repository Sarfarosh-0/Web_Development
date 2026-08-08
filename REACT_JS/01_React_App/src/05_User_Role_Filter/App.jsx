import UserCard from "./Components/UserCard";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 ">
            <Header totalProduct={8} />
            <Navbar />
            <div className="px-10">
                <UserCard />
            </div>
        </div>
    );
}

export default App;