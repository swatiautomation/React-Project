import { createContext, useContext, useState } from "react";
import api from "../config/axios";

//create context
// Provider
// use context

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`,
      );

      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const categoryFetchNews = async (category) => {
    try {
      const response = await api.get(
        `/everything?q=${category}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
 
  const value = {
    news,
    setNews,
    fetchNews,
    categoryFetchNews,
    loading,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
