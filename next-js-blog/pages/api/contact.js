import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = { email, name, message };
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ma04y.mongodb.net/?retryWrites=true&w=majority`;
    let client;

    try {
      console.log('try');
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db(`${process.env.mongodb_database}`);

    try {
      const result = await db.collection('message').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message', message: newMessage });
  }
}

export default handler;
