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
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    setNoteTitle: (value: string) => void;
    setNoteDetails: (value: string) => void;
    deleteNote: (id: string) => void;
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
    searchTerm,
    setSearchTerm,
    deleteNote,
}: MainProps) {
    return (
        <main className="px-4 py-3 min-h-screen bg-rose-50/30 flex flex-col gap-3 flex-1">
            <Header openModal={openModal} />
            <Searchbar searchTerm={searchTerm} setSearch={setSearchTerm} />

            <NotesContainer
                openModal={openModal}
                notes={notes}
                searchTerm={searchTerm}
                deleteNote={deleteNote}
            />

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