import { createBrowserRouter } from "react-router-dom";
import { Home, PodcastDetails } from "../pages";
import { ROUTES_PATHS } from "./routesConstants";
import { Layout } from "../layout";

export const routesConfig = [
  {
    path: ROUTES_PATHS.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES_PATHS.HOME,
        element: <Home />,
      },
      {
        path: ROUTES_PATHS.PODCAST_DETAILS,
        element: <PodcastDetails />,
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);
