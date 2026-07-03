import { useEffect, useRef, useState } from "react";
import Button from "./component/Button";
const App = () => {
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(true);
  const [isChar, setIsChar] = useState(true);
  const [savedPass, setSavedPass] = useState([]);
  // console.log(length);
  //console.log(isChar);

  function generatePass() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    let allChar = "";
    allChar += isNumber ? numbers : "";
    allChar += isChar ? chars : "";

    let result = "";
    for (let i = 0; i < length; i++) {
      result += allChar.charAt(Math.floor(Math.random() * allChar.length));
    }
    return result;
  }

  function copyPassword() {
    navigator.clipboard.writeText(Password);
    copyRef.current.select();
  }
  useEffect(() => {
    setPassword(generatePass());
  }, [length, isNumber, isChar]);
  // generatePass();
  const copyRef = useRef(null);
  return (
    <div className="w-full h-screen flex flex-col gap-6 justify-center items-center border-amber-600 border-8 bg-black">
      <h1 className=" text-white text-4xl">Password Generator</h1>
      <input
        type="text"
        ref={copyRef}
        placeholder="enter your name."
        readOnly={true}
        value={Password}
        className="bg-white text-black rounded-lg outline-none border-none px-6 py-3 w-80 text-center"
      />
      <input
        type="range"
        min={1}
        max={100}
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />

      <label htmlFor="Numbers">
        <input
          type="checkbox"
          id="Numbers"
          checked={isNumber}
          onChange={(e) => setIsNumber(e.target.checked)}
        />
        Numbers Allowed
      </label>

      <label htmlFor="Characters">
        <input
          type="checkbox"
          id="Characters"
          checked={isChar}
          onChange={(e) => setIsChar(e.target.checked)}
        />
        Characters Allowed
      </label>

      <Button name="Copy Password" onClick={copyPassword} />
      <Button
        name="Reset Password"
        onClick={() => {
          setLength(8);
          setIsChar(false);
          setIsNumber(false);
        }}
      />
      <Button
        name="Save Password"
        onClick={() => {
          setSavedPass((prev) => [...prev, Password]);
        }}
      />
      {savedPass.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default App;
