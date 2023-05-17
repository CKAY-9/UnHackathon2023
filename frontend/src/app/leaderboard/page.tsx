import Client from "./client";
import Server from "./server";

const Leaderboard = () => {
    return (
        <>
            <title>Leaderboard</title>
            <Client>
                {/* @ts-expect-error Async Server Component */}
                <Server/>
            </Client>
        </>
    );
}

export default Leaderboard;