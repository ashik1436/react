import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  //  Images
  const CLEAR_HOT = "https://s7d2.scene7.com/is/image/TWCNews/mostly_sunny_jpg-2";
  const FEW_CLOUDS = "https://media.istockphoto.com/id/1040911866/photo/many-little-fluffy-clouds-in-blue-sky-in-sunny-day.jpg";
  const CLOUDS = "https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg";
  const LIGHT_RAIN = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1Mqwok_BxlwyVv8-M7_8AR5o2YIY2D2L5A&s";
  const HEAVY_RAIN = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg";
  const SNOW = "https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg";
  const FOG = "https://media.istockphoto.com/id/1009702398/photo/misty-mountain-landscape.jpg";
  const EXTREME_HOT = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg";
  const EXTREME_COLD = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QNucq9a0T0vis5dg3G5wufzIpqUQA3CBdg&s";

  let weather = weatherInfo.weather.toLowerCase();
  let bgImage = CLEAR_HOT;

  if (weatherInfo.temp >= 38) bgImage = EXTREME_HOT;
  else if (weatherInfo.temp <= 5) bgImage = EXTREME_COLD;
  else if (weather.includes("thunderstorm")) bgImage = HEAVY_RAIN;
  else if (weather.includes("rain") || weather.includes("drizzle")) bgImage = LIGHT_RAIN;
  else if (weather.includes("snow")) bgImage = SNOW;
  else if (weather.includes("few clouds")) bgImage = FEW_CLOUDS;
  else if (weather.includes("cloud")) bgImage = CLOUDS;
  else if (weather.includes("mist") || weather.includes("fog") || weather.includes("haze")) bgImage = FOG;
  else if (weather.includes("clear")) bgImage = CLEAR_HOT;

  return (
    <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <h1 style={{ marginBottom: "10px" }}>🌍 Weather App</h1>
        <SearchBox updateInfo={setWeatherInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}