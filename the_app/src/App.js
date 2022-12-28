import React from "react";
import Home from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error";
import MagicalForm from "./pages/magical_form";
import ExpenseTracker from "./pages/expense-tracker";
function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "magical_form",
    element: <MagicalForm />,
    },
    {
      path: "expense-tracker",
      element:<ExpenseTracker/>
    }
]);
  return (
          <RouterProvider router={router} />
  );
}

export default App;
