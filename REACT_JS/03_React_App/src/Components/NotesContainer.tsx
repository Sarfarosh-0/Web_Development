import Emptynotes from "./EmptyNotes";
import Notebox from "./Notebox";
import type { Note } from "../App";

interface ContainerProps {
    openModal(): void;
    notes: Note[];
    searchTerm: string;
}

function NotesContainer({ openModal, notes, searchTerm }: ContainerProps) {

    const term = searchTerm.toLowerCase();
    const filterednNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(term) ||
        note.details.toLowerCase().includes(term)
    );

    return (
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-108 overflow-auto scrollbar-none bg-rose-50/20 border border-rose-100 rounded-2xl">
            {notes.length > 0 ? (
                filterednNotes.map((note) => (
                    <Notebox
                        key={note.id}
                        title={note.title}
                        details={note.details}
                        date={note.date}
                    />
                ))
            ) : (
                <Emptynotes openModal={openModal} />
            )}
        </div>
    );
}

export default NotesContainer;