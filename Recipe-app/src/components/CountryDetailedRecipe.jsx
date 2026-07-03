import { useRecipeContext } from "../context/RecipeContext";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Loader from "./Loader";

const CountryDetailedRecipe = () => {
  const { name } = useParams();
  const { fetchRecipeByCountry, searchByCountry, loading } = useRecipeContext();

  useEffect(() => {
    fetchRecipeByCountry(name);
  }, [name]);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/countries"
          className="btn btn-sm badge-outline hover:bg-cyan-300 hover:text-black"
        >
          ← Back
        </Link>
        <h1 className="text-3xl font-bold text-center flex-1">
          <span className="text-cyan-400">{name}</span> Recipes
        </h1>
        <div className="w-16" />
      </div>

      {searchByCountry.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-4">
          <p className="text-xl text-gray-400">
            No recipes found for <strong>{name}</strong>.
          </p>
          <Link
            to="/countries"
            className="btn badge-outline hover:bg-cyan-300 hover:text-black"
          >
            Browse other countries
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 max-[1150px]:grid-cols-3 max-[850px]:grid-cols-2 max-[550px]:grid-cols-1">
          {searchByCountry.map((item) => (
            <div
              key={item.idMeal}
              className="card bg-base-100 shadow-sm group overflow-hidden"
            >
              <figure className="w-full px-6 pt-6 overflow-hidden">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="aspect-square object-cover w-full h-full group-hover:scale-90 transition-all duration-200 rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.strMeal}</h2>
                <div className="card-actions">
                  <Link
                    to={`/recipe/${item.idMeal}`}
                    className="btn badge-outline hover:bg-cyan-300 hover:text-black"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDetailedRecipe;
