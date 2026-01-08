import { WeatherInterface } from "../../mongoose/weather/interface";
import { findByZip, updateByZip } from "../../mongoose/weather/services";

// I think, essentially, we're just picking out the data to be passed to the apollo-server
export const resolvers = {
  Query: {
    weather: async (_: unknown, param: WeatherInterface) => {
      const data = await findByZip(param.zip);
      return [data];
    },
  },
  Mutation: {
    weather: async (_: unknown, param: { data: WeatherInterface }) => {
      await updateByZip(param.data.zip, param.data);
      const data = await findByZip(param.data.zip);
      return [data];
    },
  },
};
