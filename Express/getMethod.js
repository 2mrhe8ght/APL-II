const express = require("express");
const app = express();
app.get("/info", (req, res) => {
  res.send("This is a GET request example");
});
app.listen(3002);
