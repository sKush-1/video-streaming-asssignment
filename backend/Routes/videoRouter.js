import express from "express";
import { createVideo, getVideos } from "../controllers/videoController.js";
const router = express.Router();

router.post("/create-video",createVideo)
router.get("/get-videos", getVideos)

export default router;