const express = require("express");
const app = express();

const discord = require("./discord/discordUtility");
const morgan = require("morgan");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Welcome To Troubleshooting Bot");
});

app.use("/discord", discord);

module.exports = app;
