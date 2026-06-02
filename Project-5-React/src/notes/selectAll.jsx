import { useState } from "react";

const App = () => {
  // const [isChecked, setIsChecked] = useState(false);
  const [languages, setLanguages] = useState({
    html: false,
    cs: false,
    java: false,
  });

  console.log(languages);
  function check(e) {
    const { name, checked } = e.target;
    setLanguages((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  const allValues = Object.values(languages);
  const isSelectAll = allValues.every((item) => item === true);

  function selectAll(e) {
    setLanguages({
      html: e.target.checked,
      cs: e.target.checked,
      java: e.target.checked,
    });
  }
  return (
    <>
      <label htmlFor="selectall">
        Select All
        <input
          type="checkbox"
          name="selectall"
          id="selectall"
          onChange={selectAll}
          checked={isSelectAll}
        />
      </label>

      {Object.keys(languages).map((item) => (
        <label key={item} htmlFor={item}>
          {item.toUpperCase()}
          <input
            type="checkbox"
            id={item}
            checked={languages[item]}
            onChange={check}
            name={item}
          />
        </label>
      ))}
    </>
  );
};

export default App;
