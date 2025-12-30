// * import fetch from "node-fetch";
// According to the internet, you really only need to use
//  node-fetch for older versions of node. Newer versions
//  of node allow you to use JavaScript's fetch API directly

// The types are declared in ./custom.d.ts and can automatically be read
//  into the .ts (or .js also I guess) files within the same folder.

export const routeHello = (): string => "Hello World!";

export const routeAPINames = async (): Promise<string> => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data: responseItemType[];

  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (err) {
    return "Error";
  }

  const names = data
    .map((item: { id: any; name: any }) => `id: ${item.id}, name: ${item.name}`)
    .join("<br>");

  return names;
};

export const routeWeather = (
  query: WeatherQueryInterface
): WeatherDetailType => ({
  zipcode: query.zipcode,
  weather: "sunny",
  temp: 35,
});
