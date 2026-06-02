import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <div>Layout</div>;
    </>
  );
};

export default Layout;
