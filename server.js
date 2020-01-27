const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const apiRouter = require("./api/apiRouter");

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.use(helmet());

server.use(cors());

server.use("/api", apiRouter);

server.get("/", function(req, res) {
  res.send("API is Running Away");
});

server.use(function(req, res) {
  res.status(404).json({ message: "Not found" });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});