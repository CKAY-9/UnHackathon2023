import { MongoClient } from "mongodb";
const MONGO_URI = process.env.U_MONGO_URI || "mongodb://127.0.0.1/";
export const client = new MongoClient(MONGO_URI);
export const db = client.db("uh_kc");