import { MongoClient } from "mongodb";

// /api/new-meetup
// POST
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://cuong1806:Cuong%401806@cluster0.simzgca.mongodb.net/?retryWrites=true&w=majority"
    );
    // @ = %40 in HTML encode
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup inserted successfully!" });
  }
}

export default handler;
