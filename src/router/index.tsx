import { Suspense, lazy } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import Loader from "../components/Loader";
import { Paths } from "./paths";

const Home = lazy(() => import("../views/Getways").then()) || null;
const Details = lazy(() => import("../views/Details").then()) || null;

const routes: RouteObject[] = [
  {
    path: Paths.HOME,
    element:

      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
  },
  {
    path: Paths.GETWAY_DETAILS,
    element:
      <Suspense fallback={<Loader />}>
        <Details />
      </Suspense>
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
