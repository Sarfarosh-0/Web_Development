function RatingRow({ stars = 5, percentage = 100 }) {
    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    return (
        <div className="flex items-center gap-3 w-full text-sm">
            <div className="flex items-center justify-end gap-1 w-8 shrink-0">
                <span className="font-semibold text-slate-700">{stars}</span>
                <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>

            <div className="h-2.5 min-w-25 flex-1 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${clampedPercentage}%` }}>
                </div>
            </div>

            <span className="w-12 text-right font-medium text-slate-500 shrink-0">
                {clampedPercentage}%
            </span>
        </div>
    );
}

export default RatingRow;