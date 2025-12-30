// import mongoose and the model constructor
import mongoose, { model } from "mongoose";
// import the schema we created
import { WeatherSchema } from "./schema";
export default mongoose.models.Weather ||
    model("Weather", WeatherSchema);
// First param: the model's name
// Second param: the schema
// "Mongoose binds the newly created model to our
//    MongoDb instance's collection"
// "The Weathers collection resides in the Weather database,
//    both of which mongoose creates"
// "Note that we need to check for an existing `Weather` model
//    on `mongoose.models` before creating a new one; otherwise,
//    Mongoose will throw an error.
