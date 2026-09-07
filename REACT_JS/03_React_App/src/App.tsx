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

    const [notes, setNotes] = useState<Note[]>(() => {
        const stored = localStorage.getItem("notes");
        return stored ? JSON.parse(stored) : [];
    });

    const allNotes: number = notes.length;

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

    const openModal = (): void => setIsOpen(true);

    const closeModal = (): void => {
        setIsOpen(false);
        setNoteTitle("");
        setNoteDetails("");
    };

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex min-h-screen bg-rose-50/30">
            <Sidebar allnotes={allNotes} />
            <Main
                openModal={openModal}
                notes={notes}
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
            />
        </div>
    );
}

export default App;