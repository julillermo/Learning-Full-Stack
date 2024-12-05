import WeatherModel from "./model";
import { WeatherInterface } from "./interface";

// CREATE
export async function storeDocument(doc: WeatherInterface): Promise<boolean> {
  try {
    // since our WeatherModel is an instance of a mongoose model,
    //    we can use mongoose methods from it
    await WeatherModel.create(doc);
  } catch {
    return false;
  }
  return true;
}

// READ
export async function findByZip(
  paramZip: string
): Promise<Array<WeatherInterface> | null> {
  try {
    return await WeatherModel.findOne({ zip: paramZip });
  } catch (err) {
    console.log(err);
  }
  return [];
}

// UPDATE
export async function updateByZip(
  paramZip: string,
  newData: WeatherInterface
): Promise<boolean> {
  try {
    await WeatherModel.updateOne({ zip: paramZip }, newData);
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
}

// DELETE
export async function deleteByZip(paramZip: string): Promise<boolean> {
  try {
    await WeatherModel.deleteOne({ zip: paramZip });
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
}
