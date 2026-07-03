import { useWeatherContext } from "./context/WeatherContext";
import { useRef } from "react";

const Search = () => {
  const { setWeatherData, fetchWeatherNews, setSearch } = useWeatherContext();
  const timerId = useRef(null);

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);

    if (!value || value.length < 3) return;

    clearTimeout(timerId.current);
    timerId.current = setTimeout(async () => {
      const data = await fetchWeatherNews(value);
      setWeatherData(data);
    }, 500);
  }

  return (
    <div className="search-box">
      <input
        type="text"
        className="input-box"
        placeholder="Enter your location"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
