// pact/provider/provider.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

const server = app.listen(8081, () => {
  console.log('Provider running on http://localhost:8081');
});

module.exports = server;
