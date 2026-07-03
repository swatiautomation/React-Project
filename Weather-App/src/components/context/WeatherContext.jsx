import { createContext, useContext, useState } from "react";

//create context
// Provider
// use context

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchWeatherNews = async (value) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${value}&units=metric&appid=${import.meta.env.VITE_API_KEY}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    loading,
    fetchWeatherNews,
    search,
    setSearch,
    weatherData,
    setWeatherData,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export { WeatherContextProvider, useWeatherContext };
