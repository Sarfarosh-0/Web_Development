interface Noteattributes {
    title: string,
    details: string,
    date: string,
}


export default function Notebox({ title, details, date }: Noteattributes) {
    return (
        <div className="w-full max-w-sm h-72 p-6 bg-linear-to-b from-amber-50 to-amber-100 rounded-2xl border border-amber-300/70 shadow-sm flex flex-col justify-between">
            
            <div className="overflow-y-auto pr-1 space-y-2">
                <h1 className="text-xl font-bold text-amber-950 tracking-tight">
                    {title}
                </h1>
                <p className="text-sm text-amber-900/80 leading-relaxed font-normal">
                    {details}
                </p>
            </div>

            <div className="pt-3 text-xs font-semibold text-amber-800/60">
                {date}
            </div>

        </div>
    )
}