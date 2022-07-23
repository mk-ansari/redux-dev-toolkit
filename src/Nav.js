import React from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const { count } = useSelector((state) => state.root);

  return (
    <>
      <div>I am from Nav Component</div>
      <h1>{count}</h1>
    </>
  );
};

export default Nav;
