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
    const [activeTab, setActiveTab] = useState<"all-notes" | "trash">("all-notes");

    const [notes, setNotes] = useState<Note[]>(() => {
        const stored = localStorage.getItem("notes");
        return stored ? JSON.parse(stored) : [];
    });

    const [deletedNotes, setDeletedNotes] = useState<Note[]>(() => {
        const deletedstored = localStorage.getItem("deletedNotes");
        return deletedstored ? JSON.parse(deletedstored) : [];
    });

    const sourceNotes = activeTab === "all-notes" ? notes : deletedNotes;

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

    const deleteNote = (idToDelete: string) => {
        if (activeTab === "all-notes") {
            const noteToDelete = notes.find((note) => note.id === idToDelete);
            if (!noteToDelete) return;

            const updatedDeletedNotes = [...deletedNotes, noteToDelete];
            setDeletedNotes(updatedDeletedNotes);
            localStorage.setItem("deletedNotes", JSON.stringify(updatedDeletedNotes));

            const updatedNotes = notes.filter((note) => note.id !== idToDelete);
            setNotes(updatedNotes);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
        } else {
            const updatedDeletedNotes = deletedNotes.filter((note) => note.id !== idToDelete);
            setDeletedNotes(updatedDeletedNotes);
            localStorage.setItem("deletedNotes", JSON.stringify(updatedDeletedNotes));
        }
    };

    const allNotesCount: number = notes.length;
    const allDeletedNotesCount: number = deletedNotes.length;

    const openModal = (): void => setIsOpen(true);

    const closeModal = (): void => {
        setIsOpen(false);
        setNoteTitle("");
        setNoteDetails("");
    };

    return (
        <div className="flex min-h-screen bg-rose-50/30">
            <Sidebar
                allnotes={allNotesCount}
                deletedNotesCount={allDeletedNotesCount}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <Main
                openModal={openModal}
                notes={sourceNotes}
                activeTab={activeTab}
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