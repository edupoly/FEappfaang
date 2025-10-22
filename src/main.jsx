import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employees from "./Employees.jsx";
import Products from "./Products.jsx";
import Students from "./Students.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import EditEmployee from "./EditEmployee.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/students",
        element: <Students></Students>,
      },
      {
        path: "/employees",
        element: <Employees></Employees>,
      },
      {
        path: "/editEmployee/:id",
        element: <EditEmployee></EditEmployee>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
