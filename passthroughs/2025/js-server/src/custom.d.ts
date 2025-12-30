type responseItemType = {
  id: string;
  name: string;
};

type WeatherDetailType = {
  zipcode: string | undefined;
  weather: string;
  temp?: number;
};

interface WeatherQueryInterface {
  zipcode: string | undefined;
}
