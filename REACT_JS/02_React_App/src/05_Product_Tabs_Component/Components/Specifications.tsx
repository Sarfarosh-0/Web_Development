import ProductSpecifications from "./ProductSpecifications"
import specifications from "../Data/ProductDetails"

function Specifications() {
    return (

        <section id="specifications" className="w-5xl p-10 bg-white border-b border-slate-400 rounded-b-2xl shadow flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Specificatsions</h1>
            <p className="text-base text-slate-500">Detailed information about the products's features and techniacl specifications</p>

            <div className="max-h-80 overflow-y-auto py-2 pr-2 [scrollbar-color:#cbd5e1_transparent] scrollbar-thin [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5">
                <div className="flex flex-col">
                    {specifications.map((detail) => (
                        <ProductSpecifications
                            key={detail.id}
                            label={detail.label}
                            value={detail.value}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Specifications