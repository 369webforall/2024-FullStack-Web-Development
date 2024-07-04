import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import Contact from "./pages/Contact.tsx";
import User from "./pages/User.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/contact", element: <Contact /> },
      { path: "/user/:username", element: <User /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
