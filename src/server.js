const PORT = 9000 || process.env.PORT;

require("dotenv").config();

const http = require("http");
const app = require("./app");
const { mongooseConnect } = require("./models");

const server = http.createServer(app);

async function loadServer() {
  //  await mongooseConnect();

  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

loadServer();
