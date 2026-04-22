import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BlurOnIcon from "@mui/icons-material/BlurOn";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  const CLEAR_HOT = "https://s7d2.scene7.com/is/image/TWCNews/mostly_sunny_jpg-2";
  const FEW_CLOUDS = "https://media.istockphoto.com/id/1040911866/photo/many-little-fluffy-clouds-in-blue-sky-in-sunny-day.jpg";
  const CLOUDS = "https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg";
  const LIGHT_RAIN = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1Mqwok_BxlwyVv8-M7_8AR5o2YIY2D2L5A&s";
  const HEAVY_RAIN = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg";
  const SNOW = "https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg";
  const FOG = "https://media.istockphoto.com/id/1009702398/photo/misty-mountain-landscape.jpg";
  const EXTREME_HOT = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg";
  const EXTREME_COLD = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QNucq9a0T0vis5dg3G5wufzIpqUQA3CBdg&s";

  let weather = info.weather.toLowerCase();

  let imageUrl = CLEAR_HOT;
  let WeatherIcon = <WbSunnyIcon />;

  if (info.temp >= 38) {
    imageUrl = EXTREME_HOT;
    WeatherIcon = <WbSunnyIcon />;
  } else if (info.temp <= 5) {
    imageUrl = EXTREME_COLD;
    WeatherIcon = <AcUnitIcon />;
  } else if (weather.includes("thunderstorm")) {
    imageUrl = HEAVY_RAIN;
    WeatherIcon = <ThunderstormIcon />;
  } else if (weather.includes("rain") || weather.includes("drizzle")) {
    imageUrl = LIGHT_RAIN;
    WeatherIcon = <ThunderstormIcon />;
  } else if (weather.includes("snow")) {
    imageUrl = SNOW;
    WeatherIcon = <AcUnitIcon />;
  } else if (weather.includes("few clouds")) {
    imageUrl = FEW_CLOUDS;
    WeatherIcon = <CloudIcon />;
  } else if (weather.includes("cloud")) {
    imageUrl = CLOUDS;
    WeatherIcon = <CloudIcon />;
  } else if (weather.includes("mist") || weather.includes("fog") || weather.includes("haze")) {
    imageUrl = FOG;
    WeatherIcon = <BlurOnIcon />;
  } else if (weather.includes("clear")) {
    imageUrl = CLEAR_HOT;
    WeatherIcon = <WbSunnyIcon />;
  }

  return (
    <div className="InfoBox">
      <div className="cardcontainer">
        <Card>
          <CardMedia component="img" height="240" image={imageUrl} />
          <CardContent>
            <Typography variant="h5" align="center">
              {info.city} {WeatherIcon}
            </Typography>

            <Typography variant="body2" align="center" sx={{ color: "white", lineHeight: "1.8" }}>
              🌡 Temp: {info.temp}°C <br />
              💧 Humidity: {info.humidity}% <br />
              ⬇ Min: {info.tempMin}°C <br />
              ⬆ Max: {info.tempMax}°C <br />
              🌥 {info.weather} <br />
              Feels like {info.feelsLike}°C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}