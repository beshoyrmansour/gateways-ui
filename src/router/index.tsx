import React, { Suspense, lazy } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import Loader from "../components/Loader";
import { Paths } from "./paths";

const Home = lazy(() => import("../views/Getways"));
const Details = lazy(() => import("../views/Details"));

const routes: RouteObject[] = [
  {
    path: Paths.HOME,
    element: <Home />,
  },
  {
    path: Paths.GETWAY_DETAILS,
    element: <Details />,
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
      </Suspense>
    ),
  },
];

export function Routes() {
  const element = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{element}</Suspense>;
}
