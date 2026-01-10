import { MongoMemoryServer } from "mongodb-memory-server";
import { storeDocument } from "../mongoose/weather/services";
import mongoose from "mongoose";
import { db as STATIC_SEED_DATA } from "@/graphql/data";

async function dbConnect(): Promise<void | string | MongoMemoryServer> {
  // somewhat reminiscent of how to start express/fastify and GraphQL server
  const mongoServer = await MongoMemoryServer.create();
  const MONGOIO_URI = mongoServer.getUri(); // currently dynamic, would be static for full MongoDB server

  console.log("MONGOIO_URI:", MONGOIO_URI);
  await mongoose.disconnect();
  await mongoose.connect(MONGOIO_URI, {
    dbName: "Weather",
  });

  await storeDocument(STATIC_SEED_DATA[0]);
  await storeDocument(STATIC_SEED_DATA[1]);
  await storeDocument(STATIC_SEED_DATA[2]);

  return mongoServer;
}

export default dbConnect;
