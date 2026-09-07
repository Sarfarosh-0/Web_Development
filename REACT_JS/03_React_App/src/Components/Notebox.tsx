interface NoteAttributes {
    title: string;
    details: string;
    date: string;
}

export default function Notebox({ title, details, date }: NoteAttributes) {
    return (
        <div className="w-full max-w-sm max-h-72 p-6 bg-linear-to-b from-rose-50 to-purple-50 rounded-2xl border border-rose-200/80 shadow-sm flex flex-col justify-between">

            <div className="pr-1 space-y-2 overflow-y-auto scrollbar-thumb-rose-300 scrollbar-thin">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                    {title}
                </h1>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {details}
                </p>
            </div>

            <div className="pt-3 text-xs font-semibold text-rose-500/80">
                {date}
            </div>

        </div>
    );
}