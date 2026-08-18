function Contact() {
    return (
        <div className="contactCard px-5 py-3 border border-slate-400 flex items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
                <img src="https://img.icons8.com/ios-filled/50/000000/bar-chart--v1.png" alt="Contact" className="rounded-full w-8 h-8 object-cover" />
                <p className="font-bold text-base text-slate-800">Mamta Bara</p>
            </div>

            <p className="font-semibold text-slate-400 text-sm">mbara21@gmail.com</p>

            {/* Email Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-slate-400" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
        </div>
    )
}

export default Contact;