import Client from "./client";
import Server from "./server";

const FakeNewsTest = () => {
    return (
        <>
            <title>General Knowledge Test</title>
            <Client>
                {/* @ts-expect-error Async Server Component */}
                <Server/>
            </Client>
        </>
    );
}

export default FakeNewsTest;