import React, { useState, useEffect } from "react";

const Contact = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});
  const [test, setTest] = useState(20);

  useEffect(() => {
    document.title = `${count} new message update!`;
    fetch(`https://jsonplaceholder.typicode.com/todos/${test}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("clean up function");
    };
  }, [count, test]);

  return (
    <div>
      <h1>Contact ${count}</h1>
      <p>Please keep in touch us.</p>
      {data && <p>{data.title}</p>}
      <button onClick={() => setCount(count + 1)}>Click to change count</button>

      <button onClick={() => setTest(test - 1)}>change</button>
    </div>
  );
};

export default Contact;
