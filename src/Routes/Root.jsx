import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import NotFount from "../Pages/NotFount";
import AppDetails from "../Components/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/app/:id",
        Component: AppDetails,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "/installation",
        Component: Installation,
        loader: () => fetch("/appsData.json"),
      },
    ],
  },
  { path: "*", Component: NotFount },
]);

export default router;
