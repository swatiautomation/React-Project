import { useRecipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";

const RecipeCard = ({ item }) => {
  const { handleFav, fav } = useRecipeContext();

  const isFav = fav.some((f) => f.idMeal === item.idMeal);

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="w-full px-6 pt-6  overflow-hidden">
          <img
            className="aspect-square object-cover w-full h-full group-hover:scale-90 transition-all duration-200 rounded-xl "
            src={item.strMealThumb}
            alt="no image found"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {item.strMeal}
            <button
              className="badge   hover:bg-cyan-300 hover:text-black "
              onClick={() => handleFav(item)}
            >
              {isFav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              )}
            </button>
          </h2>
          <h3>{item.strMeal}</h3>
          <p>
            <strong>{item.strArea}</strong> Dish
          </p>
          <p>
            Belongs to <strong>{item.strCategory}</strong> Category
          </p>

          <div className="flex gap-3">
            <div className="card-actions">
              <Link
                to={`/recipe/${item.idMeal}`}
                className="btn  badge-outline hover:bg-cyan-300 hover:text-black"
              >
                View Recipe
              </Link>
            </div>
            <div className="card-actions">
              <a
                href={item.strYoutube}
                className="btn  badge-outline hover:bg-cyan-300 hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
