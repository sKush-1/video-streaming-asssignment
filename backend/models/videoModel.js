import mongoose from "mongoose"

const videoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    thumbnail: {
        type: String,
        requried: true,
    },

    link: {
        type: String,
        required: true,
    },

    lastDuration: {
        type: String,
        default: "0",
    }
})

export const Video = mongoose.model("Video",videoSchema);