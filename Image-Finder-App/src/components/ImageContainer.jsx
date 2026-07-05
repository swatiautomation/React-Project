import { useEffect } from "react";
import { useImageContext } from "../context/ImageContext";
import { Link } from "react-router-dom";

let timer;
const ImageContainer = () => {
  const {
    fetchImage,
    imageData,
    searchValue,
    loadMore,
    page,
    totalPage,
    loading,
  } = useImageContext();

  const hasMore = page < totalPage;

  const handleDownload = async (item) => {
    try {
      const response = await fetch(item.urls.full);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;

      link.download = `${item.alt_description ?? item.id}.jpg`;
      document.body.append(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!searchValue.trim()) return;

    timer = setTimeout(() => {
      fetchImage(searchValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  //  console.log(imageData);

  if (!searchValue.trim() && imageData.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-20 text-center">
        <h2 className="text-2xl font-semibold mb-2">Find your perfect image</h2>
        <p className="text-gray-500">
          Start typing in the search bar above to explore photos
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-3 max-[1150px]:grid-cols-2 max-[850px]:grid-cols-1 gap-7">
        {imageData.map((item) => (
          <div key={item.id} className="card bg-base-100  shadow-sm">
            <figure>
              <img
                src={item.urls.regular}
                alt={item.alt_description ?? "No Description avaliable"}
                className="w-100 h-100 rounded-[10px] object-cover shadow-sm"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.description ?? "No description avaliable"}
              </h2>

              <div className="card-actions justify-center mt-7">
                <button
                  className="btn badge-outline hover:bg-red-300"
                  onClick={() => handleDownload(item)}
                >
                  Download Image
                </button>
                <Link
                  to={`/user/${item.user.id}`}
                  className="btn badge-outline hover:bg-red-300"
                >
                  View User Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {imageData.length > 0 && hasMore && (
        <div className="flex justify-center mt-6 mb-6">
          <button
            className="btn badge-outline"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? "Loading.." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
};

export default ImageContainer;
