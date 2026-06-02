import React from "react";
import { useMyContext } from "../Mycontext";

const F = () => {
  const {setCount} = useMyContext();
  function handleclick(){
    setCount(prev=>prev+1)
  }
  return (
<>
    <div className="bg-pink-300 p-10">F</div>
    <button  className ='bg-black text-white'onClick={handleclick}>Click me</button>
</>
  )
};

export default F;
