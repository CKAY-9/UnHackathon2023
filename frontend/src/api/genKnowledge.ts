import axios, { AxiosResponse } from "axios";
import { API } from "./api";

export interface GKQuestion {
    prompt: string,
    img: string,
    choices: string[],
    correctAnswer: number
}
interface GKResponse {
    questions?: GKQuestion[],
    message?: string
}

export const getQuestions = async (): Promise<GKResponse> => {
    const req: AxiosResponse<{questions: GKQuestion[]}> = await axios({
        "url": `${API}/test/gen-knowledge`,
        "method": "GET",
    });
    return req.data;
}