import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";
import ProductGrid from "./Components/ProductGrid";

function App() {

    return (
        <div>
            <Header totalProduct={8} />
            <ProductGrid />
            <Footer />
        </div>
    );
}

export default App;