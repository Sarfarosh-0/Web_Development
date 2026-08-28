import Emptynotes from "./EmptyNotes";

interface ContainerProps {
    openModal(): void;
    notes: number;
}

function NotesContainer({ openModal, notes }: ContainerProps) {
    return (
        <div className="grid grid-cols-3 gap-4 ">
            {notes > 0 ? (
                <h1>Hello I'm a Notes</h1>
            ) : (
                <Emptynotes openModal={openModal} />
            )}
        </div>
    );
}

export default NotesContainer;
