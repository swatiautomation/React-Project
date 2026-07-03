import { useRecipeContext } from "../context/RecipeContext";

import { Link } from "react-router-dom";

const NavBar = () => {
  const { search, handleSearch } = useRecipeContext();

  return (
    <div className="w-full px-3 bg-base-200 py-3">
      <div className="navbar  shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl ">
            Recipe App
          </Link>
        </div>

        <div className="navbar-end">
          <Link to="/favorite" className="btn hover:bg-cyan-300">
            All Favorites
          </Link>
          <Link to="/categories" className="btn hover:bg-cyan-300">
            All Categories
          </Link>
          <Link to="/countries" className="btn hover:bg-cyan-300">
            All Countries
          </Link>
          <Link to="/ingredients" className="btn hover:bg-cyan-300">
            All Ingredients
          </Link>
          <Link to="/randomRecipe" className="btn hover:bg-cyan-300">
            Random Recipe
          </Link>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
