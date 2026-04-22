import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "538ebb077b6ca4d9eb5512aebfefe3fb";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      // ❌ If city not found
      if (jsonResponse.cod === "404") {
        throw new Error("City not found");
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false); // reset error while typing
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br /><br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {/* ✅ Error Message */}
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            No such place exists!
          </p>
        )}
      </form>
    </div>
  );
}