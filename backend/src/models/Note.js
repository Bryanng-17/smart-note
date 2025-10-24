import mongoose from "mongoose";

// 1st step: create a schema
// 2nd step: create a model based off of that schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    } //createAt, update At
);

const Note = mongoose.model("Note", noteSchema)

export default Note