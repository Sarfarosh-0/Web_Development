import Header from "./Components/Header";
import ItemContainer from "./Components/ItemContainer";
import OrderSummary from "./Components/OrderSummary";

function App() {
    return (
        <>
            <Header />
            <div className="flex gap-5 items-center select-none">
                <ItemContainer />
                <OrderSummary />
            </div>
        </>
    )
}

export default App;