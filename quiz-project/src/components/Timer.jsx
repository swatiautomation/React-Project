import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = ({ setIsOver }) => {
  const [leftTime, setLeftTime] = useState(5);
  const [displayTime, setDisplayTime] = useState("");
  useEffect(() => {
    let intevelId = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 0) {
          clearInterval(intevelId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intevelId);
    };
  }, []);

  useEffect(() => {
    if (leftTime === 0) {
      setIsOver(true);
    }
    let formattedTime = `${Math.floor(leftTime / 60)
      .toString()
      .padStart(2, "0")} : ${(leftTime % 60).toString().padStart(2, "0")}`;
    setDisplayTime(formattedTime);
  }, [leftTime]);
  return <div>Time left : {displayTime}</div>;
};

export default Timer;
