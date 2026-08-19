import Contact from './Contact';
import contacts from '../Data/Contacts';

function ContactContainer({ searchTerm }) {
    const term = searchTerm.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
        contact.name?.toLowerCase().includes(term) ||
        contact.email?.toLowerCase().includes(term)
    );

    return (
        <div className="px-6 py-2">
            <div>
                {/* Table/List Header */}
                <div className="flex justify-between items-center px-5 py-3 font-semibold text-slate-800 text-base">
                    <p className="w-1/3 text-left">Name</p>
                    <p className="w-1/3 text-left">Email</p>
                    <p className="w-1/6 text-right" aria-hidden="true"></p>
                </div>

                {/* Scrollable List */}
                <div className="contactList flex flex-col gap-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400">
                    {filteredContacts.length > 0 ? (
                        filteredContacts.map((contact) => (
                            <Contact
                                key={contact.id}
                                image={contact.image}
                                name={contact.name}
                                email={contact.email}
                            />
                        ))
                    ) : (
                        <div className="py-8 text-center text-slate-500 text-sm">
                            No contacts found matching "{searchTerm}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactContainer;