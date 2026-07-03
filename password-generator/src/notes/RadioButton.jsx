import { useState } from "react";

const App = () => {
  const [isSelected, setIsSelected] = useState("UPI");
  const langs = ["html", "cs", "java", "c++"];

  const payments = [
    { id: "UPI", info: "instant transfer via UPI apps" },
    { id: "Card", info: "pay by card" },
    { id: "COD", info: "cash on delivery" },
  ];

  function selectRadioBtn(e) {
    setIsSelected(e.target.value);
  }
  console.log(isSelected);

  return (
    <>
      {payments.map((item) => {
        return (
          <label key={item.id} htmlFor={item.id}>
            {item.id.toUpperCase()}
            <input
              type="radio"
              id={item.id}
              name="gender"
              value={item.id}
              checked={isSelected === item.id}
              onChange={selectRadioBtn}
            />
          </label>
        );
      })}

      <p>{payments.find((item) => item.id === isSelected)?.info}</p>
      {/* <label htmlFor="male">
        Male
        <input
          type="radio"
          id="male"
          name="gender"
          value={"Male"}
          onChange={selectRadioBtn}
        />
      </label>

      <label htmlFor="female">
        Female
        <input
          type="radio"
          id="female"
          name="gender"
          value={"Female"}
          onChange={selectRadioBtn}
        />
      </label> */}
    </>
  );
};

export default App;
