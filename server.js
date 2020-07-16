const express = require("express");
const globalFunction = require("./globalFunction");
const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.get("/api/data", (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(5500, () => globalFunction.log(`listening on port 5500`));
