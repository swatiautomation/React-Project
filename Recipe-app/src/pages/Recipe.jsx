import Loader from "../components/Loader";
import { useRecipeContext } from "../context/RecipeContext";
import { useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  const { loading, recipeData, fetchALLRecipeData } = useRecipeContext();
  //console.log(recipeData);

  useEffect(() => {
    fetchALLRecipeData();
  }, []);

  return (
    <div className="grid grid-cols-4 max-[1150px]:grid-cols-2 max-[850px]:grid-cols-1">
      {recipeData.map((item) => (
        <RecipeCard item={item} key={item.idMeal} />
      ))}

      {loading && <Loader />}
    </div>
  );
};

export default Recipe;
