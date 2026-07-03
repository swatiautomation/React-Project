import React from "react";
import { useRef } from "react";

const App = () => {
  const inputValue = useRef(null);

  function getInput() {
    console.log(inputValue.current.value);
  }
  return (
    <>
      <input ref={inputValue} type="text" placeholder="Enter Name" />
      <button onClick={getInput}>Submit</button>
    </>
  );
};

export default App;
