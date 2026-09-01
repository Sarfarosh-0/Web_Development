import Emptynotes from "./EmptyNotes";
import Notebox from "./Notebox";

interface ContainerProps {
    openModal(): void;
    notes: number;
}

function NotesContainer({ openModal, notes }: ContainerProps) {
    return (
        <div className="grid grid-cols-3 gap-4 max-h-screen overflow-auto ">
            {notes > 0 ? (
                <>
                <Notebox />
                <Notebox />
                <Notebox />
                <Notebox />
                <Notebox />
                <Notebox />
                <Notebox />
                <Notebox />
                </>
            ) : (
                <Emptynotes openModal={openModal} />
            )}
        </div>
    );
}

export default NotesContainer;
