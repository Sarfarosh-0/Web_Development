import React from 'react';
import Star from "./Star";

interface UserReviewCard {
    image: string;
    name: string;
    date: string;
    title: string;
    comment: string;
    rating: string;
}

function UserReviewCard({ image, name, date, title, comment, rating }:UserReviewCard) {
    return (
        <div className="flex w-full flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img
                        src={image}
                        alt={name}
                        className="h-12 w-12 rounded-full object-cover border border-slate-100"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-bold text-slate-900 text-base leading-snug">{name}</h3>
                        <p className="text-xs text-slate-500">{date}</p>
                    </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{comment}</p>
            </div>
        </div>
    );
}

export default UserReviewCard;