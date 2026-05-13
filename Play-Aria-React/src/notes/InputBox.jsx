import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ name: "", email: "" });

  function enterData(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  function clearInput() {
    setData({ name: "", email: "" });
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={(e) => enterData(e)}
          value={data.name}
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => enterData(e)}
          value={data.email}
        />
        <button onClick={clearInput}>Clear</button>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
      </form>
    </>
  );
};

export default App;
