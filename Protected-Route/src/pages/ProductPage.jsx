import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import { IoMdArrowBack } from "react-icons/io";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  if (!product) return <p className="text-white p-8">Product not found.</p>;

  return (
    <>
      <button
        className="flex items-center gap-1 hover:text-sky-700 cursor-pointer"
        onClick={() => navigate("/inventory")}
      >
        <IoMdArrowBack />
        Back to products
      </button>
      <div className="bg-gray-600 rounded-lg group flex flex-col justify-center items-center">
        <img
          className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-200"
          src={product.image}
          alt={product.title}
        />

        <div className="p-5 flex flex-col items-center">
          <h1 className="text-2xl group-hover:text-amber-300">
            {product.title}
          </h1>

          <div className="flex gap-4 items-center">
            <p className="bg-green-300 w-fit rounded-xl py-1 px-3">
              {product.rating.rate}
            </p>
            <p>{product.rating.count}</p>
          </div>
          <p className="text-xl font-medium text-white/35">{product.price}£</p>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
