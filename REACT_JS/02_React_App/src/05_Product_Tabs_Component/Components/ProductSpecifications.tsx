import React from 'react';

interface ProductSpecificationsProps {
    label: string;
    value: string | React.ReactNode;
}

function ProductSpecifications({ label, value }: ProductSpecificationsProps) {
    return (
        <div className="flex w-full overflow-hidden rounded-lg border border-slate-300 text-base">
            <span className="w-48 shrink-0 bg-slate-50 p-3 font-bold text-slate-700 ">
                {label}
            </span>
            <span className="min-w-0 flex-1 border-l border-slate-300 bg-white p-3 text-slate-600">
                {value}
            </span>
        </div>
    );
}

export default ProductSpecifications;