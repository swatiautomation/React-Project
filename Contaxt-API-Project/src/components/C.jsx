import React from "react";
import { useMyContext } from "../Mycontext";

const C = () => {
  const {count} = useMyContext();
  return <div className="bg-blue-300 p-10">C {count}</div>;
};

export default C;
