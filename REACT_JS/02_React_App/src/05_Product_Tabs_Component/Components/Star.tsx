import React from 'react';

function Star({ filled = true }) {
    return (
        <svg
            className={`w-4 h-4 ${filled ? 'text-amber-400 fill-current' : 'text-slate-200 fill-current'}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

export default Star;