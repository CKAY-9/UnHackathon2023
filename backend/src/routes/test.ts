import { Router } from "express";

export const test = Router();

interface FNQuestion {
    img: string,
    prompt: string,
    truth: boolean,
    reason: string
}
const fakeNewsQuestions: FNQuestion[] = [
    {
        "img": "https://mediasmarts.ca/sites/mediasmarts/files/quizzes/btf-news-en-07-niagarfallsfrozen.jpg",
        "prompt": "Is this tweet true or false?",
        "truth": false,
        "reason": "This tweet is false. This image is unbelievable and most likely fake. Also, it is very clickbaity."
    },
    {
        "img": "https://mediasmarts.ca/sites/mediasmarts/files/quizzes/btf-news-en-01-acornrunner.jpg",
        "prompt": "Is this tweet true or false?",
        "reason": "This story is made up and went viral. Who would want to jog barefoot?!",
        "truth": false
    },
    {
        "img": "https://mediasmarts.ca/sites/mediasmarts/files/quizzes/btf-news-en-05-kawhidataplan.jpg",
        "prompt": "Is this tweet true or false?",
        "reason": "This was published by The Beaverton, a satirical news website.",
        "truth": false
    },
    {
        "img": "https://mediasmarts.ca/sites/mediasmarts/files/quizzes/btf-news-en-04-ikeahideandseek.jpg",
        "prompt": "Is this Facebook post true or false?",
        "reason": "Ikea has banned hide-and-seek in its stores since 2015. This event was cancelled when the store’s staff saw a Facebook post about it.",
        "truth": true
    },
    {
        "img": "https://mediasmarts.ca/sites/mediasmarts/files/quizzes/btf-news-en-06-meltedcar.jpg",
        "prompt": "Is this Facebook post true or false?",
        "reason": "The photo is real, but the cars weren’t in Saudi Arabia and weren’t melted by hot weather. They were actually melted by a construction fire in Tucson, Arizona.",
        "truth": false
    },
    {
        "img": "https://mediasmarts.ca/sites/mediasmarts/files/quizzes/btf-news-en-03-chickenkiss.jpg",
        "prompt": "Is this Facebook post true or false?",
        "reason": "The US Centers for Diseases Control and Prevention really did issue a warning that people shouldn’t kiss chickens, after reports of salmonella being spread in this way.",
        "truth": true
    },
    {
        "img": "https://mediasmarts.ca/sites/mediasmarts/files/quizzes/btf-news-en-08-pigeonbowling.jpg",
        "prompt": "Is this Facebook post true or false?",
        "reason": "The Harrow Fair in Harrow, Ontario, really does have a contest for “roller pigeons” which do somersaults on the ground instead of flying.",
        "truth": true
    }
]

test.get("/fake-news", async (req, res) => {
    try {
        const questions: FNQuestion[] = [];
        for (let i = 0; i < (fakeNewsQuestions.length >= 5 ? 5 : fakeNewsQuestions.length); i++) {
            let q = fakeNewsQuestions[Math.round(Math.random() * (fakeNewsQuestions.length - 1))]
            while (questions.includes(q)) {
                q = fakeNewsQuestions[Math.round(Math.random() * (fakeNewsQuestions.length - 1))]
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
        "choices": ["Research further", "Take it as the truth", "Share it was your friends", "Become a follower of the truth"],
        "correctAnswer": 0,
        "prompt": "What should you do if you are unsure of the information in an online post?",
        "img": "https://scopeblog.stanford.edu/wp-content/uploads/2018/06/question-mark-1872665_1920.jpg"
    },
    {
        "choices": ["Tell them only if they give you money", "Give one of friend's address", "Ignore the request and take further action", "Give them hints"],
        "correctAnswer": 2,
        "prompt": "Someone is asking for your real name and home adress, what should you do?",
        "img": "https://media.istockphoto.com/id/496704159/photo/portrait-of-invisible-man-in-the-hood-isolated-on-black.jpg?s=612x612&w=0&k=20&c=kWpIJ9-WIMURo3xe7gkaa5rgPiTjk4gJsy1HSYAO54I="
    },
    {
        "choices": ["Review Instagram's guidelines and report the Instagram employee", "Delete the message, organizations will not ask for your password", "Give them your password", "Give them every detail about you"],
        "correctAnswer": 1,
        "prompt": "You recieve a message from Instagram asking for your password, what should you do?",
        "img": "https://neilpatel.com/wp-content/uploads/2017/08/instagram-1.jpg"
    },
]

test.get("/gen-knowledge", async (req, res) => {
    try {
        const questions: GKQuestion[] = [];
        for (let i = 0; i < (generalKnowledgeQuestions.length >= 5 ? 5 : generalKnowledgeQuestions.length); i++) {
            let q = generalKnowledgeQuestions[Math.round(Math.random() * (generalKnowledgeQuestions.length - 1))]
            while (questions.includes(q)) {
                q = generalKnowledgeQuestions[Math.round(Math.random() * (generalKnowledgeQuestions.length - 1))]
            }
            questions.push(q);
        }

        return res.status(200).json({"questions": questions});
    } catch (ex) {
        console.log(ex.toString());
        return res.status(500);
    }
})