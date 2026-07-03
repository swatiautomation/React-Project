import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useRecipeContext } from "../context/RecipeContext";

const RecipeDetail = () => {
  const { id } = useParams();
  const { fetchRecipeById, loading, meal } = useRecipeContext();

  useEffect(() => {
    fetchRecipeById(id);
  }, [id]);

  if (!meal) return <p>Recipe not found</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="btn btn-sm mb-4 hover:bg-cyan-300">
        ← Back
      </Link>
      <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-xl my-4"
      />
      <p>
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p>
        <strong>Country:</strong> {meal.strCountry}
      </p>
      <p>
        <strong>Area:</strong> {meal.strArea}
      </p>
      <ul>
        {ingredients.map(({ ingredient, measure }, i) => (
          <li key={i}>
            {measure?.trim()} - {ingredient}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Instructions</h2>
      <p className="whitespace-pre-line">{meal.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
