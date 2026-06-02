import { useState } from "react";

const App = () => {
  // const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    tc: false,
  });

  console.log(formData);

  function handleData(e) {
    const { name, checked, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitData(e) {
    e.preventDefault();
    setFormData({ email: "", tc: false });
  }
  return (
    <>
      <form action="">
        <label htmlFor="tc">
          T&C
          <input
            type="checkbox"
            name="tc"
            id="tc"
            value={formData.tc}
            onChange={handleData}
          />
        </label>

        <label htmlFor="email">
          {" "}
          Email
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleData}
          />
        </label>
        <button onClick={submitData}>Submit</button>
      </form>
    </>
  );
};

export default App;
