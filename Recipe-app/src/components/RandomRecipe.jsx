import RecipeDetail from "./RecipeDetail";
import { useRecipeContext } from "../context/RecipeContext";
import { useEffect } from "react";
import Loader from "../components/Loader";

const RandomRecipe = () => {
  const { fetchRandomRecipe, meal, loading } = useRecipeContext();

  console.log(meal);
  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  return (
    <div>
      <RecipeDetail />
      {loading && <Loader />}
    </div>
  );
};

export default RandomRecipe;
