import { db } from "./data";

// Note that this matches the schema stated in ./schema.gql.ts
declare interface WeatherInterface {
  zip: string;
  weather: string;
  tempC: string;
  tempF: string;
  friends: string[];
}

export const resolvers = {
  Query: {
    weather: async (_: unknown, param: WeatherInterface) => {
      return [db.find((item) => item.zip === param.zip)];
    },
  },
  Mutation: {
    weather: async (_: unknown, param: { data: WeatherInterface }) => {
      return [db.find((item) => item.zip === param.data.zip)];
    },
  },
};
