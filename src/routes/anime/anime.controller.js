const axios = require("axios");

exports.getAllAnime = async (req, res) => {
  try {
    const anime = await axios.get("https://api.jikan.moe/v4/anime");

    res.json(anime.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAnimeById = async (req, res) => {
  try {
    const anime = await axios.get(
      `https://api.jikan.moe/v4/anime/${req.params.id}`
    );

    res.json(anime.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
