const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
