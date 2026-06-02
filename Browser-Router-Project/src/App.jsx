import React from "react";
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Help from "./component/Help";
import DetailsContact from "./component/DetailsContact";
import { Navigate } from "react-router";
import A1 from "./component/A1";
import A2 from "./component/A2";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./component/Layout";
//Older syntex - BrowserRouter / Routes/ Route
// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />}>
//           <Route path="a1" element={<A1 />} />
//           <Route path="a2" element={<A2 />} />
//         </Route>
//         <Route path="/help" element={<Navigate to="/" replace />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/contact/:id" element={<DetailsContact />} />
//       </Routes>
//     </>
//   );
// };

//New Syntax = createBrowserRouter
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/about",
          element: <About />,
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: "/about/:id",
          element: <DetailsContact />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/contact",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <NavBar /> */}
    </>
  );
};

export default App;
