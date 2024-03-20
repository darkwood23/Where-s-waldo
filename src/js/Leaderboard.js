import mongoose from "mongoose";
import { Schema } from "mongoose";

const leaderboardSchema = new Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true }
})

module.exports =  mongoose.model("Leaderboard", leaderboardSchema)