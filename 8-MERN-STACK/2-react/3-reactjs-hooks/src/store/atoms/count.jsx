import { useState } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenSlector = selector({
  key: "evenSlector",
  get: (props) => {
    const count = props.get(countAtom);
    return count % 2;
  },
});
