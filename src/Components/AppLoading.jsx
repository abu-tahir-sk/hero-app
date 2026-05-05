import { useEffect, useState } from "react";
import Loader from "./Loader";
import { RouterProvider } from "react-router";
import router from "../Routes/Root";

const AppLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return <>{loading ? <Loader /> : <RouterProvider router={router} />}</>;
};

export default AppLoading;
