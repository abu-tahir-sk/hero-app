import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import NotFount from "../Pages/NotFount";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,
        Component: Home
        
      },
      {
        path: "/apps",
        Component: Apps,
      },
      { path: "/installation", Component: Installation },
    ],
  },
  { path: "*", Component: NotFount },
]);

export default router;
