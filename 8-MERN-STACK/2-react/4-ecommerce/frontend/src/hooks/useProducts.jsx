import React from "react";
import { useQuery } from "@tanstack/react-query";
import { data } from "../../public/data.js";
const fetchProducts = async () => {
  return data;
};

export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};
