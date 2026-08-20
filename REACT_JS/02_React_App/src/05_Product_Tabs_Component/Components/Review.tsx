import OverallReview from "./OverallReview"
import UserReview from "./UsersReview"

function Review() {
    return (
        <section id="review" className="w-5xl p-10 bg-white border-b border-slate-400 rounded-b-2xl shadow flex gap-10">
            <OverallReview />
            <UserReview />
        </section>
    )
}

export default Review