import { ModeToggle } from "@/components/mode-toogle";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
    return (
        <div>
            This is a protected route
            <UserButton afterSignOutUrl="/" />
            <ModeToggle />
        </div>
    );
};

export default Home;
