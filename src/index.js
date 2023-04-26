import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/home";
import ProofOfResidence from "./pages/proof-of-residence";
import ErrorPage from "./pages/error-page";
import ProofOfResidenceThird from "./pages/proof-of-residence-third";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "residencia",
        element: <ProofOfResidence/>
      },
      {
        path: "residencia-terceiros",
        element: <ProofOfResidenceThird/>
      }
    ]
  }
])

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
  rootElement
);