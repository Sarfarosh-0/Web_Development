import Header from "./Components/Header";
import ItemContainer from "./Components/ItemContainer";
import OrderSummary from "./Components/OrderSummary";

function App() {
    return (
        <>
            <Header />
            <div className="flex gap-10 items-center">
                <ItemContainer />
                <OrderSummary />
            </div>
        </>
    )
}

export default App;