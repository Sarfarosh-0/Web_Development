import Star from "./Star"

function UserReviewCard() {
    return (
        <div className="flex flex-col gap-3 border w-full border-slate-400 rounded-lg p-3 ">

            <div className="flex justify-between">
                <div className="ImageConatainer">
                    <img src="https://i.pinimg.com/1200x/8b/9d/a0/8b9da0971cc61c86a09205a19957d69f.jpg" alt="User Photo" className="w-16 h-16 rounded-full" />
                </div>
                <div className="flex justify-between items-center">
                    <div className="UserReviewDetails flex flex-col ">
                        <h1 className="font-bold text-lg">Mamta Bara</h1>
                        <p className="text-slate-400 text-sm">2 weeks ago</p>
                    </div>
                    <div className="flex gap-1">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            </div>

              <div className="review flex flex-col">
                <p className="reviewTitle font-bold text-base"> Excellent sound and comfort!</p>
                <p className="text-slate-700">
                    The sound quality is amaxing
                </p>
            </div>
        </div>

    )
}

export default UserReviewCard