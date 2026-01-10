import { type NextPage } from "next";
import { useEffect, useState } from "react";

interface WeatherProps {
  weather: string;
}

const WeatherComponent = (props: WeatherProps) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, []);
  return (
    <h1 onClick={() => setCount(count + 1)}>
      The weather is {props.weather}, and the counter shows {count}
    </h1>
  );
};

const PageComponentWeather: NextPage = () => {
  return <WeatherComponent weather="sunny" />;
};

export default PageComponentWeather;
