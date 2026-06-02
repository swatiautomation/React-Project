import React from "react";
import { Outlet } from "react-router";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";

const About = () => {
  // const params = useParams();
  // console.log(params);
  const loadData = useLoaderData();
  console.log(loadData);
  return (
    <>
      <div>About</div>
      {loadData.map((item) => (
        <h1> {item.name}</h1>
      ))}
      {/* <Outlet /> */}
    </>
  );
};

export default About;
