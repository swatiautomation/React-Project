import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios(`https://fakestoreapi.com/products/${id}`);
      const data = await response.data;
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // console.log(products)
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  //  console.log(params);
  //   const navigate = useNavigate();
  return (
    <div
      key={product.id}
      className="bg-gray-600  rounded-lg group flex flex-col justify-center items-center"
    >
      <img
        className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-200"
        src={product.image}
        alt=""
      />

      <div className="p-5 flex flex-col items-center">
        <h1 className="text-2xl group-hover:text-amber-300">{product.title}</h1>

        <div className="flex gap-4 items-center">
          <p className="bg-green-300 w-fit rounded-xl py-1 px-3 ">
            {product.rating.rate}
          </p>
          <p>{product.rating.count}</p>
        </div>
        <p className="text-xl font-medium text-white/35">{product.price}£</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
