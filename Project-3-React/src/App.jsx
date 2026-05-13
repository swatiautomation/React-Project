import "./App.css";
import Nav from "./components/Nav";
import BurgerMenu from "./components/BurgerMenu";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function showMenuButton() {
    setShowMenu((prev) => !prev);
  }

  return (
    <main>
      <header>
        <div>
          <img src="" alt="Logo" />
        </div>
        <div className="mainNav">
          <Nav>Home</Nav>
          <Nav>About</Nav>
          <Nav>Contact </Nav>
          <Nav>Service</Nav>
          <Nav>Help</Nav>
        </div>
        <div className="menuIcons">
          <div className="burgerMenu">
            <BurgerMenu onClick={showMenuButton} />
          </div>
          <div>1</div>
          <div>2</div>
        </div>
      </header>
      <SideDrawer isOpen={showMenu} onClose={showMenuButton} />
    </main>
  );
}

export default App;
