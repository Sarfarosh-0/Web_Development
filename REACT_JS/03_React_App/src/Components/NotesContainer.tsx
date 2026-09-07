import Emptynotes from "./EmptyNotes";
import Notebox from "./Notebox";
import type { Note } from "./Main";

interface ContainerProps {
    openModal(): void;
    notes: Note[];
}

function NotesContainer({ openModal, notes }: ContainerProps) {
    return (
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-108 overflow-auto scrollbar-none bg-white rounded-2xl">
            {notes.length > 0 ? (
                notes.map((note) => (
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