import axios, { AxiosResponse } from "axios";
import { API } from "./api";

export interface FNQuestion {
    img: string,
    prompt: string,
    truth: boolean,
    reason: string
}
interface FNResponse {
    questions?: FNQuestion[],
    message?: string
}

export const getQuestions = async (): Promise<FNResponse> => {
    const req: AxiosResponse<{questions: FNQuestion[]}> = await axios({
        "url": `${API}/test/fake-news`,
        "method": "GET",
    });
    return req.data;
}