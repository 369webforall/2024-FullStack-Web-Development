import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import CounterProvider from "./context/CounterProvider";
import CounterApp from "./pages/CounterApp";
import RecoilCouter from "./pages/RecoilCouter";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CounterProvider>
        <App />
      </CounterProvider>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/counterApp",
        element: <CounterApp />,
      },
      {
        path: "/recoil",
        element: <RecoilCouter />,
      },
    ],
  },
]);
