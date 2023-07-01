import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const routesConfig = {
  path: "/",
  element: <Home />,
};

export const router = createBrowserRouter([routesConfig]);
