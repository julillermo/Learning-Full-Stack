import gql from "graphql-tag";

export const typeDefs = gql`
  type LocationWeatherType {
    zip: Int!
    weather: String!
    tempC: String!
    tempF: String!
    friends: [String]!
  }

  input LocationWeatherInput {
    zip: Int!
    weather: String
    tempC: String
    tempF: String
    friends: [Int]
  }

  type Query {
    weather(zip: Int): [LocationWeatherType]!
  }

  type Mutation {
    weather(data: LocationWeatherInput): [LocationWeatherType]!
  }
`;
