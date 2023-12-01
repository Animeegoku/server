const multer = require("multer");

const upload = multer();

const express = require("express");
const { uploadVideo, getAllNews } = require("./video.controller");

const videoRoute = express.Router();

videoRoute.post("/upload", upload.single("file"), uploadVideo);

module.exports = videoRoute;
