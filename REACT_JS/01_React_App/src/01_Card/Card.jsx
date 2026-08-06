function Card(props) {

    console.log(props.user.name);

    return (
        <div className=" m-10 border w-fit bg-emerald-200 rounded-2xl p-5 flex flex-col justify-center items-center">
            <img src={props.user.src} alt="userPhoto" className="w-20 h-20 rounded-full object-cover" />
            <h1 className="text-2xl text-black font-bold">{props.user.name}</h1>
            <h2 className="text-lg text-blue-700">{props.user.role}</h2>
            <p className="text-gray-700">{props.user.location}</p>
        </div>
    );
}

export default Card;