import ContactContainer from "./Components/ContactContainer";
import Header from "./Components/Header";
import Input from "./Components/Input";
import contacts from "./Data/Contacts";
import { useState } from "react";

function App() {
    const totalContacts = contacts.length;
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="mx-32 my-4 py-3 rounded-2xl border border-slate-400 bg-white">
            <Header totalContacts={totalContacts} />
            {/* Pass both state value and setter function */}
            <Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ContactContainer searchTerm={searchTerm} />
        </div>
    );
}

export default App;