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
    const [selectedDate, setSelectedDate] = useState(currentDate);

    const [notes, setNotes] = useState<Note[]>(() => {
        const stored = localStorage.getItem("notes");
        return stored ? JSON.parse(stored) : [];
    });

    function addNote() {
        if (!noteTitle.trim()) return;

        const newNote: Note = {
            id: Date.now().toString(),
            title: noteTitle.trim(),
            details: noteDetails.trim(),
            date: selectedDate || currentDate,
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
        setSelectedDate(currentDate);
    };

    return (
        <main className="px-3 bg-gray-100 flex flex-col gap-3 flex-1">
            <Header openModal={openModal} />
            <Searchbar />

            <NotesContainer openModal={openModal} notes={notes} />

            {isOpen && (
                <AddNote
                    onClose={closeModal}
                    onSave={addNote}
                    noteTitle={noteTitle}
                    noteDetails={noteDetails}
                    date={selectedDate}
                    setNoteTitle={setNoteTitle}
                    setNoteDetails={setNoteDetails}
                    setSelectedDate={setSelectedDate}
                />
            )}
        </main>
    );
}

export default Main;