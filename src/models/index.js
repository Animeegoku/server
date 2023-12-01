const mongoose = require("mongoose");
const gridfs = require("gridfs-stream");
const Grid = require("gridfs-stream");

const URL =
  "mongodb+srv://dbUser:Nano1234567@cluster01.jtu1vi3.mongodb.net/animegoku?retryWrites=true&w=majority";

const Mongo = process.env.MONGO_URL || URL;

async function mongooseConnect() {
  await mongoose.connect(Mongo, {
    useNewUrlParser: true,
  });
}

mongoose.connection.once("open", () => {
  console.log("MongoDB connection Established");
});

const conn = mongoose.connection;

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongooseDisconnect() {
  await mongoose.disconnect();
}
module.exports = {
  mongooseConnect,
  mongooseDisconnect,
};
