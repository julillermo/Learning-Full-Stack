// example data
// GraphQl could have instead connected to a database and pulled info from there
// instead of using a static database liket this one
export const db = [
  {
    zip: "96815",
    weather: "sunny",
    tempC: "25C",
    tempF: "70F",
    friends: ["96814", "96826"],
  },
  {
    zip: "96814",
    weather: "rainy",
    tempC: "20C",
    tempF: "68F",
    friends: ["96815", "96826"],
  },
  {
    zip: "96826",
    weather: "rainy",
    tempC: "30C",
    tempF: "86F",
    friends: ["96815", "96814"],
  },
];
