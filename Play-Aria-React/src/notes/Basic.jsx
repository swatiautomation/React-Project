import "./App.css";

import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  function getName(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <label id="username" />
      <input
        type="text"
        placeholder="Enter Name"
        name="username"
        id="username"
        value={input}
        onChange={(e) => getName(e)}
      />
      <button onClick={() => setInput("")}>Clear</button>
      <h1>{input}</h1>
    </>
  );
}

export default App;
