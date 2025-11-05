import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri =
  "mongodb+srv://vladislavvv3773:UImo3k8mtpscgdzD@cluster0.sdjm7at.mongodb.net/reviewsDB?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const getCollection = async (collectionName) => {
  await client.connect();
  const db = client.db("reviewsDB");
  return db.collection(collectionName);
};

// GET all reviews
app.get("/reviews", async (req, res) => {
  try {
    const collection = await getCollection("reviews");
    const data = await collection.find().toArray();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching reviews");
  }
});

// POST new review
app.post("/reviews", async (req, res) => {
      console.log("=== ЗАПРОС ПОЛУЧЕН ===");
console.log(req.body);
  try {


    const { name, rating, text, date } = req.body;
    const review = { name, rating, text , date };

    const collection = await getCollection("reviews");
    const result = await collection.insertOne(review);
    res.json(result);
  } catch (err) {
    console.error("❌ Ошибка при сохранении:", err);
    res.status(500).send("Error saving review");
  }
});

app.listen(port, () => {
  console.log(`✅ Reviews server running at http://localhost:${port}`);
});
