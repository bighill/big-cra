import { useState } from "react";

const apiKey = "foo";

interface IWeatherWeather {
  icon: string;
}
interface IWeather {
  name: string;
  main: {
    temp: number;
  };
  weather: IWeatherWeather[];
}

export const HomePage = () => {
  const [weather, setWeather] = useState<IWeather>({
    name: "",
    main: { temp: 0 },
    weather: [{ icon: "" }],
  });

  const handleGetWeather = async () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&appid=${apiKey}`;
      console.log(weatherUrl);

      const res = await fetch(weatherUrl)
        .then((r) => r.json())
        .then((r) => {
          console.log(r);
          setWeather(r);
        });
    });
  };

  return (
    <>
      <div> start here</div>
      <button onClick={handleGetWeather}>Get</button>
      <div>Icon: {weather.weather[0].icon}</div>
      <div>City: {weather.name}</div>
      <div>Temp: {weather.main.temp - 273}</div>
    </>
  );
};
