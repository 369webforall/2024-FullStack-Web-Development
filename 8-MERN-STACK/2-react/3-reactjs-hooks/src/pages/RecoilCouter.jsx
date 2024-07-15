import React, { useState } from "react";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";

const RecoilCouter = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

export default RecoilCouter;

function Count() {
  return (
    <>
      <CountRender />
      <EvenCountRender />
      <Button />
    </>
  );
}

function EvenCountRender() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <>
      <p>{isEven ? "Is even value" : null}</p>
    </>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <p>
        {" "}
        CountRender: <b>{count}</b>
      </p>
    </div>
  );
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}
