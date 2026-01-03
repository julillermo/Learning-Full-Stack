export const routeHello = (): string => "Hello World X!";

type ItemData = { id: string; name: string };

export const routeAPINames = async (): Promise<string> => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data: responseItemType[];
  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (err) {
    return JSON.stringify(err, null, 2);
  }
  const names = data
    .map((item: ItemData) => `id: ${item.id}, name: ${item.name}`)
    .join("<br>");
  return names;
};

export function routeWeather(query: WeatherQueryInterface): WeatherDetailType {
  return queryWeatherData(query);
}

export const queryWeatherData = (
  query: WeatherQueryInterface
): WeatherDetailType => {
  return {
    zipcode: query.zipcode,
    weather: "sunny",
    temp: 35,
  };
};
