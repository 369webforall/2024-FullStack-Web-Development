import React, { useState } from "react";

const Products = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count is: ${count}</h3>

      <button onClick={increase}>Increase + </button>
      <button onClick={decrease}>Increase -</button>
    </div>
  );
};

export default Products;
