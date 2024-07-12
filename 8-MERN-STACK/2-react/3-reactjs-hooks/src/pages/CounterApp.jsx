import React, { useReducer } from "react";

const initialValue = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };

    default:
      return new Error();
  }
};

const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Counter App for useReducer</h1>
      <p>Count is: {state.count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
    </div>
  );
};

export default CounterApp;
