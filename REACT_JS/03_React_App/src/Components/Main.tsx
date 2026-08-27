import Header from "./Header";
import Searchbar from "./Searchbar";

function Main() {
    return (
        <main className="p-3 bg-white flex flex-col gap-3 flex-1">
            <Header />
            <Searchbar />
        </main>
    )

}

export default Main;