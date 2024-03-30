const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CoordinateSchema = new Schema({
    character: { type: String, required: true },
    left: { type: Number, required: true },
    right: { type: Number, required: true },
    bottom: { type: Number, required: true },
    top: { type: Number, required: true }
})

module.exports = mongoose.model("Coordinate", CoordinateSchema)