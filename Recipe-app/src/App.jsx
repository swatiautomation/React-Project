import { Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe.jsx";
import Favorite from "./components/Favorite.jsx";
import NavBar from "./components/NavBar.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import Categories from "./components/Categories.jsx";
import RandomRecipe from "./components/RandomRecipe.jsx";
import Countries from "./components/Countries.jsx";
import CountryDetailedRecipe from "./components/CountryDetailedRecipe.jsx";
import Ingredient from "./components/Ingredient.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/randomRecipe" element={<RandomRecipe />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/country/:name" element={<CountryDetailedRecipe />} />
        <Route path="/ingredients" element={<Ingredient />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </>
  );
}

export default App;
