const multer = require("multer");

const storage = multer.memoryStorage(); // Store file in memory before streaming to GridFS
const upload = multer({ storage: storage });

const express = require("express");
const { uploadVideo, getAllNews } = require("./video.controller");

const videoRoute = express.Router();

videoRoute.post("/upload", upload.single("file"), uploadVideo);

module.exports = videoRoute;
