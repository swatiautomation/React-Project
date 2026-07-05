import { createContext, useContext, useEffect, useState } from "react";

const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(saveToLocalStorage);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  // const [user,setUser]=useState([])

  function saveToLocalStorage() {
    const images = localStorage.getItem("images");
    return images ? JSON.parse(images) : [];
  }

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(imageData));
  }, [imageData]);
  function handleSearch(e) {
    const value = e.target.value;
    setSearchValue(value);
  }

  const fetchImage = async (searchValue, pageNumber = 1) => {
    try {
      setLoading(true);
      setSearchValue("");
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${searchValue}&per_page=30&page=${pageNumber}&client_id=${import.meta.env.VITE_API_KEY}`,
      );
      const data = await response.json();
      const results = data.results ?? [];
      //  console.log(data);
      setImageData((prev) =>
        pageNumber === 1 ? results : [...prev, ...results],
      );
      setTotalPage(data.total_pages ?? 0);
      setPage(pageNumber);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (loading || page >= totalPage) return;
    fetchImage(searchValue, page + 1);
  };
  const value = {
    handleSearch,
    searchValue,
    fetchImage,
    loading,
    imageData,
    loadMore,
    page,
    totalPage,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

const useImageContext = () => {
  return useContext(ImageContext);
};

export { ImageContextProvider, useImageContext };
