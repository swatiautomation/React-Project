import "./App.css";

import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

import NoDataFound from "./components/NoDataFound";

import { useWeatherContext } from "./components/context/WeatherContext";

function App() {
  const { weatherData, loading } = useWeatherContext();

  return (
    <div className="container">
      <Search />
      {loading && <Loader />}
      {weatherData?.cod === "404" && <NoDataFound />}
      {weatherData?.main && <WeatherCard />}
    </div>
  );
}

export default App;
