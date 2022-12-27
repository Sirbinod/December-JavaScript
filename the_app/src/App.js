import React from "react";
import Home from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error";
function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);
  return (
          <RouterProvider router={router} />
  );
}

export default App;
