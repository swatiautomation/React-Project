import "./App.css";
import ImagePage from "./pages/ImagePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UsersDetail from "./components/UsersDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ImagePage />} />
        <Route path="/user/:id" element={<UsersDetail />} />
      </Routes>
    </>
  );
}

export default App;
