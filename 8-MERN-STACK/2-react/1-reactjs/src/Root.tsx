import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import User from "./pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
      { path: "user", element: <User /> },
      { path: "user/:username", element: <User /> },
    ],
  },
]);

export default router;
