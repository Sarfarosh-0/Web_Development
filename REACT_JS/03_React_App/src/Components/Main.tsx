import { useState } from "react";

import AddNote from "./AddNote";
import Header from "./Header";
import NotesContainer from "./NotesContainer";
import Searchbar from "./Searchbar";


export interface Note {
    id: string;
    title: string;
    details: string;
    date: string;
}

function Main() {
    const currentDate = new Date().toDateString();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDetails, setNoteDetails] = useState("");

    const [notes, setNotes] = useState<Note[]>(() => {
        const stored = localStorage.getItem("notes");
        return stored ? JSON.parse(stored) : [];
    });

    let allNotes: number = notes.length;

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

    return (
        <>
            <main className="px-3 min-h-screen bg-rose-50/30 flex flex-col gap-3 flex-1">
                <Header openModal={openModal} />
                <Searchbar />

                <NotesContainer openModal={openModal} notes={notes} />

                {isOpen && (
                    <AddNote
                        onClose={closeModal}
                        onSave={addNote}
                        noteTitle={noteTitle}
                        noteDetails={noteDetails}
                        date={currentDate}
                        setNoteTitle={setNoteTitle}
                        setNoteDetails={setNoteDetails}
                    />
                )}
            </main>
        </>
    );
}

export default Main;