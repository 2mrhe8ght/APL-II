const express = require("express");
const app = express();
app.use(express.json());
app.post("/submit", (req, res) => {
  const { name, age } = req.body;
  res.send(`Received POST data: Name = ${name}, Age = ${age}`);
});
app.listen(3003);
