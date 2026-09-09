import Emptynotes from "./EmptyNotes";
import Notebox from "./Notebox";
import type { Note } from "../App";
import type { TabType } from "./Sidebar";

interface ContainerProps {
    openModal(): void;
    notes: Note[];
    searchTerm: string;
    deleteNote: (id: string) => void;
    activeTab: TabType;
    restoreNote: (id: string) => void;
}

function NotesContainer({ openModal, notes, searchTerm, deleteNote, activeTab, restoreNote }: ContainerProps) {
    const term = (searchTerm || "").toLowerCase();

    const filteredNotes = notes.filter((note) =>
        (note?.title ?? "").toLowerCase().includes(term) ||
        (note?.details ?? "").toLowerCase().includes(term)
    );

    const containerTitle = activeTab === "all-notes" ? "All Notes" : "Trash";

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 py-1">
                <div className="flex items-center gap-2.5">
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
                        {containerTitle}
                    </h1>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50/80 border border-sky-200/60 shadow-2xs backdrop-blur-xs">
                    <span className="text-base font-medium text-slate-500">Total Notes</span>
                    <span className="text-base font-bold text-sky-600 bg-sky-100/80 px-2 py-0.5 rounded-full">
                        {filteredNotes.length}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note) => (
                        <Notebox
                            key={note.id}
                            title={note.title}
                            details={note.details}
                            date={note.date}
                            onDelete={() => deleteNote(note.id)}
                            onRestore={() => restoreNote(note.id)}
                            isTrash={activeTab === "trash"}
                        />
                    ))
                ) : (
                    <div className="col-span-full flex justify-center items-center h-full">
                        <Emptynotes openModal={openModal} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default NotesContainer;