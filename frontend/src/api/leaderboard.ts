import axios, { AxiosResponse } from "axios"
import { API } from "./api"

export enum TestType {
    FAKE_NEWS = "Fake-News",
    GENERAL_KNOWLEDGE = "General-Knowledge"
}

export interface LeaderboardEntry {
    username: string,
    score: number,
    test: TestType
}

export const uploadEntry = async (test: TestType, username: string, score: number) => {
    const req = await axios({
        "url": `${API}/leaderboard/create-entry`,
        "method": "POST",
        "data": {
            test: test,
            username: username,
            score: score
        }
    });

    return req.status;
}

export const fetchEntries = async (limit: number) => {
    const req: AxiosResponse<{entries: LeaderboardEntry[]}> = await axios({
        "url": `${API}/leaderboard/entries`,
        "method": "GET",
        "params": {
            "limit": limit
        }
    });

    return req.data;
}