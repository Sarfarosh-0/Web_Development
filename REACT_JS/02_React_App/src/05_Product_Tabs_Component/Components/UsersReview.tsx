import React from 'react';
import UserReviewCard from "./UserReviewCard";
import Reviews from '../Data/Reviews';

function UserReview() {
    return (
        <div className="flex max-h-96 w-full flex-col gap-3 overflow-y-auto py-2 pr-2 scrollbar-thin [scrollbar-color:#cbd5e1_transparent]">
            {Reviews.map((review) => (
                <UserReviewCard
                    key={review.id}
                    image={review.image}
                    name={review.name}
                    date={review.date}
                    title={review.title}
                    comment={review.comment}
                    rating={review.rating}
                />
            ))}
        </div>
    );
}

export default UserReview;