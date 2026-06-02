import React from "react";
import E from './E'
import F from './F'
import { useMyContext } from "../Mycontext";
const B = () => {
 const {count}= useMyContext()
  return (

    <div className="bg-yellow-700 p-10">B {count}
  <E/>
  <F/>
  </div>
  )
};

export default B;
