import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="p-4 border-b-2">
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/counterApp">Counter App</Link>
          </li>
          <li>
            <Link to="/recoil">RecoilCounter</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <p>Footer section</p>
    </div>
  );
}

export default App;
