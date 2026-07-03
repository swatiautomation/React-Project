import { useRecipeContext } from "../context/RecipeContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const batch_size = 20;
const Countries = () => {
  const { fetchAllCountries, countries, loading } = useRecipeContext();
  const [visibleCount, setVisibleCount] = useState(batch_size);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const visibleCountries = countries.slice(0, visibleCount);

  const hasMore = visibleCount < countries.length;

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 max-[1150px]:grid-col-2 max-[850px]:grid-col-1">
        {visibleCountries.map((item, index) => (
          <Link
            to={`/country/${item.strArea}`}
            key={index}
            className="btn btn-neutral btn-dash text-white p-20 text-3xl"
          >
            {item.strArea}
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + batch_size)}
            className="btn  badge-outline hover:bg-cyan-300 hover:text-black"
          >
            Load More
          </button>
        </div>
      )}

      {visibleCount > batch_size && (
        <button
          className="btn btn-circle fixed bottom-6 right-6 shadow-lg text-6xl p-6"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default Countries;
