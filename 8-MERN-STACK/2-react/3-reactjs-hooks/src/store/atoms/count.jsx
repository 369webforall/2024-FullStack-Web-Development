import { useState } from "react";
import { atom, selector } from "recoil";
import axios from "axios";
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

export const productList = selector({
  key: "productList",
  get: async () => {
    const res = await axios("https://fakestoreapi.com/products");

    return res.data || [];
  },
});
