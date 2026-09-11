import { useState } from "react";

import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import ConfirmModal from "./Components/ConfirmModal";
import EmptyTrashCan from "./Components/EmptyTrash";

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

    function restoreNote(idToRestore: string) {
        const itemToRestore = deletedNotes.find((item) => item.id === idToRestore);
        if (!itemToRestore) return;
        const updatedNotesList = [...notes, itemToRestore];
        const updatedDeletedList = deletedNotes.filter((item) => item.id !== idToRestore);

        setNotes(updatedNotesList);
        setDeletedNotes(updatedDeletedList);

        localStorage.setItem("notes", JSON.stringify(updatedNotesList));
        localStorage.setItem("deletedNotes", JSON.stringify(updatedDeletedList));
    }

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isEmptyOpen, setIsEmptyOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function clearAllData() {
        localStorage.removeItem('notes');
        setNotes([]);
        setSearchTerm("");
    }

    function emptyTrash() {
        localStorage.removeItem('deletedNotes');
        setDeletedNotes([]);
        setSearchTerm("");
    }

    const allNotesCount: number = notes.length;
    const allDeletedNotesCount: number = deletedNotes.length;

    const openModal = (): void => setIsOpen(true);

    const closeModal = (): void => {
        setIsOpen(false);
        setNoteTitle("");
        setNoteDetails("");
    };

    return (
        <div className="flex min-h-screen w-full items-stretch bg-[#FFFBF8]">

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-[#2D1E18]/40 backdrop-blur-sm md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <Sidebar
                allnotes={allNotesCount}
                deletedNotesCount={allDeletedNotesCount}
                activeTab={activeTab}
                setActiveTab={(tab) => {
                    setActiveTab(tab);
                    setIsSidebarOpen(false);
                }}
                clearAllData={() => setIsConfirmOpen(true)}
                isSidebarOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <Main
                openModal={openModal}
                notes={sourceNotes}
                activeTab={activeTab}
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
                onOpenSidebar={() => setIsSidebarOpen(true)}
                restoreNote={restoreNote}
                isOpen={isOpen}
                isEmptyOpen={isEmptyOpen}
                onOpenEmptyTrash={() => setIsEmptyOpen(true)}
                onClose={() => setIsEmptyOpen(false)}
            />

            <ConfirmModal
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
                onConfirm={clearAllData}
                title="Clear all application data?"
                message="This will permanently delete all your active notes. This action cannot be undone."
                confirmText="Yes, Clear All"
            />

            <EmptyTrashCan
                isOpen={isEmptyOpen}
                onClose={() => setIsEmptyOpen(false)}
                onConfirm={emptyTrash}
                title="Empty Trash Can?"
                message="This will permanently delete all your deleted notes. This action cannot be undone."
                confirmText="Yes, Clear All"
            />

        </div>
    );
}

export default App;