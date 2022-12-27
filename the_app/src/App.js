import React from "react";
import Home from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error";
import MagicalForm from "./pages/magical_form";
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
]);
  return (
          <RouterProvider router={router} />
  );
}

export default App;
