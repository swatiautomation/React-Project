import React from "react";
import questions from "./Questions.json";
import { useState } from "react";

const Questions = ({ setIsOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [score, setScore] = useState(0);
  // console.log(questions[currentIndex]);
  function selectOption(option) {
    console.log(option);
    if (option === questions[currentIndex].answer) {
      // console.log("correct answer");
      setScore((prev) => prev + 1);
      //console.log(score);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  }
  return (
    <>
      <h2 className="mt-8 mb-8">{questions[currentIndex].question}</h2>
      <div className="flex flex-col gap-3 bg-amber-300 mt-5">
        {questions[currentIndex].options.map((item) => {
          return (
            <button
              onClick={() => {
                selectOption(item);
              }}
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Questions;
