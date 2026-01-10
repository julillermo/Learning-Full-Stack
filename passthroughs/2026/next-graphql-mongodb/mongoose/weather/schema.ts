import { Schema } from "mongoose";
import { WeatherInterface } from "./interface";

// For this, I think I have to look up how to set it up from the docs
//  if I would want more detail https://mongoosejs.com/docs/guide.html
export const WeatherSchema = new Schema<WeatherInterface>({
  zip: {
    type: "String",
    required: true,
  },
  weather: {
    type: "String",
    required: true,
  },
  tempC: {
    type: "String",
    required: true,
  },
  tempF: {
    type: "String",
    required: true,
  },
  friends: {
    type: ["String"],
    required: true,
  },
});
