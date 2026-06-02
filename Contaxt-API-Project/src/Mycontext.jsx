import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const useMyContext = () => useContext(MyContext);

const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, useMyContext };
