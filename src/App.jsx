import React from "react";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./components/Content/Content";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Details from "./components/About/Details/Details";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "content",
          element: <Content />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "details",
          element: <Details />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
