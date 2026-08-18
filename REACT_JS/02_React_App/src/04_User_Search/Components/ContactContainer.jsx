import Contact from "./Contact";
import contacts from "../Data/Contacts";

function ContactContainer() {
    return (
        <div className="px-6 py-2">
            <div>
                {/* Header */}
                <div className="flex justify-between items-center px-5 py-3 font-semibold text-slate-800 text-base">
                    <p>Name</p>
                    <p>Email</p>
                    <p></p>
                </div>

                {/* Scrollable list */}
                <div className="contactList flex flex-col gap-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400">
                    {contacts.map((contact) => (
                        <Contact
                            key={contact.id}
                            image={contact.image}
                            name={contact.name}
                            email={contact.email}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactContainer;