import express from "express";
import { client } from "./mongo";
import cors from "cors";
import bodyParser from "body-parser";
import { leaderboard } from "./routes/leaderboard";
import { test } from "./routes/test";
import dotenv from "dotenv";
import path from "path";

// .env setup
dotenv.config({"path": path.join(__dirname, "/../.env")});

// Express setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes setup
app.use("/leaderboard", leaderboard);
app.use("/test", test);

// Start Express
const PORT = 3001;
app.listen(PORT, async () => {
    await client.connect();
    console.log("Started API on port " + PORT);
});