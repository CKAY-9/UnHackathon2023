import Link from "next/link";
import style from "./test.module.scss";
import Header from "@/components/header/header";

const TestSelection = () => {
    return (
        <>
            <title>Test Selection</title>

            <Header></Header>

            <main className="container" style={{"alignItems": "center", "justifyContent": "center"}}>
                <h1>Our Tests</h1>
                <div className={style.tests}>
                    <Link href="/test/fake-news" className={style.test}>
                        <h1>Fake News Test</h1>
                        <p>
                            Try and see if a given post/information is true or false. This will test your ability
                            in noticing misinformation.
                        </p>
                    </Link>
                    <Link href="/test/general-knowledge" className={style.test}>
                        <h1>General Knowledge</h1>
                        <p>
                            Test your general knowledge about the internet and online safety. You will be given
                            a set of answers and you must pick the right one.
                        </p>
                    </Link>
                </div>
                <p>
                    Our tests are meant to test your abilities on recognizing false information and your knowledge of the internet.
                    If you don&apos;t feel confident in your skill to detect misinformation, please go to our <Link href="/learn">learn</Link> page.
                    
                </p>
            </main>
        </>
    );
}

export default TestSelection;