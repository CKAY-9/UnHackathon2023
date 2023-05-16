import Header from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";
import style from "./about.module.scss";

const About = () => {
    return (
        <>
            <title>About</title>
            <Header></Header>
            <main className="container">
                <h1>About Knowledge Cleanse</h1>
                <span>NOTE: this contains no information about misinformation and is just for background information!</span>
                <br />
                <p>
                    Knowledge Cleanse is a submission to <Link href="https://knowledgeflow.org/initiative/unhackathon/" target="_blank">#UnHackathon 2023</Link>.
                    The overall design of Knowledge Cleanse was planned by Ali K. He was also the primary creator of the test questions. On the other hand, the
                    programming and general development of Knowledge Cleanse was done by Cameron A. Cameron helped edit the test questions.
                </p>
                <p>
                    Knowledge Cleanse&apos;s frontend was developed in NextJS with the TypeScript template, using the Sass and Axios packages for styling and API fetching.
                    The backend of Knowledge Cleanse was developed in ExpressJS with TypeScript. It uses MongoDB for saving leaderboard information.
                </p>
                <div className={style.img}>
                    All image and other resources are credited directly on the resource. Hovering 
                    <Image src="/question.svg" alt="Question" sizes="100%" width={0} height={0}></Image>
                    will display the source of the resource.
                </div>
                <section>
                    <h2>Links</h2>
                    <nav style={{"display": "flex", "flexDirection": "column"}}>
                        <Link href="https://github.com/Camerxxn/UnHackathon2023" target="_blank">Github</Link>
                        <Link href="https://knowledgeflow.org/initiative/unhackathon/" target="_blank">UnHackathon</Link>
                    </nav>
                </section>
            </main>
        </>
    );
}

export default About;