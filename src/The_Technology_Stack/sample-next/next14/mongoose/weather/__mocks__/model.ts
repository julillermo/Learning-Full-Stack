import { WeatherInterface } from "../interface";

type param = {
  [key: string]: string;
};

// Our dependency double mimicks the functions and function
//    arguments of the original model. It then amkes it appear
//    that the function promises get resolved
const WeatherModel = {
  create: jest.fn((newData: WeatherInterface) => Promise.resolve(true)),
  findOne: jest.fn(({ zip: paramZip }: param) => Promise.resolve(true)),
  updateOne: jest.fn(({ zip: paramZip }: param, newData: WeatherInterface) =>
    Promise.resolve(true)
  ),
  deleteOne: jest.fn(({ zip: paramZip }: param) => Promise.resolve(true)),
};

export default WeatherModel;
