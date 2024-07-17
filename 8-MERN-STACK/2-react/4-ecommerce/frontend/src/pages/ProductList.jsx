import React from "react";
import Product from "../components/Product";
import { useProducts } from "../hooks/useProducts";

const ProductList = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading products....</div>;
  if (error) return <div>Error Loading prodcut</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
