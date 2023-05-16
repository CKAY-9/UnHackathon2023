import { Router } from "express";

export const test = Router();

interface FNQuestion {
    img: string,
    prompt: string,
    truth: boolean
}
const fakeNewsQuestions: FNQuestion[] = [
    {
        "img": "",
        "prompt": "",
        "truth": false
    }
]

test.get("/fake-news", async (req, res) => {
    try {
        const questions: FNQuestion[] = [];
        for (let i = 0; i < (fakeNewsQuestions.length >= 5 ? 5 : fakeNewsQuestions.length); i++) {
            let q = fakeNewsQuestions[Math.round(Math.random() * fakeNewsQuestions.length)]
            while (questions.includes(q)) {
                q = fakeNewsQuestions[Math.round(Math.random() * fakeNewsQuestions.length)]
            }
            questions.push(q);
        }

        return res.status(200).json({"questions": questions});
    } catch (ex) {
        console.log(ex.toString());
        return res.status(500);
    }
});

interface GKQuestion {
    prompt: string,
    img?: string,
    choices: string[],
    correctAnswer: number
}

const generalKnowledgeQuestions: GKQuestion[] = [
    {
        "choices": [""],
        "correctAnswer": 0,
        "prompt": "",
        "img": ""
    }
]

test.get("/gen-knowledge", async (req, res) => {
    try {
        
    } catch (ex) {
        console.log(ex.toString());
        return res.status(500);
    }
})