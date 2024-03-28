const mongoose = require("mongoose")
const express = require("express")

const catalogController = require("./catalog")

require("dotenv").config()

const mongoDb = process.env.LOG_IN
mongoose.connect(mongoDb)
const db = mongoose.connection
db.on("error", console.error.bind(console, "mongo connection error"))


const app = express()

app.use("/", catalogController)

app.listen(3000, () => console.log("Server is listening at port 3000..."))