import mongoose from "mongoose";
import { Schema } from "mongoose";

const CoordinateSchema = new Schema({
    character: { type: String, required: true },
    left: { type: Number, required: true },
    right: { type: Number, required: true },
    bottom: { type: Number, required: true },
    top: { type: Number, required: true }
})

export default mongoose.model("Coordinate", CoordinateSchema)