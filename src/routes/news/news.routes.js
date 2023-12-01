const express = require("express");
const { getAllNews, getAnewsDetail } = require("./news.controller");

const newsRoute = express.Router();

newsRoute.get("/allnews", getAllNews);

newsRoute.get("/:id", getAnewsDetail);

module.exports = newsRoute;
