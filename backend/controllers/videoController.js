import { Video } from "../models/videoModel.js";

export const createVideo = async(req,res) => {

    const video = new Video(req.body)
    try {
        const doc = await video.save();
        return res.status(201).json({
            id: doc._id,
            message: "Created video"
            
        })
    } catch (error) {
        res.status(401).json({
            message: "Failed to upload video"
        })
    }

}

export const getVideos = async(req,res) => {

    try {
        const videos = await Video.find({});
        return res.status(201).json({
            videos,
            message: "Suceessfully fetched videos"
            
        })
    } catch (error) {
        res.status(401).json({
            message: "Failed to fetch videos  "
        })
    }

}