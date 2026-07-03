import { useRecipeContext } from "../context/RecipeContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const { fetchDataByCategories, category } = useRecipeContext();

  useEffect(() => {
    fetchDataByCategories();
  }, []);

  return (
    <>
      <Link to="/" className="btn btn-sm mb-4 p-3 hover:bg-cyan-300">
        ← Back
      </Link>
      <div className="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[850px]:grid-cols-1 gap-6 px-20">
        {category.map((item) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <div
              key={item.idCategory}
              className="card bg-base-100 shadow-sm group overflow-hidden"
            >
              <figure className="w-full px-6 pt-6 overflow-hidden">
                <img
                  src={item.strCategoryThumb}
                  alt={item.idCategory}
                  className="aspect-video object-cover w-full h-full group-hover:scale-90 transition-all duration-200 rounded-xl"
                />
              </figure>
              {}
              <h2 className="text-xl font-semibold mt-4">{item.strCategory}</h2>
              <p className="whitespace-pre-line">
                {item.strCategoryDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
