import ProductSpecifications from "./ProductSpecifications"
import specifications from "../ProductDetails"

function Specifications() {
    return (

        <section id="specifications" className="w-5xl p-10 bg-white border-b border-slate-400 rounded-b-2xl shadow flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Specificatsions</h1>
            <p className="text-base text-slate-500">Detailed information about the products's features and techniacl specifications</p>
            <div className="flex flex-col items-center justify-center py-2 max-h-2xl overflow-y-auto scrollbar-thin">
                {
                    specifications.map((detail) => (
                        <ProductSpecifications
                            key={detail.id}
                            label={detail.label}
                            value={detail.value}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Specifications