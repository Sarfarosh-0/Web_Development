import ContactContainer from "./Components/ContactContainer";
import Header from "./Components/Header";
import Input from "./Components/Input";
import contacts from "./Data/Contacts";

function App() {
    const totalContacts = contacts.length;
    return (
        <div className="mx-32 my-4 py-3 rounded-2xl border border-slate-400 bg-white">
            <Header totalContacts={totalContacts} />
            <Input />
            <ContactContainer />
        </div>

    )
}

export default App;