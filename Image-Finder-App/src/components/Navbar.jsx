import { useImageContext } from "../context/ImageContext";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const { handleSearch, searchValue } = useImageContext();

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl hover:bg-red-300">
            ImageFinder
          </Link>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
