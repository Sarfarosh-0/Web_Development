function Contact({ id, name, email, image }) {
    return (
        <div className="contactCard px-5 py-3 border rounded-lg border-slate-300 flex items-center justify-between gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200 ease-in-out cursor-pointer bg-white">
            <div className="flex gap-4 items-center">
                <img src={image} alt={name} className="rounded-full w-8 h-8 object-cover" />
                <p className="font-bold text-base text-slate-800 truncate">{name}</p>
            </div>

            <p className="font-semibold text-slate-400 text-sm truncate">{email}</p>

            {/* Email Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-slate-400" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
        </div>
    )
}

export default Contact;