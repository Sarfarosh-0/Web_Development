import { FilePlus2 } from "lucide-react";

interface ContainerProps {
    openModal(): void;
}

export default function Emptynotes({ openModal }: ContainerProps) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center w-full min-h-96 rounded-2xl border border-[#F3E1D5] bg-linear-to-b from-[#FAF2ED] to-[#F6ECE6] text-center">

            <button
                onClick={openModal}
                className="w-12 h-12 rounded-full bg-[#FBE3D5] text-[#F16B27] hover:bg-[#F6E3D8] hover:scale-105 active:scale-90 flex items-center justify-center mb-3 transition-all ease-in-out duration-300"
            >
                <FilePlus2 className="w-6 h-6" />
            </button>
            <h3 className="text-base font-semibold text-[#2D1E18] mb-1">No notes yet</h3>
            <p className="text-sm text-[#5C4D46] max-w-xs">
                Create notes to display...
            </p>
        </div>
    );
}