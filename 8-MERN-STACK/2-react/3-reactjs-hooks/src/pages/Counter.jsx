import React, { useContext } from "react";

import { CounterContext } from "../context/CounterProvider";

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h1>We are working with usecontext</h1>
      <h2>Count is: {count}</h2>
      <button onClick={() => increment()}>Increase</button>
      <button onClick={() => decrement()}>decrease</button>
    </div>
  );
};

export default Counter;
