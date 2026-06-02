import { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import ColorBox from "./component/ColorBox";

function App() {
  const [selectedColor, setSelectedColor] = useState("transparent");
  const colors = [
    "pink",
    "blue",
    "red",
    "lightseagreen",
    "tomato",
    "lightcoral",
  ];
  return (
    <>
      <h1 className="text-6xl">Color Switcher</h1>

      <div className="flex gap-2 justify-center">
        {colors.map((item) => {
          return (
            <Button
              key={item}
              name={item}
              color={item}
              setSelectedColor={setSelectedColor}
            />
          );
        })}
      </div>

      <ColorBox color={selectedColor} />
    </>
  );
}

export default App;
