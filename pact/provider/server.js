const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.status(200).json({ result: a + b });
});

app.listen(3000, () => console.log("Provider running at http://localhost:3000"));
