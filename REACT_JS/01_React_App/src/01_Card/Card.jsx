function Card(props) {
    return (
        <div className=" m-10 border w-fit bg-emerald-200 rounded-2xl p-5 flex flex-col justify-center items-center">
            <img src={props.src} alt="userPhoto" className="w-20 h-20 rounded-full object-cover" />
            <h1 className="text-2xl text-black font-bold">{props.name}</h1>
            <h2 className="text-lg text-blue-700">{props.role}</h2>
            <p className="text-gray-700">{props.location}</p>
        </div>
    );
}

export default Card;