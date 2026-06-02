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
  return (
    <>
      <label htmlFor="html">HTML</label>
      <input
        type="checkbox"
        id="html"
        checked={languages.html}
        onChange={check}
        name="html"
      />

      {/* {isChecked && "Female checkbox checked"} */}

      <label htmlFor="cs">CS</label>
      <input
        type="checkbox"
        id="cs"
        checked={languages.cs}
        onChange={check}
        name="cs"
      />

      <label htmlFor="java">JAVA</label>
      <input
        type="checkbox"
        id="java"
        checked={languages.java}
        onChange={check}
        name="java"
      />
    </>
  );
};

export default App;
