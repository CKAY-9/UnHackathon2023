"use client";

import { FNQuestion } from "@/api/fakeNews";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import style from "./gk.module.scss";
import Image from "next/image";
import Source from "@/components/source/source";
import { TestType, uploadEntry } from "@/api/leaderboard";
import { GKQuestion } from "@/api/genKnowledge";

interface QuestionProps {
    question: GKQuestion
    changeQuestion: any;
}
const Question = (props: QuestionProps) => {
    const [answered, setAnswered] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(false);

    const submitAnswer = (key: number) => {
        setCorrect(key === props.question.correctAnswer);
        setAnswered(true);
    }

    return (
        <div id="question">
            {answered &&
                <>
                    <div className={style.response}>
                        <div className={style.content}>
                            <h1>{correct ? "Correct" : "Incorrect"}</h1>
                            {!correct &&
                                <h3>The correct answer was: {props.question.choices[props.question.correctAnswer]}</h3>
                            }
                            <button onClick={() => {
                                setAnswered(false);
                                props.changeQuestion(correct);
                                setCorrect(false);
                            }}>Next Question</button>
                        </div>
                    </div>
                </>
            }
            <div className={style.question}>
                <h1>{props.question.prompt}</h1>
                <div className={style.image}>
                    <Image className={style.questionImg} src={props.question.img} alt="Question Image" sizes="100%" width={0} height={0}></Image>
                    <Source id="0" url={props.question.img}></Source>
                </div>
                <div className={style.choices}>
                    {props.question.choices.map((choice: string, index: number) => {
                        return (
                            <button onClick={() => submitAnswer(index)} key={index} id={index.toString()}>{choice}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

interface TestProps {
    questions: GKQuestion[]
}
export const Test = (props: TestProps) => {
    const [q, setQ] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);
    const [startTime, setStartTime] = useState<number>(new Date().getTime());
    const [endTime, setEndTime] = useState<number>(0);
    const [upload, setUpload] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        if (q >= props.questions.length && endTime === 0) {
            setEndTime(new Date().getTime());
        }
    }, [props.questions.length, q, endTime]);

    const changeQuestion = (wasCorrect: boolean) => {
        if (wasCorrect) {
            setCorrect(correct + 1);
        }
        setQ(q + 1);
    }

    const calcScore = () => {
        return Math.floor((startTime / (endTime^1.12)) * ((correct / props.questions.length) + 10));
    }

    const uploadToLeaderboard = async () => {
        const res = await uploadEntry(TestType.GENERAL_KNOWLEDGE, name, calcScore());
        if (res === 200) {
            window.location.href = "/leaderboard";
        }
    }

    // Display questions
    if (q < props.questions.length) {
        return (
            <div className={style.test}>
                <Question changeQuestion={changeQuestion} question={props.questions[q]}></Question>
            </div>
        )
    } else {
        return (
            <>
                {upload &&
                    <div className={style.upload}>
                        <div className={style.content}>
                            <h1>Upload to Leaderboard</h1>
                            <input required={true} type="text" placeholder="Your name" onChange={(e: BaseSyntheticEvent) => setName(e.target.value)} />
                            <span>Your score: {calcScore()}</span>
                            <div style={{"display": "flex", "gap": "3rem", "alignItems": "center", "justifyContent": "center"}}>
                                <button onClick={() => setUpload(false)}>Cancel</button>
                                <button onClick={uploadToLeaderboard}>Upload</button>
                            </div>
                        </div>
                    </div>
                }   
                <div className={style.test} style={{"textAlign": "center"}}>
                    <h1>Thank you for taking the test!</h1>
                    <h2>You got {correct} / {props.questions.length} correct!</h2>
                    <h3>Would you like to upload your results and time to the leaderboard?</h3>
                    <div style={{"display": "flex", "gap": "3rem", "alignItems": "center", "justifyContent": "center"}}>
                        <button onClick={() => setUpload(true)}>Yes</button>
                        <button onClick={() => window.location.href = "/test"}>No</button>
                    </div>
                </div>
            </>
        )
    }
}

const Client = ({children}: {children: JSX.Element}) => {
    return (
        <>
            {children}
        </>
    );
}

export default Client;