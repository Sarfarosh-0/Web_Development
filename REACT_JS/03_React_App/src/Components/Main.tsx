import Header from "./Header";
import NotesConatiner from "./NotesConatiner";
import Searchbar from "./Searchbar";

function Main() {
    return (
        <main className="p-3 px-5 bg-white flex flex-col gap-3 flex-1">
            <Header />
            <Searchbar />
            <NotesConatiner />
        </main>
    )

}

export default Main;