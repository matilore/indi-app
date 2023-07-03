import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ROUTES_PATHS } from "./routesConstants";

export const routesConfig = {
  path: ROUTES_PATHS.HOME,
  element: <Home />,
};

export const router = createBrowserRouter([routesConfig]);
