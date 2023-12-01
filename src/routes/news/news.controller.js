const axios = require("axios");

exports.getAllNews = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://anime-news-net.p.rapidapi.com/api/news",
    headers: {
      "X-RapidAPI-Key": "c4a62b4233msh1029e035b3cbe8bp1cfbfbjsnc425475cd4c9",
      "X-RapidAPI-Host": "anime-news-net.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    // Extract only the relevant data
    const newsData = response.data;

    // Send the extracted data to the client
    res.json(newsData);

    // Log the data if needed
    console.log(newsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAnewsDetail = async (req, res) => {
  const { id } = req.params;

  const options = {
    method: "GET",
    url: `https://anime-news-net.p.rapidapi.com/api/news/details/2023-03-17/mai-nishikata-game-between-the-suits-manga-resumes-after-2-years/${id}`,
    headers: {
      "X-RapidAPI-Key": "c4a62b4233msh1029e035b3cbe8bp1cfbfbjsnc425475cd4c9",
      "X-RapidAPI-Host": "anime-news-net.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    const newsDetail = response.data;
    res.json(newsDetail);
  } catch (error) {
    console.error(error);
  }
};
