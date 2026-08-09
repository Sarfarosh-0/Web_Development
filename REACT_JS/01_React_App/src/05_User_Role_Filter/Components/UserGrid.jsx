import UserCard from "./UserCard";
import users from "../data/Users";

function UserGrid({ category }) {

    const displayedUsers =
        category === "All"
            ? users
            : users.filter((user) => user.role === category);

    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-10">

            {displayedUsers.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    role={user.role}
                    image={user.image}
                    status={user.status}
                />
            ))}
        </main>
    );
}

export default UserGrid;
