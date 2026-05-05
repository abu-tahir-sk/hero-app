import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import TendingApps from "../Components/TendingApps";
import Trusted from "../Components/Trusted";
import Revel from "./Revel";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    handleLoad();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="   border-t-transparent flex justify-center items-center text-3xl font-semibold">
          L
          <span className="">
            <img src="/logo.png" className="animate-spin h-12 w-12" alt="" />
          </span>
          ading
        </div>
      </div>
    );
  }
  return (
    <div>
      <Banner />
      <Revel>
        <Trusted />
      </Revel>
      <Revel>
        <TendingApps />
      </Revel>
    </div>
  );
};

export default Home;
