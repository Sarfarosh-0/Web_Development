import { FilePlus2 } from "lucide-react";

interface ContainerProps {
    openModal(): void;
}

export default function Emptynotes({ openModal }: ContainerProps) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center min-h-96 rounded-xl border border-slate-200 bg-slate-50/50 text-center">

            <button
                onClick={openModal}
                className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 active:scale-90 flex items-center justify-center mb-3 transition-all ease-in-out duration-300">
                <FilePlus2 className="w-6 h-6" />
            </button>
            <h3 className="text-base font-semibold text-slate-800 mb-1">No notes yet</h3>
            <p className="text-sm text-slate-500 max-w-xs">
                Create notes to display...
            </p>
        </div>
    )
}