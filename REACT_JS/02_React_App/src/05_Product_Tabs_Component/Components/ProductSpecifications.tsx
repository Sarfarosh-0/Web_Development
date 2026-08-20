import React from 'react';

// You type the entire props object directly after the destructuring
function ProductSpecifications({
    specificationName,
    specificationDetails
}: {
    specificationName: string;
    specificationDetails: string;
}) {
    return (
        <div className="w-full p-3 flex">
            <span className="border border-slate-400 font-bold">
                {specificationName}
            </span>
            <span className="flex-1 border border-slate-400 text-slate-500">
                {specificationDetails}
            </span>
        </div>
    );
}

export default ProductSpecifications;
