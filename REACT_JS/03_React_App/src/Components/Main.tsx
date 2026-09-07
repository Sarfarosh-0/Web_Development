import AddNote from "./AddNote";
import Header from "./Header";
import NotesContainer from "./NotesContainer";
import Searchbar from "./Searchbar";
import type { Note } from "../App";

interface MainProps {
    openModal: () => void;
    notes: Note[];
    isOpen: boolean;
    closeModal: () => void;
    onSave: () => void;
    noteTitle: string;
    noteDetails: string;
    currentDate: string;
    setNoteTitle: (value: string) => void;
    setNoteDetails: (value: string) => void;
}

function Main({
    openModal,
    notes,
    isOpen,
    closeModal,
    onSave,
    noteTitle,
    noteDetails,
    currentDate,
    setNoteTitle,
    setNoteDetails,
}: MainProps) {
    return (
        <main className="px-4 py-3 min-h-screen bg-rose-50/30 flex flex-col gap-3 flex-1">
            <Header openModal={openModal} />
            <Searchbar />

            <NotesContainer openModal={openModal} notes={notes} />

            {isOpen && (
                <AddNote
                    onClose={closeModal}
                    onSave={onSave}
                    noteTitle={noteTitle}
                    noteDetails={noteDetails}
                    date={currentDate}
                    setNoteTitle={setNoteTitle}
                    setNoteDetails={setNoteDetails}
                />
            )}
        </main>
    );
}

export default Main;