import React from "react";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="px-10">
      <nav className="border-b p-4">
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">ProductList</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Footer section</footer>
    </div>
  );
};

export default App;
