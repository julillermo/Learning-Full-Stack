import { WeatherInterface } from "./interface";
import WeatherModel from "./model";

// Create
export async function storeDocument(doc: WeatherInterface): Promise<boolean> {
  try {
    await WeatherModel.create(doc);
  } catch (error) {
    console.log("storeDocument error:", JSON.stringify(error, null, 2));
    return false;
  }
  return true;
}

// Read
export async function findByZip(
  paramZip: string,
): Promise<Array<WeatherInterface> | null> {
  try {
    return await WeatherModel.findOne({ zip: paramZip });
  } catch (error) {
    console.log("findOne error:", error);
  }
  return [];
}

// Update
export async function updateByZip(
  paramZip: string,
  newDate: WeatherInterface,
): Promise<boolean> {
  try {
    await WeatherModel.updateOne({ zip: paramZip }, newDate);
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}

// Delete
export async function deleteByZip(paramZip: string): Promise<boolean> {
  try {
    await WeatherModel.deleteOne({ zip: paramZip });
    return true;
  } catch (error) {
    console.log(error);
  }
  return false;
}
