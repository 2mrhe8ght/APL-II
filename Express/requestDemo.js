const express = require("express");
const app = express();
app.use(express.json());
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const { name } = req.query;
  const method = req.method;
  const url = req.url;
  const path = req.path;
  res.send({ userId, name, method, url, path });
});
app.listen(3000);
