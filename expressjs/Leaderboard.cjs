const mongoose = require("mongoose")
const Schema = mongoose.Schema

const leaderboardSchema = new Schema({
    username: { type: String, required: true },
    seconds: { type: Number, required: true },
    minutes: { type: Number, required: true }
})

module.exports = mongoose.model("Leaderboard", leaderboardSchema)