import { useState } from "react";

import AddNote from "./AddNote";
import Header from "./Header";
import NotesConatiner from "./NotesConatiner";
import Searchbar from "./Searchbar";

function Main() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const notes:number = 0;

    const openModal = (): void => setIsOpen(true);
    const closeModal = (): void => setIsOpen(false);

    return (
        <main className="p-3 px-5 bg-gray-100 flex flex-col gap-3 flex-1">
            <Header openModal={openModal} />
            <Searchbar />
            <NotesConatiner openModal={openModal} notes={notes} />

            {isOpen && <AddNote onClose={closeModal} />}
        </main>
    );
}

export default Main;