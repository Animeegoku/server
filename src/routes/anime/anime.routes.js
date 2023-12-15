const express = require("express");
const { getAllAnime, getAnimeById } = require("./anime.controller");

const animeRoute = express.Router();

animeRoute.get("/allanime", getAllAnime);

animeRoute.get("/:id", getAnimeById);

module.exports = animeRoute;
