import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { RecipeContextProvider } from "./context/RecipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipeContextProvider>,
);
