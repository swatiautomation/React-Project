import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

//create context
// Provider
// use context

const RecipeContext = createContext();
let timerId;

const RecipeContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fav, setFav] = useState(saveToLocalStorage);
  const [meal, setMeal] = useState(null);
  const [category, setCategory] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchByCountry, setSearchByCountry] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  function saveToLocalStorage() {
    const favoriteRecipes = localStorage.getItem("fav");
    return favoriteRecipes ? JSON.parse(favoriteRecipes) : [];
  }

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  const fetchIngredientList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_INGREDIENT_LIST}`);
      const data = await response.json();

      setIngredient(data.meals ?? []);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setIngredient, setLoading]);

  const fetchALLRecipeData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}`);
      const data = await response.json();
      // console.log(data);
      setRecipeData(data.meals ?? []);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataByCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_BASE_CATEGORY_URL}`);
      const data = await response.json();
      setCategory(data.categories ?? []);

      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeByCountry = async (countryName) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_FILTER_BY_COUNTRY}${countryName}`,
      );
      const data = await response.json();
      setSearchByCountry(data.meals ?? []);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_LIST_COUNTRIES_URL}`,
      );
      const data = await response.json();
      console.log(data);
      setCountries(data.meals ?? []);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomRecipe = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_RANDOM_RECIPE_URL}`);
      const data = await response.json();
      // console.log(data);
      setMeal(data.meals?.[0] ?? null);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchRecipe = async (searchTerm) => {
    try {
      setLoading(true);
      setSearch("");
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${searchTerm}`,
      );
      const data = await response.json();
      setRecipeData(data.meals ?? []);
      //  console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeById = async (recipeID) => {
    try {
      setLoading(true);
      setMeal(null);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_SEARCH_URL}${recipeID}`,
      );
      const data = await response.json();
      setMeal(data.meals?.[0] ?? null);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);

    if (!search) return;

    clearTimeout(timerId);
    timerId = setTimeout(async () => {
      const data = await fetchSearchRecipe(search);
      setRecipeData(data.meals ?? []);
    }, 500);
  };

  function handleFav(item) {
    setFav((prev) => {
      const exists = prev.find((f) => f.idMeal === item.idMeal);
      if (exists) {
        return prev.filter((f) => f.idMeal !== item.idMeal);
      }
      return [...prev, item];
    });
  }
  const value = {
    loading,
    fetchALLRecipeData,
    search,
    setSearch,
    recipeData,
    setRecipeData,
    handleSearch,
    setLoading,
    fav,
    setFav,
    handleFav,
    fetchRecipeById,
    setMeal,
    meal,
    fetchDataByCategories,
    setCategory,
    category,
    fetchRandomRecipe,
    fetchRecipeByCountry,
    fetchAllCountries,
    countries,
    setCountries,
    searchByCountry,
    fetchIngredientList,
    ingredient,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export { RecipeContextProvider, useRecipeContext };
