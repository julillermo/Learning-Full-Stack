import mongoose, { model } from "mongoose";
import { WeatherInterface } from "./interface";
import { WeatherSchema } from "./schema";

// The first condition is a way to check whether the "weather" model
//    alreadyt exists internally within MongoDb
export default mongoose.models.Weather ||
  model<WeatherInterface>("Weather", WeatherSchema);
