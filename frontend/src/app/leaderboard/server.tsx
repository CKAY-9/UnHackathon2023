import Header from "@/components/header/header";
import { fetchEntries } from "@/api/leaderboard";
import { LeaderboardEntries } from "./client";

const Server = async () => {
    const initialEntries = await fetchEntries(0);

    return (
        <>
            <Header></Header>
            <main className="container">
                <LeaderboardEntries entries={initialEntries.entries}></LeaderboardEntries>
            </main>
        </>
    );
}

export default Server;