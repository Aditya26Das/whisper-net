import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import Chats from "./pages/Chats.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div>404 Not Found !!!</div>
  },
  {
    path: "/Chats",
    element: <Chats/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
