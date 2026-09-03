import Emptynotes from "./EmptyNotes";
import Notebox from "./Notebox";

interface ContainerProps {
    openModal(): void;
    notes: number;
    notetitle: string;
    noteDetails: string;
    date: string;
}

function NotesContainer({ openModal, notes }: ContainerProps) {
    return (
        <div className="grid grid-cols-3 gap-4 max-h-screen overflow-auto">
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