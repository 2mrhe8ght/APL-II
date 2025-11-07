const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

// Local MongoDB Compass Connection
const MONGODB_URI = "mongodb://127.0.0.1:27017";
const DB_NAME = "dypcet_portal"; // database name

let db;

// Connect to MongoDB once when server starts
async function connectDB() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  db = client.db(DB_NAME);
  console.log("✅ Connected to MongoDB Compass");
}
connectDB();

// ---------------- APPLY NOW FORM ----------------
app.post("/apply", async (req, res) => {
  try {
    const { name, email, phone, branch, message } = req.body;

    if (!name || !email || !phone || !branch) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const application = {
      name,
      email,
      phone,
      branch,
      message: message || "",
      submittedAt: new Date()
    };

    await db.collection("applications").insertOne(application);

    res.json({ success: true, message: "Application submitted successfully ✅" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// ---------------- CONTACT FORM ----------------
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const contactEntry = {
      name,
      email,
      message: message || "",
      submittedAt: new Date()
    };

    await db.collection("contacts").insertOne(contactEntry);

    res.json({ success: true, message: "Message sent successfully ✅" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// ---------------- RUN SERVER ----------------
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
