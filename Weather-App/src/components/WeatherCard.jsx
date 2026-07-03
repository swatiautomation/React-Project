import cloudImg from "../assets/cloud.png";
import clearImg from "../assets/clear.png";
import rainImg from "../assets/rain.png";
import mistImg from "../assets/mist.png";
import snowImg from "../assets/snow.png";
import notFoundImg from "../assets/404.png";
import { useWeatherContext } from "./context/WeatherContext";
import Loader from "./Loader";

const weatherIcons = {
  Clouds: cloudImg,
  Clear: clearImg,
  Haze: rainImg,
  Mist: mistImg,
  Snow: snowImg,
};

const WeatherCard = () => {
  const { weatherData, loading } = useWeatherContext();

  if (!weatherData || !weatherData.main) return null;
  const icon = weatherIcons[weatherData.weather[0].main] || notFoundImg;

  if (loading) return <Loader />;

  return (
    <div className="weather-body">
      <img src={icon} alt="weather-icon" className="weather-icon" />
      <div className="weather-box">
        <p className="temperature">
          {Math.round(weatherData.main.temp)} <sup>°C</sup>
        </p>
        <p className="description">{weatherData.weather[0].description}</p>
      </div>
      <div className="weatherDetails">
        <div className="humidity">
          <i className="fa-solid fa-glass-water-droplet"></i>
          <div className="text">
            <span id="humidity">Humidity: {weatherData.main.humidity}%</span>
          </div>
        </div>

        <div className="wind">
          <i className="fa-solid fa-wind"></i>
          <div className="text">
            <span id="wind-speed">{weatherData.wind.speed}km/h</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
