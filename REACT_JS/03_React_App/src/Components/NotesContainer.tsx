import Emptynotes from "./EmptyNotes";
import Notebox from "./Notebox";
import type { Note } from "../App";
import type { TabType } from "./Sidebar";
import { BroomSparkles } from "lucide-react";

interface ContainerProps {
    openModal(): void;
    notes: Note[];
    searchTerm: string;
    deleteNote: (id: string) => void;
    activeTab: TabType;
    restoreNote: (id: string) => void;
    emptyTrash?: () => void;
    isOpen: boolean;
}

function NotesContainer({ openModal, notes, searchTerm, deleteNote, activeTab, restoreNote, emptyTrash }: ContainerProps) {
    const term = (searchTerm || "").toLowerCase();

    const filteredNotes = notes.filter((note) =>
        (note?.title ?? "").toLowerCase().includes(term) ||
        (note?.details ?? "").toLowerCase().includes(term)
    );

    const containerTitle = activeTab === "all-notes" ? "All Notes" : "Trash";
    const isTrash = activeTab === "trash";

    return (
        <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 py-1">
                <div className="flex items-center gap-2.5">
                    <h1 className="text-3xl font-bold text-[#2D1E18] tracking-tight">
                        {containerTitle}
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    {isTrash && filteredNotes.length > 0 && (
                        <button
                            type="button"
                            onClick={emptyTrash}
                            aria-label="Empty Trash"
                            title="Empty Trash"
                            className="flex items-center justify-center gap-2 px-2 py-1 rounded-lg text-xs font-semibold text-[#FF8038] bg-[#FFFBF8] hover:bg-[#F16B27] hover:text-white border border-[#F6D3BE] active:scale-95 transition-all duration-150 shadow-xs cursor-pointer group"
                        >
                            <BroomSparkles />
                            <span>Empty Trash</span>
                        </button>
                    )}

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6ECE6] border border-[#F3E1D5] shadow-2xs backdrop-blur-xs">
                        <span className="text-base font-medium text-[#5C4D46]">Total Notes</span>
                        <span className="text-base font-bold text-[#D95213] bg-[#FBE3D5] px-2 py-0.5 rounded-full">
                            {filteredNotes.length}
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1 content-start">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                        <Notebox
                            key={note.id}
                            title={note.title}
                            details={note.details}
                            date={note.date}
                            onDelete={() => deleteNote(note.id)}
                            onRestore={() => restoreNote(note.id)}
                            isTrash={isTrash}
                        />
                    ))
                ) : (
                    <div className="col-span-full flex justify-center items-center flex-1 min-h-72">
                        <Emptynotes openModal={openModal} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default NotesContainer;