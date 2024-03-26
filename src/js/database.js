import mongoose from "mongoose";

const mongoDb = process.env.LOG_IN
mongoose.connect(mongoDb)
const db = mongoose.connection
db.on("error", console.error.bind(console, "mongo connection error"))

