import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(30);
  console.log(count);

  return (
    <>
      <div>Learning react {count}</div>
      <h1>This is heading</h1>
      <Greeting name="Dev" />
    </>
  );
};
// props = {name:"Dev"}
interface Props {
  name: string;
}

function Greeting(props: Props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default App;
