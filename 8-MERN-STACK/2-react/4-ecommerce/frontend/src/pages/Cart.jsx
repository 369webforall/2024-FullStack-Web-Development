import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../store/atoms/cartAtom";
import { loadStripe } from "@stripe/stripe-js";

// Utility function to deep copy an object
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PdQyWB3XDdfqfhOpvkLi9otbeGAsdutcmQaAg7pF7THB23vNIckTSxkQcTlHXmNkNI9NPTVD021rl7dI1xWfxDC005K20AfAN"
    );

    const body = { products: cart };

    try {
      const response = await fetch(
        `http://localhost:3001/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // {id:1, title, qty:1, qty:item.qty +1}
  const increaseQty = (index) => {
    const newCart = cart.map((item, i) =>
      i === index ? { ...deepCopy(item), qty: item.qty + 1 } : item
    );
    setCart(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = cart.map((item, i) =>
      i === index && item.qty > 1
        ? { ...deepCopy(item), qty: item.qty - 1 }
        : item
    );
    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span>
                {item.title} - ${item.price} USD - {item.qty}
              </span>
              <div>
                <button
                  onClick={() => decreaseQty(index)}
                  className="px-2 py-1 bg-gray-200"
                >
                  -
                </button>
                <button
                  onClick={() => increaseQty(index)}
                  className="px-2 py-1 bg-gray-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(index)}
                  className="px-2 py-1 bg-red-500 text-white"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        {cart.length > 0 ? (
          <h3 className="text-lg font-semibold">
            Total: ${calculateTotal()} USD
          </h3>
        ) : null}
      </div>
      <div className="mt-4">
        {cart.length > 0 && (
          <button
            onClick={makePayment}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Pay with Stripe
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
