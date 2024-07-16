import React from "react";
import { cartState } from "../store/atoms/cartAtom";
import { useRecoilValue } from "recoil";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2">
              {item.title} - {item.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
