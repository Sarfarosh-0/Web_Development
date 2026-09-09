import { useState } from "react";

import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

export interface Note {
    id: string;
    title: string;
    details: string;
    date: string;
}

function App() {
    const currentDate = new Date().toDateString();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDetails, setNoteDetails] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const [notes, setNotes] = useState<Note[]>(() => {
        const stored = localStorage.getItem("notes");
        return stored ? JSON.parse(stored) : [];
    });

    const allNotesCount: number = notes.length;

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.details.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function addNote() {
        if (!noteTitle.trim()) return;

        const newNote: Note = {
            id: Date.now().toString(),
            title: noteTitle.trim(),
            details: noteDetails.trim(),
            date: currentDate,
        };

        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        closeModal();
    }

    const [deletedNotes, setDeletedNotes] = useState<Note[]>(() => {
        const deletedstored = localStorage.getItem("deletedNotes");
        return deletedstored ? JSON.parse(deletedstored) : [];
    });

    function addDeletedNote(idToDelete: string) {
        const deletedNote = notes.filter((note) => note.id == idToDelete)
        const updatedDeletdNote = [...deletedNotes, deletedNote];
        setDeletedNotes(updatedDeletdNote);
        localStorage.setItem("deletedNotes", JSON.stringify(updatedDeletdNote));
    }

    const deleteNote = (idToDelete: string) => {
        addDeletedNote(idToDelete)
        const updatedNotes = notes.filter((note) => note.id !== idToDelete);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    const openModal = (): void => setIsOpen(true);

    const closeModal = (): void => {
        setIsOpen(false);
        setNoteTitle("");
        setNoteDetails("");
    };

    return (
        <div className="flex min-h-screen bg-rose-50/30">
            <Sidebar allnotes={allNotesCount} />
            <Main
                openModal={openModal}
                notes={filteredNotes}
                isOpen={isOpen}
                closeModal={closeModal}
                onSave={addNote}
                noteTitle={noteTitle}
                noteDetails={noteDetails}
                currentDate={currentDate}
                setNoteTitle={setNoteTitle}
                setNoteDetails={setNoteDetails}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                deleteNote={deleteNote}
            />
        </div>
    );
}

export default App;