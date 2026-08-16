import Header from "./Components/Header";
import ItemContainer from "./Components/ItemContainer";
import OrderSummary from "./Components/OrderSummary";
import items from "./Data/cartItems"

function App() {

    return (
        <>
            <Header totalItems={items.length} />
            <div className="flex gap-5 items-center select-none">
                <ItemContainer />
                <OrderSummary />
            </div>
        </>
    )
}

export default App;