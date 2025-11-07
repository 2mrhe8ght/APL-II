const express = require("express");
const app = express();
app.get("/demo", (req, res) => {
  res.set("X-Powered-By", "Express-Demo");
  res.status(200).json({ message: "Response Object Demo", success: true, url: req.url });
});
app.get("/redirect", (req, res) => {
  res.redirect("/demo");
});
app.listen(3001);
