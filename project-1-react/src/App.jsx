import { useState, useRef, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import { nanoid } from "nanoid";

import Confetti from "react-confetti";

function App() {
  const [diceNum, setDiceNum] = useState(generateAllNewDice());
  const buttonRef = useRef(null);

  var gameWon =
    diceNum.every((item) => item.isHeld) &&
    diceNum.every((item) => item.value === diceNum[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    // const newDice = [];
    // for (let i = 0; i < 10; i++) {
    //   const random = Math.floor(Math.random() * 7);
    //   newDice.push(random);
    // }
    // return newDice;

    return new Array(10).fill(0).map(() => ({
      value: Math.floor(Math.random() * 7),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function generateNewArray() {
    if (!gameWon) {
      setDiceNum((prev) => {
        return prev.map((item) => {
          return item.isHeld === false
            ? {
                ...item,
                value: Math.floor(Math.random() * 7),
              }
            : item;
        });
      });
    } else {
      setDiceNum(generateAllNewDice());
    }
  }

  function hold(id) {
    setDiceNum((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      });
    });
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="container">
        {diceNum.map((item, index) => (
          <Button
            key={index}
            value={item.value}
            isHeld={item.isHeld}
            hold={hold}
            id={item.id}
          />
        ))}
      </div>
      <button ref={buttonRef} className="roll" onClick={generateNewArray}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
