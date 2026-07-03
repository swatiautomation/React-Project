import { useNewsContext } from "../context/NewsContext";

const Category = () => {
  const { setNews, categoryFetchNews } = useNewsContext();
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  async function handleClick(e) {
    const value = e.target.value;
    const data = await categoryFetchNews(value);
    if (data?.articles) setNews(data.articles);
  }

  return (
    <div className="sticky top-16 z-10 bg-base-100 py-5">
      <div className="max-w-full m-auto w-fit flex overflow-x-auto px-4 scroll-bar-none gap-4">
        {categories.map((item, index) => (
          <button
            onClick={handleClick}
            key={index}
            value={item}
            className="btn btn-primary"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
