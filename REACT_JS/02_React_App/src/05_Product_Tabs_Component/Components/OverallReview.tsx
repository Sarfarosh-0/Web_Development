import React from 'react';
import RatingRow from "./RatingRow";
import Star from "./Star";

const ratingBreakdown = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 0 },
];

function OverallReview() {
    return (
        <div className="flex w-full max-w-112.5 flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold text-slate-900">Customer Reviews</h2>
                <p className="text-base text-slate-500">
                    See what our customers are saying about these headphones.
                </p>
            </div>


            <div className="flex w-full items-center gap-6 rounded-2xl border border-slate-300 bg-slate-50 p-5 shadow-sm">
                <div className="flex shrink-0 flex-col items-center justify-center gap-1.5 pr-2">
                    <span className="text-5xl font-bold text-slate-900">4.5</span>
                    <div className="flex gap-1">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                        Based on 256 reviews
                    </span>
                </div>

                <div className="h-32 w-px self-stretch bg-slate-300" />

                <div className="flex flex-1 flex-col gap-2.5 min-w-0">
                    {ratingBreakdown.map((row) => (
                        <RatingRow
                            key={row.stars}
                            stars={row.stars}
                            percentage={row.percentage}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OverallReview;