import { Schema } from "mongoose";
import { WeatherInterface } from "./interface";

// Top level are the properties specified inside respective TS interface.
// Beneath each top level property are flags indicating the type and
//    whether they're required.
// There are other flag properties, custom or built-in, but only `required`
//    is used by the book.
// https://mongoosejs.com/docs/schematypes.html#all-schema-types

// In addition to the JS types, Mongoose also supposedly allows for these types:
//    - Buffer
//    - ObjectId

// The WeatherInterface could have also been declared in this file instead
// of being imported from a different file.

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
