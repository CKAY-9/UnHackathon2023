import { Router } from "express";
import { db } from "../mongo";

export const leaderboard = Router();

enum TestType {
    FAKE_NEWS = "Fake-News",
    GENERAL_KNOWLEDGE = "General-Knowledge"
}

interface LeaderboardEntry {
    username: string,
    score: number,
    test: TestType
}

leaderboard.get("/entries", async (req, res) => {
    try {
        const lowerLimit: number = Number.parseInt(req.query.limit as string);
        const upperLimit: number = lowerLimit + 25;
        const entries = await db.collection("leaderboard").find({}).sort({score: -1}).toArray();
        let filteredEntries: any[] = [];
        if (upperLimit <= entries.length) {
            filteredEntries = entries.splice(lowerLimit, upperLimit);
        } else {
            filteredEntries = entries.splice(lowerLimit);
        }
        return res.status(200).json({"entries": filteredEntries});
    } catch (ex) {
        console.log(ex.toString());
        return res.status(500);
    }
});

leaderboard.post("/create-entry", async (req, res) => {
    try {
        const data = req.body as LeaderboardEntry;
        await db.collection("leaderboard").insertOne(data);
        return res.status(200).json({});
    } catch (ex) {
        console.log(ex.toString());
        return res.status(500).json({});
    }
});