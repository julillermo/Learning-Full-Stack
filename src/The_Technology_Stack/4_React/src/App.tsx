import { useEffect, useState } from "react";
import "./App.css";

type WeatherProps = {
  weather: string;
};

function WeatherComponent(props: WeatherProps): JSX.Element {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1); // automatically sets to 1 (instead of the initialzied 0)
  }, []);

  const text = `The weather is ${props.weather}, and the counter shows ${count}`;

  return <h1 onClick={() => setCount(count + 1)}>{text}</h1>;
}

function App() {
  return <WeatherComponent weather={"fair"} />;
}

export default App;
