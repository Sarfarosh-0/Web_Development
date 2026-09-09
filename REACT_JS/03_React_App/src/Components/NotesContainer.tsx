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
}

function NotesContainer({ openModal, notes, searchTerm, deleteNote, activeTab }: ContainerProps) {
    const term = (searchTerm || "").toLowerCase();

    const filteredNotes = notes.filter((note) =>
        (note?.title ?? "").toLowerCase().includes(term) ||
        (note?.details ?? "").toLowerCase().includes(term)
    );

    const containerTitle = activeTab === "all-notes" ? "All Notes" : "Trash";

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
                    {containerTitle}
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-600 border border-rose-200/60">
                        {filteredNotes.length}
                    </span>
                </h1>
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