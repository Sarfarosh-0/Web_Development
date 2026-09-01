import Emptynotes from "./EmptyNotes";
import Notebox from "./Notebox";

interface ContainerProps {
    openModal(): void;
    notes: number;
    notetitle: string;
    noteDetails: string;
    date: string;
}

function NotesContainer({ openModal, notes , notetitle, noteDetails , date }: ContainerProps) {
    return (
        <div className="grid grid-cols-3 gap-4 max-h-screen overflow-auto ">
            {notes > 0 ? (
                <>
                <Notebox title={notetitle} detail={noteDetails} date={date} />
                </>
            ) : (
                <Emptynotes openModal={openModal} />
            )}
        </div>
    );
}

export default NotesContainer;
