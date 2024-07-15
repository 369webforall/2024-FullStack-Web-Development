import React from "react";
import {
  RecoilRoot,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSlector, productList } from "../store/atoms/count";

const RecoilCouter = () => {
  return (
    <div>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  );
};

export default RecoilCouter;

const Counter = () => {
  return (
    <div>
      <Products />
      <CountRender />
      <EvenCountRender />
      <Button />
    </div>
  );
};

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <p>
        {" "}
        CountRender: <b>count : {count}</b>
      </p>
    </div>
  );
}

const Button = () => {
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Derement</button>
    </>
  );
};

function EvenCountRender() {
  const isEven = useRecoilValue(evenSlector);

  return (
    <>
      <p className="text-xl text-red-500">
        {isEven === 0 ? "Is even number" : null}
      </p>
    </>
  );
}

function Products() {
  const products = useRecoilValue(productList);
  console.log(products);

  return (
    <div>
      <p>list of products</p>
    </div>
  );
}
