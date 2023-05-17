import Client from "./client";
import Server from "./server";

const FakeNewsTest = () => {
    return (
        <>
            <title>Fake News Test</title>
            <Client>
                {/* @ts-expect-error Async Server Component */}
                <Server/>
            </Client>
        </>
    );
}

export default FakeNewsTest;