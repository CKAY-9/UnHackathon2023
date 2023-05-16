import { Router } from "express";
import { db } from "../mongo";

export const leaderboard = Router();

leaderboard.get("/entries", async (req, res) => {
    try {
        const upperLimit: number = Number.parseInt(req.query.limit as string);
        const lowerLimit: number = upperLimit - 50;
        const entries = await db.collection("leaderboard").find({}).toArray();
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
        return res.status(200);
    } catch (ex) {
        console.log(ex.toString());
        return res.status(500);
    }
});