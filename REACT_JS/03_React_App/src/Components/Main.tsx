import { useState } from "react";

import AddNote from "./AddNote";
import Header from "./Header";
import NotesConatiner from "./NotesConatiner";
import Searchbar from "./Searchbar";


interface note {
    id: string;
    title: string;
    details: string;
}

function Main() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDetails, setNoteDetails] = useState("");

    const [notes, setNotes] = useState<note[]>(() => {
        const stored = localStorage.getItem("notes");
        return stored ? JSON.parse(stored) : [];
    });

    const now = new Date();
    let date: string = now.toDateString();

    function addNote() {
        const newNote = {
            id: Date.now().toString(),
            title: noteTitle,
            details: noteDetails,
            date: date,
        };

        const updated = [...notes, newNote];
        setNotes(updated);

        localStorage.setItem(
            "notes",
            JSON.stringify(updated)
        );

        closeModal();
    }

    const notesNo = notes.length;

    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);

    return (
        <main className="p-3 px-5 bg-gray-100 flex flex-col gap-3 flex-1">
            <Header openModal={openModal} />
            <Searchbar />
            <NotesConatiner openModal={openModal} notes={notesNo} title={noteTitle} details={noteDetails} date={date} />
            {isOpen && (
                <AddNote
                    onClose={closeModal}
                    onSave={addNote}
                    noteTitle={noteTitle}
                    noteDetails={noteDetails}
                    date={date}
                    setNoteTitle={setNoteTitle}
                    setNoteDetails={setNoteDetails}
                />
            )}
        </main>
    );
}

export default Main;
