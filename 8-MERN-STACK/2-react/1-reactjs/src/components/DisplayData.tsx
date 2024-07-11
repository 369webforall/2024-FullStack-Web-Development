import React, { useContext } from "react";
import { counterContext } from "../pages/About";

const DisplayData = () => {
  return (
    <>
      <p>Display data:</p>
      <NewComp />
    </>
  );
};

export default DisplayData;

const NewComp = () => {
  const count = useContext(counterContext);
  return <div>The count is {count}</div>;
};
