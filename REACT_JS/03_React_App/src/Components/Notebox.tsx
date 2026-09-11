import { Trash2, RotateCcw } from "lucide-react";

interface NoteAttributes {
    title: string;
    details: string;
    date: string;
    onDelete?: () => void;
    isTrash?: boolean;
    onRestore?: () => void;
}

export default function Notebox({ title, details, date, onDelete, isTrash, onRestore }: NoteAttributes) {
    return (
        <div className="w-full max-h-72 p-6 bg-[#FFFBF8] rounded-2xl border border-[#F3E1D5] shadow-sm flex flex-col justify-between group">
            <div className="pr-1 space-y-2 overflow-y-auto scrollbar-thumb-[#F6D3BE] scrollbar-thin">
                <h1 className="text-xl font-bold text-[#2D1E18] tracking-tight">
                    {title}
                </h1>
                <p className="text-sm text-[#5C4D46] leading-relaxed font-normal">
                    {details}
                </p>
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-[#F3E1D5] mt-3">
                <span className="text-xs font-semibold text-[#FF8038]">
                    {date}
                </span>

                <div className="flex items-center gap-1">
                    {isTrash && (
                        <button
                            type="button"
                            onClick={onRestore}
                            aria-label="Restore note"
                            className="p-1.5 rounded-lg text-[#9E8C83] hover:text-emerald-600 hover:bg-emerald-100/70 active:scale-90 transition-all duration-150 cursor-pointer"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={onDelete}
                        aria-label={isTrash ? "Delete permanently" : "Delete note"}
                        className="p-1.5 rounded-lg text-[#9E8C83] hover:text-[#D95213] hover:bg-[#FBE3D5] active:scale-90 transition-all duration-150 cursor-pointer"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}