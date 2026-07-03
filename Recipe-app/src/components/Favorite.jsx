import { useRecipeContext } from "../context/RecipeContext";
import RecipeCard from "./RecipeCard";

const Favorite = () => {
  const { fav } = useRecipeContext();

  if (fav.length === 0) {
    return (
      <p className="flex justify-center m-20 text-5xl">No Favorites Found</p>
    );
  }
  return (
    <div className="flex flex-wrap gap-4 p-6 m-auto justify-center ">
      {fav.map((item) => (
        <RecipeCard key={item.idMeal} item={item} />
      ))}
    </div>
  );
};

export default Favorite;
