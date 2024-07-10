import { NavLink, Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <nav>
        <ul className="flex space-x-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books/create">New Book</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>This is footer</footer>
    </div>
  );
};

export default App;
