import Header from "@/components/header/header";
import { Test } from "./client";
import { getQuestions } from "@/api/genKnowledge";

const Server = async () => {
    const questions = await getQuestions();

    if (questions.questions === undefined) {
        return (
            <>
                <title>General Knowledge Error</title>
                <Header></Header>
                <main className="container">
                    <h1>Sorry, there was an error creating your test. Please try again later!</h1>
                </main>
            </>
        )
    }

    return (
        <>
            <title>General Knowledge Test</title>
            <Test questions={questions.questions}></Test>
        </>
    );
}

export default Server;