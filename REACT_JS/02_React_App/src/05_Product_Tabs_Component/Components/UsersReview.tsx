import React from 'react';
import UserReviewCard from "./UserReviewCard";
import Review from '../Data/Reviews';

function UserReview() {
    return (
        <div className="flex max-h-96 w-full flex-col gap-3 overflow-y-auto py-2 pr-2 scrollbar-thin [scrollbar-color:#cbd5e1_transparent]">
            <UserReviewCard />
        </div>
    );
}

export default UserReview;