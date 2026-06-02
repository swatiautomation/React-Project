import React from "react";

import { useParams } from "react-router";
const DetailsContact = () => {
  const { id } = useParams();
  // console.log(params);
  return <div className="page">DetailsContact : {id}</div>;
};

export default DetailsContact;
