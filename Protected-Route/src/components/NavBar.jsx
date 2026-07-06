import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between p-6 text-2xl sidebar">
        <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <IoMenu />
        </div>
        <div className="text-xl">Swag Labs</div>
        <div>
          <FaCartShopping />
        </div>
      </div>

      {/* Overlay */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      {
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <nav className="flex flex-col gap-4 p-6 text-lg font-medium">
            <button
              className="text-left hover:text-red-500 cursor-pointer"
              onClick={() => {
                navigate("/inventory");
                setIsOpen(false);
              }}
            >
              All Items
            </button>
            <button
              className="text-left hover:text-red-500 cursor-pointer"
              onClick={() => {
                navigate("/checkout");
                setIsOpen(false);
              }}
            >
              Checkout
            </button>
            <hr />
            <button
              className="text-left text-red-500 hover:text-red-700 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </nav>
        </div>
      }
    </>
  );
};

export default NavBar;
