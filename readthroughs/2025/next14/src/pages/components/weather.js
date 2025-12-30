import React, { useEffect, useState } from "react";
function WeatherComponent(props) {
    const [count, setCount] = useState(0);
    // automatically sets to 1 (instead of the initialzied 0)
    // I think this was just to show how useEffects work
    useEffect(() => {
        setCount(1);
    }, []);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (<h1 onClick={handleClick}>
      The weather is {props.weather}, and the counter shows {count}
    </h1>);
}
const PageComponentWeather = () => {
    return <WeatherComponent weather={"fair"}/>;
};
export default PageComponentWeather;
