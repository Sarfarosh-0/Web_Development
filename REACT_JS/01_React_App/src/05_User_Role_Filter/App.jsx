import { useState } from "react";
import Header from "./Components/Header";
import UserGrid from "./Components/UserGrid";

function App() {
    const [category, setCategory] = useState("All");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">

            <Header
                totalUsers={32}
                category={category}
                setCategory={setCategory}
            />
            <UserGrid category={category} />
        </div>
    );
}

export default App;