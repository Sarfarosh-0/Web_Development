import Contact from "./Contact";

function ContactContainer() {
    return (
        <div className="px-6 py-2">
            <div>
                {/* Header */}
                <div className="flex justify-between items-center px-4 pb-2 font-semibold text-slate-500 text-base">
                    <p>Name</p>
                    <p>Email</p>
                    <p></p>
                </div>

                {/* Scrollable list */}
                <div className="contactList flex flex-col gap-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400">
                    <Contact />
                    <Contact />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default ContactContainer;