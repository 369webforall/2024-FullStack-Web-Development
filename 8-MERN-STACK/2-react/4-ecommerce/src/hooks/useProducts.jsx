import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};

export const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};
