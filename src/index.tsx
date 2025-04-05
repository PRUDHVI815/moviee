import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ] as RouteObject[],
  {
    future: {
    
      v7_relativeSplatPath: true,
    },
  }
);

const Root: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Root;