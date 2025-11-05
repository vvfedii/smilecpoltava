import { MongoClient } from 'mongodb';
import reviews from './reviewsData.js';

const uri = 'mongodb+srv://vladislavvv3773:UImo3k8mtpscgdzD@cluster0.sdjm7at.mongodb.net/reviewsDB?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function seedDB() {
  try {
    await client.connect();
    const db = client.db('reviewsDB');
    const collection = db.collection('reviews');

    await collection.deleteMany({});
    await collection.insertMany(reviews);

    console.log(`✅ Inserted ${reviews.length} reviews`);
  } catch (err) {
    console.error('❌ Error inserting reviews:', err);
  } finally {
    await client.close();
  }
}

seedDB();

