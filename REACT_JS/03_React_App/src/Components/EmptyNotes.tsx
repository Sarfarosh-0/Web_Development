import { FilePlus2 } from "lucide-react";

interface ContainerProps {
    openModal(): void;
}

export default function Emptynotes({ openModal }: ContainerProps) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center w-full min-h-96 rounded-2xl border border-rose-200/80 bg-linear-to-b from-rose-50/50 to-purple-50/50 text-center">

            <button
                onClick={openModal}
                className="w-12 h-12 rounded-full bg-rose-100/80 text-rose-500 hover:bg-rose-100 hover:scale-105 active:scale-90 flex items-center justify-center mb-3 transition-all ease-in-out duration-300"
            >
                <FilePlus2 className="w-6 h-6" />
            </button>
            <h3 className="text-base font-semibold text-slate-900 mb-1">No notes yet</h3>
            <p className="text-sm text-slate-600 max-w-xs">
                Create notes to display...
            </p>
        </div>
    );
}