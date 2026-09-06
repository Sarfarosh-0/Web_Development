// ==========================================
// NotesContainer.tsx
// ==========================================
import Emptynotes from "./EmptyNotes";
import Notebox from "./Notebox";
import { Note } from "./Main";

interface ContainerProps {
    openModal(): void;
    notes: Note[];
}

function NotesContainer({ openModal, notes }: ContainerProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-auto scrollbar-none">
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