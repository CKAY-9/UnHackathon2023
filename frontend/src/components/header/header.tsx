import Link from "next/link";
import style from "./header.module.scss";

const Header = () => {
    return (
        <header className={style.header}>
            <section id="left">
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/learn">Learn</Link>
                    <Link href="/test">Tests</Link>
                    <Link href="/leaderboard">Leaderboard</Link>
                    <Link href="/about">About</Link>
                </nav>
            </section>
            <section id="right">
                <h1>#UnHackathon 2023 | Knowledge Cleanse</h1>
            </section>
        </header>
    );
}

export default Header;