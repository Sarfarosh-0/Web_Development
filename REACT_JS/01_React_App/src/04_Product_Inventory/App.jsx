import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";

function App() {

    return (
        <div>
            <Header totalProduct={8} />
            <ProductCard />
            <Footer />
        </div>
    );
}

export default App;