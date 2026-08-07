import ProductCard from "./ProductCard"
import products from "../data/products";

function ProductGrid() {

    products.map((product) => (
        <ProductCard />
    ))
    return (
        <main className="grid grid-cols-4 grid-rows-2 gap-3 p-10">
            {products.map((product) => (
                <ProductCard
                 key={product.id}
                 name={product.name}
                 price={product.price}
                 inStock={product.inStock}
                  />
            ))}
        </main>
    )
}

export default ProductGrid