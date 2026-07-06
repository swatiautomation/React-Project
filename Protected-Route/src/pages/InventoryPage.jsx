import products from "../data/products.json";
import { useNavigate } from "react-router-dom";

const data = products;

const InventoryPage = () => {
  console.log(data);
  return (
    <div className=" grid grid-cols-5 gap-4 p-8 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[300px]:grid-cols-1">
      {data.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/inventory/${item.id}`)}
      key={item.id}
      className="bg-gray-600  rounded-lg group"
    >
      <img
        className="aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-200"
        src={item.image}
        alt=""
      />

      <div className="p-5">
        <h1 className="text-2xl line-clamp-2 group-hover:text-amber-300">
          {item.title}
        </h1>

        <div className="flex gap-4 items-center">
          <p className="bg-green-300 w-fit rounded-xl py-1 px-3 ">
            {item.rating.rate}
          </p>
          <p>{item.rating.count}</p>
        </div>
        <p className="text-xl font-medium text-white/35">{item.price}£</p>
      </div>
    </div>
  );
};
export default InventoryPage;
