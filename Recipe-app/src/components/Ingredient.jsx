import { useRecipeContext } from "../context/RecipeContext";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
const batch_size = 20;

const Ingredient = () => {
  const { fetchIngredientList, ingredient, loading } = useRecipeContext();
  const [visibleCount, setVisibleCount] = useState(batch_size);

  const filteredList = ingredient.filter(
    (item) => item.strDescription && item.strDescription.trim() !== "",
  );
  const visibleIngredients = filteredList.slice(0, visibleCount);
  const hasMore = visibleCount < filteredList.length;

  useEffect(() => {
    fetchIngredientList();
  }, [fetchIngredientList]);

  console.log(ingredient);
  return (
    <div>
      <Link to="/" className="btn btn-sm mb-4 p-3 hover:bg-cyan-300">
        ← Back
      </Link>
      <div className="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[850px]:grid-cols-1 gap-6 px-20">
        {visibleIngredients.map((item) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <div
              key={item.idIngredient}
              className="card bg-base-100 shadow-sm group overflow-hidden"
            >
              <figure className="w-full px-6 pt-6 overflow-hidden">
                <img
                  src={item.strThumb}
                  alt={item.strIngredient}
                  className="aspect-square object-cover  group-hover:scale-90 transition-all duration-200 rounded-xl"
                />
              </figure>
              {}
              <h2 className="text-xl font-semibold mt-4">
                {item.strIngredient}
              </h2>
              <p className="whitespace-pre-line">{item.strDescription}</p>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-6 mb-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + batch_size)}
            className="btn badge-outline hover:bg-cyan-300 hover:text-black"
          >
            Load More
          </button>
        </div>
      )}
      {loading && <Loader />}
      {visibleCount > batch_size && (
        <button
          className="btn fixed bottom-6 right-6 shadow-lg text-6xl p-6"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Ingredient;
