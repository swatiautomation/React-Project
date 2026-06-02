import React from "react";
import { Link, NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const arr = [1, 2, 3];
  function isactive({ isActive }) {
    return isActive ? "bg-blue-600" : "";
  }

  const navigate = useNavigate();
  let isLogin = true;
  function handleClick() {
    if (isLogin) {
      navigate("/about");
    }
  }
  return (
    <>
      <div className="bg-red-300 flex gap-4">
        <NavLink to="/" className={isactive}>
          Home
        </NavLink>
        <NavLink to="/about" className={isactive}>
          About
        </NavLink>
        <NavLink to="/contact" className={isactive}>
          Contact
        </NavLink>
        <NavLink to="/help" className={isactive}>
          Help
        </NavLink>
        {arr.map((item) => (
          <NavLink to={`contact/${item}`} className={isactive} key={item}>
            {item}
          </NavLink>
        ))}
      </div>
      <button onClick={handleClick}>Navigate to About</button>
    </>
  );
};

export default NavBar;
