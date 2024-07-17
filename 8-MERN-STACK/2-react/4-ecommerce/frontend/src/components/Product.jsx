import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../store/atoms/cartAtom";

const Product = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="mb-4">{product.price} USD</p>
      <p>QTY: {product.qty}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
