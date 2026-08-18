import ContactContainer from "./Components/ContactContainer";
import Header from "./Components/Header";
import Input from "./Components/Input";

function App() {

    return (
        <div className="mx-32 my-4 py-3 rounded-2xl border border-slate-400 bg-white">
            <Header />
            <Input />
            <ContactContainer />
        </div>

    )
}

export default App;