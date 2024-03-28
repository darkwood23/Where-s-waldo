import mongoose from "mongoose";
import { Schema } from "mongoose";

const leaderboardSchema = new Schema({
    username: { type: String, required: true },
    seconds: { type: Number, required: true },
    minutes: { type: Number, required: true }
})

export default  mongoose.model("Leaderboard", leaderboardSchema)