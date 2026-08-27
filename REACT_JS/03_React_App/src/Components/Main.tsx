import AddNote from "./AddNote";
import Header from "./Header";
import NotesConatiner from "./NotesConatiner";
import Searchbar from "./Searchbar";

function Main() {
    return (
        <main className="p-3 px-5 bg-gray-100 flex flex-col gap-3 flex-1">
            <Header />
            <Searchbar />
            <NotesConatiner />
            <AddNote/>
        </main>
    )

}

export default Main;