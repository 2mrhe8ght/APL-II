const express = require("express");
const app = express();
const router = express.Router();
router.get("/users", (req, res) => res.send("Get all users"));
router.post("/users", (req, res) => res.send("Add user"));
app.use("/api", router);
app.listen(3005);
