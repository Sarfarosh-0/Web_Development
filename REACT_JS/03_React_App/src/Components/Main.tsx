import { useState } from "react";

import AddNote from "./AddNote";
import Header from "./Header";
import NotesConatiner from "./NotesConatiner";
import Searchbar from "./Searchbar";

interface Note {
    id: string;
    text: string;
}

function Main() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [notes, setNotes] = useState<Note[]>(() => {
        const stored = localStorage.getItem("Notes");
        return stored ? JSON.parse(stored) : [];
    });

    const notesNo: number = 0;

    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);

    const handleAddNote = (newNote: Note): void => {
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        localStorage.setItem("transactions", JSON.stringify(updatedNotes));
        closeModal();
    };

    return (
        <main className="p-3 px-5 bg-gray-100 flex flex-col gap-3 flex-1">
            <Header openModal={openModal} />
            <Searchbar />
            <NotesConatiner openModal={openModal} notes={notesNo} />

            {isOpen && <AddNote onClose={closeModal} />}
        </main>
    );
}

export default Main;