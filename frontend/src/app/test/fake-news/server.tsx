import { getQuestions } from "@/api/fakeNews";
import Header from "@/components/header/header";
import { Test } from "./client";

const Server = async () => {
    const questions = await getQuestions();

    if (questions.questions === undefined) {
        return (
            <>
                <title>Fake News Error</title>
                <Header></Header>
                <main className="container">
                    <h1>Sorry, there was an error creating your test. Please try again later!</h1>
                </main>
            </>
        )
    }

    return (
        <>
            <title>Fake News Test</title>
            <Test questions={questions.questions}></Test>
        </>
    );
}

export default Server;