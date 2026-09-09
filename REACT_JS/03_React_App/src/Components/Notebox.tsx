import { Trash2 } from "lucide-react";

interface NoteAttributes {
    title: string;
    details: string;
    date: string;
    onDelete?: () => void;
    isTrash?: boolean;
}

export default function Notebox({ title, details, date, onDelete }: NoteAttributes) {
    return (
        <div className="w-full max-h-72 p-6 bg-linear-to-b from-rose-50 to-purple-50 rounded-2xl border border-rose-200/80 shadow-sm flex flex-col justify-between group">

            <div className="pr-1 space-y-2 overflow-y-auto scrollbar-thumb-rose-300 scrollbar-thin">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                    {title}
                </h1>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {details}
                </p>
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-rose-200/40 mt-3">
                <span className="text-xs font-semibold text-rose-500/80">
                    {date}
                </span>

                <button
                    type="button"
                    onClick={onDelete}
                    aria-label="Delete note"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-100/70 active:scale-90 transition-all duration-150"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

        </div>
    );
}