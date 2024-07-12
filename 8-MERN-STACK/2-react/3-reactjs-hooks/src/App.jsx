import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <p>Footer section</p>
    </div>
  );
}

export default App;
