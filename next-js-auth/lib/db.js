import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://doyu:${process.env.MONGODB_PASSWORD}@cluster0.ma04y.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}
