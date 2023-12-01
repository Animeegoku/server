const express = require("express");
const newsRoute = require("./news/news.routes");

const api = express.Router();

const videoRoute = require("./video/video.routes");

api.use("/video", videoRoute);

api.use("/news", newsRoute);

module.exports = api;
