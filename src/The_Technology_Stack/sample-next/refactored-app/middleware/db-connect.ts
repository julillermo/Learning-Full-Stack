import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function dbConnect(): Promise<any | string> {
  // create a MongoMemoryServer instance to persist data per session
  const mongoServer = await MongoMemoryServer.create();
  // identify the connection string to the server
  //    - this string is dynamic for in-memory servers
  const MONGOIO_URI = mongoServer.getUri();

  await mongoose.disconnect();
  await mongoose.connect(MONGOIO_URI, {
    dbName: "Weather",
  });
}

export default dbConnect;
