const express = require("express");
const animeRoute = require("./anime/anime.routes");
const newsRoute = require("./news/news.routes");

const api = express.Router();

const videoRoute = require("./video/video.routes");

api.use("/video", videoRoute);

api.use("/news", newsRoute);

api.use("/anime", animeRoute);

module.exports = api;
