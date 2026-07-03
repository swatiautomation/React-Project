import { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import { useNewsContext } from "../context/NewsContext";

const News = ({ className }) => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      if (data?.articles) setNews(data.articles);
    })();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Wrapper>
        <Category />
        <div className={`grid  grid-cols-4 gap-5 ${className}`}>
          {news.map((item, index) => {
            if (!item.urlToImage) return null;
            return <NewsCard key={index} details={item} />;
          })}
        </div>
      </Wrapper>
      <div className="bg-base-200 ">
        <Footer />
      </div>
    </>
  );
};

const NewsCard = ({ details }) => {
  return (
    <div className="card bg-base-200  shadow-sm">
      <figure>
        <img
          className="w-full aspect-video object-contain"
          src={details?.urlToImage}
          alt="no_image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details?.title}</h2>
        <p className="line-clamp-3">{details.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => window.open(details.url)}
            className="btn badge-outline"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
