import { Outlet, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={(e) => (e.isActive ? "bgColor" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(e) => (e.isActive ? "bgColor" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={(e) => (e.isActive ? "bgColor" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(e) => (e.isActive ? "bgColor" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className={(e) => (e.isActive ? "bgColor" : "")}
            >
              User
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default App;
