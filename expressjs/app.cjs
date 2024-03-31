const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const catalogController = require("./catalog.cjs")

require("dotenv").config()

const mongoDb = process.env.MONGO_LOGIN
mongoose.connect(mongoDb)
const db = mongoose.connection
db.on("error", console.error.bind(console, "mongo connection error"))


const app = express()

app.use(cors())  
app.use(express.json())

app.use("/", catalogController)

const port = 8000

app.listen(port, () => console.log(`Server is listening at port ${port}...`))