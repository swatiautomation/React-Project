import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import SpinnerComponent from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce, useStartTyping } from "react-use";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setmovieList] = useState([]);
  const [debouunceSearchTerms, setdebouunceSearchTerms] = useState("");

  useDebounce(
    () => {
      setdebouunceSearchTerms(searchTerm);
    },
    500,
    [searchTerm]
  );

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setError("");

    try {
      // const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      // const searchEndPoint = `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`;

      const endpoint = !query
        ? `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
        : `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`;
      // if (query ? endpoint : searchEndPoint)
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("error fetching movies..");
      }

      const data = await response.json();
      if (data.success === false) {
        setError(data.status_message || "failed to fetch movies");
        setmovieList([]);
        return;
      }
      setmovieList(data.results || []);

      //  data.results;
      //console.log(data.results);
    } catch (error) {
      console.log(error);
      setError("Fetching error while movie fetching..");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouunceSearchTerms);
  }, [debouunceSearchTerms]);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you enjoy without
            the hassel
          </h1>
        </header>
        <p>Search</p>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <section className="all-movies">
          <h2>All Movies</h2>
          {/* {error && <p className="text-red-500">{error}</p>} */}

          {isLoading ? (
            // <p className="text-white">Loading..</p>
            <SpinnerComponent />
          ) : error ? (
            <p className="text-red-500">Error</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
