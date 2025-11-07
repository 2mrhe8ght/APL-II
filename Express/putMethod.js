const express = require("express");
const app = express();
app.use(express.json());
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.send(`Updated record with ID ${id}, new data: ${JSON.stringify(data)}`);
});
app.listen(3004);
