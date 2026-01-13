const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb");
const cors = require("cors");

dotenv.config();

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "Password";
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());

client.connect();
// Get all passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save Passwords
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.send({ success: true, result: findResult });
});

// Delete Passwords
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  res.send({ success: true, result: findResult });
});

// Update passwords
app.put("/", async (req, res) => {
  try {
    const { _id, ...updatedData } = req.body;

    const db = client.db(dbName);
    const collection = db.collection("passwords");

    const result = await collection.updateOne(
      { _id: new ObjectId(_id) },
      { $set: updatedData }
    );

    res.send({ success: true, result });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
