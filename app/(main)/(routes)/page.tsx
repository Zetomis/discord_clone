import { UserButton } from "@clerk/nextjs";

const Home = () => {
    return (
        <div>
            This is a protected route
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};

export default Home;
